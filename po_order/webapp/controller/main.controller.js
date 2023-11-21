sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, MessageToast) {
        "use strict";

        return Controller.extend("poorder.poorder.controller.main", {
            onInit: function () {
                var oData = {POinnerSet :[ ]}
                var oModel = new JSONModel(oData)
                this.getView().setModel(oModel, 'test')
            },

            onSelectionChange: function () {
                // debugger;
                var oComboBox = this.getView().byId("comboBox1");
                var oSelectedItem = oComboBox.getSelectedItem();
                var oSelectedKey = oSelectedItem ? oSelectedItem.getKey() : null;
                var oFilter = [];
                
                var oTable = this.getView().byId("Table1");
                var oBinding = oTable.getBinding("rows");
            
                if (oSelectedKey) {
                    oFilter.push(new Filter('Mtname', 'EQ', oSelectedKey));
                    oBinding.filter(oFilter);
                } else {
                    oBinding.filter([]);
                }
                
            },
            handleDetailsPress: function() {
                this._showGraph()
            },

            _showGraph: function(){
                if(!this._oDialog){
                    this._oDialog = sap.ui.xmlfragment("gumaeorder.gumaeorder.view.fragment.dialog", this);
                    this.getView().addDependent(this._oDialog);
                }
                this._oDialog.open();
            },
            backToTheList: function () {
                if (this._oDialog) {
                    this._oDialog.close();
                }
            }
            
        });
    });
