Ext.define("Project.controller.widget.switchAppBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			switchAppBtn : "switchAppBtn",
		},
		control : {},
	},
	launch : function () {
		this.getSwitchAppBtn().addListener({
			tap : {
				fn : function () {
					Ext.getStore("appListStore").load();
					DoSwitch("switchApp");
				},
				element : "element",
			},
		});
	},
});
