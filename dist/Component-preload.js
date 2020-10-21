/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "touchbase/demo/Component-preload",
	"modules": {
		"touchbase/demo/view/View1.view.xml": "<mvc:View xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" controllerName=\"touchbase.demo.controller.View1\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content><Button text=\"navigate\" press=\"onPress\"/>\n\t\t\t\t    <Panel id=\"__panel0\">\n\t\t\t\t        <content>\n\t\t\t\t            <Table noDataText=\"Drop column list items here and columns in the area above\" id=\"__table0\">\n\t\t\t\t                <items>\n\t\t\t\t                    <ColumnListItem id=\"__item6\">\n\t\t\t\t                        <cells>\n\t\t\t\t                            <Text text=\"Row 1 Cell 1\" id=\"__text4\"/>\n\t\t\t\t                            <Text text=\"Row 1 Cell 2\" id=\"__text5\"/>\n\t\t\t\t                            <Text text=\"Row 1 Cell 3\" id=\"__text6\"/></cells>\n\t\t\t\t                    </ColumnListItem>\n\t\t\t\t                    <ColumnListItem id=\"__item7\">\n\t\t\t\t                        <cells>\n\t\t\t\t                            <Text text=\"Row 2 Cell 1\" id=\"__text7\"/>\n\t\t\t\t                            <Text text=\"Row 2 Cell 2\" id=\"__text8\"/>\n\t\t\t\t                            <Text text=\"Row 2 Cell 3\" id=\"__text9\"/></cells>\n\t\t\t\t                    </ColumnListItem></items>\n\t\t\t\t                <columns>\n\t\t\t\t                    <Column id=\"__column0\">\n\t\t\t\t                        <header>\n\t\t\t\t                            <Label text=\"Header 1\" id=\"__label0\"/>\n\t\t\t\t                        </header>\n\t\t\t\t                    </Column>\n\t\t\t\t                    <Column id=\"__column1\">\n\t\t\t\t                        <header>\n\t\t\t\t                            <Label text=\"Header 2\" id=\"__label1\"/>\n\t\t\t\t                        </header>\n\t\t\t\t                    </Column>\n\t\t\t\t                    <Column id=\"__column2\">\n\t\t\t\t                        <header>\n\t\t\t\t                            <Label text=\"Header 3\" id=\"__label2\"/>\n\t\t\t\t                        </header>\n\t\t\t\t                    </Column></columns></Table>\n\t\t\t\t        </content>\n\t\t\t\t    </Panel>\t\t\t    \n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"touchbase/demo/controller/View1.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"touchbase.demo.controller.View1\", {\n\t\tonInit:function(){\n\t\t\t\n\t\t},\n\t\tonPress:function(oEvent) {\n\t\t \n\t\t\t// get a handle on the global XAppNav service\n\t\t\tvar oCrossAppNavigator = sap.ushell.Container.getService(\"CrossApplicationNavigation\"); \n\t\t\toCrossAppNavigator.isIntentSupported([\"analyticMap-display\"])\n\t\t\t\t.done(function(aResponses) {\n\t\t\t\t})\n\t\t\t\t.fail(function() {\n\t\t\t\t\tsap.m.MessageToast.show(\"Provide corresponding intent to navigate\");\n\t\t\t\t});\n\t\t\t// generate the Hash to display a employee Id\n\t\t\tvar hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({\n\t\t\t\ttarget: {\n\t\t\t\t\tsemanticObject: \"analyticMap\",\n\t\t\t\t\taction: \"Display\"\n\t\t\t\t},\n\t\t\t\tparams : { \"someID\" : \"102343333\"}\n\t\t\t})) || \"\"; \n\t\t\t//Generate a  URL for the second application\n\t\t\tvar url = window.location.href.split('#')[0] + hash; \n\t\t\t//Navigate to second app\n\t\t\tsap.m.URLHelper.redirect(url, true); \n\t\t}\n\n\t});\n\n});",
		"touchbase/demo/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"touchbase/demo/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"touchbase.demo.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n\n});",
		"touchbase/demo/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n\n});"
	}
});