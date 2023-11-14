sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";
         var oModel22;
        return Controller.extend("project1103.controller.main3", {
            onInit: function () {

                // this.byId("int1").setValue("10");
                // this.byId("int2").setValue("20")
                // var oModel = new JSONModel();
                // this.getView().setModel(oModel,'main')

                var oData ={
                    list : [
                        
                    ]
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, 'main');
                oModel22 = oModel;

                var oModel2 = new JSONModel({
                    combo : [
                        {key: '+', text:'+'},
                        {key: '-', text:'-'},
                        {key: '*', text:'*'},
                        {key: '/', text:'/'},

                    ],
                    history:[]
                })
                this.getView().setModel(oModel2);
            },
             
            
            on : function() {
                // var oselect = this.getView().byid("idselect");
                var int1 = this.getView().byId("int1");
                var int2 = this.getView().byId("int2");
                var op = this.getView().byId("idselect");
                var result;

                var num1 = parseInt(int1.getValue());
                var num2 = parseInt(int2.getValue());
                var opgg = op.getSelectedItem().getText();

                switch(opgg){

                case "+":
            
                result = num1 + num2;
                // alert(result);
                break;

                case "-":
                result = num1 - num2;
                // alert(result);
                break;

                case "*":
                result = num1 * num2;
                // alert(result);
                break;

                case "/":
                result = num1 / num2;
                // alert(result);
                break;
            
            }
            debugger
            var iResult = { num1 : num1 , opgg : opgg, num2 : num2, result : result}
            // var oData = oModel22.getProperty("/list");
            // oData.unshift({
            //     num1,
            //     opgg,
            //     num2,
            //     result,
            // });
            // oModel22.setProperty("/list",oData);

                this._addHistory(iResult,result);
            },
        _addHistory: function(result) {
           //  인풋 셀렉트 인풋값과 리설트값을 사용해서 테이블에 값 추가 이때 객체에 들어가는 키값 fnum lnum result
           let oModel = this.getView().getModel();
           let oData = this.getView().getModel().getProperty("/history");

           oData.unshift(result);
           oModel.setProperty("/history", oData);
        }
        });
    });


