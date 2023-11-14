sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/Filter"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, Filter) {
        "use strict";

        return Controller.extend("odata.project1107.controller.Detail", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter()
                oRouter.getRoute('RouteDetail').attachPatternMatched(this._patternMatched, this)


    },
    //라우터 패턴이 "일치할때마다" 실행
        _patternMatched: function(oEvent) {
            // debugger
            //이벤트 객체의 파라미터 정보에 아규먼트에서 넘겨받은 데이터 확인
            var oArgu = oEvent.getParameters().arguments
            //oArgu => {OrderID : 'hihi', option : 123}
            this.byId("detail").setTitle(oArgu.OrderID)

            this.getView().bindElement(`/Orders(${oArgu.OrderID})`)

            this.getView().getModel().read("/Orders",{
                success: function(oReturn){
                    // debugger
                    
                }
            })
    },
    onBack: function() {
        // debugger
        var oHistory = History.getInstance()
        var spreviousHash = oHistory.getPreviousHash()

        if(spreviousHash !== undefined){
            window.history.go(-1)

        }else{
            var oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("RouteView7",{})
        }
    }
    ,
    OnRead: function() {
        var oDataModel = this.getView().getModel()
        var oFilter = new Filter("CustomerID","EQ","VINET")

        oDataModel.read("/Orders",{
            filters : [oFilter],
            success : function(oReturn){
                debugger
                oReturn.results
            }
        })
    }
})
    
})
//

