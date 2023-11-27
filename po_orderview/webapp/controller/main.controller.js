sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("poorderview.poorderview.controller.main", {

        onVendorCodePress: function(oEvent) {
            debugger;
            var sVendorCode = oEvent.getSource().getProperty("text");
            MessageBox.show("Selected Vendor Code: " + sVendorCode);
        }
    });
});