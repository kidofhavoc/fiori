sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("exam.exprogram11.controller.Main", {
            onInit: function () {

            },
            oSearch: function () { 
                debugger
                var oData = this.byId(input1)
            }
        });
    });
