sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FlattenedDataset, FeedItem) {
        "use strict";

        return Controller.extend("project1109.controller.View9", {
            onInit: function () {
                this._setChartInView()
                this._setChartInController()
               

                },
        _setChartInView: function() {
            var oModel = new JSONModel()
            oModel.loadData("../model/List.json")
            this.getView().setModel(oModel,'view')
        },
        _setChartInController: function(){
            var oModel = new JSONModel()
            oModel.loadData("../model/Sales.json")
            this.getView().setModel(oModel,"cont")

            var oChart = this.byId('idChart')

            var oDataSet = new FlattenedDataset({
                dimensions: [
                    {name : 'Product', value : '{cont>product}' }
                ],
                measures: [
                    {name : 'Amount', value : '{cont>amount}' }
                ],
                data: {path : 'cont>/sales'}
            })
            oChart.setDataset(oDataSet)
            var feedValueAxis = new FeedItem({
                uid : "valueAxis",
                type : "Measure",
                values : ["Amount"]
            })
            var feedCategoryAxis = new FeedItem({
                uid : "categoryAxis",
                type : "Dimension",
                values : ["Product"]
            })
            oChart.addFeed(feedValueAxis)
            oChart.addFeed(feedCategoryAxis)
        } 
            });
            
        })
