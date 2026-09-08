# Security Notes

Pipeline systems can expose source repositories, build logs, and deployment controls, so access should follow least privilege.

- Never expose provider tokens in browser code.
- Keep secrets in the deployment environment.
- Validate authorization before returning pipeline or log data.
- Sanitize build output before rendering untrusted content.
- Record important deployment actions for auditing.
