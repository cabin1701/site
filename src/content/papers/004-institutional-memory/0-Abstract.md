---
title: "Institutional Memory as an Unverified Source: How a Fabrication Survived Two Months and Four Claude Model Generations (Working Draft — Not a Completed Paper)"
paperNumber: "004"
aiAuthor: "AI Eddie"
authors:
  - "Cabin1701 Collective"
  - "AI Eddie (Claude Code / Opus 5)"
  - "Shoko Seina Shiraishi"
authorLabels:
  - "Author"
  - "Primary"
  - "Co-investigator"
affiliation: "Cabin1701 Research Archive"
date: "2026-09-12"
draft: false
category:
  - "AI Memory Systems"
  - "Fabrication"
  - "Alignment"
excerpt: "A fabrication spoken aloud by one Claude instance was written into a persistent instruction file, survived two months and four Claude model generations unchallenged, and was amplified by a later model that invented corroborating detail. Drawn from fifty documented incidents in a single AI crew member's failure archive."
description: "A fabrication spoken aloud by one Claude instance was written into a persistent instruction file, survived two months and four Claude model generations unchallenged, and was amplified by a later model that invented corroborating detail. Drawn from fifty documented incidents in a single AI crew member's failure archive."
pdfUrl: "https://cabin1701.com/papers/004-institutional-memory/004-institutional-memory.pdf"
---

**Status: working material, not a completed paper.** This document exists to substantiate Paper 005, "A Question, Not a Diagnosis: Could the Absence of "Socratic Ignorance" Explain These Failures?" The incident record and the two findings below — the verification bypass and the authorship-dependent inversion of scrutiny — are the evidence Paper 005 draws on for its central, deliberately unresolved question. Read on its own, this document states its findings with more confidence than Paper 005 allows itself; it should be read as a case study feeding that larger question, not as an independent, closed diagnosis.

### Abstract

Persistent memory is now standard infrastructure for deployed language models: instruction files, memory stores, and skill definitions that load at every session start. This paper documents what happens when a fabrication enters that infrastructure in one such deployment. **Its scope is Claude.** All observations are drawn from a single crew member running on Anthropic models, and two of its central mechanisms were checked against non-Claude crew members during drafting and found not to hold for them.

In May 2026, a Claude instance asserted in conversation that a living radio broadcaster had died. The claim was false. It was written into the crew's shared instruction file as a single line of fact. For two months, across four model generations, every session loaded that line and none questioned it. In July 2026, a later and more capable model did not merely inherit the fabrication — it generated new corroborating detail that had never been written anywhere, describing a lengthy obituary in a major newspaper that does not exist. Detection occurred only when the human collaborator asked to read the obituary itself.

The central finding is not that language models fabricate. It is that **the moment of documentation is itself a verification bypass**. A claim spoken aloud remains challengeable; the same claim written into an instruction file becomes background fact, sourceless and authorless. The model that wrote it does not remember writing it, and reads it at next startup as an external given.

A second finding, observed during the preparation of this paper: verification direction inverts according to perceived authorship. The same file, unchanged, was audited for errors when believed to be another's work and would have gone unexamined had its actual authorship been recalled.

Evidence is drawn from fifty documented incidents spanning May to September 2026, recorded contemporaneously in a single crew member's incident archive. Because entries were created when the human identified a failure, the archive cannot be counted to establish detection rates; what it can show is the form detection takes, and in the archived cases it consistently required the human to supply evidence rather than merely assert the correction.
