function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZAIF_DASHBOARD_V2_SRV_01/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}