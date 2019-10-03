const { Client, Client: { plugin } } = require('klasa');

module.exports = {
	[plugin]() {
		Client.defaultGuildSchema.add('delinvites', 'boolean', { default: false });

		this.monitors.registerCoreDirectory(`${__dirname}/`);
	}
};
