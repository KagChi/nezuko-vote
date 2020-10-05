const DBL = require("dblapi.js");
const dbl = new DBL("token lu", { webhookPort: 3000, webhookAuth: 'password' });
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
const channel = client.channels.cache.get('channel vote id');
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
})

client.login("token bot lu")
