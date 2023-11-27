/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"po_orderview/po_orderview/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
