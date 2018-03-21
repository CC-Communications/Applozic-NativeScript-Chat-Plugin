import { Common } from "./applozic-chat.common";
import * as app from "tns-core-modules/application/application";

declare const com: any;
declare const android: any;

export class ApplozicChat extends Common {
  public login(
    alUser: any,
    enableAudio: boolean,
    enableVideo: boolean,
    successCallback: any,
    errorCallback: any
  ) {
    let user = new com.applozic.mobicomkit.api.account.user.User();
    user.setUserId(alUser.userId);
    user.setPassword(alUser.password);
    user.setApplicationId(alUser.applicationId);
    user.setDisplayName(alUser.displayName);
    user.setContactNumber(alUser.contactNumber);
    user.setAuthenticationTypeId(
      new java.lang.Short(alUser.authenticationTypeId)
    );
    user.setImageLink(alUser.imageLink);
    let featureList = new java.util.ArrayList();
    if (enableAudio)
      featureList.add(
        com.applozic.mobicomkit.api.account.user.User.Features.IP_AUDIO_CALL.getValue()
      );
    if (enableVideo)
      featureList.add(
        com.applozic.mobicomkit.api.account.user.User.Features.IP_VIDEO_CALL.getValue()
      );

    user.setFeatures(featureList);

    let User = com.applozic.mobicomkit.api.account.user.User;
    let GsonUtils = com.applozic.mobicommons.json.GsonUtils;
    let RegistrationResponse =
      com.applozic.mobicomkit.api.account.register.RegistrationResponse;
    let context = app.android.foregroundActivity;
    let arg: java.lang.Void;
    arg = null;

    com.applozic.mobicomkit.Applozic.init(context, alUser.applicationId);

    let listener = new com.applozic.mobicomkit.api.account.user.UserLoginTask.TaskListener(
      {
        onSuccess: function(registrationResponse: any, context: any) {
          let client = com.applozic.mobicomkit.ApplozicClient.getInstance(
            context
          );
          client
            .setHandleDial(enableAudio)
            .hideChatListOnNotification()
            .setIPCallEnabled(enableVideo);

          // first parametr of Hashmap is of type com.applozic.mobicomkit.uiwidgets.ApplozicSetting.RequestCode but can't get to compile
          let activityCallbacks = new java.util.HashMap<any, string>();
          if (enableAudio) {
            activityCallbacks.put(
              com.applozic.mobicomkit.uiwidgets.ApplozicSetting.RequestCode
                .AUDIO_CALL,
              com.applozic.audiovideo.activity.AudioCallActivityV2.class.getName()
            );
          }

          if (enableVideo) {
            activityCallbacks.put(
              com.applozic.mobicomkit.uiwidgets.ApplozicSetting.RequestCode
                .VIDEO_CALL,
              com.applozic.audiovideo.activity.VideoActivity.class.getName()
            );
          }

          if (activityCallbacks.size() > 0)
            com.applozic.mobicomkit.uiwidgets.ApplozicSetting.getInstance(
              context
            ).setActivityCallbacks(activityCallbacks);

          successCallback(registrationResponse);
          return true;
        },

        onFailure: function(response: any, exception: any) {
          if (response === "undefined") {
            errorCallback(exception);
          } else {
            errorCallback(response);
          }
          return true;
        }
      }
    );

    let task = new com.applozic.mobicomkit.api.account.user.UserLoginTask(
      user,
      listener,
      context
    );
    task.execute(arg);
  }

  public startVideoCall(userId: string) {
    let context = app.android.foregroundActivity;
    let client = com.applozic.mobicomkit.ApplozicClient.getInstance(context);

    let activityName = com.applozic.mobicomkit.uiwidgets.ApplozicSetting.getInstance(
      context
    ).getActivityCallback(
      com.applozic.mobicomkit.uiwidgets.ApplozicSetting.RequestCode.VIDEO_CALL
    );
    let activityToOpen = java.lang.Class.forName(activityName);

    let intent = new android.content.Intent(
      app.android.foregroundActivity,
      activityToOpen
    );
    intent.putExtra("CONTACT_ID", userId);

    app.android.foregroundActivity.startActivity(intent);
    console.log("Video Chat Started");
  }

  public startAudioCall(userId: string) {
    let context = app.android.foregroundActivity;
    let client = com.applozic.mobicomkit.ApplozicClient.getInstance(context);

    let activityName = com.applozic.mobicomkit.uiwidgets.ApplozicSetting.getInstance(
      context
    ).getActivityCallback(
      com.applozic.mobicomkit.uiwidgets.ApplozicSetting.RequestCode.AUDIO_CALL
    );
    let activityToOpen = java.lang.Class.forName(activityName);

    let intent = new android.content.Intent(
      app.android.foregroundActivity,
      activityToOpen
    );
    intent.putExtra("CONTACT_ID", userId);

    app.android.foregroundActivity.startActivity(intent);
    console.log("Audio Chat Started");
  }

  public registerForPushNotification(successCallback, errorCallback) {
    let context = app.android.foregroundActivity;
    let args = (java.lang.Void = null);

    let listener = new com.applozic.mobicomkit.api.account.user.PushNotificationTask.TaskListener(
      {
        onSuccess: function(response: any) {
          successCallback(response);
        },

        onFailure: function(response: any, exception: any) {
          if (exception === "undefined") {
            errorCallback(response);
          } else {
            errorCallback(exception);
          }
        }
      }
    );

    let task = new com.applozic.mobicomkit.api.account.user.PushNotificationTask(
      com.applozic.mobicomkit.Applozic.getInstance(
        context
      ).getDeviceRegistrationId(),
      listener,
      context
    );
    task.execute(args);
  }

  // this expects a JSON string that we can turn back into a map object
  public processPushNotification(stringifiedData: string): boolean {
    try {
      let obj = JSON.parse(stringifiedData);
      let notification = new java.util.HashMap<string, string>();

      for (let p in obj) {
        notification.put(p, obj[p].toString());
      }

      let context = app.android.foregroundActivity;
      if (
        com.applozic.mobicomkit.api.notification.MobiComPushReceiver.isMobiComPushNotification(
          notification
        )
      ) {
        try {
          console.log("Applozic processing notification message");
          com.applozic.mobicomkit.api.notification.MobiComPushReceiver.processMessageAsync(
            context,
            notification
          );
        } catch (err) {
          console.log("Applozic$ProcessNotification$Error");
          console.log(err);
        }

        return true;
      }
    } catch (err) {
      console.log("Applozic$ProcessNotification$FromStringData$Error");
      console.log(err);
    }

    return false; // this wasn't handled by applozic
  }

  public setPushToken(token: string) {
    com.applozic.mobicomkit.Applozic.getInstance(
      app.android.foregroundActivity
    ).setDeviceRegistrationId(token);
  }

  public launchChat() {
    let intent = new android.content.Intent(
      app.android.foregroundActivity,
      com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class
    );
    if (
      com.applozic.mobicomkit.ApplozicClient.getInstance(
        app.android.foregroundActivity
      ).isContextBasedChat()
    ) {
      intent.putExtra(
        com.applozic.mobicomkit.uiwidgets.conversation.ConversationUIService
          .CONTEXT_BASED_CHAT,
        true
      );
    }
    app.android.foregroundActivity.startActivity(intent);
    console.log("Yay, Called launchChat");
  }

  public isLoggedIn(successCallback: any, errorCallback: any) {
    if (
      com.applozic.mobicomkit.api.account.user.MobiComUserPreference.getInstance(
        app.android.foregroundActivity
      ).isLoggedIn()
    ) {
      successCallback("true");
    } else {
      successCallback("false");
    }
  }

  public launchChatWithUserId(userId: any, displayName: string) {
    let intent = new android.content.Intent(
      app.android.foregroundActivity,
      com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class
    );
    intent.putExtra(
      com.applozic.mobicomkit.uiwidgets.conversation.ConversationUIService
        .USER_ID,
      userId
    );
    if (displayName)
      intent.putExtra(
        com.applozic.mobicomkit.uiwidgets.conversation.ConversationUIService
          .DISPLAY_NAME,
        displayName
      );
    intent.putExtra("takeOrder", true);
    intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NO_ANIMATION);
    intent.addFlags(android.content.Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
    app.android.foregroundActivity.startActivity(intent);
  }

  public launchChatWithGroupId(
    groupId: string,
    successCallback,
    errorCallback
  ) {
    let args = (java.lang.Void = null);
    let listener = new com.applozic.mobicomkit.uiwidgets.async.AlGroupInformationAsyncTask.GroupMemberListener(
      {
        onSuccess: function(response: any, context: any) {
          let intent = new android.content.Intent(
            app.android.foregroundActivity,
            com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class
          );
          intent.putExtra("groupId", response.getKey().intValue());
          intent.putExtra("takeOrder", true);
          app.android.foregroundActivity.startActivity(intent);
          successCallback(response);
        },

        onFailure: function(response: any, exception: any, context: any) {
          if (response === "undefined" || response === null) {
            errorCallback("Error in launching group");
          } else {
            errorCallback("Error in launching group");
          }
        }
      }
    );

    let task = new com.applozic.mobicomkit.uiwidgets.async.AlGroupInformationAsyncTask(
      app.android.foregroundActivity,
      new java.lang.Integer(groupId),
      listener
    );
    task.execute(args);
  }

  public logout(successCallback: any, errorCallback: any) {
    let args = (java.lang.Void = null);

    let listener = new com.applozic.mobicomkit.api.account.user.UserLogoutTask.TaskListener(
      {
        onSuccess: function(context: any) {
          successCallback("Successfully logged out");
        },

        onFailure: function(exception: any) {
          errorCallback("Failed to logout");
        }
      }
    );

    let task = new com.applozic.mobicomkit.api.account.user.UserLogoutTask(
      listener,
      app.android.foregroundActivity
    );
    task.execute(args);
  }

  public showAllRegisteredUsers(showAll: boolean) {
    if (showAll) {
      com.applozic.mobicomkit.uiwidgets.ApplozicSetting.getInstance(
        app.android.foregroundActivity
      ).enableRegisteredUsersContactCall();
    }
  }
}
