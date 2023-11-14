/*global QUnit*/

sap.ui.define([
	"project11_09/controller/View9.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View9 Controller");

	QUnit.test("I should test the View9 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
