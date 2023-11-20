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

        return Controller.extend("gumaeorder.gumaeorder.controller.main", {
            onInit: function () {
                var oData = {list : [
                    {name : '김건진', test :'2', test2 :'20'},
                    {name : '신예솔', test :'9', test2 :'90'},
                    {name : '안은솔', test :'10', test2 :'300'},
                    {name : '안재홍', test :'11', test2 :'110'},
                    {name : '임지윤', test :'15', test2 :'150'},
                    {name : '정한식', test :'17', test2 :'170'},
                    {name : '하소명', test :'20', test2 :'200'},
                ]}
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
                    oFilter.push(new Filter('name', 'EQ', oSelectedKey));
                    oBinding.filter(oFilter);
                } else {
                    oBinding.filter([]);
                }
                
            },
            handleDetailsPress: function() {
                MessageToast.show("이제 이걸 누르면 다이얼로그 박스 나오면서 그래프 보여줘야함");
            }
            
        });
    });
