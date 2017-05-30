document.addEventListener('deviceready', function () {
	var wikitude = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
	wikitude.isDeviceSupported(function () {
		wikitude.loadARchitectWorld(function (url) {
			wikitude.setLocation(30, 120, 0, 4);
		}, function (error) {
			alert('Loading AR failed: ' + error);
		},
			"www/world/index.html",
			['geo']
		);
	}, function (error) {
		alert(error);
	},
		['geo']
	);
}, false);
