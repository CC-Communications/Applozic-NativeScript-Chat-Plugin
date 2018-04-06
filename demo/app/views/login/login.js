var nativescript_applozic_chat = require("nativescript-applozic-chat");
var observableModule = require("data/observable");

var page;
var applicationKey;
var userId;
var password;

exports.loaded = function(args) {
    page = args.object;
};

exports.login = function() {
    var applozicChat = new nativescript_applozic_chat.ApplozicChat();
    applicationKey = page.getViewById("applicationKey").text;
    userId = page.getViewById("userId").text;
    password = page.getViewById("password").text;

    var alUser = {
      'userId' : 'facebook|10213141809797320',   //Replace it with the userId of the logged in user
      'password' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJqZzRSRU5DTWpNNFFrUTRORVExTlVWRU5FVkZPVVV5UmtNMU0wRkVSakF4TmpVNU16YzRRZyJ9.eyJnaXZlbl9uYW1lIjoiSm9uYXRoYW4iLCJmYW1pbHlfbmFtZSI6IkF1c3RpbiIsIm5pY2tuYW1lIjoiam9uYXRoYW4uYXVzdGluIiwibmFtZSI6IkpvbmF0aGFuIEF1c3RpbiIsInBpY3R1cmUiOiJodHRwczovL2xvb2thc2lkZS5mYWNlYm9vay5jb20vcGxhdGZvcm0vcHJvZmlsZXBpYy8_YXNpZD0xMDIxMzE0MTgwOTc5NzMyMCZoZWlnaHQ9NTAmd2lkdGg9NTAmZXh0PTE1MjI4OTk1NTkmaGFzaD1BZVJVTC1xWV9mREF3dlFkIiwiZ2VuZGVyIjoibWFsZSIsImxvY2FsZSI6ImVuLVVTIiwidXBkYXRlZF9hdCI6IjIwMTgtMDQtMDJUMDM6Mzk6MTkuODQwWiIsImVtYWlsIjoiam9uYXRoYW4uYXVzdGluQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2ZmYy5hdXRoMC5jb20vIiwic3ViIjoiZmFjZWJvb2t8MTAyMTMxNDE4MDk3OTczMjAiLCJhdWQiOiJLcFBhUE1aVTZwVFA2RE1KdEh5SlcxcVg1RDRieU1lMSIsImlhdCI6MTUyMjY5NjE3NCwiZXhwIjoxNTIyNzE3Nzc0fQ.WzO9MXjY4TROmC1JNC4TpRFHKcw4bQxpfKRDRPzgyPheWFfVEp2RNg-Hj9yfK8S8VnAapy7rmO-z8PMBD0OvfTImOFd-3P7MTb3E5mSDbN46bid4NBsYtM6__eLJYhnw2qMeuHL_ZjqgcjT3wwCV13jYSNBa7T-N0Gq3twnYN4B9Q2aGa-qqC85tQIjfLOhn8ZauWcBKVvs0iRMNr_eFJEBTYI2y-5r78WqfE6chFjI_QeU_5JtPWEZq4M0cE5yGP6ik8yZ4blKWGr5648Z5lgWO6fKNbHxWRpot6VoO-kWsKODR1vpkI5mWLh-3RPDQMMiklaZl2uXduJBZkUKKEg',  //Put password here
      'authenticationTypeId' : 0,
      'applicationId' : 'ffc3dd6506f6ba97fe8a940f3e0d85',  //replace "applozic-sample-app" with Application Key from Applozic Dashboard
      'deviceApnsType' : 0    //Set 0 for Development and 1 for Distribution (Release)
    };

    console.log("LoginSuccess");
    applozicChat.login(alUser, true, true, function(response) {
        console.log("onLoginSuccess: " + response);
        //applozicChat.showAllRegisteredUsers(true);
        
        applozicChat.registerForPushNotification(function(response){
          console.log("push success : " + response);
        }, function(response){
          console.log("pus failed : " + response);
        });

         applozicChat.startVideoCall(alUser.userId);

        // applozicChat.launchChat();
        // applozicChat.isLoggedIn(function(response){
        //   if(response === 'true'){
        //     console.log("2 User is logged in");
        //   }else if(response === 'false'){
        //     console.log("2 User is not logged in");
        //   }
        // });
        
        // applozicChat.launchChatWithGroupId(5531687, function(response){
        //   console.log("group launch success : " + response);
        // }, function(response){
        //   console.log("group launch error : " + response);
        // });
        //that.applozicChat.launchChatWithGroupId(3930445);
      }, function(error) {
        console.log("onLoginFailure: " + error);
      });
};

exports.logout = function() {
    var applozicChat = new nativescript_applozic_chat.ApplozicChat();    
    applozicChat.logout(function(response) {
      console.log("logout success: " + response);
    }, function(error) {
      console.log("logout error: "+ error);
    });
}