# Architecture

The dashboard separates presentation, pipeline data, and future integration concerns.

## Current layers

- **UI:** React components render pipeline health, deployments, and environments.
- **Data:** Local TypeScript data models provide deterministic dashboard state.
- **Styling:** CSS handles responsive layout and visual states.

## Planned integration

GitHub Actions or another CI provider can replace the local data source through a typed API layer without changing the dashboard components.
