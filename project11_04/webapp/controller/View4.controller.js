sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1104.controller.View4", {
            onInit: function () {
                var oDate = { name : {
                    firstname : '퍼네임',
                    lastname : '라네임'
                } };// 제이슨 데이터
                
                var oModel = new JSONModel(oDate);// 제이슨 모델

                this.getView().setModel(oModel, 'main');

                var oDate = {
                     inpvalue : {
                                    firstname : 'park',
                                    lastname : 'gildong'
                },
                list : [
                    {name : '마샬', age : 20 , tel: '010-4445-1312'},
                    {name : '팬텀', age : 30, tel: '010-2341-1111'},
                    {name : '오퍼레이터', age : 33, tel: '010-6666-2222'}
                ]
                
             };// 제이슨 데이터
                
                var oModel2 = new JSONModel(oDate);// 제이슨 모델

                this.getView().setModel(oModel2, 'test');


            },
            onClick : function(oEvent) {
                debugger; //개발자 도구 켜져있어야 실행됨
                var oModel = this.getView().getModel("test");
                //oModel.getData()           :전체 데이터 가져오기
                //oModel.getProperty(경로)   :특정 데이터 가져오기
                var oData = oModel.getProperty("/aaaa");
                // var oData = oModel.getData();
                console.log(oData);

                oModel.setProperty("/txtValue", oData);
            },
            gunzin : function(oEvent) {
                // debugger;
                var oModel = this.getView().getModel("test");
                var oData = oModel.getProperty("/list");
                oData.push({name:'', age:'',tel:''});

                oModel.setProperty("/list",oData);

                
                console.log(oData);
                
            },
            gunzin1 : function(oEvent) {
                var oModel = this.getView().getModel("test");
                var oData = oModel.getProperty("/list");
                oData.pop(); 
                oModel.setProperty("/list",oData);
                
                
                console.log(oData);
                
            },
            gunzin2 : function(oEvent) {
                // oEvent.getParameter('row').getBingingContext('main')
                var iIndex = oEvent.getParameter('row').getIndex();

                var oModel = this.getView().getModel('test'),
                aList = oModel.getData().list;

                aList.splice(iIndex, 1);
                oModel.setProperty("/list",aList);
            },
            onDelete: function() {
                var oTable = this.byId("idTable"),
                aIndices = oTable.getSelectedIndices(),
                aList = this.getView().getModel("test").getProperty("/list")
                if(!aIndices.length) { //값이 없음을 탐지하는 로직
                    return sap.m.MessageBox.error("공허하다");
                }
                debugger;
                for(var i=aIndices.length-1; i>=0; i--) {
                    aList.splice(aIndices[i], 1);
                }
                
                this.getView().getModel("test").setProperty("/list",aList);
            }
        });
    });
