const DBL = require("dblapi.js");
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE2OTQ3MDI5MzA0OTM0NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk4MDc5MzM0fQ.S5a69--wCwnrhNsfG00EIbLPUu6R9a3N4JSB-Z5MB0g", { webhookPort: 5000, webhookAuth: 'password' });
const Discord = require("discord.js");
// Optional event
const client = new Discord.Client();
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', async vote => {
const embed = new Discord.MessageEmbed()
	.setTitle('NezukoChan#8098 Vote Log!')
  .addField(`Thanks ${client.users.cache.get(vote.user).username} For Vote NezukoChan!`)
	.setColor('#FEFADC');
const channel = client.channels.cache.get('222197033908436994');
	try {
		const webhooks = await channel.fetchWebhooks();
		const webhook = webhooks.first();

		await webhook.send('Webhook test', {
			username: 'NezukoChan',
			avatarURL: client.user.avatarURL(),
			embeds: [embed],
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
	}
  console.log(`User with ID ${vote.toString()} just voted!`);
})

client.login("NjE2MTY5NDcwMjkzMDQ5MzQ0.XWYqiQ.q8iu8yhWdhqPAze7VrqJpNsoVjk")
