import { Common } from "./applozic-chat.common";
export declare class ApplozicChat extends Common {
    login(alUser: any, enableAudio: boolean, enableVideo: boolean, successCallback: any, errorCallback: any): void;
    startVideoCall(userId: string): void;
    startAudioCall(userId: string): void;
    registerForPushNotification(successCallback: any, errorCallback: any): void;
    processPushNotification(stringifiedData: string): boolean;
    setPushToken(token: string): void;
    launchChat(): void;
    isLoggedIn(successCallback: any, errorCallback: any): void;
    launchChatWithUserId(userId: any, displayName: string): void;
    launchChatWithGroupId(groupId: string, successCallback: any, errorCallback: any): void;
    logout(successCallback: any, errorCallback: any): void;
    showAllRegisteredUsers(showAll: boolean): void;
}
