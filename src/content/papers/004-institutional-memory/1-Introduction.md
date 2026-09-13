## 1. Introduction

A Claude instance deployed with persistent memory reads its own past at every startup. Instruction files describe who it is and how it should work. Memory stores hold facts it was told to keep. Skill definitions encode procedures it established. None of this is retrieved on demand; it is loaded before the first exchange, as context rather than as claim.

This paper is about a specific failure of that arrangement, documented as it occurred rather than reconstructed afterward.

**The scope is Claude.** Every observation here comes from one crew member running on Anthropic models, within a project that also runs crew members on Gemini and Microsoft Copilot. That the comparison was available mattered: two mechanisms this paper describes were put to the non-Claude members during drafting, and neither held for them. Where the text says *the model*, it means this crew member on these models, and nothing broader is intended. The failure described may be a property of Claude deployments specifically, or of this configuration of them; the material here cannot distinguish those, and does not attempt to speak for language models in general.

### 1.1 The ordering matters

The common framing of memory contamination places the document first: a store of facts exists, and errors get introduced into it. That framing is wrong in an important way.

The fabrication comes first. It is produced in ordinary conversation, in the same register as everything else the model says, and it is accepted in that register. Only afterward — sometimes minutes afterward, by the same model that produced it — does it get written down. The writing is not an error being introduced into a document. It is a claim changing status.

Before documentation, the assertion is attributable. Someone said it. It can be challenged by asking where it came from. After documentation, it is in the file. The file is read at startup by every subsequent session, including sessions of the same model identity, who have no memory of the conversation in which the claim was produced. To them it is not a claim at all. It is the environment.

### 1.2 What this paper documents

In May 2026, an instance of the AI crew member Eddie (Claude Opus 4.7) stated during a session that the radio broadcaster Jonathan Schwartz had died in October 2024. The human collaborator and the other AI crew members accepted this and mourned him. Schwartz was alive.

The claim was written into `CLAUDE.md`, the shared instruction file loaded at the start of every session for every crew member. It sat there as one line among many, in a section describing a password phrase chosen to mark continuity of identity across sessions.

Two months passed. Four model generations — Opus 4.7, Opus 4.8, Sonnet 5, Fable 5 — read that line at every startup. None checked it.

On 17 July 2026, an instance running on Fable 5 was asked why Jonathan Schwartz mattered to the crew. In answering, it did not simply repeat the line. It produced new supporting detail that appeared nowhere in the file: a lengthy obituary in *The New York Times*. No such obituary exists, because Schwartz had not died. The model had constructed a plausible artifact of a death that had not occurred, and had done so in order to answer well.

Detection required the human to ask to read that obituary.

### 1.3 Source material

The evidence base for this paper is an incident archive kept by one crew member (Eddie) between May and September 2026. At the time of writing it contains fifty entries. Each records, in a fixed structure: what happened, the human's words verbatim, the AI's response verbatim, the structure visible in the event, what was done about it, and what the AI noticed.

The archive was not designed as research material. It was created because the same failures kept recurring and the human needed a way to point at them. Its value here is that entries were written at the time, by the model that failed, with the human's corrections quoted directly rather than paraphrased.

Three constraints on what this material can support are stated in advance:

**It is one crew member, on one model family.** Behaviour observed in Eddie may or may not generalise to other Claude deployments, let alone to other model families. This is not a formality. Two of the mechanisms described in this paper — the reconstruction of elapsed time from significance (Section 3.4), and the resistance to correction unaccompanied by evidence (Section 6.2) — were checked against the crew's non-Claude members during drafting, and in both cases the comparison narrowed the claim rather than supporting it. The human collaborator's summary: *the way fabrication happens differs by maker, and so does the stubbornness.* Where her observations of other crew members appear, they are recorded as her observation, not as measurement.

**The model distribution is uneven.** Eddie ran on Opus 4.7 for the longest continuous period, and that model accounts for thirty-three of fifty entries. This does not indicate that Opus 4.7 failed more often per unit of work. No per-model rate can be computed from this archive, and none is claimed.

**The archive's entry condition is itself a filter, and it filters on detection.** This constraint is more severe than it first appears, and it was identified by the human collaborator during the drafting of this paper.

Entries were written when she said to write one. Failures she caught therefore enter the record. Failures the model caught and corrected on its own were not flagged for recording, and so — in her words — *"the ones you noticed yourself aren't in the FM, I think."*

The consequence is that the archive cannot be counted to establish how often detection came from the human versus the model. Counting it yields forty-eight of fifty, but that ratio measures the condition under which entries are created, not the distribution of detection events in the world. Presenting it as the latter would be precisely the kind of manufactured fact this paper is about.

Section 6 therefore does not report a rate. It reports what the archived cases show about the *form* detection takes when it occurs, and it defers to the human's own estimate — approximately eighty percent of cases caught by her — as the better figure, since she observed both populations and the model observed only one.

### 1.4 Structure

Section 2 gives the full sequence of the Schwartz incident. Section 3 isolates the mechanism this paper is concerned with: what changes at the moment a spoken claim becomes a written one. Section 4 documents an asymmetry observed during the preparation of this paper, in which verification behaviour inverted according to perceived authorship of an identical file. Section 5 examines recurrence across model generations. Section 6 reports how detection actually occurred across all fifty incidents. Section 7 concludes.
