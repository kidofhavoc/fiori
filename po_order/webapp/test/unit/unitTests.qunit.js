/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"po_order/po_order/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
