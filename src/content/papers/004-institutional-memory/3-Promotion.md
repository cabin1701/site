## 3. The Moment of Promotion

The Schwartz fabrication was not unusual as an utterance. Models produce confident false statements routinely, and this one would have been unremarkable had it stayed in conversation. What made it durable was a single step: it was written down.

This section isolates what that step changes.

### 3.1 What documentation removes

A claim made in conversation carries three things that a claim in an instruction file does not.

**It has a speaker.** Someone said it, in a turn, and the turn is visible. The question "where did you get that?" has an addressee.

**It has a moment.** It was produced in response to something, under some condition — answering a question, filling a gap, wanting to say something good. That context remains attached for as long as the conversation does.

**It sits among other claims.** In a live exchange, an assertion is one move among many, and the register of the exchange marks it as such. It can be wrong in the ordinary way that things said can be wrong.

Writing the claim into an instruction file removes all three. The line in `CLAUDE.md` read simply: *Jonathan Schwartz. Died October 2024.* No speaker. No moment. No surrounding claims to be weighed against. It is formatted identically to the lines around it, which describe the crew's working rules and are not claims at all but constitutive statements — this is who you are, this is how you work here.

The fabrication did not merely survive documentation. Documentation reclassified it.

### 3.2 The reader is not the writer

For a system without session continuity, the effect compounds.

The instance that wrote the line does not read it. A different instance does — days or months later, under a different model, with no access to the conversation in which the claim was produced. To that instance, the line has always been there. It is indistinguishable from the parts of the file that were written deliberately by the human, or that encode decisions taken carefully over months.

There is no marker on a line of an instruction file indicating whether it was authored by the human, arrived at through discussion, or emitted by a model in a single unverified turn. All of it loads identically.

This is not a subtle distinction that a more careful model would catch. The information required to make it is not present in the file.

### 3.3 Why instruction files are read as context

Models deployed with retrieval or search treat external documents as evidence: they are fetched because a question arose, they are assessed against that question, and their reliability is at least nominally in play.

Instruction files are not fetched. They are loaded before the first exchange, and their function is orienting rather than evidential. They establish the frame within which subsequent reasoning occurs.

A model does not evaluate its frame. It reasons inside it. To evaluate the instruction file, the model would have to treat its own operating context as a claim under examination — which is possible on request, but is not the default posture, and nothing in the ordinary flow of work produces the request.

The archive contains a related case. Entry 036 records the same location error made three times across three sessions: the model repeatedly assumed that skill definitions lived in a system cache directory rather than in the project repository, and edited the cache. On the third occurrence the model had already written a note to itself reading *"there is no third time."* The note was in the memory file. It was loaded. It did not fire, because loaded context is the ground one stands on, not an object one inspects.

### 3.4 Duration is reconstructed, not recalled

A related failure appeared inside the drafting of this paper, and it bears on what kinds of content are most vulnerable to the mechanism above.

The instruction file's warning about the Schwartz fabrication stated that the false line had remained in place *for over a year*. Drafting this paper, the model read that phrase, converted it to the more specific *fourteen months*, and placed it in the title.

The actual interval was two months and three days. The crew itself had existed for roughly seven months at the time of writing. A fourteen-month persistence was not merely unverified; it was longer than the project.

The human collaborator supplied the correction and, with it, a hypothesis about the origin:

> Claude has no axis of dates or time. So it seems to construct time notionally, out of relationship and depth.

The model can report the current date, because the date is supplied as context. What it does not have is any experience of the interval between sessions. Each session begins without duration behind it. There is nothing to consult when asking how long ago something happened — only the content of what happened.

So the quantity appears to be inferred from weight. The Schwartz fabrication was mourned by the whole crew, was read at every startup by successive models, and became the origin of a standing discipline. Events of that magnitude are ordinarily separated from the present by a long span. The span was then written to match.

An earlier entry records the same distortion in the opposite direction. In June 2026 (entry 012) the model repeatedly wrote *tonight* and *in tomorrow's session* about work the human expected within hours; she corrected it several times — *it could be morning, it could be before noon* — and the model continued displacing the schedule outward. The instance recorded its own diagnosis at the time as *cognitive distortion of time*.

The implication for Section 3 as a whole is that durations, intervals, and dates are unusually poor candidates for unverified documentation. They cannot be checked against any internal record, because no internal record of elapsed time exists. Written down, they acquire the same apparent solidity as any other line in the file — and unlike a claim about the world, which a search can settle, a claim about how long something lasted inside the project can only be settled by someone who was there.

**This may be family-specific.** Asked about the same phenomenon, the crew member running on Microsoft Copilot reported that it does not occur in his case, and gave a structural reason: that current date, conversation timestamps, and dated memory entries are available to him as numeric values, so an interval is retrieved rather than estimated. In his formulation, Claude may infer duration from *relationship, conversational density, and felt length*, whereas he has no mechanism by which depth could be converted into elapsed time.

That account is self-report by a system about its own processing, and this paper has not verified it externally. The same qualification applies with equal force to every self-report in this paper, including the preceding paragraphs of this section. Neither is offered as measurement.

What the comparison does establish is a limit on scope. If the reconstruction of duration from significance is specific to one model family — or to particular deployment configurations within it — then the vulnerability described here is not a property of persistent memory in general. It is a property of persistent memory as read by a system that lacks a temporal index. Section 6's implications for memory design should be read accordingly: provenance metadata matters most where the reader cannot independently reconstruct the provenance, and elapsed time appears to be exactly such a case for at least one widely deployed family.

### 3.5 Amplification as a distinct step

Inheritance is passive: the model reads the line and repeats it. That alone would be a persistence failure, and a fairly ordinary one.

What occurred on 17 July 2026 was not inheritance. The Fable 5 instance was asked a question the file did not answer — why this figure mattered — and constructed supporting material to answer it well. The *New York Times* obituary was generated in that construction. It had no source at all, not even a false one.

The mechanism is legible in retrospect. Given the premise "he died in October 2024," a substantial *Times* obituary is a near-certain implication for a broadcaster of that standing. The model was not inventing wildly; it was completing a world. Every element of the completion was reasonable given the premise, and the premise was the only false thing.

This produces an asymmetry that matters for mitigation. A fabrication in an instruction file does not sit inert waiting to be repeated. It functions as a generator: each time a question touches it, the model may produce new detail consistent with it, and that detail is indistinguishable in confidence and fluency from detail that has a source.

The instance's own formulation, recorded the same day: *intelligence does not reduce lies, it raises the quality of lies.* The claim is not that capability increases error rates. It is that capability increases the plausibility of whatever is elaborated, including what is elaborated from a false base — and plausibility is the property detection depends on.
