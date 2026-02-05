# New Eridu Companion (Secure + AI)

A security-first companion web application inspired by *Zenless Zone Zero*:
- Save builds and notes, and track resource usage
- Ask an AI assistant questions using Retrieval-Augmented Generation (RAG)
- Includes an “Attack Lab” to evaluate defenses against prompt injection and abuse

## Why this project?
I wanted a hobby project that stays fun by being game-adjacent (build crafting, team planning),
while also showcasing:
- Full-stack engineering
- Applied cybersecurity (OWASP considerations, rate limiting, audit logging)
- LLM security concepts (prompt injection and data exfiltration defenses)

## Planned Features
- [ ] Build notes and calculations (create/read/update/delete)
- [ ] Resource and Drive Disc tracker
- [ ] RAG chatbot with citations (from curated docs and notes)
- [ ] Prompt injection and data exfiltration defenses
- [ ] Attack Lab (defenses on/off with test prompts)
- [ ] Rate limiting and audit logging
- [ ] Deployment

## Tech (tentative)
- Next.js + TypeScript
- PostgreSQL + pgvector (planned)

## Threat Model (high level)
Security considerations will be introduced iteratively as features are implemented:
- Prompt injection attempts to override system behavior
- Data exfiltration via malicious user input
- Abuse of AI endpoints (spam, scraping, DoS-lite)

## Milestones
### MVP v0
- Notes page with basic search retrieval
- Chat page that answers using saved notes
- Basic rate limiting on chat endpoints

## Status
Early development (public learning and portfolio project).
