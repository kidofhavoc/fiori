sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("poorderview.poorderview.controller.main", {
        onInit: function () {
            // 모델 가져오기
            var oModel = this.getView().getModel();

            if (oModel) {
                // 모델에 바인딩된 데이터 가져오기
                var oData = oModel.getProperty("/POinnerSet");

                // 상태값이 2 또는 3인 엔티티 필터링
                var aFilteredData = oData.filter(function (oEntry) {
                    return oEntry.Mmstaflag !== "2" && oEntry.Mmstaflag !== "3";
                });

                // 필터링된 데이터를 모델에 다시 설정
                oModel.setProperty("/POinnerSet", aFilteredData);
            } else {
                console.error("Model not found");
            }
        }
    });
});
