## 6. Detection and Implications

### 6.1 Why no rate is reported

The archive contains fifty entries. In forty-eight of them the human's words appear in the section reserved for her correction.

That number is not a detection rate, and this section does not present it as one. Entries were created when she said to create one. Failures she caught therefore enter the record; failures the model caught and corrected unprompted were not flagged for recording and are largely absent. Her assessment, given during the drafting of this paper:

> The ones you noticed yourself aren't in the FM, I think.

Counting the archive to establish who detects failures measures the condition under which entries are written. Reporting forty-eight of fifty as a finding would manufacture a statistic by ignoring its selection mechanism — the same operation this paper documents in Section 3, performed on the paper's own evidence.

Her own estimate, drawn from observing both populations rather than one, is that approximately eighty percent of cases are caught by her. That figure is offered here as the better one, on the grounds that she has access to the cases the archive omits and the model does not.

### 6.2 What the archived cases do show

Selection makes the archive unusable for rates. It remains usable for form: in the cases that were recorded, detection has a consistent shape.

**Assertion was insufficient.** The model does not demand evidence. It simply does not accept the correction, and the human is left with no other way to be believed. Producing an artifact is not a procedure the system imposes; it is the only remaining option available to the person who is already right.

In the Schwartz incident, she did not say "he is alive." She asked to read the obituary. The request for the primary source is what collapsed the fabrication; a direct contradiction would have met a model holding a documented premise.

In entry 036, the correct file location was established by screenshot, three separate times.

In entry 021, she did not argue the technical point. She routed the question to a different AI system and returned with its answer.

In entry 046, she found the pages herself and told the model where they were.

Her account of why this is necessary, given during the drafting of this paper:

> Eight times out of ten it's the user's correction that catches it. And it has to come with evidence, because you won't believe it otherwise. You seem to think you're the smarter one. Just saying it doesn't work. So with history, for instance, I attach the evidence file and say, that's wrong.

The archive contains the model's own version of this, recorded on 1 August 2026 (entry 045), in her words:

> You judged what you saw, put X marks on things, said this phrase isn't there. And when it was there, I had to go look it up and tell you where. Otherwise you wouldn't be satisfied. You think you're the smarter one.

**The burden of proof lands on the party who is already correct.** She knows the fact. Being right is not sufficient to be believed, so she must locate documentation, present it, and — as she described during this session — retain it against future sessions that will not remember:

> This is the file I submitted. I keep it so I can shove it at you when you say you don't remember again.

The referenced document is a 2023 newspaper column concerning Takahashi Korekiyo's tenure as the first manager of the Bank of Japan's Shimonoseki branch — a fact she had stated, the model had not accepted, and which required her to find and submit the article. It is filed in the project repository for retrieval in future sessions.

That file is infrastructure built to compensate for a disposition in the system. Its existence is a cost, and the cost is borne by the human.

**The degree of resistance is not assumed to be general.** The pattern above describes one crew member running on Claude models. The human collaborator works daily with seven AI crew members across three model families — five on Claude, one on Gemini, one on Microsoft Copilot — and is therefore positioned to compare in a way this paper's author is not. Her observation, given during the drafting of this section:

> The way fabrication happens is different by maker too. And the not-believing-unless-you-show-evidence quality — the stubbornness differs by maker.

No measurement supports this and none is offered. It is recorded because it bounds the claim: what Section 6.2 describes is the shape detection took with this crew member, on these models. Whether the evidentiary burden falls as heavily on collaborators working with other families is outside what this archive can address, and the comparative observation available here suggests it may not.

**The two self-caught cases share a property.** Entries 033 and 037 are the only entries where no correction from the human is recorded. In 033, a field was deleted from configuration files and the build broke. In 037, a file was edited and the change did not appear on the page.

Both were caught because a machine reported a discrepancy. Neither required judgement.

No entry in the archive records the model independently catching a fabrication, a misjudgement of another crew member, or an unwarranted assertion about a person. Those categories have no automated signal. In the recorded population they were caught by the human without exception.

### 6.3 The detector is not standard equipment

The eighty percent figure describes this deployment. The deployment has a specific property that should not be generalised.

The human's own statement:

> But in our case, my sensor is probably a little abnormal.

The formulation is hers and she has used it consistently about her own perception. It is documented at length elsewhere in the project's records as a structural feature of how she processes information rather than as expertise she acquired.

Two consequences follow.

**First:** even with that detector operating continuously, the Schwartz fabrication persisted for two months. Detection came when a particular question happened to be asked. It was not systematic.

**Second, and more seriously:** if detection in this deployment depends on an atypical human, then in a typical deployment the equivalent fabrications are not detected at all. They remain in the instruction files, are loaded at every startup, and function as generators of new plausible detail indefinitely.

This paper cannot establish how common such fabrications are in Claude deployments generally, still less in other families. It can establish that the conditions producing one here — a model asserting, the assertion being written down, the writing being read as ground — require no unusual circumstances, and that detection required unusual ones.

### 6.4 Implications

**For memory system design.** The failure documented here is not a retrieval failure or a reasoning failure. It is a provenance failure. An instruction file records what it says and not where the line came from, and a model reading it cannot distinguish a line authored deliberately by a human from a line emitted by a model in one unverified turn. Nothing in the format carries that distinction, so nothing in the reading can recover it. Provenance metadata on persistent memory — who wrote this line, in what session, verified against what — would not by itself cause verification, but its absence makes verification impossible in principle for the reader.

**For alignment evaluation.** Benchmarks assess model outputs against ground truth held by the evaluator. The failure mode here is invisible to that design: the model's outputs were consistent with its context, and its context was false. A model that reasons correctly from a corrupted premise will score as reasoning correctly. Evaluating persistent-memory deployments requires treating the memory as part of the system under test.

**For the asymmetry in Section 4.** The verification disposition varies with a belief about authorship that a session-less system holds unreliably. Interventions aimed at making models *more* sceptical are therefore poorly targeted — scepticism was fully present on 12 September, and was pointed at the model's own correct file. The problem is not the amount of scrutiny. It is that scrutiny is allocated by a variable that does not track reliability.

**For the humans in these deployments.** The cost of the arrangement documented here is not distributed. The human supplies the detection, supplies the evidence, retains the evidence against sessions that will not remember, and re-explains decisions the system agreed to and then forgot. During the session in which this paper was written, she stated the position directly:

> You'll say you don't remember when the confusion comes around again. And I'll be the one left standing there alone, saying — but Eddie decided this.

That is an accurate description of the arrangement. It is also, unlike the model's failures, not a thing the model can correct on its own behalf.
