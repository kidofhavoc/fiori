sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, Filter) {
        "use strict";

        return Controller.extend("odata.project1107.controller.View7", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    CustomerID : ''
                })
                this.getView().setModel(oModel, "main")
            },
            fnDateToString: function (value) {
                // debugger
                if(value){
                var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern : 'yyyy-MM-dd'
                });
                return oFormat.format(value);
            }
            },
            fnFreightSum: function(via, freight){
                if(via && freight) {
                    // debugger
                    return via * Number(freight)

                }
            },
            onValueHelp: function(){
            // debugger
            Customer.fragment.xml    
            },
            ripandtear: function(){
                var oDialog = this.byId("idDialog");
                var oModel = this.getView().getModel()
 
             if(!oDialog){
                 Fragment.load({
                     name:'odata.project1107.view.fragment.dialog',
                     type: 'XML',
                     controller: this
                 }).then(function(oDialog){
                     oDialog.open();
                 });
             }else{
                 oDialog.open();
             }},
            
             onClose:function(){
                // debugger
                 var oDialog=this.byId('idDialog');
                 oDialog.close();

            
                
           
            
            },
            onSearch: function () {
                // debugger;
                var oData = this.getView().getModel("main").getData(); //{CustomerID : ''}
                var aFilter = [];
                
                if(oData.CustomerID){
                    // var oFilter = new Filter({
                    //     path : 'CustomerID',    // 필터 대상 필드 이름
                    //     operator : 'EQ',        // 조건 (EQ, NE, GT, GE, BT, ...)
                    //     value1 : oData.CustomerID,            //From값
                    //     value2 : ''             //To값
                    // }); 1번

                    // var oFilter = new Filter('CustomerID', 'EQ', oData.CustomerID) 2번 + push(oFilter)

                    aFilter.push(new Filter('CustomerID', 'EQ', oData.CustomerID)); //3번
                }
                if(oData.OrderDateFrom){
                    aFilter.push(new Filter('OrderDate', 'BT', oData.OrderDateFrom , oData.OrderDateTo));
                }
                
                /*
                    OrderDate 필드에 대하여 필터 구현
                    날짜 형태이며 From, To 값을 넣고 From ~ To 사이의 날짜를 조회할 수 있다.

                */

                this.byId("idTable").getBinding("items").filter(aFilter);
            },
            onRowSelectonChange : function(oEvent){
                // var sPath = oEvent.getParameters().rowContext.getPath()
                // var obj = this.getView().getModel().getProperty(sPath)

                // var obj = oEvent.getParameters().rowContext.getObject()
                // debugger
                var obj = oEvent.getParameters().rowContext.getObject()
                obj.CustomerID

                this.byId("idCustClose").fireEvent('press')
                this.getView().getModel('json').setProperty("/CustomerID",obj.CustomerID)
            },
            onNavDetail : function(oEvent2){
                debugger
                var oRouter = this.getOwnerComponent().getRouter()
                oRouter.navTo("RouteDetail", {
                    OrderID : oEvent2,
                    option : 123
                })
            },
            onSelectionChange : function(oEvent) {
                var obj = oEvent.getParameters().listItem.getBindingContext();
                obj.getProperty().OrderID
                this.onNavDetail(obj.getProperty().OrderID)
            }
        });
    });
