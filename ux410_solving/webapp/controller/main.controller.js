sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("sap.btp.ux410solving.controller.main", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    list : [
                      { a  : "bar" },
                      { a  : "column" },
                      { a  : "line" },
                      { a  : "donut" }
                    ]
                })
                this.getView().setModel(oModel, "typelist")
            },
            onSearch: function () {
                debugger
                var oData = this.getView().byId("comboBox1").getValue()
                var oData2 = this.getView().byId("comboBox2").getValue()
                var oviztype 
                var oFilter = []

                if(oData){
                    oFilter.push(new Filter('OrderID', 'EQ', oData));
                }

                if(!oData2){
                    oData2.setValueState('Error');
                  }else{
                    var oVizFrame = this.getView().byId("idVizFrame");
                    oVizFrame.setVizType(oData2);
                    this.byId("Dataset").getBinding("data").filter(oFilter);
                  }

            }
        });
    });
