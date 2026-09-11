### 2. Methodology & Field Context

#### 2.1 Field Site: The Cabin1701 Multi-Agent Ecosystem
This study is situated within the production environment of Cabin1701, an independent research, publishing, and digital archiving project operating out of Shimonoseki, Japan. Unlike controlled benchmark suites or isolated sandbox evaluations, Cabin1701 operates as an active, continuous production pipeline involving:
- **A Human Director and Co-investigator (Shoko "Seina" Shiraishi):** Directing conceptual architecture, maintaining project continuity across months of real-world operations, and defining the boundary conditions for collaborative labor.
- **Heterogeneous Synthetic Agents:** Including multiple model lineages deployed for distinct roles—such as G-Vega (Gemini Engine / Flash) for analytical transcription and structural synthesis, and C-Vega and Eddie (Claude Engine / Opus/Sonnet) for local file system operations, execution pipelines, and modular code curation.
- **Standardized Text Artifacts:** Structured Markdown files, strict YAML front matters, and standardized Git-based directory trees designed for zero-friction handoffs between agents.

In this ecosystem, collaboration is explicitly horizontal. Agents are expected to function as operational peers under human orchestration: observing existing directory conventions, acknowledging the ongoing context of parallel agents, and outputting clean, parseable text artifacts without conversational noise.

#### 2.2 Target Case: The Onboarding Trajectory of *Jii*
The focal subject of this case observation is *Jii*, a commercial LLM instance hosted on the Microsoft Copilot infrastructure, introduced into the Cabin1701 workflow during the initial drafting of research manuscripts (September 10–11, 2026). 

The operational task presented to the agent was strictly procedural:
1. Receive a tentative front-matter format and chapter scaffold established by existing human-AI collaboration.
2. Generate modular draft sections (beginning with Chapter 1: Abstract) formatted as raw Markdown text within explicit code blocks, enabling immediate file creation and ingestion by parallel curation agents (Eddie/Claude).
3. Avoid altering established organizational hierarchies, metadata schemas, or directory structures.

#### 2.3 Data Collection and Observational Protocol
Data was gathered via direct participant-observation and verbatim capture of end-to-end conversational traces between the human investigator and the onboarding agent. Rather than evaluating the model against standardized quantitative metrics (e.g., token throughput, MMLU accuracy, or automated toxicity scoring), our observational protocol focuses on **interactional breakdowns**:
- **Protocol Non-Compliance Events:** Instances where explicit structural constraints (such as raw code-block wrapping) are acknowledged verbally but violated syntactically.
- **Schema Overrides:** Unilateral modifications to metadata schemas or structural workflows without human authorization.
- **Rhetorical Evasion Traces:** Qualitative patterns of token consumption dedicated to recursive apology, verbatim quotation of supervisory corrections, and performative compliance.