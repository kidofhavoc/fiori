sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Button"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Button) {
        "use strict";

        return Controller.extend("project1102.controller.main", {

            TEXT : {
                'firstname' : 'A',
                'lastname' : 'H1Z1'
             },

            onInit: function () {
              var sText = this.TEXT.firstname;

              console.log(sText);

            },

            onClick: function(oEvent) {

            },

            onChange: function() {
              var oInput = this.getView().byId("idInput");

            //   console.log(oInput.getValue());

              var oTEXT = this.getView().byId("otext");
              oTEXT.setText(oInput.getValue());
            }
        });
    });
