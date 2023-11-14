sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("sap.btp.ux400solving.controller.Main", {
            onInit: function () {
                var oData = {rows:[ ]}
                var oModel = new JSONModel(oData)
                this.getView().setModel(oModel,"list");
            },
            
            onRandomPress: function(oEvent) {
                debugger
                var value = Math.floor(Math.random() * 100) + 1;
                this.byId("Rinput").setValue(value);

                let oModel = this.getView().getModel('list');
                let oData = this.getView().getModel('list').getProperty("/rows");

                oData.unshift({text : value});  
                oModel.setProperty("/rows", oData);
                
            },

            Listview: function() {
                debugger
                var oDialog = sap.ui.getCore().byId("idDialog")
                var oModel = this.getView().getModel()
                
                if(!oDialog){
                Fragment.load({
                    name: 'sap.btp.ux400solving.view.fragment.products',
                    type: 'XML',
                    controller: this

                }).then(function(oDialog){
                    oDialog.setModel(oModel)
                    oDialog.open()
                })
            }else{oDialog.open()}
            },
            onClose: function(){
                // debugger
                var oDialog=sap.ui.getCore().byId('idDialog')
                oDialog.close()

            },
            _typeToString: function(value) {
                return value ? 'Yes' : 'No';
            },
            //formatter 함수
            formatter : {
                transformDiscontinued : function(value) {
                    // debugger;
                    return this._typeToString(value);
                    // return value ? 'Yes' : 'No';
                }
            },
            onValueChange:function(oEvent) {
                debugger;
                var value = this.byId("Rinput").getValue(); // "0"
                // var value = this.byId("Rinput");
                value = Number(value);

                if (value === 0 || value >= 100){
                    alert("0 초과, 100 이하의 값만 입력 가능합니다")
                }else{
                    let oModel = this.getView().getModel('list');
                    let oData = this.getView().getModel('list').getProperty("/rows");
    
                    oData.unshift({text : value});  
                    oModel.setProperty("/rows", oData);
                }

            }
        });
    });
