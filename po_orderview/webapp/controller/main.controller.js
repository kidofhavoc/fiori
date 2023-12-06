sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel", 
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, JSONModel, Fragment, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("poorderview.poorderview.controller.main", {
        onInit: function () {
            var oData = {vdcdsvSet:[]}
            var oModel = new JSONModel(oData)
            this.getView().setModel(oModel, "main");
        },

        onVendorCodePress: function(oEvent){
            var oModel  = this.getView().getModel();
            var sPath = oEvent.getSource().getParent().getBindingContextPath();
            var oRow = oModel.getProperty(sPath);
            var path = oModel.createKey("/vdcdsvSet", {
                VenCod : oRow.VenCod
            });

            oModel.read(path, {
                success: function(oReturn) {
                    this._openDialog(oReturn);
                }.bind(this)
            })

        },

        _openDialog: function(oVendor) {

            var oDialog = sap.ui.getCore().byId("detailDialog");
            if (!oDialog) { 
                Fragment.load({
                    name: "poorderview.poorderview.view.QuickViewCard",
                    type : 'XML',
                    controller : this
                }).then(function(oDialog){
                    oDialog.setModel(new JSONModel(oVendor), 'vendor');
                    oDialog.open();
                });
            }else{
                oDialog.getModel('vendor').setData(oVendor);
                oDialog.open();
            }
        },

        onApproval: function(oEvent) {
            var sPath = oEvent.getSource().getParent().getBindingContextPath();
            var oDataModel = this.getView().getModel();
            var oRow = oDataModel.getProperty(sPath);
            var oBody = {
                "Mmstaflag": "1"
            };
        
            MessageBox.confirm(
                "승인하시겠습니까?",
                {
                    onClose: function (oAction) {
                        if (oAction === MessageBox.Action.OK) {
                            var sUpdatePath = oDataModel.createKey("/POHeaderSet", {
                                PoNum: oRow.PoNum
                            });
        
                            oDataModel.update(sUpdatePath, oBody, {
                                success: function (oReturn) {
                                    console.log("성공! ", oReturn);
                                    oDataModel.refresh(true);
                                    sap.m.MessageToast.show("승인하였습니다.");
                                },
                                error: function (oError) {
                                }
                            });
                        }
                    }
                }
            );
        },

        backToTheList: function(oEvent) {
            oEvent.getSource().getParent().close();
        }
    });
});
