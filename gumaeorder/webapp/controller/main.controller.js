sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("gumaeorder.gumaeorder.controller.main", {
            onInit: function () {
                var oData = {list : [
                    {name : '김건진', test :'2'},
                    {name : '신예솔', test :'9'},
                    {name : '안은솔', test :'10'},
                    {name : '안재홍', test :'11'},
                    {name : '임지윤', test :'15'},
                    {name : '정한식', test :'17'},
                    {name : '하소명', test :'20'},
                ]}
                var oModel = new JSONModel(oData)
                this.getView().setModel(oModel, 'test')
            }
        });
    });
