# Contributing to Chat Guard

We welcome contributions from the community. By contributing, you agree to abide by the project’s License and Code of Conduct.

## Getting Started

- Fork the repository and create a feature branch from `main`.
- Ensure Node.js (>=16.9.0) and MongoDB are available.
- Install dependencies:
  ```bash
  npm install
  ```
- Configure local settings in `src/config.js` (do not commit secrets).
- Start the bot:
  ```bash
  npm start
  ```

## Development Guidelines

- Keep changes focused and minimal; prefer cohesive PRs over large mixed changes.
- Match existing code style and naming.
- Include documentation updates under `docs/` when you add features or change behavior.
- If you change commands or schema, update `docs/05-Commands.md` and `docs/06-Data-Model.md`.

## Commit & PR Process

- Write clear commit messages (imperative tone, concise subject, descriptive body if needed).
- Open a Pull Request against `main` with:
  - Description of changes and rationale
  - Testing notes and screenshots (if applicable)
  - Checklist of updated docs/tests as needed
- CI must pass before review/merge.

## Issues

- Use the provided templates when filing bugs or feature requests.
- For security issues, do not open a public issue; follow `SECURITY.md`.

## License

By contributing, you agree that your contributions will be licensed under the repository’s license (CC BY‑NC‑SA 4.0 with additional terms).
