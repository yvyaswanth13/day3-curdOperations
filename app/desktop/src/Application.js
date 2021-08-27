// Ext.application({
// 	name: 'MyApp',
// 	mainView: 'MyApp.view.Main'
// 	});
// 	Ext.define('MyApp.view.Main', {
// 		extend: 'Ext.grid.Grid',
// 		title: 'Businesses',
		
// 		columns: [
// 			{ xtype: 'rownumberer', width: 55},
// 			{ text: 'Name',  dataIndex: 'name', flex : 2},
// 			{ text: 'Address', dataIndex: 'full_address', flex : 3  },
// 			{ text: 'City', dataIndex: 'city', flex: 1 }
// 		],
		
// 		store: {
// 			type: 'virtual',
// 			pageSize: 200,
// 			proxy : { type : 'ajax', url : '//nameless-tundra-27404.herokuapp.com/go/?fn=bigdata', reader : { type : 'json', rootProperty : 'data' } },
// 			autoLoad: true
// 		}
		
// 		});
Ext.define('ModernApp.Application', {
	extend: 'Ext.app.Application',
	name: 'ModernApp',
	requires: ['ModernApp.*'],
	defaultToken: 'homeview',

		
	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
