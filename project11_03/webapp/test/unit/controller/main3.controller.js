/*global QUnit*/

sap.ui.define([
	"project11_03/controller/main3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("main3 Controller");

	QUnit.test("I should test the main3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
