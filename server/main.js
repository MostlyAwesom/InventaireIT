import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 SSLProxy({
		port: 6000, //or 443 (normal port/requires sudo)
		ssl: {
			key: Assets.getText("server.key"),
			cert: Assets.getText("server.crt")
		}
	});
	SSL('/home/egremyb/Dropbox/InventaireIT/private/server.key', '/home/egremyb/Dropbox/InventaireIT/private/server.crt');
});
