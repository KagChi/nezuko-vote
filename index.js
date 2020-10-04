const DBL = require("dblapi.js");
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE2OTQ3MDI5MzA0OTM0NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk4MDc5MzM0fQ.S5a69--wCwnrhNsfG00EIbLPUu6R9a3N4JSB-Z5MB0g", { webhookPort: 5000, webhookAuth: 'password' });

// Optional event

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});
