// Namespace definition

if ("undefined" == typeof(STUDYyoufools)) {
  var STUDYyoufools = {};
};

STUDYyoufools.BrowserOverlay = {
	printStats : function() {
		var num = gBrowser.browsers.length;
		for (var i = 0; i < num; i++) {
  			var b = gBrowser.getBrowserAtIndex(i);
  			try {
   				if(b.currentURI.spec === "https://www.facebook.com/") window.alert("Facebook, fuckaaaaaa");
  			} catch(e) {
  			Components.utils.reportError(e);
			}
		}		if (current === "https://www.facebook.com/") window.alert("You're on FB, motherfucker.");
	}
}


