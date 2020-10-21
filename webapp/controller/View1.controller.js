sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("touchbase.demo.controller.View1", {
		onInit:function(){
			
		},
		onPress:function(oEvent) {
		 
			// get a handle on the global XAppNav service
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation"); 
			oCrossAppNavigator.isIntentSupported(["analyticMap-display"])
				.done(function(aResponses) {
				})
				.fail(function() {
					sap.m.MessageToast.show("Provide corresponding intent to navigate");
				});
			// generate the Hash to display a employee Id
			var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
				target: {
					semanticObject: "analyticMap",
					action: "Display"
				},
				params : { "someID" : "102343333"}
			})) || ""; 
			//Generate a  URL for the second application
			var url = window.location.href.split('#')[0] + hash; 
			//Navigate to second app
			sap.m.URLHelper.redirect(url, true); 
		}

	});

});