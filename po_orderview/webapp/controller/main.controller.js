sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, Fragment, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("poorderview.poorderview.controller.main", {
        onInit: function () {
            // 초기화 시 필요한 작업 수행
        },

        onVendorCodePress: function() {
            // 모델 초기화
            var oModel = new sap.ui.model.odata.v2.ODataModel("your_service_url", true);

            // 다이얼로그 표시
            this._showGraph(oModel);
        },
        
        _showGraph: function(oModel){
            if (!this._oDialog) {
                Fragment.load({
                    name: "poorderview.poorderview.view.QuickViewCard",
                    controller: this
                }).then(function(oDialog){
                    this._oDialog = oDialog;
                    this.getView().addDependent(this._oDialog);

                    // 데이터 바인딩 함수 호출
                    this._bindCardData(oModel);

                    this._oDialog.open();
                }.bind(this));
            } else {
                this._oDialog.open();
            }
        },

        _bindCardData: function(oModel) {
            // 데이터 바인딩 로직
            var sVenCod = "VEN00001"; // 예시로 고정값 사용
            oModel.read("/vdcdsvSet('" + sVenCod + "')", {
                success: function(oData) {
                    // 데이터를 프래그먼트에 바인딩
                    var oCardModel = new sap.ui.model.json.JSONModel(oData);
                    this._oDialog.setModel(oCardModel, "oModel");
                }.bind(this),
                error: function(oError) {
                    MessageToast.show("Error reading OData service");
                }
            });
        },

        backToTheList: function () {
            if (this._oDialog) {
                this._oDialog.close();
            }
        }
    });
});
