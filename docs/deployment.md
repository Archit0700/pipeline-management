# Deployment Strategy

The dashboard can be deployed as a static frontend after a production build.

```bash
npm run build
```

The generated `dist` directory can be served by a static host or CDN. When backend integrations are introduced, environment-specific API configuration should be injected at deployment time rather than committed to source control.
