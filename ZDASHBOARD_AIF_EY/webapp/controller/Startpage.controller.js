sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat",
	"sap/base/strings/formatMessage"
	
], function (Controller, JSONModel, NumberFormat, formatMessage) {
	"use strict";
	
	var oInitSettings = {
		"SourceColor" : "Critical",
		"SLTColor" : "Critical",
		"DestinationColor" : "Critical"
	};
	
		var oInitSettings2 = {
		"SourceColor" : "Critical",
		"SLTColor" : "Critical",
		"DestinationColor" : "Critical"
	};
	
		var oInitSettings3 = {
		"SourceColor" : "Critical",
		"SLTColor" : "Critical",
		"DestinationColor" : "Critical"
	};
	
	
		var oFinishSettings = {
		"SourceColor" : "",
		"SLTColor" : "",
		"DestinationColor" : ""
	};
	
		var oFinishSettings2 = {
		"SourceColor" : "",
		"SLTColor" : "",
		"DestinationColor" : ""
	};
	
		var oFinishSettings3 = {
		"SourceColor" : "",
		"SLTColor" : "",
		"DestinationColor" : ""
	};

	return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.11.controller.Startpage", {
		onInit: function () {
			
			var pThis = this;
			
			//Variables globales a la vista
			this.fnInitSettingsView(this.getView());

			var oModel = this.getOwnerComponent().getModel("aiferrors");
			this.getView().setModel(oModel);
			
			var vizFrame = this.getView().byId("idVizFrame");
			vizFrame.getDataset().bindData({path:"/cobe_graf_pointSet"});
			
			var vizFrame2 = this.getView().byId("idVizFrame2");
			vizFrame2.getDataset().bindData({path:"/daba_graf_pointSet"});
			
			var vizFrame3 = this.getView().byId("idVizFrame3");
			vizFrame3.getDataset().bindData({path:"/dauf_graf_pointSet"});

			//var Tile = this.getView().byId("cobe_graf_barSet");
			var mc = this.getView().byId("mcChart1");
			var mc2 = this.getView().byId("mcChart2");
			var mc3 = this.getView().byId("mcChart3");
			var mc4 = this.getView().byId("filter1");
			var File = {
				"FileData": [],
				"FileData2": [],
				"FileData3":[]
			};	
			
			var states = {
				"state1": [],
				"state2": [],
				"state3":[]
			};	

			var filters = [];
		//	var results = [];
			var jsnModel = new sap.ui.model.json.JSONModel();
			//var omodels = new sap.ui.model.json.JSONModel();

			oModel.read("/cobe_graf_barSet", {
					filters: filters,
					success: function (oData, oResponse) {
						if (oData.results.length !== 0) {
							for (var i = 0; i < oData.results.length; i++) {
								var List = {
									"errortype": oData.results[i].Title,
									"errors": parseFloat(oData.results[i].Value),
									"color": oData.results[i].Color
								};
								File.FileData.push(List);
							}
							jsnModel.setData(File);
							mc.setModel(jsnModel);
							mc.getBinding("data").sPath = "/FileData";
							//omodels.setData(results);
						}
					},
					error: function (oError) {
						sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
							MessageBox.show(
								"This message should appear in the message box.", {
									icon: MessageBox.Icon.INFORMATION,
									title: "My message box title",
									actions: [MessageBox.Action.YES, MessageBox.Action.NO]
								}
							);
						});
					}
				}
			);
			
			oModel.read("/daba_graf_barSet", {
					filters: filters,
					success: function (oData, oResponse) {
						if (oData.results.length !== 0) {
							for (var i = 0; i < oData.results.length; i++) {
								var daba_graf_bar = {
									"errortype": oData.results[i].Title,
									"errors": parseFloat(oData.results[i].Value),
									"color": oData.results[i].Color
								};
								File.FileData2.push(daba_graf_bar);
							}
							jsnModel.setData(File);
							mc2.setModel(jsnModel);
							mc2.getBinding("data").sPath = "/FileData2";
							//omodels.setData(results);
						}
					},
					error: function (oError) {
						sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
							MessageBox.show(
								"This message should appear in the message box.", {
									icon: MessageBox.Icon.INFORMATION,
									title: "My message box title",
									actions: [MessageBox.Action.YES, MessageBox.Action.NO]
								}
							);
						});
						//alert(msg)
						//			MessageBox.error("Error");
					}
				}

			);
			
					oModel.read("/dauf_graf_barSet", {
					filters: filters,
					success: function (oData, oResponse) {
						if (oData.results.length !== 0) {
							for (var i = 0; i < oData.results.length; i++) {
								var dauf_graf_bar = {
									"errortype": oData.results[i].Title,
									"errors": parseFloat(oData.results[i].Value),
									"color": oData.results[i].Color
								};
								File.FileData3.push(dauf_graf_bar);
							}
							jsnModel.setData(File);
							mc3.setModel(jsnModel);
							mc3.getBinding("data").sPath = "/FileData3";
							//omodels.setData(results);
						}
					},
					error: function (oError) {
						sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
							MessageBox.show(
								"This message should appear in the message box.", {
									icon: MessageBox.Icon.INFORMATION,
									title: "My message box title",
									actions: [MessageBox.Action.YES, MessageBox.Action.NO]
								}
							);
						});
						//alert(msg)
						//			MessageBox.error("Error");
					}
				}

			);
			
			oModel.read("/cobe_graf_pointSet", {
				filters: filters,
				success: function (oData, oResponse) {
					if (oData.results.length !== 0) {
						for (var i = 0; i < oData.results.length; i++) {
							var List2 = {
								"X": oData.results[i].X,
								"Y": parseFloat(oData.results[i].Y)
							};
							File.FileData.push(List2);
						}
						jsnModel.setData(File);
						mc.setModel(jsnModel);
						//omodels.setData(results);
					}
				},
				error: function (oError) {
					sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
						MessageBox.show(
							"This message should appear in the message box.", {
								icon: MessageBox.Icon.INFORMATION,
								title: "My message box title",
								actions: [MessageBox.Action.YES, MessageBox.Action.NO]
							}
						);
					});
				}
			});
			
			oModel.read("/dauf_state_serverSet", {
					filters: filters,
					success: function (oData, oResponse) {
						if (oData.results.length !== 0) {
							for (var i = 0; i < oData.results.length; i++) {
								var oViewSettingsModel = pThis.getView().getModel("viewSettings");
								oViewSettingsModel.setProperty("/SourceColor", oData.results[i].Source);
								oViewSettingsModel.setProperty("/SLTColor", oData.results[i].Slt);
								oViewSettingsModel.setProperty("/DestinationColor", oData.results[i].Destination);
							}
						}
					},
					error: function (oError) {
						sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
							MessageBox.show({
//								"This message should appear in the message box.", {
									icon: MessageBox.Icon.INFORMATION,
									title: "My message box title",
									actions: [MessageBox.Action.YES, MessageBox.Action.NO]
								}
							);
						});
					}
				}
			);

			oModel.read("/cobe_state_serverSet", {
					filters: filters,
					success: function (oData, oResponse) {
						if (oData.results.length !== 0) {
							for (var i = 0; i < oData.results.length; i++) {
								var oViewSettingsModel2 = pThis.getView().getModel("viewSettings");
								oViewSettingsModel2.setProperty("/SourceColor", oData.results[i].Source);
								oViewSettingsModel2.setProperty("/SLTColor", oData.results[i].Slt);
								oViewSettingsModel2.setProperty("/DestinationColor", oData.results[i].Destination);
							}
						}
					},
					error: function (oError) {
						sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
							MessageBox.show({
//								"This message should appear in the message box.", {
									icon: MessageBox.Icon.INFORMATION,
									title: "My message box title",
									actions: [MessageBox.Action.YES, MessageBox.Action.NO]
								}
							);
						});
					}
				}
			);
			
//					oModel.read("/cobe_state_serverSet", {
//					filters: filters,
//					success: function (oData, oResponse) {
//						if (oData.results.length !== 0) {
//							for (var i = 0; i < oData.results.length; i++) {
//								var cobega_state = {
//									"SourceColor": oData.result[i].SourceColor,
//									"SLTColor": oData.result[i].SLTColor,
//									"DestinationColor": oData.result[i].DestinationColor
//								};
//								states.state1.push(cobega_state);
//							}	
//							jsnModel.setData(states);
//							mc4.setModel(jsnModel);
//							mc4.getBinding("data").sPath = "/FileData2";
//						}
//					},
//					error: function (oError) {
//						sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
//							MessageBox.show({
////								"This message should appear in the message box.", {
//									icon: MessageBox.Icon.INFORMATION,
//									title: "My message box title",
//									actions: [MessageBox.Action.YES, MessageBox.Action.NO]
//								}
//							);
//						});
//					}
//				}
//			);
			
						oModel.read("/daba_state_serverSet", {
					filters: filters,
					success: function (oData, oResponse) {
						if (oData.results.length !== 0) {
							for (var i = 0; i < oData.results.length; i++) {
								var oViewSettingsModel3 = pThis.getView().getModel("viewSettings");
								oViewSettingsModel3.setProperty("/SourceColor", oData.results[i].Source);
								oViewSettingsModel3.setProperty("/SLTColor", oData.results[i].Slt);
								oViewSettingsModel3.setProperty("/DestinationColor", oData.results[i].Destination);
							}
						}
					},
					error: function (oError) {
						sap.ui.define(["sap/m/MessageBox"], function (MessageBox) {
							MessageBox.show({
//								"This message should appear in the message box.", {
									icon: MessageBox.Icon.INFORMATION,
									title: "My message box title",
									actions: [MessageBox.Action.YES, MessageBox.Action.NO]
								}
							);
						});
					}
				}
			);
			
		},

		formatMessage: formatMessage,

		onNavToProcessFlow: function () {
			this.getRouter().navTo("processFlow");
		},

		getRouter: function () {
			return this.getOwnerComponent().getRouter();
		},
		
		fnInitSettingsView: function(oView){
			var oModelViewSettings = new sap.ui.model.json.JSONModel(); 
			var sInitSettings = JSON.stringify(oInitSettings).replace(/â‚¬/g,'€'); 
			oInitSettings = JSON.parse(sInitSettings);
			oModelViewSettings.setData(oInitSettings);
			oView.setModel(oModelViewSettings, "viewSettings");
		},
		
		fnInitSettingsView2: function(oView){
			var oModelViewSettings2 = new sap.ui.model.json.JSONModel(); 
			var sInitSettings2 = JSON.stringify(oInitSettings2).replace(/â‚¬/g,'€'); 
			oInitSettings2 = JSON.parse(sInitSettings2);
			oModelViewSettings2.setData(oInitSettings2);
			oView.setModel(oModelViewSettings2, "viewSettings");
		},

		fnInitSettingsView3: function(oView){
			var oModelViewSettings3 = new sap.ui.model.json.JSONModel(); 
			var sInitSettings3 = JSON.stringify(oInitSettings3).replace(/â‚¬/g,'€'); 
			oInitSettings3 = JSON.parse(sInitSettings3);
			oModelViewSettings3.setData(oInitSettings3);
			oView.setModel(oModelViewSettings3, "viewSettings");
		}
	});
});