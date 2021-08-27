var store = Ext.create('Ext.data.Store', {
	fields: ['name', 'progress'],
	data: [
		{ name: 'Test 1', progress: 0.10 },
		{ name: 'Test 2', progress: 0.23 },
		{ name: 'Test 3', progress: 0.86 },
		{ name: 'Test 4', progress: 0.31 }
	]
});

var grid1 = Ext.create({
	xtype: 'grid',
	title: 'Widget Column Demo',
	store: store,

	columns: [{
		text: 'Test Number',
		dataIndex: 'name',
		width: 100
	},{
      //  xtype: 'widgetcolumn',
        text: 'Progress',
        width: 120,
        dataIndex: 'progress',
        widget: {
            xtype: 'progressbarwidget',
            textTpl: '{value:percent}'
        }
    }],

	width: 220,
	height: 250,
});

Ext.define('ModernApp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	extend: 'Ext.grid.Grid',
title: 'Businesses',

columns: [
    { xtype: 'rownumberer', width: 55},
    { text: 'Name',  dataIndex: 'name', flex : 2},
    { text: 'Address', dataIndex: 'full_address', flex : 3  },
    { text: 'City', dataIndex: 'city', flex: 1 }
],

store: {
    type: 'virtual',
    pageSize: 200,
    proxy : { type : 'ajax', url : '//nameless-tundra-27404.herokuapp.com/go/?fn=bigdata', reader : { type : 'json', rootProperty : 'data' } },
    autoLoad: true
}
//	items:[grid1]
	// items: [{
	// 	xtype: 'panel',
	// 	viewModel: {
	// 		type: 'test'
	// 	},
	// 	fullscreen: true,
	// 	// layout: 'hbox',
	// 	defaultType: 'textfield',
	// 	defaults: {
	// 		flex: 1
	// 	},
	// 	items: [{
	// 		html: 'User Form',
	// 		style: 'background-color: white'
	// 	},
	// 	{
	// 		fieldLabel: 'First Name',
	// 		name: 'firstName',
	// 		bind: '{firstName}'
	// 	},
	// 	{
	// 		fieldLabel: 'Last Name',
	// 		name: 'lastName'
	// 	},
	// 	{
	// 		xtype: 'datefield',
	// 		fieldLabel: 'Date of Birth',
	// 		name: 'birthDate',
	// 		msgTarget: 'under', // location of the error message
	// 		invalidText: '"{0}" bad. "{1}" good.' // custom error message text
	// 	},
	// 	{
	// 		xtype: 'button',
	// 		text: 'Save',
	// 		handler: function () {
	// 			//DELETE
	// 			// Ext.Ajax.request({
	// 			// 	url: 'http://localhost:3000/posts/3',
	// 			// 	method: 'DELETE',
	// 			// 	success: function (response) {
	// 			// 		Ext.Msg.alert(response);
	// 			// 	},
	// 			// 	failure: function (response) {
	// 			// 		Ext.Msg.alert(response);
	// 			// 	}
	// 			// });
	// 			Ext.Ajax.request({
	// 				url: 'http://localhost:3000/posts',
	// 				method: 'POST',
	// 				jsonData: {
	// 					name: 'Pariwesh'
	// 				},
	// 				success: function (response) {
	// 					Ext.Msg.alert(response);
	// 				},
	// 				failure: function (response) {
	// 					Ext.Msg.alert(response);
	// 				}
	// 			});

	// 			// Ext.Ajax.request({
	// 			// 	url: 'http://localhost:3000/posts',
	// 			// 	success: function (response){
	// 			// 		const responseBody = Ext.decode(response.responseText)
	// 			// 		console.log(responseBody);
	// 			// 	}
	// 			// })
	// 		}
	// 	}
	// 	]
	// }]
});