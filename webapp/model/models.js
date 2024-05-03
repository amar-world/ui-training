sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },
            createLocalModel: async function () {
                var oModel = new JSONModel({
                    "userTable": [
                        {
                            "FirstName": "Amar",
                            "Lastname": "Kumar",
                            "Email": "amar@test.com",
                            "MobileNo": "23453476",
                            "ZIPCode": "234537",
                            "Country": "IN"
                        }
                    ],
                    "userState": {
                        "FirstName": "None"
                    },
                    "user": {
                        "FirstName": "",
                        "Lastname": "",
                        "Email": "",
                        "MobileNo": "",
                        "ZIPCode": "",
                        "Country": ""
                    },
                    "ApplicationName": ""
                });
                // await oModel.loadData("../model/LocalModel.json");
                // console.log(oModel.getData()); // after the loadData promise is res
                return oModel;
            }
        };
    });