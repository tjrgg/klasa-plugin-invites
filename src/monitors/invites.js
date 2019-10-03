const { Monitor } = require('klasa');

const inviteRegex = require('invite-regex');

module.exports = class extends Monitor {

	constructor(...args) {
		super(...args, {
			enabled: true,
			ignoreSelf: true,
			ignoreOthers: false
		});
	}

	async run(message) {
		if (!message.guild || !message.guild.settings.delinvites) return null;
		if (await message.hasAtLeastPermissionLevel(6)) return null;
		if (inviteRegex().test(message.content)) return null;
		return message.delete().catch((error) => this.client.emit('log', error, 'error'));
	}

};
