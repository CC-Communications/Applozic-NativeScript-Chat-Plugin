import { Common } from "./applozic-chat.common";
export declare class ApplozicChat extends Common {
    login(user: any, enableAudio: boolean, enableVideo: boolean, successCallback: any, errorCallback: any): void;
    registerForPushNotification(successCallback: any, errorCallback: any): void;
    refreshToken(token: any): void;
    proccessNotification(data: any): void;
    launchChat(): void;
    launchChatWithUserId(userId: any, displayName: string): void;
    launchChatWithGroupId(groupId: number, successCallback: any, errorCallback: any): void;
    processPushNotification(stringifiedData: string): void;
    setPushToken(token: string): void;
    startAudioCall(userId: string): void;
    startVideoCall(userId: string): void;
    logout(successCallback: any, errorCallback: any): void;
    showAllRegisteredUsers(showAll: boolean): void;
    defaultSettings(): void;
}
