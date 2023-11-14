/*global QUnit*/

sap.ui.define([
	"project11_05/controller/View5.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View5 Controller");

	QUnit.test("I should test the View5 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
