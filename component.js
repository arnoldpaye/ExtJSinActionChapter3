var panel1 = {
    xtype: 'panel',
    title: 'Plain Panel',
    html: 'Panel with an xtype specified'
};

var panel2 = {
    title: 'Plain Panel 2',
    html: 'Panel with <b>no</b> xtype specified'
} ;

Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        width: 200,
        height: 150,
        title: 'Accordion window',
        border: false,
        layout: {
            type: 'accordion',
            animate: true
        },
        items: [
            panel1,
            panel2
        ]
    }).show();
});