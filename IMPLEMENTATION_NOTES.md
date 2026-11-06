# Portfolio redesign — milestone 1

## What changed

- Reframed the home page around Software Quality Assurance and UI/UX work.
- Added a lightweight, motion-aware engineering workflow visual using the existing `framer-motion` dependency.
- Updated navigation, page metadata, and global focus/colour styling for the new dark visual system.
- Removed top-level outcome statistics because the repository does not provide independently verifiable evidence for them.

## Content policy

The redesign uses role, capability, project-name, and project-type information already present in the repository. It intentionally does not introduce client names, locations, durations, numerical performance claims, or outcome metrics.

## Contact API review

The contact endpoint now handles malformed JSON, validates field types and email format, limits accepted field lengths, prevents line-break injection in the subject, and returns a generic delivery failure response. Rate limiting and bot protection require deployment-level state or a third-party provider, so they are intentionally not added here.
