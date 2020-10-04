const DBL = require("dblapi.js");
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE2OTQ3MDI5MzA0OTM0NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk4MDc5MzM0fQ.S5a69--wCwnrhNsfG00EIbLPUu6R9a3N4JSB-Z5MB0g", { webhookPort: 5000, webhookAuth: 'password' });

// Optional event

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
const webhook = require("webhook-discord");
const Hook = new webhook.Webhook("https://discord.com/api/webhooks/762222779264532481/CR2AzSfnxho83KCQIm0Yj4IJxZ-ligVEklAzGlHqIhpGoqMr2VUFCNpfpLP92w47BMkV"); 
const msg = new webhook.MessageBuilder()
                .setName("NezukoChan")
                .setColor("#1ab2ba")
                .setText(`Thanks! ${vote.user}  Voted NezukoChan!`);
Hook.send(msg);
  console.log(`User with ID ${vote} just voted!`);
});
