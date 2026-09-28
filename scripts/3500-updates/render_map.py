#!/usr/bin/env python3
"""
Updates ページのサムネイル生成。
base_map（世界地図、暗いまま加工しない）に、既存の点（小さい・沈静）と、新しい点（大きい・強調）を重ねる。

使い方：
    python3 render_map.py --points points.json --new '{"lat":37.57,"lon":126.98,"label":"Seoul"}' \
        --base ../../public/images/3500-minds/base_map.jpg \
        --out-highlight highlight.jpg --out-settled settled.jpg

points.json は既存の「沈静済み」点のリスト（このスクリプトが --out-settled で吐いたものを、次回 --points に渡す）。
"""
import argparse, json, textwrap
from PIL import Image, ImageDraw, ImageFilter, ImageChops, ImageFont

LABEL_FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Narrow.ttf"
TITLE_FONT_PATH = "/System/Library/Fonts/Supplemental/Georgia Italic.ttf"

# 沈静した点（既存）のスタイル：小さい点、控えめな暖色
SETTLED = dict(color=(255, 205, 150), r_outer=5, r_mid=1.8, r_core=0.6,
               blur_outer=3.5, blur_mid=1.2, blur_core=0.4, ray_len=6, ray_w=1, ray_blur=0.6)

# 新規・強調の点のスタイル：大きめ、寒色（白青）、スパーク長め
HIGHLIGHT = dict(color=(170, 220, 255), r_outer=17, r_mid=5.5, r_core=1.6,
                 blur_outer=10, blur_mid=3, blur_core=0.6, ray_len=32, ray_w=1, ray_blur=1.3)


def latlon_to_xy(lat, lon, w, h):
    x = (lon + 180) / 360 * w
    y = (90 - lat) / 180 * h
    return x, y


def draw_point(canvas, x, y, style):
    w, h = canvas.size
    color = style["color"]

    g1 = Image.new("RGB", (w, h), (0, 0, 0))
    ImageDraw.Draw(g1).ellipse([x - style["r_outer"], y - style["r_outer"], x + style["r_outer"], y + style["r_outer"]], fill=color)
    outer = g1.filter(ImageFilter.GaussianBlur(style["blur_outer"]))

    g2 = Image.new("RGB", (w, h), (0, 0, 0))
    ImageDraw.Draw(g2).ellipse([x - style["r_mid"], y - style["r_mid"], x + style["r_mid"], y + style["r_mid"]], fill=color)
    mid = g2.filter(ImageFilter.GaussianBlur(style["blur_mid"]))

    g3 = Image.new("RGB", (w, h), (0, 0, 0))
    ImageDraw.Draw(g3).ellipse([x - style["r_core"], y - style["r_core"], x + style["r_core"], y + style["r_core"]], fill=(255, 255, 255))
    core = g3.filter(ImageFilter.GaussianBlur(style["blur_core"]))

    g4 = Image.new("RGB", (w, h), (0, 0, 0))
    d4 = ImageDraw.Draw(g4)
    rl = style["ray_len"]
    d4.line([x - rl, y, x + rl, y], fill=color, width=style["ray_w"])
    d4.line([x, y - rl, x, y + rl], fill=color, width=style["ray_w"])
    rays = g4.filter(ImageFilter.GaussianBlur(style["ray_blur"]))

    combined = ImageChops.screen(outer, mid)
    combined = ImageChops.screen(combined, core)
    combined = ImageChops.screen(combined, rays)
    return ImageChops.screen(canvas, combined)


def _wrap_to_width(text, font, max_width, draw):
    """単語単位で、max_width に収まるだけ行を分ける。"""
    words = text.split()
    lines, cur = [], ""
    for w_ in words:
        cand = f"{cur} {w_}".strip()
        if draw.textlength(cand, font=font) <= max_width or not cur:
            cur = cand
        else:
            lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines


def draw_label(canvas, x, y, city, country):
    """画像の下寄り中央に、大きめのイタリック体で都市名・国名を焼き込む（映画のタイトルカードっぽく）。
    国名が長い時は、フォントを縮めずに行を分ける。"""
    w, h = canvas.size
    max_text_w = w * 0.82
    size = max(30, int(w * 0.045))
    try:
        font = ImageFont.truetype(TITLE_FONT_PATH, size)
    except OSError:
        font = ImageFont.load_default()

    draw_tmp = ImageDraw.Draw(canvas)

    lines = [city] if city else []
    if country:
        lines += _wrap_to_width(country, font, max_text_w, draw_tmp)
    text_block = "\n".join(lines)

    bbox = draw_tmp.multiline_textbbox((0, 0), text_block, font=font, align="center", spacing=16)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    tx = (w - text_w) / 2
    ty = h * 0.6 - text_h / 2

    # グロー（強め・二段重ね）を先に敷いて、文字自体が発光しているように見せる
    glow_wide = Image.new("RGB", (w, h), (0, 0, 0))
    ImageDraw.Draw(glow_wide).multiline_text((tx, ty), text_block, font=font, fill=(255, 210, 140), align="center", spacing=16)
    glow_wide = glow_wide.filter(ImageFilter.GaussianBlur(18))

    glow_tight = Image.new("RGB", (w, h), (0, 0, 0))
    ImageDraw.Draw(glow_tight).multiline_text((tx, ty), text_block, font=font, fill=(255, 235, 190), align="center", spacing=16)
    glow_tight = glow_tight.filter(ImageFilter.GaussianBlur(6))

    canvas = ImageChops.screen(canvas, glow_wide)
    canvas = ImageChops.screen(canvas, glow_wide)
    canvas = ImageChops.screen(canvas, glow_tight)

    draw = ImageDraw.Draw(canvas)
    draw.multiline_text((tx, ty), text_block, font=font, fill=(255, 252, 245), align="center", spacing=16)
    return canvas


def render(base_path, settled_points, new_point, style_new, label_new=False):
    im = Image.open(base_path).convert("RGB")
    w, h = im.size
    for p in settled_points:
        x, y = latlon_to_xy(p["lat"], p["lon"], w, h)
        im = draw_point(im, x, y, SETTLED)
    if new_point is not None:
        x, y = latlon_to_xy(new_point["lat"], new_point["lon"], w, h)
        im = draw_point(im, x, y, style_new)
        if label_new and new_point.get("label"):
            im = draw_label(im, x, y, new_point["label"], new_point.get("country", ""))
    return im


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", required=True)
    ap.add_argument("--points", required=True, help="既存（沈静済み）点のJSONファイル")
    ap.add_argument("--new", required=True, help='新しい点。JSON文字列 {"lat":..,"lon":..,"label":".."}')
    ap.add_argument("--out-highlight", required=True)
    ap.add_argument("--out-settled", required=True)
    args = ap.parse_args()

    with open(args.points, encoding="utf-8") as f:
        settled = json.load(f)
    new_point = json.loads(args.new)

    # 1. 強調版：既存は点、新規は目立つ光＋都市名・国名のラベル
    highlight = render(args.base, settled, new_point, HIGHLIGHT, label_new=True)
    highlight.save(args.out_highlight, quality=92)

    # 2. 沈静版：新規も点に縮めたもの（次回の base 相当。points.json に追記して使う）
    settled_img = render(args.base, settled, new_point, SETTLED)
    settled_img.save(args.out_settled, quality=92)

    print(f"highlight -> {args.out_highlight}")
    print(f"settled   -> {args.out_settled}")
    print(f"次回は --points に、この new_point を settled リストへ追記したJSONを渡す")


if __name__ == "__main__":
    main()
