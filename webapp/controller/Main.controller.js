sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("demo.trainingui5.controller.Main", {
            onInit: function () {

                // debugger
            },
            onAddUserPress: function () {
                debugger
                var oCreatedUser = this.getView().getModel("LocalModel").getProperty("/user");
                var oUserState = this.getView().getModel("LocalModel").getProperty("/userState");
                var isValid = true;
                if (oCreatedUser.FirstName === '') {
                    oUserState.FirstName = "Error";
                    oUserState.FirstNameText = "Enter the First Name";
                    isValid = false;
                }else{
                    oUserState.FirstName="None";
                    oUserState.FirstNameText="";
                }
                this.getView().getModel("LocalModel").setProperty("/userState", oUserState);
                if (isValid) {
                    var aTableRecord = this.getView().getModel("LocalModel").getProperty("/userTable");
                    aTableRecord.push(oCreatedUser);
                    var newUserToBeCreated = JSON.parse(JSON.stringify(oCreatedUser));
                    this.getView().getModel("LocalModel").setProperty("/userTable", aTableRecord);
                    // for(var a in newUserToBeCreated){
                    //     newUserToBeCreated[a]="";
                    // }
                    newUserToBeCreated = {
                        // "FirstName": "",
                        // "Lastname": "",
                        // "Email": "",
                        // "MobileNo": "",
                        // "ZIPCode": "",
                        // "Country": ""
                    };
                    this.getView().getModel("LocalModel").setProperty("/user", newUserToBeCreated);
                }
            },
            onCancelOfTable: function () {
                var aTableRecord = this.getView().getModel("LocalModel").getProperty("/userTable");
                aTableRecord.splice(0, 1);
                this.getView().getModel("LocalModel").setProperty("/userTable", aTableRecord);
            }

        });
    });
