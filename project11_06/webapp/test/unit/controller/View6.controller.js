/*global QUnit*/

sap.ui.define([
	"project11_06/controller/View6.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View6 Controller");

	QUnit.test("I should test the View6 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
