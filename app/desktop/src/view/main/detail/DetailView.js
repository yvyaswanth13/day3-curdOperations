Ext.define('ModernApp.view.Main', {
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
  
  });