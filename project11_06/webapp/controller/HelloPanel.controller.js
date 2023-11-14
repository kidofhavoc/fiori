sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("project1106.controller.HelloPanel", {
            onInit: function () {

            },
            ripandtear: function () {
                var oDialog = sap.ui.getCore().byId("idDialog");
                if(!oDialog) {
                    Fragment.load({
                    name : 'project1106.view.fragment.Dialog',
                    type : 'XML',
                    controller : this
                    }).then(function(oDialog) {
                    oDialog.open();
                    })
                }else {
                    oDialog.open()
                };
                    
                
           
            
            },
            onClose : function() {
                var oDialog = sap.ui.getCore().byId("idDialog")
                oDialog.close();
            }
        });

    });
