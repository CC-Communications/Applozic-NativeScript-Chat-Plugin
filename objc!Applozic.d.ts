
interface ALALMediaPlayerDelegate extends NSObjectProtocol {

	audioPlayerDidFinishPlayingSuccessfully(player: AVAudioPlayer, flag: boolean): void;

	getProgressOfTrack(): void;
}
declare var ALALMediaPlayerDelegate: {

	prototype: ALALMediaPlayerDelegate;
};

declare class ALAPIResponse extends ALJson {

	static alloc(): ALAPIResponse; // inherited from NSObject

	static new(): ALAPIResponse; // inherited from NSObject

	generatedAt: number;

	response: any;

	status: string;
}

declare class ALAppLocalNotifications extends NSObject {

	static alloc(): ALAppLocalNotifications; // inherited from NSObject

	static appLocalNotificationHandler(): ALAppLocalNotifications;

	static new(): ALAppLocalNotifications; // inherited from NSObject

	chatLauncher: ALChatLauncher;

	contactId: string;

	dict: NSDictionary<any, any>;

	dict2: NSMutableDictionary<any, any>;

	flag: boolean;

	googleReach: ALReachability;

	internetConnectionReach: ALReachability;

	localWiFiReach: ALReachability;

	dataConnectionNotificationHandler(): void;

	proactivelyConnectMQTT(): void;

	proactivelyDisconnectMQTT(): void;

	reachabilityChanged(note: NSNotification): void;

	thirdPartyNotificationTap1WithGroupId(contactId: string, groupID: number): void;
}

declare class ALApplozicSettings extends NSObject {

	static alloc(): ALApplozicSettings; // inherited from NSObject

	static disableNotification(): void;

	static disableNotificationSound(): void;

	static enableNotification(): void;

	static enableNotificationSound(): void;

	static enableOrDisableContactsGroup(flag: boolean): void;

	static enableStorageService(flag: boolean): void;

	static forwardOptionEnableOrDisable(flag: boolean): void;

	static getAbuseWarningText(): string;

	static getAudioVideoClassName(): string;

	static getBGColorForTypingLabel(): UIColor;

	static getCallOption(): boolean;

	static getChatListTabIcon(): UIImage;

	static getChatListTabTitle(): string;

	static getChatWallpaperImageName(): string;

	static getClientStoryBoard(): string;

	static getColorForNavigation(): UIColor;

	static getColorForNavigationItem(): UIColor;

	static getColorForSendButton(): UIColor;

	static getColorForToastBackground(): UIColor;

	static getColorForToastText(): UIColor;

	static getColorForTypeMsgBackground(): UIColor;

	static getContactTypeToFilter(): NSMutableArray<any>;

	static getContactsGroupId(): string;

	static getContextualChatOption(): boolean;

	static getCustomClassName(): string;

	static getCustomMessageBackgroundColor(): UIColor;

	static getCustomMessageFont(): string;

	static getCustomMessageFontSize(): number;

	static getCustomNavRightButtonMsgVC(): boolean;

	static getCustomNavigationControllerClassName(): string;

	static getDateColor(): UIColor;

	static getEmptyConversationText(): string;

	static getFilterContactsStatus(): boolean;

	static getFontFace(): string;

	static getGroupDeletedTitle(): string;

	static getGroupExitOption(): boolean;

	static getGroupMemberAddOption(): boolean;

	static getGroupMemberRemoveOption(): boolean;

	static getGroupOfTwoFlag(): boolean;

	static getGroupOption(): boolean;

	static getHideAttachmentsOption(): NSArray<any>;

	static getListOfViewControllers(): NSArray<any>;

	static getMaxCompressionFactor(): number;

	static getMaxImageSizeForUploadInMB(): number;

	static getMaxTextViewLines(): number;

	static getMessageAbuseMode(): boolean;

	static getMsgContainerVC(): string;

	static getMsgDateColor(): UIColor;

	static getMsgTextViewBGColor(): UIColor;

	static getMultipleAttachmentMaxLimit(): number;

	static getNotificationTitle(): string;

	static getOnlineContactLimit(): number;

	static getPlaceHolderColor(): UIColor;

	static getProfileTabIcon(): UIImage;

	static getProfileTabTitle(): string;

	static getReceiveMsgColor(): UIColor;

	static getReceiveMsgTextColor(): UIColor;

	static getReceiverUserProfileOption(): boolean;

	static getSendMsgColor(): UIColor;

	static getSendMsgTextColor(): UIColor;

	static getStartTime(): number;

	static getStatusBarBGColor(): UIColor;

	static getStatusBarStyle(): UIStatusBarStyle;

	static getSubGroupLaunchFlag(): boolean;

	static getTextColorForTypingLabel(): UIColor;

	static getTitleForBackButtonChatVC(): string;

	static getTitleForBackButtonMsgVC(): string;

	static getTitleForConversationScreen(): string;

	static getUnreadCountLabelBGColor(): UIColor;

	static getUserDeletedText(): string;

	static getVisibilityForNoMoreConversationMsgVC(): boolean;

	static getVisibilityForOnlineIndicator(): boolean;

	static getVisibilityNoConversationLabelChatVC(): boolean;

	static hideRefreshButton(state: boolean): void;

	static isAttachmentButtonHidden(): boolean;

	static isAudioVideoEnabled(): boolean;

	static isBlockUserOptionHidden(): boolean;

	static isBroadcastGroupEnable(): boolean;

	static isCameraOptionHidden(): boolean;

	static isChatOnTapUserProfile(): boolean;

	static isContactsGroupEnabled(): boolean;

	static isForwardOptionEnabled(): boolean;

	static isGroupInfoDisabled(): boolean;

	static isGroupInfoEditDisabled(): boolean;

	static isLocationOptionHidden(): boolean;

	static isPhotoGalleryOptionHidden(): boolean;

	static isRefreshButtonHidden(): boolean;

	static isReplyOptionEnabled(): boolean;

	static isSendAudioOptionHidden(): boolean;

	static isSendVideoOptionHidden(): boolean;

	static isShareContactOptionHidden(): boolean;

	static isStorageServiceEnabled(): boolean;

	static isSwiftFramework(): boolean;

	static isUserProfileHidden(): boolean;

	static new(): ALApplozicSettings; // inherited from NSObject

	static openChatOnTapUserProfile(flag: boolean): void;

	static replyOptionEnabled(flag: boolean): void;

	static setAbuseWarningText(warningText: string): void;

	static setAudioVideoClassName(className: string): void;

	static setAudioVideoEnabled(flag: boolean): void;

	static setBGColorForTypingLabel(bgColor: UIColor): void;

	static setBroadcastGroupEnable(flag: boolean): void;

	static setCallOption(flag: boolean): void;

	static setChatListTabIcon(imageName: string): void;

	static setChatListTabTitle(title: string): void;

	static setChatWallpaperImageName(imageName: string): void;

	static setClientStoryBoard(storyboard: string): void;

	static setColorForNavigation(barColor: UIColor): void;

	static setColorForNavigationItem(barItemColor: UIColor): void;

	static setColorForReceiveMessages(receiveMsgColor: UIColor): void;

	static setColorForSendButton(color: UIColor): void;

	static setColorForSendMessages(sendMsgColor: UIColor): void;

	static setColorForToastBackground(toastBGColor: UIColor): void;

	static setColorForToastText(toastTextColor: UIColor): void;

	static setColorForTypeMsgBackground(viewColor: UIColor): void;

	static setContactTypeToFilter(arrayWithIds: NSMutableArray<any>): void;

	static setContactsGroupId(contactsGroupId: string): void;

	static setContextualChat(option: boolean): void;

	static setCustomClassName(className: string): void;

	static setCustomMessageBackgroundColor(color: UIColor): void;

	static setCustomMessageFont(font: string): void;

	static setCustomMessageFontSize(fontSize: number): void;

	static setCustomNavRightButtonMsgVC(flag: boolean): void;

	static setDateColor(dateColor: UIColor): void;

	static setEmptyConversationText(text: string): void;

	static setFilterContactsStatus(flag: boolean): void;

	static setFontFace(fontFace: string): void;

	static setGroupDeletedTitle(title: string): void;

	static setGroupExitOption(option: boolean): void;

	static setGroupInfoDisabled(flag: boolean): void;

	static setGroupInfoEditDisabled(flag: boolean): void;

	static setGroupMemberAddOption(option: boolean): void;

	static setGroupMemberRemoveOption(option: boolean): void;

	static setGroupOfTwoFlag(flag: boolean): void;

	static setGroupOption(option: boolean): void;

	static setHideAttachmentsOption(array: NSArray<any>): void;

	static setListOfViewControllers(viewList: NSArray<any>): void;

	static setMaxCompressionFactor(maxCompressionRatio: number): void;

	static setMaxImageSizeForUploadInMB(maxFileSize: number): void;

	static setMaxTextViewLines(numberOfLines: number): void;

	static setMessageAbuseMode(flag: boolean): void;

	static setMsgContainerVC(className: string): void;

	static setMsgDateColor(dateColor: UIColor): void;

	static setMsgTextViewBGColor(color: UIColor): void;

	static setMultipleAttachmentMaxLimit(limit: number): void;

	static setNavigationControllerClassName(className: string): void;

	static setNotificationTitle(notificationTitle: string): void;

	static setOnlineContactLimit(limit: number): void;

	static setPlaceHolderColor(color: UIColor): void;

	static setProfileTabIcon(imageName: string): void;

	static setProfileTabTitle(title: string): void;

	static setReceiveMsgTextColor(receiveMsgColor: UIColor): void;

	static setReceiverUserProfileOption(flag: boolean): void;

	static setSendMsgTextColor(sendMsgColor: UIColor): void;

	static setStartTime(startTime: number): void;

	static setStatusBarBGColor(color: UIColor): void;

	static setStatusBarStyle(style: UIStatusBarStyle): void;

	static setSubGroupLaunchFlag(flag: boolean): void;

	static setSwiftFramework(flag: boolean): void;

	static setTextColorForTypingLabel(txtColor: UIColor): void;

	static setTitleForBackButtonChatVC(backButtonTitle: string): void;

	static setTitleForBackButtonMsgVC(backButtonTitle: string): void;

	static setTitleForConversationScreen(titleText: string): void;

	static setUnreadCountLabelBGColor(color: UIColor): void;

	static setUserDeletedText(text: string): void;

	static setUserProfileHidden(flag: boolean): void;

	static setVisibilityForNoMoreConversationMsgVC(flag: boolean): void;

	static setVisibilityForOnlineIndicator(flag: boolean): void;

	static setVisibilityNoConversationLabelChatVC(flag: boolean): void;
}

interface ALAudioAttachmentDelegate extends NSObjectProtocol {

	audioAttachment(audioFilePath: string): void;
}
declare var ALAudioAttachmentDelegate: {

	prototype: ALAudioAttachmentDelegate;
};

declare class ALAudioAttachmentViewController extends UIViewController implements AVAudioPlayerDelegate, AVAudioRecorderDelegate {

	static alloc(): ALAudioAttachmentViewController; // inherited from NSObject

	static new(): ALAudioAttachmentViewController; // inherited from NSObject

	audioAttchmentDelegate: ALAudioAttachmentDelegate;

	audioImageView: UIImageView;

	cancelButton: UIButton;

	mediaProgressLabel: UILabel;

	outputFilePath: string;

	pauseButton: UIButton;

	playButton: UIButton;

	recordButton: UIButton;

	sendButton: UIButton;

	stopButton: UIButton;

	timer: NSTimer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	audioPlayerBeginInterruption(player: AVAudioPlayer): void;

	audioPlayerDecodeErrorDidOccurError(player: AVAudioPlayer, error: NSError): void;

	audioPlayerDidFinishPlayingSuccessfully(player: AVAudioPlayer, flag: boolean): void;

	audioPlayerEndInterruption(player: AVAudioPlayer): void;

	audioPlayerEndInterruptionWithFlags(player: AVAudioPlayer, flags: number): void;

	audioPlayerEndInterruptionWithOptions(player: AVAudioPlayer, flags: number): void;

	audioRecorderBeginInterruption(recorder: AVAudioRecorder): void;

	audioRecorderDidFinishRecordingSuccessfully(recorder: AVAudioRecorder, flag: boolean): void;

	audioRecorderEncodeErrorDidOccurError(recorder: AVAudioRecorder, error: NSError): void;

	audioRecorderEndInterruption(recorder: AVAudioRecorder): void;

	audioRecorderEndInterruptionWithFlags(recorder: AVAudioRecorder, flags: number): void;

	audioRecorderEndInterruptionWithOptions(recorder: AVAudioRecorder, flags: number): void;

	cancelAction(sender: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseButtonAction(sender: any): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	playButtonAction(sender: any): void;

	recordAction(sender: any): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendButtonAction(sender: any): void;

	stopButtonAction(sender: any): void;
}

declare class ALAudioCell extends ALMediaBaseCell implements ALALMediaPlayerDelegate {

	static alloc(): ALAudioCell; // inherited from NSObject

	static appearance(): ALAudioCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALAudioCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALAudioCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALAudioCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALAudioCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALAudioCell; // inherited from UIAppearance

	static new(): ALAudioCell; // inherited from NSObject

	audioPlayer: AVAudioPlayer;

	mediaName: UILabel;

	mediaTrackLength: UILabel;

	mediaTrackProgress: UIProgressView;

	playPauseStop: UIButton;

	timer: NSTimer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	audioPlayerDidFinishPlayingSuccessfully(player: AVAudioPlayer, flag: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dowloadRetryAction(): void;

	getProgressOfTrack(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mediaButtonAction(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setupProgressValueXAndY(cooridinateX: number, cooridinateY: number): void;
}

declare class ALAudioVideoBaseVC extends UIViewController {

	static alloc(): ALAudioVideoBaseVC; // inherited from NSObject

	static chatRoomEngage(): boolean;

	static new(): ALAudioVideoBaseVC; // inherited from NSObject

	static setChatRoomEngage(flag: boolean): void;

	baseRoomId: string;

	callForAudio: boolean;

	launchFor: number;

	userID: string;

	dismissAVViewController(animated: boolean): void;

	handleDataConnectivity(): void;
}

declare class ALBaseViewController extends UIViewController implements UITextViewDelegate {

	static alloc(): ALBaseViewController; // inherited from NSObject

	static new(): ALBaseViewController; // inherited from NSObject

	attachmentOutlet: UIButton;

	beakImageView: UIImageView;

	callButton: UIBarButtonItem;

	checkBottomConstraint: NSLayoutConstraint;

	individualLaunch: boolean;

	label: UILabel;

	mActivityIndicator: UIActivityIndicatorView;

	mTableHeaderView: UIView;

	mTableView: UITableView;

	mTapGesture: UITapGestureRecognizer;

	navColor: UIColor;

	navRightBarButtonItems: NSMutableArray<UIBarButtonItem>;

	noConLabel: UILabel;

	noConversationLabel: UILabel;

	placeHolderColor: UIColor;

	placeHolderTxt: string;

	sendButton: UIButton;

	sendMessageTextView: UITextView;

	textMessageViewHeightConstaint: NSLayoutConstraint;

	textViewHeightConstraint: NSLayoutConstraint;

	typeMsgBG: UIImageView;

	typingLabel: UILabel;

	typingMessageView: UIView;

	wordArray: NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	attachmentActionMethod(sender: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollTableViewToBottomWithAnimation(animated: boolean): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	sendAction(sender: any): void;

	setCustomBackButton(): UIView;

	setHeightOfTextViewDynamically(): void;

	subProcessSetHeightOfTextViewDynamically(): void;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ALChannel extends ALJson {

	static alloc(): ALChannel; // inherited from NSObject

	static new(): ALChannel; // inherited from NSObject

	adminKey: string;

	channelDBObjectId: NSManagedObjectID;

	channelImageURL: string;

	childKeys: NSMutableArray<any>;

	clientChannelKey: string;

	conversationProxy: ALConversationProxy;

	deletedAtTime: number;

	groupUsers: NSMutableArray<any>;

	key: number;

	membersId: NSMutableArray<any>;

	membersName: NSMutableArray<any>;

	metadata: NSMutableDictionary<any, any>;

	name: string;

	notificationAfterTime: number;

	parentClientKey: string;

	parentKey: number;

	removeMembers: NSMutableArray<any>;

	type: number;

	unreadCount: number;

	userCount: number;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	getChannelMemberParentKey(userId: string): number;

	getMetaDataDictionary(string: string): NSMutableDictionary<any, any>;

	getReceiverIdInGroupOfTwo(): string;

	initWithDictonary(messageDictonary: NSDictionary<any, any>): this;

	isNotificationMuted(): boolean;

	parseMessage(messageJson: any): void;
}

declare class ALChannelClientService extends NSObject {

	static addChildKeyListAndParentKeyWithCompletion(childKeyList: NSMutableArray<any>, parentKey: number, completion: (p1: any, p2: NSError) => void): void;

	static addClientChildKeyListAndClientParentKeyWithCompletion(clientChildKeyList: NSMutableArray<any>, clientParentKey: string, completion: (p1: any, p2: NSError) => void): void;

	static addMemberToChannelOrClientChannelKeyAndChannelKeyWithCompletion(userId: string, clientChannelKey: string, channelKey: number, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	static addMemberToContactGroupOfTypeWithMembersWithGroupTypeWithCompletion(contactsGroupId: string, membersArray: NSMutableArray<any>, groupType: number, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static addMemberToContactGroupWithMembersWithCompletion(contactsGroupId: string, membersArray: NSMutableArray<any>, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static addMultipleUsersToChannelChannelUsersAndCompletion(channelKeys: NSMutableArray<any>, channelUsers: NSMutableArray<any>, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	static alloc(): ALChannelClientService; // inherited from NSObject

	static createChannelAndParentChannelKeyOrClientChannelKeyAndMembersListAndImageLinkChannelTypeAndMetaDataAdminUserWithCompletion(channelName: string, parentChannelKey: number, clientChannelKey: string, memberArray: NSMutableArray<any>, imageLink: string, type: number, metaData: NSMutableDictionary<any, any>, adminUserId: string, completion: (p1: NSError, p2: ALChannelCreateResponse) => void): void;

	static deleteChannelOrClientChannelKeyWithCompletion(channelKey: number, clientChannelKey: string, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	static getChannelInfoOrClientChannelKeyWithCompletion(channelKey: number, clientChannelKey: string, completion: (p1: NSError, p2: ALChannel) => void): void;

	static getMembersFromContactGroupOfTypeWithGroupTypeWithCompletion(contactGroupId: string, groupType: number, completion: (p1: NSError, p2: ALChannel) => void): void;

	static getMembersFromContactGroupWithCompletion(contactGroupId: string, completion: (p1: NSError, p2: ALChannel) => void): void;

	static leaveChannelOrClientChannelKeyWithUserIdAndCompletion(channelKey: number, clientChannelKey: string, userId: string, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	static new(): ALChannelClientService; // inherited from NSObject

	static removeChildKeyListAndParentKeyWithCompletion(childKeyList: NSMutableArray<any>, parentKey: number, completion: (p1: any, p2: NSError) => void): void;

	static removeClientChildKeyListAndClientParentKeyWithCompletion(clientChildKeyList: NSMutableArray<any>, clientParentKey: string, completion: (p1: any, p2: NSError) => void): void;

	static removeMemberFromChannelOrClientChannelKeyAndChannelKeyWithCompletion(userId: string, clientChannelKey: string, channelKey: number, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	static removeMemberFromContactGroupOfTypeWithGroupTypeWithUserIdWithCompletion(contactsGroupId: string, groupType: number, userId: string, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static removeMemberFromContactGroupWithUserIdWithCompletion(contactsGroupId: string, userId: string, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static syncCallForChannelAndCompletion(channelKey: number, completion: (p1: NSError, p2: ALChannelSyncResponse) => void): void;

	static updateChannelOrClientChannelKeyAndNewNameAndImageURLMetadataOrChildKeysOrChannelUsersAndCompletion(channelKey: any, clientChannelKey: any, newName: any, imageURL: any, metaData: any, childKeysList: any, channelUsers: NSMutableArray<any>, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	getAllChannelsForApplicationsWithCompletion(endTime: number, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	getChannelInfoByIdsOrClientIdsOrClinetChannelIdsWithCompletion(channelIds: NSMutableArray<any>, clientChannelIds: NSMutableArray<any>, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	getChannelListForCategoryWithCompletion(category: string, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	markConversationAsReadWithCompletion(channelKey: number, completion: (p1: string, p2: NSError) => void): void;

	muteChannelWithCompletion(ALMuteRequest: ALMuteRequest, completion: (p1: ALAPIResponse, p2: NSError) => void): void;
}

declare class ALChannelCreateResponse extends ALAPIResponse {

	static alloc(): ALChannelCreateResponse; // inherited from NSObject

	static new(): ALChannelCreateResponse; // inherited from NSObject

	alChannel: ALChannel;
}

declare class ALChannelDBService extends NSObject {

	static alloc(): ALChannelDBService; // inherited from NSObject

	static new(): ALChannelDBService; // inherited from NSObject

	addMemberToChannelAndChannelKey(userId: string, channelKey: number): void;

	addedMembersArrayAndChannelKey(memberArray: NSMutableArray<any>, channelKey: number): void;

	checkChannelEntity(channelKey: number): ALChannel;

	createChannel(channel: ALChannel): void;

	createChannelEntity(channel: ALChannel): DB_CHANNEL;

	createChannelUserXEntity(channelUserXList: ALChannelUserX): DB_CHANNEL_USER_X;

	deleteChannel(channelKey: number): void;

	fetchChildChannels(parentGroupKey: number): NSMutableArray<any>;

	getAllChannelKeyAndName(): NSMutableArray<any>;

	getChannelByKey(key: number): DB_CHANNEL;

	getChannelMembersList(channelKey: number): NSMutableArray<any>;

	getChannelUserX(channelKey: number): DB_CHANNEL_USER_X;

	getContactsGroupChannelByName(channelName: string): DB_CHANNEL;

	getListOfAllUsersInChannel(key: number): NSMutableArray<any>;

	getListOfAllUsersInChannelByNameForContactsGroup(channelName: string): NSMutableArray<any>;

	getOverallUnreadCountForChannelFromDB(): number;

	getUnreadMessagesForGroup(groupId: number): NSArray<any>;

	insertChannel(channelList: NSMutableArray<any>): void;

	insertChannelUserX(channelUserX: NSMutableArray<any>): void;

	isChannelDeleted(groupId: number): boolean;

	isChannelLeft(groupId: number): boolean;

	loadChannelByClientChannelKey(clientChannelKey: string): ALChannel;

	loadChannelByKey(key: number): ALChannel;

	loadChannelUserX(channelKey: number): ALChannelUserX;

	loadChannelUserXByUserIdAndUserId(channelKey: number, userId: string): ALChannelUserX;

	markConversationAsRead(channelKey: number): number;

	processArrayAfterSyncCall(channelArray: NSMutableArray<any>): void;

	removeMemberFromChannelAndChannelKey(userId: string, channelKey: number): void;

	removedMembersArrayAndChannelKey(memberArray: NSMutableArray<any>, channelKey: number): void;

	setLeaveFlagForChannel(flag: boolean, groupId: number): void;

	stringFromChannelUserList(key: number): string;

	updateChannelAndNewNameOrImageURLOrChildKeysIsUpdatingMetaDataOrChannelUsers(channelKey: number, newName: string, imageURL: string, childKeysList: NSMutableArray<any>, flag: boolean, channelUsers: NSMutableArray<any>): void;

	updateChannelParentKeyAndWithParentKeyIsAdding(channelKey: number, channelParentKey: number, flag: boolean): void;

	updateClientChannelParentKeyAndWithClientParentKeyIsAdding(clientChildKey: string, clientParentKey: string, flag: boolean): void;

	updateMuteAfterTimeAndChnnelKey(notificationAfterTime: number, channelKey: number): void;

	updateParentKeyInChannelUserXAndWithParentKeyAddUserId(channelKey: number, parentKey: number, userId: string): void;

	updateRoleInChannelUserXAndUserIdWithRoleType(channelKey: number, userId: string, role: number): void;

	updateUnreadCountChannelUnreadCount(channelKey: number, unreadCount: number): void;
}

declare class ALChannelFeed extends ALJson {

	static alloc(): ALChannelFeed; // inherited from NSObject

	static new(): ALChannelFeed; // inherited from NSObject

	channelFeedsList: NSMutableArray<ALChannel>;

	conversationProxyList: NSMutableArray<ALChannel>;
}

declare class ALChannelInfo extends NSObject {

	static alloc(): ALChannelInfo; // inherited from NSObject

	static new(): ALChannelInfo; // inherited from NSObject

	groupName: string;

	members: NSMutableArray<any>;
}

declare class ALChannelMsgCell extends ALChatCell {

	static alloc(): ALChannelMsgCell; // inherited from NSObject

	static appearance(): ALChannelMsgCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALChannelMsgCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALChannelMsgCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALChannelMsgCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALChannelMsgCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALChannelMsgCell; // inherited from UIAppearance

	static new(): ALChannelMsgCell; // inherited from NSObject
}

declare class ALChannelService extends NSObject {

	static addMemberToContactGroupOfTypeWithMembersWithGroupTypeWithCompletion(contactsGroupId: string, membersArray: NSMutableArray<any>, groupType: number, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static addMemberToContactGroupWithMembersWithCompletion(contactsGroupId: string, membersArray: NSMutableArray<any>, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static alloc(): ALChannelService; // inherited from NSObject

	static getMembersFromContactGroupOfTypeWithGroupTypeWithCompletion(contactGroupId: string, groupType: number, completion: (p1: NSError, p2: ALChannel) => void): void;

	static isChannelDeleted(groupId: number): boolean;

	static isChannelMuted(groupId: number): boolean;

	static markConversationAsReadWithCompletion(channelKey: number, completion: (p1: string, p2: NSError) => void): void;

	static new(): ALChannelService; // inherited from NSObject

	static removeMemberFromContactGroupOfTypeWithGroupTypeWithUserIdWithCompletion(contactsGroupId: string, groupType: number, userId: string, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static removeMemberFromContactGroupWithUserIdWithCompletion(contactsGroupId: string, userId: string, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	static setUnreadCountZeroForGroupID(channelKey: number): void;

	addChildKeyListAndParentKeyWithCompletion(childKeyList: NSMutableArray<any>, parentKey: number, completion: (p1: any, p2: NSError) => void): void;

	addClientChildKeyListAndParentKeyWithCompletion(clientChildKeyList: NSMutableArray<any>, clientParentKey: string, completion: (p1: any, p2: NSError) => void): void;

	addMemberToChannelAndChannelKeyOrClientChannelKeyWithCompletion(userId: string, channelKey: number, clientChannelKey: string, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	addMultipleUsersToChannelChannelUsersAndCompletion(channelKeys: NSMutableArray<any>, channelUsers: NSMutableArray<any>, completion: (p1: NSError) => void): void;

	callForChannelServiceForDBInsertion(theJson: any): void;

	checkAdmin(channelKey: number): boolean;

	createBroadcastChannelWithMembersListAndMetaDataWithCompletion(memberArray: NSMutableArray<any>, metaData: NSMutableDictionary<any, any>, completion: (p1: ALChannel, p2: NSError) => void): void;

	createChannelAndParentChannelKeyOrClientChannelKeyAndMembersListAndImageLinkChannelTypeAndMetaDataAdminUserWithCompletion(channelName: string, parentChannelKey: number, clientChannelKey: string, memberArray: NSMutableArray<any>, imageLink: string, type: number, metaData: NSMutableDictionary<any, any>, adminUserId: string, completion: (p1: ALChannel, p2: NSError) => void): void;

	createChannelAndParentChannelKeyOrClientChannelKeyAndMembersListAndImageLinkChannelTypeAndMetaDataWithCompletion(channelName: string, parentChannelKey: number, clientChannelKey: string, memberArray: NSMutableArray<any>, imageLink: string, type: number, metaData: NSMutableDictionary<any, any>, completion: (p1: ALChannel, p2: NSError) => void): void;

	createChannelOrClientChannelKeyAndMembersListAndImageLinkChannelTypeAndMetaDataAdminUserWithCompletion(channelName: string, clientChannelKey: string, memberArray: NSMutableArray<any>, imageLink: string, type: number, metaData: NSMutableDictionary<any, any>, adminUserId: string, completion: (p1: ALChannel, p2: NSError) => void): void;

	createChannelOrClientChannelKeyAndMembersListAndImageLinkChannelTypeAndMetaDataWithCompletion(channelName: string, clientChannelKey: string, memberArray: NSMutableArray<any>, imageLink: string, type: number, metaData: NSMutableDictionary<any, any>, completion: (p1: ALChannel, p2: NSError) => void): void;

	createChannelOrClientChannelKeyAndMembersListAndImageLinkWithCompletion(channelName: string, clientChannelKey: string, memberArray: NSMutableArray<any>, imageLink: string, completion: (p1: ALChannel, p2: NSError) => void): void;

	deleteChannelOrClientChannelKeyWithCompletion(channelKey: number, clientChannelKey: string, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	fetchChannelWithClientChannelKey(clientChannelKey: string): ALChannel;

	fetchChildChannelsWithParentKey(parentGroupKey: number): NSMutableArray<any>;

	getAllChannelList(): NSMutableArray<any>;

	getAllChannelsForApplicationsWithCompletion(endTime: number, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	getChannelByKey(channelKey: number): ALChannel;

	getChannelInfoByIdsOrClientIdsOrClinetChannelIdsWithCompletion(channelIds: NSMutableArray<any>, clientChannelIds: NSMutableArray<any>, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	getChannelInformationOrClientChannelKeyWithCompletion(channelKey: number, clientChannelKey: string, completion: (p1: ALChannel) => void): void;

	getChannelListForCategoryWithCompletion(category: string, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	getListOfAllUsersInChannel(channelKey: number): NSMutableArray<any>;

	getListOfAllUsersInChannelByNameForContactsGroup(channelName: string): NSMutableArray<any>;

	getOverallUnreadCountForChannel(): number;

	isChannelLeft(groupID: number): boolean;

	isLoginUserInChannel(channelKey: number): boolean;

	leaveChannelAndUserIdOrClientChannelKeyWithCompletion(channelKey: number, userId: string, clientChannelKey: string, completion: (p1: NSError) => void): void;

	loadChannelUserX(channelKey: number): ALChannelUserX;

	muteChannelWithCompletion(muteRequest: ALMuteRequest, completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	processChildGroups(alChannel: ALChannel): void;

	removeChildKeyListAndParentKeyWithCompletion(childKeyList: NSMutableArray<any>, parentKey: number, completion: (p1: any, p2: NSError) => void): void;

	removeClientChildKeyListAndParentKeyWithCompletion(clientChildKeyList: NSMutableArray<any>, clientParentKey: string, completion: (p1: any, p2: NSError) => void): void;

	removeMemberFromChannelAndChannelKeyOrClientChannelKeyWithCompletion(userId: string, channelKey: number, clientChannelKey: string, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	stringFromChannelUserList(key: number): string;

	syncCallForChannel(): void;

	updateChannelAndNewNameAndImageURLOrClientChannelKeyIsUpdatingMetaDataMetadataOrChildKeysOrChannelUsersWithCompletion(channelKey: number, newName: string, imageURL: string, clientChannelKey: string, flag: boolean, metaData: NSMutableDictionary<any, any>, childKeysList: NSMutableArray<any>, channelUsers: NSMutableArray<any>, completion: (p1: NSError) => void): void;
}

declare class ALChannelSyncResponse extends ALAPIResponse {

	static alloc(): ALChannelSyncResponse; // inherited from NSObject

	static new(): ALChannelSyncResponse; // inherited from NSObject

	alChannelArray: NSMutableArray<any>;
}

declare class ALChannelUser extends ALJson {

	static alloc(): ALChannelUser; // inherited from NSObject

	static new(): ALChannelUser; // inherited from NSObject

	parentGroupKey: number;

	role: number;

	userId: string;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	initWithDictonary(messageDictonary: NSDictionary<any, any>): this;

	parseMessage(messageJson: any): void;
}

declare class ALChannelUserX extends ALJson {

	static alloc(): ALChannelUserX; // inherited from NSObject

	static new(): ALChannelUserX; // inherited from NSObject

	channelUserXDBObjectId: NSManagedObjectID;

	key: number;

	parentKey: number;

	role: number;

	status: number;

	unreadCount: number;

	userKey: string;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	initWithDictonary(messageDictonary: NSDictionary<any, any>): this;
}

declare class ALChatCell extends UITableViewCell {

	static alloc(): ALChatCell; // inherited from NSObject

	static appearance(): ALChatCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALChatCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALChatCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALChatCell; // inherited from UIAppearance

	static new(): ALChatCell; // inherited from NSObject

	delegate: ALChatCellDelegate;

	hyperLinkArray: NSMutableArray<any>;

	mBubleImageView: UIImageView;

	mChannelMemberName: UILabel;

	mDateLabel: UILabel;

	mMessage: ALMessage;

	mMessageLabel: ALHyperLabel;

	mMessageStatusImageView: UIImageView;

	mNameLabel: UILabel;

	mUserProfileImageView: UIImageView;

	populateCellViewSize(alMessage: ALMessage, viewSize: CGSize): this;
}

interface ALChatCellDelegate extends NSObjectProtocol {

	deleteMessageFromView(message: ALMessage): void;

	loadView(launch: UIViewController): void;

	openUserChat?(alMessage: ALMessage): void;

	processALMessage(message: ALMessage): void;

	processForwardMessage(message: ALMessage): void;

	showAnimation(flag: boolean): void;
}
declare var ALChatCellDelegate: {

	prototype: ALChatCellDelegate;
};

declare class ALChatLauncher extends NSObject {

	static alloc(): ALChatLauncher; // inherited from NSObject

	static new(): ALChatLauncher; // inherited from NSObject

	applicationId: string;

	chatLauncherDelegate: ALChatLauncherDelegate;

	chatLauncherFLAG: number;

	constructor(o: { applicationId: string; });

	initWithApplicationId(applicationId: string): this;

	launchChatListAndViewControllerObject(title: string, viewController: UIViewController): void;

	launchChatListWithCustomNavigationBar(viewController: UIViewController): void;

	launchChatListWithParentKeyAndViewControllerObject(parentKey: number, viewController: UIViewController): void;

	launchChatListWithUserOrGroupWithChannelAndViewControllerObject(userId: string, channelKey: number, viewController: UIViewController): void;

	launchContactList(uiViewController: UIViewController): void;

	launchContactScreenWithMessageAndFromViewController(alMessage: ALMessage, viewController: UIViewController): void;

	launchIndividualChatWithGroupIdAndViewControllerObjectAndWithText(userId: string, groupID: number, viewController: UIViewController, text: string): void;

	launchIndividualChatWithGroupIdWithDisplayNameAndViewControllerObjectAndWithText(userId: string, groupID: number, displayName: string, viewController: UIViewController, text: string): void;

	launchIndividualContextChatAndViewControllerObjectUserDisplayNameAndWithText(alConversationProxy: ALConversationProxy, viewController: UIViewController, displayName: string, text: string): void;

	registerForNotification(): void;
}

interface ALChatLauncherDelegate extends NSObjectProtocol {
}
declare var ALChatLauncherDelegate: {

	prototype: ALChatLauncherDelegate;

	handleCustomActionAndWithMessage(chatView: UIViewController, alMessage: ALMessage): void;
};

declare class ALChatViewController extends ALBaseViewController implements ALChatCellDelegate, ALMapViewControllerDelegate, CNContactPickerDelegate, UIActionSheetDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): ALChatViewController; // inherited from NSObject

	static new(): ALChatViewController; // inherited from NSObject

	alChannel: ALChannel;

	alContact: ALContact;

	alMessage: ALMessage;

	alMessageWrapper: ALMessageArrayWrapper;

	channelKey: number;

	channelName: string;

	chatViewDelegate: ALChatViewControllerDelegate;

	contactIds: string;

	contactsGroupId: string;

	conversationId: number;

	displayName: string;

	mMessageListArrayKeyStrings: NSMutableArray<any>;

	refresh: boolean;

	refreshMainView: boolean;

	tableViewBottomToAttachment: NSLayoutConstraint;

	tableViewTop2Constraint: NSLayoutConstraint;

	text: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionSheetCancel(actionSheet: UIActionSheet): void;

	actionSheetClickedButtonAtIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetDidDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetWillDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	addBroadcastMessageToDB(alMessage: ALMessage): void;

	checkUserBlockStatus(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	contactPickerDidCancel(picker: CNContactPickerViewController): void;

	contactPickerDidSelectContact(picker: CNContactPickerViewController, contact: CNContact): void;

	contactPickerDidSelectContactProperties(picker: CNContactPickerViewController, contactProperties: NSArray<CNContactProperty>): void;

	contactPickerDidSelectContactProperty(picker: CNContactPickerViewController, contactProperty: CNContactProperty): void;

	contactPickerDidSelectContacts(picker: CNContactPickerViewController, contacts: NSArray<CNContact>): void;

	deleteMessageFromView(message: ALMessage): void;

	didPresentActionSheet(actionSheet: UIActionSheet): void;

	fetchAndRefresh(): void;

	formatDateTimeAndValue(alUserDetail: ALUserDetail, value: number): string;

	handleNotification(gestureRecognizer: UIGestureRecognizer): void;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	individualNotificationhandler(notification: NSNotification): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadView(launch: UIViewController): void;

	markConversationRead(): void;

	markSingleMessageRead(almessage: ALMessage): void;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	numberOfSectionsInTableView(tableView: UITableView): number;

	openUserChat(alMessage: ALMessage): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	postMessage(): void;

	processALMessage(message: ALMessage): void;

	processForwardMessage(message: ALMessage): void;

	processLoadEarlierMessages(isScrollToBottom: boolean): void;

	reloadView(): void;

	reloadViewfor3rdParty(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sendGoogleMapOffline(latLongString: string): void;

	sendGoogleMapWithCompletion(latLongString: string, completion: (p1: string, p2: NSError) => void): void;

	serverCallForLastSeen(): void;

	showAnimation(flag: boolean): void;

	showTypingLabelUserId(flag: boolean, userId: string): void;

	subProcessDetailUpdate(userId: ALUserDetail): void;

	subscrbingChannel(): void;

	syncCallAndMessageList(alMessage: ALMessage, messageArray: NSMutableArray<any>): void;

	syncCallUpdateUIAlertValue(AlMessage: ALMessage, updateUI: number, alertValue: string): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	unSubscrbingChannel(): void;

	updateChannelSubscribingAndNewChannel(oldChannelKey: number, newChannelKey: number): void;

	updateDeliveryReportWithStatus(key: string, status: number): void;

	updateDeliveryStatus(notification: NSNotification): void;

	updateLastSeenAtStatus(alUserDetail: ALUserDetail): void;

	updateStatusReportForConversation(status: number): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;

	willPresentActionSheet(actionSheet: UIActionSheet): void;
}

interface ALChatViewControllerDelegate extends NSObjectProtocol {

	handleCustomActionFromChatVCAndWithMessage?(chatViewController: UIViewController, alMessage: ALMessage): void;
}
declare var ALChatViewControllerDelegate: {

	prototype: ALChatViewControllerDelegate;
};

declare class ALCollectionReusableView extends UICollectionReusableView {

	static alloc(): ALCollectionReusableView; // inherited from NSObject

	static appearance(): ALCollectionReusableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALCollectionReusableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALCollectionReusableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALCollectionReusableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALCollectionReusableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALCollectionReusableView; // inherited from UIAppearance

	static new(): ALCollectionReusableView; // inherited from NSObject

	msgTextField: UITextField;
}

declare class ALColorUtility extends NSObject {

	static alloc(): ALColorUtility; // inherited from NSObject

	static colorWithHexString(stringToConvert: string): UIColor;

	static getAlphabetForProfileImage(actualName: string): string;

	static getColorForAlphabet(alphabet: string): UIColor;

	static imageWithSizeWithHexString(rect: CGRect, stringToConvert: string): UIImage;

	static new(): ALColorUtility; // inherited from NSObject
}

declare class ALConnection extends NSURLConnection {

	static alloc(): ALConnection; // inherited from NSObject

	static new(): ALConnection; // inherited from NSObject

	connectionType: string;

	keystring: string;

	mData: NSMutableData;
}

declare class ALConnectionQueueHandler extends NSObject {

	static alloc(): ALConnectionQueueHandler; // inherited from NSObject

	static new(): ALConnectionQueueHandler; // inherited from NSObject

	static sharedConnectionQueueHandler(): ALConnectionQueueHandler;

	mConnectionsArray: NSMutableArray<any>;

	getCurrentConnectionQueue(): NSMutableArray<any>;
}

declare class ALContact extends ALJson {

	static alloc(): ALContact; // inherited from NSObject

	static new(): ALContact; // inherited from NSObject

	applicationId: string;

	block: boolean;

	blockBy: boolean;

	connected: boolean;

	contactImageUrl: string;

	contactNumber: string;

	contactType: number;

	deletedAtTime: number;

	displayName: string;

	email: string;

	fullName: string;

	lastSeenAt: number;

	localImageResourceName: string;

	unreadCount: number;

	userId: string;

	userStatus: string;

	userTypeId: number;

	constructor(o: { dict: NSDictionary<any, any>; });

	getDisplayName(): string;

	initWithDict(dictionary: NSDictionary<any, any>): this;

	populateDataFromDictonary(dict: NSDictionary<any, any>): void;
}

declare class ALContactCell extends UITableViewCell {

	static alloc(): ALContactCell; // inherited from NSObject

	static appearance(): ALContactCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALContactCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALContactCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALContactCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALContactCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALContactCell; // inherited from UIAppearance

	static new(): ALContactCell; // inherited from NSObject

	L: UILabel;

	imageMarker: UIImageView;

	imageNameLabel: UILabel;

	mLastMessageStatusImageView: UIImageView;

	mMessageLabel: UILabel;

	mTimeLabel: UILabel;

	mUserImageView: UIImageView;

	mUserNameLabel: UILabel;

	onlineImageMarker: UIImageView;

	unreadCountLabel: UILabel;
}

declare class ALContactDBService extends NSObject {

	static alloc(): ALContactDBService; // inherited from NSObject

	static new(): ALContactDBService; // inherited from NSObject

	addContact(userContact: ALContact): boolean;

	addListOfContacts(contacts: NSArray<any>): boolean;

	addUserDetails(userDetails: NSMutableArray<any>): void;

	blockAllUserInList(userList: NSMutableArray<any>): void;

	blockByUserInList(userList: NSMutableArray<any>): void;

	getAllContactsFromDB(): NSMutableArray<any>;

	getContactByKeyValue(key: string, value: string): DB_CONTACT;

	getListOfBlockedUsers(): NSMutableArray<any>;

	getOverallUnreadCountForContactsFromDB(): number;

	getUnreadMessagesForIndividual(contactId: string): NSArray<any>;

	isUserDeleted(userId: string): boolean;

	loadContactByKeyValue(key: string, value: string): ALContact;

	markConversationAsDeliveredAndRead(contactId: string): number;

	purgeAllContact(): boolean;

	purgeContact(contact: ALContact): boolean;

	purgeListOfContacts(contacts: NSArray<any>): boolean;

	setBlockByUserAndBlockedByState(userId: string, flag: boolean): boolean;

	setBlockUserAndBlockedState(userId: string, flag: boolean): boolean;

	setUnreadCountDB(contact: ALContact): boolean;

	updateConnectedStatusLastSeenAtConnected(userId: string, lastSeenAt: number, connected: boolean): void;

	updateContact(contact: ALContact): boolean;

	updateFilteredContacts(contactsResponse: ALContactsResponse): void;

	updateLastSeenDBUpdate(userDetail: ALUserDetail): boolean;

	updateListOfContacts(contacts: NSArray<any>): boolean;

	updateUserDetail(userDetail: ALUserDetail): boolean;
}

interface ALContactDelegate extends NSObjectProtocol {

	addNewMembertoGroupWithCompletion?(alcontact: ALContact, completion: (p1: NSError, p2: ALAPIResponse) => void): void;
}
declare var ALContactDelegate: {

	prototype: ALContactDelegate;
};

declare class ALContactMessageCell extends ALMediaBaseCell {

	static alloc(): ALContactMessageCell; // inherited from NSObject

	static appearance(): ALContactMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALContactMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALContactMessageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALContactMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALContactMessageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALContactMessageCell; // inherited from UIAppearance

	static new(): ALContactMessageCell; // inherited from NSObject

	addContactButton: UIButton;

	contactPerson: UILabel;

	contactProfileImage: UIImageView;

	emailId: UILabel;

	userContact: UILabel;
}

declare class ALContactService extends NSObject {

	static alloc(): ALContactService; // inherited from NSObject

	static new(): ALContactService; // inherited from NSObject

	addContact(userContact: ALContact): boolean;

	addListOfContacts(contacts: NSArray<any>): boolean;

	getOverallUnreadCountForContact(): number;

	insertInitialContacts(): void;

	isContactExist(value: string): boolean;

	isUserDeleted(userId: string): boolean;

	loadContactByKeyValue(key: string, value: string): ALContact;

	loadOrAddContactByKeyWithDisplayNameValue(contactId: string, displayName: string): ALContact;

	purgeAllContact(): boolean;

	purgeContact(contact: ALContact): boolean;

	purgeListOfContacts(contacts: NSArray<any>): boolean;

	setUnreadCountInDB(contact: ALContact): boolean;

	updateContact(contact: ALContact): boolean;

	updateListOfContacts(contacts: NSArray<any>): boolean;

	updateOrInsert(contact: ALContact): boolean;

	updateOrInsertListOfContacts(contacts: NSMutableArray<any>): void;
}

declare class ALContactsResponse extends ALJson {

	static alloc(): ALContactsResponse; // inherited from NSObject

	static new(): ALContactsResponse; // inherited from NSObject

	lastFetchTime: number;

	totalUnreadCount: number;

	userDetailList: NSMutableArray<any>;
}

declare class ALConversationClientService extends NSObject {

	static alloc(): ALConversationClientService; // inherited from NSObject

	static createConversationWithCompletion(alConversationProxy: ALConversationProxy, completion: (p1: NSError, p2: ALConversationCreateResponse) => void): void;

	static fetchTopicDetailsAndCompletion(alConversationProxyID: number, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	static new(): ALConversationClientService; // inherited from NSObject
}

declare class ALConversationCreateResponse extends ALAPIResponse {

	static alloc(): ALConversationCreateResponse; // inherited from NSObject

	static new(): ALConversationCreateResponse; // inherited from NSObject

	alConversationProxy: ALConversationProxy;
}

declare class ALConversationDBService extends NSObject {

	static alloc(): ALConversationDBService; // inherited from NSObject

	static new(): ALConversationDBService; // inherited from NSObject

	createConversationProxy(conversationProxy: ALConversationProxy): DB_ConversationProxy;

	getConversationProxyByKey(Id: number): DB_ConversationProxy;

	getConversationProxyListFromDBForUserID(userId: string): NSArray<any>;

	getConversationProxyListFromDBForUserIDAndTopicId(userId: string, topicId: string): NSArray<any>;

	getConversationProxyListFromDBWithChannelKey(channelKey: number): NSArray<any>;

	insertConversationProxy(proxyArray: NSMutableArray<any>): void;

	insertConversationProxyTopicDetails(proxyArray: NSMutableArray<any>): void;
}

declare class ALConversationProxy extends ALJson {

	static alloc(): ALConversationProxy; // inherited from NSObject

	static getDictionaryForCreate(alConversationProxy: ALConversationProxy): NSMutableDictionary<any, any>;

	static new(): ALConversationProxy; // inherited from NSObject

	Id: number;

	closed: boolean;

	created: boolean;

	fallBackTemplateForRECEIVER: NSMutableDictionary<any, any>;

	fallBackTemplateForSENDER: NSMutableDictionary<any, any>;

	fallBackTemplatesListArray: NSMutableArray<any>;

	groupId: number;

	supportIds: NSArray<any>;

	topicDetailJson: string;

	topicId: string;

	userId: string;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	getTopicDetail(): ALTopicDetail;

	initWithDictonary(messageDictonary: NSDictionary<any, any>): this;

	parseMessage(messageJson: any): void;

	setReceiverSMSFormat(recieverFormatString: string): void;

	setSenderSMSFormat(senderFormatString: string): void;
}

declare class ALConversationService extends NSObject {

	static alloc(): ALConversationService; // inherited from NSObject

	static new(): ALConversationService; // inherited from NSObject

	addConversations(conversations: NSMutableArray<any>): void;

	convertAlConversationProxy(dbConversation: DB_ConversationProxy): ALConversationProxy;

	createConversationWithCompletion(alConversationProxy: ALConversationProxy, completion: (p1: NSError, p2: ALConversationProxy) => void): void;

	fetchTopicDetails(alConversationProxyID: number): void;

	getConversationByKey(conversationKey: number): ALConversationProxy;

	getConversationProxyListForChannelKey(channelKey: number): NSMutableArray<any>;

	getConversationProxyListForUserID(userId: string): NSMutableArray<any>;
}

declare class ALCustomCell extends ALChatCell {

	static alloc(): ALCustomCell; // inherited from NSObject

	static appearance(): ALCustomCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALCustomCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALCustomCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALCustomCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALCustomCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALCustomCell; // inherited from UIAppearance

	static new(): ALCustomCell; // inherited from NSObject
}

declare class ALDBHandler extends NSObject {

	static alloc(): ALDBHandler; // inherited from NSObject

	static new(): ALDBHandler; // inherited from NSObject

	static sharedInstance(): ALDBHandler;

	readonly managedObjectContext: NSManagedObjectContext;

	readonly managedObjectModel: NSManagedObjectModel;

	readonly persistentStoreCoordinator: NSPersistentStoreCoordinator;

	addContact(userContact: ALContact): boolean;

	addListOfContacts(contacts: NSArray<any>): boolean;

	getContactByKeyValue(key: string, value: string): DB_CONTACT;

	loadContactByKeyValue(key: string, value: string): ALContact;

	purgeAllContact(): boolean;

	purgeContact(contact: ALContact): boolean;

	purgeListOfContacts(contacts: NSArray<any>): boolean;

	saveContext(): void;

	updateContact(contact: ALContact): boolean;

	updateListOfContacts(contacts: NSArray<any>): boolean;
}

declare class ALDataNetworkConnection extends UIViewController {

	static alloc(): ALDataNetworkConnection; // inherited from NSObject

	static checkDataNetworkAvailable(): boolean;

	static new(): ALDataNetworkConnection; // inherited from NSObject

	static noInternetConnectionNotification(): boolean;
}

declare class ALDocumentsCell extends ALMediaBaseCell {

	static alloc(): ALDocumentsCell; // inherited from NSObject

	static appearance(): ALDocumentsCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALDocumentsCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALDocumentsCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALDocumentsCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALDocumentsCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALDocumentsCell; // inherited from UIAppearance

	static new(): ALDocumentsCell; // inherited from NSObject

	documentName: UILabel;

	tapper: UITapGestureRecognizer;
}

declare class ALFileMetaInfo extends ALJson {

	static alloc(): ALFileMetaInfo; // inherited from NSObject

	static new(): ALFileMetaInfo; // inherited from NSObject

	blobKey: string;

	contentType: string;

	createdAtTime: number;

	key: string;

	name: string;

	progressValue: number;

	size: string;

	thumbnailUrl: string;

	url: string;

	userKey: string;

	getTheSize(): string;

	populate(dict: NSDictionary<any, any>): ALFileMetaInfo;
}

interface ALForwardMessageDelegate extends NSObjectProtocol {

	proccessReloadAndForwardMessage?(alMessage: ALMessage): void;
}
declare var ALForwardMessageDelegate: {

	prototype: ALForwardMessageDelegate;
};

declare class ALGroupCreationViewController extends UIViewController implements UIImagePickerControllerDelegate, UINavigationControllerDelegate {

	static alloc(): ALGroupCreationViewController; // inherited from NSObject

	static new(): ALGroupCreationViewController; // inherited from NSObject

	channelKey: number;

	channelName: string;

	descriptionTextView: UITextView;

	groupIconView: UIImageView;

	groupImageURL: string;

	groupImageUploadURL: string;

	groupNameInput: UITextField;

	grpInfoDelegate: ALGroupInfoDelegate;

	isViewForUpdatingGroup: boolean;

	loadingIndicator: UIActivityIndicatorView;

	mTableView: UITableView;

	parentChannelKey: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ALGroupDetailViewController extends UIViewController implements ALContactDelegate, UIActionSheetDelegate, UIAlertViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): ALGroupDetailViewController; // inherited from NSObject

	static new(): ALGroupDetailViewController; // inherited from NSObject

	alChatViewController: UIViewController;

	channelKeyID: number;

	lastSeenMembersArray: NSMutableArray<any>;

	memberCount: number;

	memberIdToAdd: string;

	tableView: UITableView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionSheetCancel(actionSheet: UIActionSheet): void;

	actionSheetClickedButtonAtIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetDidDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetWillDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	addNewMembertoGroupWithCompletion(alcontact: ALContact, completion: (p1: NSError, p2: ALAPIResponse) => void): void;

	alertViewCancel(alertView: UIAlertView): void;

	alertViewClickedButtonAtIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewDidDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewShouldEnableFirstOtherButton(alertView: UIAlertView): boolean;

	alertViewWillDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPresentActionSheet(actionSheet: UIActionSheet): void;

	didPresentAlertView(alertView: UIAlertView): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;

	willPresentActionSheet(actionSheet: UIActionSheet): void;

	willPresentAlertView(alertView: UIAlertView): void;
}

interface ALGroupInfoDelegate extends NSObjectProtocol {

	updateGroupInformation?(): void;
}
declare var ALGroupInfoDelegate: {

	prototype: ALGroupInfoDelegate;
};

declare class ALHyperLabel extends UILabel {

	static alloc(): ALHyperLabel; // inherited from NSObject

	static appearance(): ALHyperLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALHyperLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALHyperLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALHyperLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALHyperLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALHyperLabel; // inherited from UIAppearance

	static new(): ALHyperLabel; // inherited from NSObject

	linkAttributeDefault: NSDictionary<any, any>;

	linkAttributeHighlight: NSDictionary<any, any>;

	clearActionDictionary(): void;

	setLinkForRangeWithAttributesAndLinkHandler(range: NSRange, attributes: NSDictionary<any, any>, handler: (p1: ALHyperLabel, p2: NSRange) => void): void;

	setLinkForRangeWithLinkHandler(range: NSRange, handler: (p1: ALHyperLabel, p2: NSRange) => void): void;

	setLinkForSubstringWithAttributeAndLinkHandler(substring: string, attribute: NSDictionary<any, any>, handler: (p1: ALHyperLabel, p2: string) => void): void;

	setLinkForSubstringWithLinkHandler(substring: string, handler: (p1: ALHyperLabel, p2: string) => void): void;

	setLinksForSubstringsWithLinkHandler(substrings: NSArray<any>, handler: (p1: ALHyperLabel, p2: string) => void): void;
}

declare class ALImageActivity extends UIActivity {

	static alloc(): ALImageActivity; // inherited from NSObject

	static new(): ALImageActivity; // inherited from NSObject

	imageActivityDelegate: ALImageActivityDelegate;
}

interface ALImageActivityDelegate extends NSObjectProtocol {

	showContactsToShareImage(): void;
}
declare var ALImageActivityDelegate: {

	prototype: ALImageActivityDelegate;
};

declare class ALImageCell extends ALMediaBaseCell {

	static alloc(): ALImageCell; // inherited from NSObject

	static appearance(): ALImageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALImageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALImageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALImageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALImageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALImageCell; // inherited from UIAppearance

	static new(): ALImageCell; // inherited from NSObject

	tapperForLocationMap: UITapGestureRecognizer;
}

declare class ALImagePickerController extends UIImagePickerController {

	static alloc(): ALImagePickerController; // inherited from NSObject

	static new(): ALImagePickerController; // inherited from NSObject
}

declare class ALImagePickerHandler extends NSObject {

	static alloc(): ALImagePickerHandler; // inherited from NSObject

	static new(): ALImagePickerHandler; // inherited from NSObject

	static saveImageToDocDirectory(image: UIImage): string;

	static saveVideoToDocDirectory(videoURL: NSURL): string;
}

declare class ALJson extends NSObject {

	static alloc(): ALJson; // inherited from NSObject

	static new(): ALJson; // inherited from NSObject

	constructor(o: { JSONString: string; });

	dictionary(): NSDictionary<any, any>;

	getBoolFromJsonValue(jsonValue: any): boolean;

	getIntFromJsonValue(jsonValue: any): number;

	getLongFromJsonValue(jsonValue: any): number;

	getNSNumberFromJsonValue(jsonValue: any): number;

	getShortFromJsonValue(jsonValue: any): number;

	getStringFromJsonValue(jsonValue: any): string;

	initWithJSONString(JSONString: string): this;

	validateJsonArrayClass(jsonClass: NSArray<any>): boolean;

	validateJsonClass(jsonClass: NSDictionary<any, any>): boolean;
}

declare class ALLastSeenSyncFeed extends ALJson {

	static alloc(): ALLastSeenSyncFeed; // inherited from NSObject

	static new(): ALLastSeenSyncFeed; // inherited from NSObject

	lastSeenArray: NSMutableArray<ALUserDetail>;

	populateLastSeenDetail(jsonString: NSMutableArray<any>): void;
}

declare class ALLocationCell extends ALMediaBaseCell {

	static alloc(): ALLocationCell; // inherited from NSObject

	static appearance(): ALLocationCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALLocationCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALLocationCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALLocationCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALLocationCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALLocationCell; // inherited from UIAppearance

	static new(): ALLocationCell; // inherited from NSObject

	getLocationUrl(almessage: ALMessage): string;
}

interface ALLocationDelegate extends NSObjectProtocol {

	handleAddress(dict: NSDictionary<any, any>): void;
}
declare var ALLocationDelegate: {

	prototype: ALLocationDelegate;
};

declare class ALLocationManager extends NSObject implements CLLocationManagerDelegate {

	static alloc(): ALLocationManager; // inherited from NSObject

	static new(): ALLocationManager; // inherited from NSObject

	addressString: string;

	geocoder: CLGeocoder;

	googleURL: string;

	locationDelegate: ALLocationDelegate;

	locationManager: CLLocationManager;

	placemark: CLPlacemark;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { distanceFilter: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getAddress(): void;

	initWithDistanceFilter(distance: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon>, region: CLBeaconRegion): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation>): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface ALMQTTConversationDelegate extends NSObjectProtocol {

	deliveredContactIdWithStatus(messageKey: string, contactId: string, status: number): void;

	mqttConnectionClosed(): void;

	mqttDidConnected?(): void;

	reloadDataForUserBlockNotificationAndBlockFlag?(userId: string, flag: boolean): void;

	syncCallAndMessageList(alMessage: ALMessage, messageArray: NSMutableArray<any>): void;

	updateLastSeenAtStatus(alUserDetail: ALUserDetail): void;

	updateStatusForContactWithStatus(contactId: string, status: number): void;

	updateTypingStatusUserIdStatus(applicationKey: string, userId: string, status: boolean): void;

	updateUserDetail?(userId: string): void;
}
declare var ALMQTTConversationDelegate: {

	prototype: ALMQTTConversationDelegate;
};

declare class ALMQTTConversationService extends NSObject implements MQTTSessionDelegate {

	static alloc(): ALMQTTConversationService; // inherited from NSObject

	static new(): ALMQTTConversationService; // inherited from NSObject

	static sharedInstance(): ALMQTTConversationService;

	alSyncCallService: ALSyncCallService;

	mqttConversationDelegate: ALMQTTConversationDelegate;

	session: MQTTSession;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	bufferedFlowingInFlowingOut(session: MQTTSession, flowingIn: number, flowingOut: number): void;

	bufferedQueuedFlowingInFlowingOut(session: MQTTSession, queued: number, flowingIn: number, flowingOut: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connected(session: MQTTSession): void;

	connectedSessionPresent(session: MQTTSession, sessionPresent: boolean): void;

	connectionClosed(session: MQTTSession): void;

	connectionErrorError(session: MQTTSession, error: NSError): void;

	connectionRefusedError(session: MQTTSession, error: NSError): void;

	handleEventEventError(session: MQTTSession, eventCode: MQTTSessionEvent, error: NSError): void;

	ignoreReceivedTypeQosRetainedDupedMidData(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	messageDeliveredMsgID(session: MQTTSession, msgID: number): void;

	newMessageDataOnTopicQosRetainedMid(session: MQTTSession, data: NSData, topic: string, qos: MQTTQosLevel, retained: boolean, mid: number): void;

	newMessageWithFeedbackDataOnTopicQosRetainedMid(session: MQTTSession, data: NSData, topic: string, qos: MQTTQosLevel, retained: boolean, mid: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	protocolErrorError(session: MQTTSession, error: NSError): void;

	receivedTypeQosRetainedDupedMidData(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendTypingStatusUserIDAndChannelKeyTyping(applicationKey: string, userId: string, channelKey: number, typing: boolean): void;

	sendingTypeQosRetainedDupedMidData(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): void;

	sessionHandleEvent(session: MQTTSession, eventCode: MQTTSessionEvent): void;

	sessionNewMessageOnTopic(session: MQTTSession, data: NSData, topic: string): void;

	subAckReceivedMsgIDGrantedQoss(session: MQTTSession, msgID: number, qoss: NSArray<number>): void;

	subscribeToChannelConversation(channelKey: number): void;

	subscribeToConversation(): void;

	unSubscribeToChannelConversation(channelKey: number): void;

	unsubAckReceivedMsgID(session: MQTTSession, msgID: number): void;

	unsubscribeToConversation(): void;
}

interface ALMUltipleAttachmentDelegate extends NSObjectProtocol {

	multipleAttachmentProcessAndText(attachmentPathArray: NSMutableArray<any>, messageText: string): void;
}
declare var ALMUltipleAttachmentDelegate: {

	prototype: ALMUltipleAttachmentDelegate;
};

declare class ALMapViewController extends UIViewController implements CLLocationManagerDelegate, MKMapViewDelegate {

	static alloc(): ALMapViewController; // inherited from NSObject

	static new(): ALMapViewController; // inherited from NSObject

	controllerDelegate: ALMapViewControllerDelegate;

	locationManager: CLLocationManager;

	mapKitView: MKMapView;

	mapView: UIImageView;

	region: MKCoordinateRegion;

	sendLocationButton: UIButton;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon>, region: CLBeaconRegion): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation>): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	mapViewAnnotationViewCalloutAccessoryControlTapped(mapView: MKMapView, view: MKAnnotationView, control: UIControl): void;

	mapViewAnnotationViewDidChangeDragStateFromOldState(mapView: MKMapView, view: MKAnnotationView, newState: MKAnnotationViewDragState, oldState: MKAnnotationViewDragState): void;

	mapViewClusterAnnotationForMemberAnnotations(mapView: MKMapView, memberAnnotations: NSArray<MKAnnotation>): MKClusterAnnotation;

	mapViewDidAddAnnotationViews(mapView: MKMapView, views: NSArray<MKAnnotationView>): void;

	mapViewDidAddOverlayRenderers(mapView: MKMapView, renderers: NSArray<MKOverlayRenderer>): void;

	mapViewDidAddOverlayViews(mapView: MKMapView, overlayViews: NSArray<any>): void;

	mapViewDidChangeUserTrackingModeAnimated(mapView: MKMapView, mode: MKUserTrackingMode, animated: boolean): void;

	mapViewDidDeselectAnnotationView(mapView: MKMapView, view: MKAnnotationView): void;

	mapViewDidFailLoadingMapWithError(mapView: MKMapView, error: NSError): void;

	mapViewDidFailToLocateUserWithError(mapView: MKMapView, error: NSError): void;

	mapViewDidFinishLoadingMap(mapView: MKMapView): void;

	mapViewDidFinishRenderingMapFullyRendered(mapView: MKMapView, fullyRendered: boolean): void;

	mapViewDidSelectAnnotationView(mapView: MKMapView, view: MKAnnotationView): void;

	mapViewDidStopLocatingUser(mapView: MKMapView): void;

	mapViewDidUpdateUserLocation(mapView: MKMapView, userLocation: MKUserLocation): void;

	mapViewRegionDidChangeAnimated(mapView: MKMapView, animated: boolean): void;

	mapViewRegionWillChangeAnimated(mapView: MKMapView, animated: boolean): void;

	mapViewRendererForOverlay(mapView: MKMapView, overlay: MKOverlay): MKOverlayRenderer;

	mapViewViewForAnnotation(mapView: MKMapView, annotation: MKAnnotation): MKAnnotationView;

	mapViewViewForOverlay(mapView: MKMapView, overlay: MKOverlay): MKOverlayView;

	mapViewWillStartLoadingMap(mapView: MKMapView): void;

	mapViewWillStartLocatingUser(mapView: MKMapView): void;

	mapViewWillStartRenderingMap(mapView: MKMapView): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface ALMapViewControllerDelegate extends NSObjectProtocol {

	sendGoogleMapOffline?(latLongString: string): void;

	sendGoogleMapWithCompletion?(latLongString: string, completion: (p1: string, p2: NSError) => void): void;
}
declare var ALMapViewControllerDelegate: {

	prototype: ALMapViewControllerDelegate;
};

declare class ALMediaBaseCell extends UITableViewCell implements KAProgressLabelDelegate {

	static alloc(): ALMediaBaseCell; // inherited from NSObject

	static appearance(): ALMediaBaseCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALMediaBaseCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALMediaBaseCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALMediaBaseCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALMediaBaseCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALMediaBaseCell; // inherited from UIAppearance

	static new(): ALMediaBaseCell; // inherited from NSObject

	delegate: ALMediaBaseCellDelegate;

	downloadRetryView: UIView;

	imageWithText: UITextView;

	mBubleImageView: UIImageView;

	mChannelMemberName: UILabel;

	mDateLabel: UILabel;

	mDowloadRetryButton: UIButton;

	mImageView: UIImageView;

	mMessage: ALMessage;

	mMessageStatusImageView: UIImageView;

	mNameLabel: UILabel;

	mUserProfileImageView: UIImageView;

	progresLabel: KAProgressLabel;

	sizeLabel: UILabel;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancelAction(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dowloadRetryButtonAction(): void;

	hidePlayButtonOnUploading(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openUserChatVC(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	populateCellViewSize(alMessage: ALMessage, viewSize: CGSize): this;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setupProgress(): void;
}

interface ALMediaBaseCellDelegate extends NSObjectProtocol {

	deleteMessageFromView(message: ALMessage): void;

	downloadRetryButtonActionDelegateAndMessage(index: number, message: ALMessage): void;

	loadViewForMedia(launch: UIViewController): void;

	processForwardMessage(message: ALMessage): void;

	processTapGesture(alMessage: ALMessage): void;

	processUserChatView?(alMessage: ALMessage): void;

	showAnimationForMsgInfo(flag: boolean): void;

	showFullScreen(fullView: UIViewController): void;

	showSuggestionViewAndFrame(fileURL: NSURL, frame: CGRect): void;

	showVideoFullScreen(fullView: MPMoviePlayerViewController): void;

	stopDownloadForIndexAndMessage(index: number, message: ALMessage): void;
}
declare var ALMediaBaseCellDelegate: {

	prototype: ALMediaBaseCellDelegate;
};

declare class ALMediaPlayer extends NSObject implements AVAudioPlayerDelegate {

	static alloc(): ALMediaPlayer; // inherited from NSObject

	static getTotalDuration(path: string): string;

	static new(): ALMediaPlayer; // inherited from NSObject

	static sharedInstance(): ALMediaPlayer;

	audioPlayer: AVAudioPlayer;

	delegate: ALALMediaPlayerDelegate;

	key: string;

	timer: NSTimer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	audioPlayerBeginInterruption(player: AVAudioPlayer): void;

	audioPlayerDecodeErrorDidOccurError(player: AVAudioPlayer, error: NSError): void;

	audioPlayerDidFinishPlayingSuccessfully(player: AVAudioPlayer, flag: boolean): void;

	audioPlayerEndInterruption(player: AVAudioPlayer): void;

	audioPlayerEndInterruptionWithFlags(player: AVAudioPlayer, flags: number): void;

	audioPlayerEndInterruptionWithOptions(player: AVAudioPlayer, flags: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getProgressOfTrack(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isPlayingCurrentKey(key: string): boolean;

	pauseAudio(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	playAudio(filePath: string): void;

	playVideo(filePath: string): void;

	respondsToSelector(aSelector: string): boolean;

	resumeAudio(): void;

	retainCount(): number;

	self(): this;

	stopPlaying(): boolean;
}

declare class ALMessage extends ALJson {

	static alloc(): ALMessage; // inherited from NSObject

	static new(): ALMessage; // inherited from NSObject

	applicationId: string;

	contactIds: string;

	contentType: number;

	conversationId: number;

	createdAtTime: number;

	deleted: boolean;

	delivered: boolean;

	deviceKey: string;

	fileMeta: ALFileMetaInfo;

	fileMetaKey: string;

	groupId: number;

	imageFilePath: string;

	inProgress: boolean;

	isUploadFailed: boolean;

	key: string;

	message: string;

	messageId: number;

	messageReplyType: number;

	metadata: NSMutableDictionary<any, any>;

	msgDBObjectId: NSManagedObjectID;

	msgHidden: boolean;

	pairedMessageKey: string;

	sendToDevice: boolean;

	sentToServer: boolean;

	shared: boolean;

	source: number;

	status: number;

	storeOnDevice: boolean;

	to: string;

	type: string;

	userKey: string;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	getCreatedAtTime(today: boolean): string;

	getCreatedAtTimeChat(today: boolean): string;

	getGroupId(): number;

	getMetaDataDictionary(string: string): NSMutableDictionary<any, any>;

	getNotificationText(): string;

	getReplyType(): ALReplyType;

	getVOIPMessageText(): string;

	initWithDictonary(messageDictonary: NSDictionary<any, any>): this;

	isAReplyMessage(): boolean;

	isContactMessage(): boolean;

	isDocumentMessage(): boolean;

	isDownloadRequired(): boolean;

	isHiddenMessage(): boolean;

	isLocationMessage(): boolean;

	isMessageCategoryHidden(): boolean;

	isMsgHidden(): boolean;

	isPushNotificationMessage(): boolean;

	isReceivedMessage(): boolean;

	isSentMessage(): boolean;

	isUploadRequire(): boolean;

	isVOIPNotificationMessage(): boolean;
}

declare class ALMessageArrayWrapper extends NSObject {

	static alloc(): ALMessageArrayWrapper; // inherited from NSObject

	static new(): ALMessageArrayWrapper; // inherited from NSObject

	dateCellText: string;

	messageArray: NSMutableArray<any>;

	addALMessageToMessageArray(alMessage: ALMessage): void;

	addLatestObjectToArray(paramMessageArray: NSMutableArray<any>): void;

	addObjectToMessageArray(paramMessageArray: NSMutableArray<any>): void;

	checkDateOlderAndNewer(older: number, newer: number): boolean;

	getDatePrototypeAndAlMessageObject(messageText: string, almessage: ALMessage): ALMessage;

	getUpdatedMessageArray(): NSMutableArray<any>;

	msgAtTop(almessage: ALMessage): string;

	removeALMessageFromMessageArray(almessage: ALMessage): void;

	removeObjectFromMessageArray(paramMessageArray: NSMutableArray<any>): void;
}

declare class ALMessageClientService extends NSObject {

	static alloc(): ALMessageClientService; // inherited from NSObject

	static new(): ALMessageClientService; // inherited from NSObject

	addWelcomeMessage(channelKey: number): void;

	deleteMessageAndContactIdWithCompletion(keyString: string, contactId: string, completion: (p1: string, p2: NSError) => void): void;

	deleteMessageThreadOrChannelKeyWithCompletion(contactId: string, channelKey: number, completion: (p1: string, p2: NSError) => void): void;

	getCurrentMessageInformationWithCompletionHandler(messageKey: string, completion: (p1: ALMessageInfoResponse, p2: NSError) => void): void;

	getLatestMessageForUserWithCompletion(deviceKeyString: string, completion: (p1: ALSyncMessageFeed, p2: NSError) => void): void;

	getLatestMessageGroupByContactStartTimeWithCompletion(mainPageSize: number, startTime: number, completion: (p1: ALMessageList, p2: NSError) => void): void;

	getMessageListForUserWithCompletion(messageListRequest: MessageListRequest, completion: (p1: NSMutableArray<any>, p2: NSError, p3: NSMutableArray<any>) => void): void;

	getMessagesListGroupByContactswithCompletion(completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	sendMessageWithCompletionHandler(userInfo: NSDictionary<any, any>, completion: (p1: any, p2: NSError) => void): void;

	sendPhotoForUserInfoWithCompletion(userInfo: NSDictionary<any, any>, completion: (p1: string, p2: NSError) => void): void;

	updateDeliveryReport(key: string): void;

	updateDeliveryReports(messages: NSMutableArray<any>): void;
}

declare class ALMessageDBService extends NSObject {

	static addBroadcastMessageToDB(alMessage: ALMessage): void;

	static alloc(): ALMessageDBService; // inherited from NSObject

	static new(): ALMessageDBService; // inherited from NSObject

	delegate: ALMessagesDelegate;

	addMessage(message: ALMessage): DB_Message;

	addMessageList(messageList: NSMutableArray<any>): NSMutableArray<any>;

	createFileMetaInfoEntityForDBInsertionWithMessage(fileInfo: ALFileMetaInfo): DB_FileMetaInfo;

	createMessageEntity(theEntity: DB_Message): ALMessage;

	createMessageEntityForDBInsertionWithMessage(theMessage: ALMessage): DB_Message;

	deleteAllMessagesByContactOrChannelKey(contactId: string, key: number): void;

	deleteAllObjectsInCoreData(): void;

	deleteMessage(): void;

	deleteMessageByKey(keyString: string): void;

	fetchAndRefreshFromServer(subGroupList: NSMutableArray<any>): void;

	fetchAndRefreshQuickConversationWithCompletion(completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	fetchConversationfromServerWithCompletion(completionHandler: (p1: boolean) => void): void;

	fetchConversationsGroupByContactId(): void;

	getAllMessagesWithAttachmentForContactAndChannelKeyOnlyDownloadedAttachments(contactId: string, channelKey: number, onlyDownloaded: boolean): NSMutableArray<any>;

	getLatestMessageForChannelExcludeChannelOperations(channelKey: number, flag: boolean): ALMessage;

	getLatestMessageForUser(userId: string): ALMessage;

	getMeesageByIdError(objectID: NSManagedObjectID): NSManagedObject;

	getMessageByKeyValue(key: string, value: string): NSManagedObject;

	getMessageListForContactWithCreatedAtWithCreatedAtAndChannelKeyConversationId(contactId: string, createdAt: number, channelKey: number, conversationId: number): NSMutableArray<any>;

	getMessages(subGroupList: NSMutableArray<any>): void;

	getMessagesCountFromDBForUser(userId: string): number;

	getPendingMessages(): NSMutableArray<any>;

	isMessageTableEmpty(): boolean;

	updateDeliveryReportForContactWithStatus(contactId: string, status: number): void;

	updateFileMetaInfo(almessage: ALMessage): void;

	updateMessageDeliveryReportWithStatus(messageKeyString: string, status: number): void;

	updateMessageSyncStatus(keyString: string): void;
}

declare class ALMessageInfo extends ALJson {

	static alloc(): ALMessageInfo; // inherited from NSObject

	static new(): ALMessageInfo; // inherited from NSObject

	deliveredAtTime: number;

	messageStatus: number;

	readAtTime: number;

	userId: string;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	initWithDictonary(messageDictonary: NSDictionary<any, any>): this;

	parseMessage(messageJson: any): void;
}

declare class ALMessageInfoResponse extends ALAPIResponse {

	static alloc(): ALMessageInfoResponse; // inherited from NSObject

	static new(): ALMessageInfoResponse; // inherited from NSObject

	msgInfoList: NSMutableArray<ALMessageInfo>;
}

declare class ALMessageInfoViewController extends UIViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): ALMessageInfoViewController; // inherited from NSObject

	static new(): ALMessageInfoViewController; // inherited from NSObject

	VCFObject: ALVCFClass;

	VCardClass: ALVCardClass;

	activityIndicator: UIActivityIndicatorView;

	alTableView: UITableView;

	almessage: ALMessage;

	contentURL: NSURL;

	dateLabel: UILabel;

	firstAlphabet: UILabel;

	headerTitle: UILabel;

	infoTableView: UITableView;

	msgHeaderHeight: number;

	tickImageView: UIImageView;

	timeLabel: UILabel;

	userImage: UIImageView;

	userName: UILabel;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	setMessageAndHeaderHeightWithCompletionHandler(almessage: ALMessage, headerHeight: number, completion: (p1: NSError) => void): void;

	setTableCellView(contactCell: ALContactCell): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForMessageSection(tableView: UITableView): UIView;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ALMessageList extends ALJson {

	static alloc(): ALMessageList; // inherited from NSObject

	static new(): ALMessageList; // inherited from NSObject

	connectedUserList: NSMutableArray<any>;

	conversationPxyList: NSMutableArray<any>;

	groupId: number;

	messageList: NSMutableArray<any>;

	userDetailsList: NSMutableArray<any>;

	userId: string;

	constructor(o: { JSONString: string; andWithUserId: string; andWithGroup: number; });

	initWithJSONStringAndWithUserIdAndWithGroup(syncMessageResponse: string, userId: string, groupId: number): this;
}

declare class ALMessageService extends NSObject implements NSURLConnectionDataDelegate {

	static addBroadcastMessageToDB(alMessage: ALMessage): void;

	static alloc(): ALMessageService; // inherited from NSObject

	static createCustomTextMessageEntitySendToWithText(to: string, text: string): ALMessage;

	static createHiddenMessageEntitySentToWithText(to: string, text: string): ALMessage;

	static createMessageWithMetaDataAndContentTypeAndReceiverIdAndMessageText(metaData: NSMutableDictionary<any, any>, contentType: number, receiverId: string, msgTxt: string): ALMessage;

	static deleteMessageAndContactIdWithCompletion(keyString: string, contactId: string, completion: (p1: string, p2: NSError) => void): void;

	static deleteMessageThreadOrChannelKeyWithCompletion(contactId: string, channelKey: number, completion: (p1: string, p2: NSError) => void): void;

	static getLatestMessageForUserWithCompletion(deviceKeyString: string, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	static getMessageListForContactIdIsGroupChannelKeyConversationIdStartIndexWithCompletion(contactIds: string, isGroup: boolean, channelKey: number, conversationId: number, startIndex: number, completion: (p1: NSMutableArray<any>) => void): void;

	static getMessageListForUserIfLastIsHiddenMessageinMessageListWithCompletion(alMessageList: ALMessageList, completion: (p1: NSMutableArray<any>, p2: NSError, p3: NSMutableArray<any>) => void): void;

	static getMessageListForUserWithCompletion(messageListRequest: MessageListRequest, completion: (p1: NSMutableArray<any>, p2: NSError, p3: NSMutableArray<any>) => void): void;

	static getMessageSENTWithCompletion(alMessage: ALMessage, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	static getMessagefromKeyValuePairAndValue(key: string, value: string): ALMessage;

	static getMessagesListGroupByContactswithCompletionService(completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	static multiUserSendMessageToContactsToGroupsWithCompletion(alMessage: ALMessage, contactIdsArray: NSMutableArray<any>, channelKeysArray: NSMutableArray<any>, completion: (p1: string, p2: NSError) => void): void;

	static new(): ALMessageService; // inherited from NSObject

	static processFileUploadSucess(message: ALMessage): ALMessage;

	static processImageDownloadforMessageWithdelegate(message: ALMessage, delegate: any): void;

	static processLatestMessagesGroupByContact(): void;

	static processPendingMessages(): void;

	static proessUploadImageForMessageDatabaseObjUploadURLWithdelegate(message: ALMessage, fileMetaInfo: DB_FileMetaInfo, uploadURL: string, delegate: any): void;

	static sendMessageWithAttachmentAtLocationAndContentTypeWithCompletion(alMessage: ALMessage, attachmentLocalPath: string, contentype: number, completion: (p1: string, p2: NSError) => void): void;

	static sendMessagesWithCompletion(message: ALMessage, completion: (p1: string, p2: NSError) => void): void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectionCanAuthenticateAgainstProtectionSpace(connection: NSURLConnection, protectionSpace: NSURLProtectionSpace): boolean;

	connectionDidCancelAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidFailWithError(connection: NSURLConnection, error: NSError): void;

	connectionDidFinishLoading(connection: NSURLConnection): void;

	connectionDidReceiveAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidReceiveData(connection: NSURLConnection, data: NSData): void;

	connectionDidReceiveResponse(connection: NSURLConnection, response: NSURLResponse): void;

	connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	connectionNeedNewBodyStream(connection: NSURLConnection, request: NSURLRequest): NSInputStream;

	connectionShouldUseCredentialStorage(connection: NSURLConnection): boolean;

	connectionWillCacheResponse(connection: NSURLConnection, cachedResponse: NSCachedURLResponse): NSCachedURLResponse;

	connectionWillSendRequestForAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionWillSendRequestRedirectResponse(connection: NSURLConnection, request: NSURLRequest, response: NSURLResponse): NSURLRequest;

	getALMessageByKey(messageReplyId: string): ALMessage;

	getLatestMessageForChannelExcludeChannelOperations(channelKey: number, flag: boolean): ALMessage;

	getLatestMessageForUser(userId: string): ALMessage;

	getMessageInformationWithMessageKeyWithCompletionHandler(messageKey: string, completion: (p1: ALMessageInfoResponse, p2: NSError) => void): void;

	getMessagsCountForUser(userId: string): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ALMessageServiceWrapper extends NSObject implements NSURLConnectionDataDelegate {

	static alloc(): ALMessageServiceWrapper; // inherited from NSObject

	static new(): ALMessageServiceWrapper; // inherited from NSObject

	messageServiceDelegate: MessageServiceWrapperDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectionCanAuthenticateAgainstProtectionSpace(connection: NSURLConnection, protectionSpace: NSURLProtectionSpace): boolean;

	connectionDidCancelAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidFailWithError(connection: NSURLConnection, error: NSError): void;

	connectionDidFinishLoading(connection: NSURLConnection): void;

	connectionDidReceiveAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidReceiveData(connection: NSURLConnection, data: NSData): void;

	connectionDidReceiveResponse(connection: NSURLConnection, response: NSURLResponse): void;

	connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	connectionNeedNewBodyStream(connection: NSURLConnection, request: NSURLRequest): NSInputStream;

	connectionShouldUseCredentialStorage(connection: NSURLConnection): boolean;

	connectionWillCacheResponse(connection: NSURLConnection, cachedResponse: NSCachedURLResponse): NSCachedURLResponse;

	connectionWillSendRequestForAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionWillSendRequestRedirectResponse(connection: NSURLConnection, request: NSURLRequest, response: NSURLResponse): NSURLRequest;

	createMessageEntityOfContentTypeToSendToWithText(contentType: number, to: string, text: string): ALMessage;

	downloadMessageAttachment(alMessage: ALMessage): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendMessageWithAttachmentAtLocationAndWithStatusDelegateAndContentType(alMessage: ALMessage, attachmentLocalPath: string, statusDelegate: any, contentype: number): void;

	sendTextMessageAndtoContact(text: string, toContactId: string): void;

	sendTextMessageAndtoContactOrGroupId(messageText: string, contactId: string, channelKey: number): void;
}

interface ALMessagesDelegate extends NSObjectProtocol {

	getMessagesArray(messagesArray: NSMutableArray<any>): void;

	updateMessageList(messagesArray: NSMutableArray<any>): void;
}
declare var ALMessagesDelegate: {

	prototype: ALMessagesDelegate;
};

declare class ALMessagesViewController extends UIViewController implements ALChatViewControllerDelegate {

	static alloc(): ALMessagesViewController; // inherited from NSObject

	static new(): ALMessagesViewController; // inherited from NSObject

	channelKey: number;

	childGroupList: NSMutableArray<any>;

	contactsGroupId: string;

	conversationId: number;

	detailChatViewController: ALChatViewController;

	mTableView: UITableView;

	messagesViewDelegate: ALMessagesViewDelegate;

	parentGroupKey: number;

	userIdToLaunch: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	callLastSeenStatusUpdate(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createAndLaunchChatView(): void;

	createBroadcastGroup(sender: any): void;

	createDetailChatViewController(contactIds: string): void;

	displayAttachmentMediaTypeAndContactCell(message: ALMessage, contactCell: ALContactCell): void;

	handleCustomActionFromChatVCAndWithMessage(chatViewController: UIViewController, alMessage: ALMessage): void;

	insertChannelMessage(channelKey: number): void;

	intializeSubgroupMessages(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pushNotificationhandler(notification: NSNotification): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCustomBackButton(text: string): UIView;

	syncCallAndMessageList(alMessage: ALMessage, messageArray: NSMutableArray<any>): void;
}

interface ALMessagesViewDelegate extends NSObjectProtocol {

	handleCustomActionFromMsgVCAndWithMessage?(chatView: UIViewController, alMessage: ALMessage): void;
}
declare var ALMessagesViewDelegate: {

	prototype: ALMessagesViewDelegate;
};

declare class ALMultipleAttachmentView extends UICollectionViewController implements UIImagePickerControllerDelegate, UINavigationControllerDelegate {

	static alloc(): ALMultipleAttachmentView; // inherited from NSObject

	static new(): ALMultipleAttachmentView; // inherited from NSObject

	classImage: UIImage;

	classVideoPath: string;

	imageArray: NSMutableArray<any>;

	mediaFileArray: NSMutableArray<any>;

	multipleAttachmentDelegate: ALMUltipleAttachmentDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ALMuteRequest extends ALJson {

	static alloc(): ALMuteRequest; // inherited from NSObject

	static new(): ALMuteRequest; // inherited from NSObject

	clientGroupId: string;

	id: number;

	notificationAfterTime: number;

	userId: string;
}

declare class ALNavigationController extends UINavigationController {

	static alloc(): ALNavigationController; // inherited from NSObject

	static new(): ALNavigationController; // inherited from NSObject

	customNavigationItemClickedWithTag(sender: any, tag: string): void;

	getCustomButtons(): NSMutableArray<any>;
}

declare class ALNewContactCell extends UITableViewCell {

	static alloc(): ALNewContactCell; // inherited from NSObject

	static appearance(): ALNewContactCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALNewContactCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALNewContactCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALNewContactCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALNewContactCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALNewContactCell; // inherited from UIAppearance

	static new(): ALNewContactCell; // inherited from NSObject

	contactPersonImageView: UIImageView;

	contactPersonName: UILabel;
}

declare class ALNewContactsViewController extends UIViewController implements UISearchBarDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): ALNewContactsViewController; // inherited from NSObject

	static new(): ALNewContactsViewController; // inherited from NSObject

	alMessage: ALMessage;

	childChannels: NSMutableArray<any>;

	colors: NSArray<any>;

	contactsInGroup: NSMutableArray<any>;

	contactsTableView: UITableView;

	delegate: ALContactDelegate;

	directContactVCLaunch: boolean;

	directContactVCLaunchForForward: boolean;

	done: UIBarButtonItem;

	forGroup: number;

	forGroupAddition: number;

	forwardDelegate: ALForwardMessageDelegate;

	groupImageURL: string;

	groupName: string;

	mTableViewTopConstraint: NSLayoutConstraint;

	parentChannel: ALChannel;

	segmentControl: UISegmentedControl;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	launchProcessForSubgroups(): void;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionForBar(bar: UIBarPositioning): UIBarPosition;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	searchBarBookmarkButtonClicked(searchBar: UISearchBar): void;

	searchBarCancelButtonClicked(searchBar: UISearchBar): void;

	searchBarResultsListButtonClicked(searchBar: UISearchBar): void;

	searchBarSearchButtonClicked(searchBar: UISearchBar): void;

	searchBarSelectedScopeButtonIndexDidChange(searchBar: UISearchBar, selectedScope: number): void;

	searchBarShouldBeginEditing(searchBar: UISearchBar): boolean;

	searchBarShouldChangeTextInRangeReplacementText(searchBar: UISearchBar, range: NSRange, text: string): boolean;

	searchBarShouldEndEditing(searchBar: UISearchBar): boolean;

	searchBarTextDidBeginEditing(searchBar: UISearchBar): void;

	searchBarTextDidChange(searchBar: UISearchBar, searchText: string): void;

	searchBarTextDidEndEditing(searchBar: UISearchBar): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	segmentControlAction(sender: any): void;

	self(): this;

	setCustomBackButton(text: string): UIView;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ALNotificationView extends UILabel {

	static alloc(): ALNotificationView; // inherited from NSObject

	static appearance(): ALNotificationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALNotificationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALNotificationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALNotificationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALNotificationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALNotificationView; // inherited from UIAppearance

	static new(): ALNotificationView; // inherited from NSObject

	static showLocalNotification(text: string): void;

	static showNotification(message: string): void;

	static showPromotionalNotifications(text: string): void;

	alMessageObject: ALMessage;

	checkContactId: string;

	contactId: string;

	conversationId: number;

	groupId: number;

	constructor(o: { alMessage: ALMessage; withAlertMessage: string; });

	initWithAlMessageWithAlertMessage(alMessage: ALMessage, alertMessage: string): this;

	nativeNotification(delegate: any): void;

	noDataConnectionNotificationView(): void;

	showGroupLeftMessage(): void;

	showNativeNotificationWithcompletionHandler(handler: (p1: boolean) => void): void;

	updateChatScreen(delegate: UIViewController): void;
}

declare class ALPushAssist extends NSObject {

	static alloc(): ALPushAssist; // inherited from NSObject

	static isViewObjIsMsgContainerVC(viewObj: UIViewController): boolean;

	static isViewObjIsMsgVC(viewObj: UIViewController): boolean;

	static new(): ALPushAssist; // inherited from NSObject

	chatLauncher: ALChatLauncher;

	readonly topViewController: UIViewController;

	assist(notiMsg: string): void;

	isChatViewOnTop(): boolean;

	isContactVCOnTop(): boolean;

	isGroupDetailViewOnTop(): boolean;

	isGroupUpdateVCOnTop(): boolean;

	isMessageContainerOnTop(): boolean;

	isMessageViewOnTop(): boolean;

	isOurViewOnTop(): boolean;

	isUserProfileVCOnTop(): boolean;

	isVOIPViewOnTop(): boolean;
}

declare class ALPushNotificationService extends NSObject {

	static alloc(): ALPushNotificationService; // inherited from NSObject

	static applicationEntersForeground(): void;

	static new(): ALPushNotificationService; // inherited from NSObject

	static userSync(): void;

	alSyncCallService: ALSyncCallService;

	chatLauncher: ALChatLauncher;

	readonly topViewController: UIViewController;

	isApplozicNotification(dictionary: NSDictionary<any, any>): boolean;

	notificationArrivedToApplicationWithDictionary(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	processPushNotificationUpdateUI(dictionary: NSDictionary<any, any>, updateUI: number): boolean;
}

declare class ALReachability extends NSObject {

	static alloc(): ALReachability; // inherited from NSObject

	static new(): ALReachability; // inherited from NSObject

	static reachabilityForInternetConnection(): ALReachability;

	static reachabilityForLocalWiFi(): ALReachability;

	static reachabilityWithAddress(hostAddress: interop.Pointer | interop.Reference<any>): ALReachability;

	static reachabilityWithHostName(hostname: string): ALReachability;

	static reachabilityWithHostname(hostname: string): ALReachability;

	reachabilityBlock: (p1: ALReachability, p2: number) => void;

	reachableBlock: (p1: ALReachability) => void;

	reachableOnWWAN: boolean;

	unreachableBlock: (p1: ALReachability) => void;

	constructor(o: { reachabilityRef: any; });

	connectionRequired(): boolean;

	currentReachabilityFlags(): string;

	currentReachabilityStatus(): AL_NetworkStatus;

	currentReachabilityString(): string;

	initWithReachabilityRef(ref: any): this;

	isConnectionOnDemand(): boolean;

	isConnectionRequired(): boolean;

	isInterventionRequired(): boolean;

	isReachable(): boolean;

	isReachableViaWWAN(): boolean;

	isReachableViaWiFi(): boolean;

	reachabilityFlags(): SCNetworkReachabilityFlags;

	startNotifier(): boolean;

	stopNotifier(): void;
}

declare class ALReceiverUserProfileVC extends UITableViewController {

	static alloc(): ALReceiverUserProfileVC; // inherited from NSObject

	static new(): ALReceiverUserProfileVC; // inherited from NSObject

	alContact: ALContact;

	callButton: UIButton;

	displayName: UILabel;

	emailId: UILabel;

	lastSeen: UILabel;

	phoneNo: UILabel;

	profileImageView: UIImageView;

	userStatus: UILabel;

	callButtonAction(sender: any): void;
}

declare class ALRegisterUserClientService extends NSObject {

	static alloc(): ALRegisterUserClientService; // inherited from NSObject

	static isAppUpdated(): boolean;

	static new(): ALRegisterUserClientService; // inherited from NSObject

	static updateNotificationModeWithCompletion(notificationMode: number, completion: (p1: ALRegistrationResponse, p2: NSError) => void): void;

	connect(): void;

	disconnect(): void;

	initWithCompletionWithCompletion(user: ALUser, completion: (p1: ALRegistrationResponse, p2: NSError) => void): void;

	logoutWithCompletionHandler(completion: (p1: ALAPIResponse, p2: NSError) => void): void;

	syncAccountStatus(): void;

	updateApnDeviceTokenWithCompletionWithCompletion(apnDeviceToken: string, completion: (p1: ALRegistrationResponse, p2: NSError) => void): void;
}

declare class ALRegistrationResponse extends ALJson {

	static alloc(): ALRegistrationResponse; // inherited from NSObject

	static new(): ALRegistrationResponse; // inherited from NSObject

	brokerURL: string;

	contactNumber: string;

	currentTimeStamp: string;

	deviceKey: string;

	displayName: string;

	encryptionKey: string;

	imageLink: string;

	lastSyncTime: string;

	message: string;

	notificationSoundFileName: string;

	pricingPackage: number;

	statusMessage: string;

	userKey: string;

	isRegisteredSuccessfully(): boolean;
}

declare const enum ALReplyType {

	L_NOT_A_REPLY = 0,

	L_A_REPLY = 1,

	L_REPLY_BUT_HIDDEN = 2
}

declare class ALRequestHandler extends NSObject {

	static alloc(): ALRequestHandler; // inherited from NSObject

	static createGETRequestWithUrlStringParamString(urlString: string, paramString: string): NSMutableURLRequest;

	static createPOSTRequestWithUrlStringParamString(urlString: string, paramString: string): NSMutableURLRequest;

	static new(): ALRequestHandler; // inherited from NSObject
}

declare class ALResponseHandler extends NSObject {

	static alloc(): ALResponseHandler; // inherited from NSObject

	static new(): ALResponseHandler; // inherited from NSObject

	static processRequestAndTagWithCompletionHandler(theRequest: NSMutableURLRequest, tag: string, reponseCompletion: (p1: any, p2: NSError) => void): void;
}

declare class ALSendMessageResponse extends ALJson {

	static alloc(): ALSendMessageResponse; // inherited from NSObject

	static new(): ALSendMessageResponse; // inherited from NSObject

	conversationId: number;

	createdAt: number;

	messageKey: string;

	isSuccess(): boolean;
}

declare class ALShowImageViewController extends UIViewController implements ALImageActivityDelegate {

	static alloc(): ALShowImageViewController; // inherited from NSObject

	static new(): ALShowImageViewController; // inherited from NSObject

	alImageActivity: ALImageActivity;

	alMessage: ALMessage;

	contactsViewController: ALNewContactsViewController;

	image: UIImage;

	imageView: UIImageView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showContactsToShareImage(): void;
}

declare class ALSubViewController extends UIViewController {

	static alloc(): ALSubViewController; // inherited from NSObject

	static new(): ALSubViewController; // inherited from NSObject

	msgView: ALMessagesViewController;
}

declare class ALSyncCallService extends NSObject {

	static alloc(): ALSyncCallService; // inherited from NSObject

	static new(): ALSyncCallService; // inherited from NSObject

	syncCall(alMessage: ALMessage): void;

	updateConnectedStatus(alUserDetail: ALUserDetail): void;

	updateDeliveryStatusForContactWithStatus(contactId: string, status: number): void;

	updateMessageDeliveryReportWithStatus(messageKey: string, status: number): void;

	updateTableAtConversationDeleteForContactConversationIDChannelKey(contactID: string, conversationID: string, channelKey: number): void;
}

declare class ALSyncMessageFeed extends ALJson {

	static alloc(): ALSyncMessageFeed; // inherited from NSObject

	static new(): ALSyncMessageFeed; // inherited from NSObject

	currentSyncTime: string;

	deliveredMessageKeys: NSMutableArray<any>;

	isRegisterdIdInvalid: boolean;

	lastSyncTime: number;

	messagesList: NSMutableArray<any>;

	sent: boolean;
}

declare class ALTopicDetail extends ALJson {

	static alloc(): ALTopicDetail; // inherited from NSObject

	static new(): ALTopicDetail; // inherited from NSObject

	fallBackTemplateList: NSMutableArray<any>;

	key1: string;

	key2: string;

	link: string;

	pId: string;

	subtitle: string;

	title: string;

	topicId: string;

	value1: string;

	value2: string;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	initWithDictonary(detailJson: NSDictionary<any, any>): this;

	parseMessage(detailJson: any): void;
}

declare class ALUIConstant extends NSObject {

	static alloc(): ALUIConstant; // inherited from NSObject

	static getAudioCellHeight(): number;

	static getCellHeightAndCellFrame(alMessage: ALMessage, cellFrame: CGRect): number;

	static getChatCellHeightAndCellFrame(alMessage: ALMessage, cellFrame: CGRect): number;

	static getContactCellHeight(): number;

	static getDateCellHeight(): number;

	static getDocumentCellHeight(): number;

	static getFrameSize(): CGSize;

	static getImageCellHeightAndCellFrame(alMessage: ALMessage, cellFrame: CGRect): number;

	static getLocationCellHeight(cellFrame: CGRect): number;

	static getVideoCellHeightAndCellFrame(alMessage: ALMessage, cellFrame: CGRect): number;

	static new(): ALUIConstant; // inherited from NSObject

	static textSizeAndCellFrame(theMessage: ALMessage, cellFrame: CGRect): CGSize;
}

declare class ALUser extends ALJson {

	static alloc(): ALUser; // inherited from NSObject

	static new(): ALUser; // inherited from NSObject

	appModuleName: string;

	appVersionCode: string;

	applicationId: string;

	authenticationTypeId: number;

	contactNumber: string;

	contactType: number;

	countryCode: string;

	deviceApnsType: number;

	deviceType: number;

	displayName: string;

	email: string;

	emailVerified: boolean;

	enableEncryption: boolean;

	features: NSMutableArray<any>;

	imageLink: string;

	notificationMode: number;

	notificationSoundFileName: string;

	password: string;

	prefContactAPI: number;

	registrationId: string;

	roleName: string;

	timezone: string;

	unreadCountType: number;

	userId: string;

	userTypeId: number;

	constructor(o: { userId: string; password: string; email: string; andDisplayName: string; });

	initWithUserIdPasswordEmailAndDisplayName(userId: string, password: string, email: string, displayName: string): this;
}

declare class ALUserBlockResponse extends ALAPIResponse {

	static alloc(): ALUserBlockResponse; // inherited from NSObject

	static new(): ALUserBlockResponse; // inherited from NSObject

	blockByUserList: NSMutableArray<ALUserBlocked>;

	blockedByList: NSMutableArray<any>;

	blockedToUserList: NSMutableArray<any>;

	blockedUserList: NSMutableArray<ALUserBlocked>;
}

declare class ALUserBlocked extends NSObject {

	static alloc(): ALUserBlocked; // inherited from NSObject

	static new(): ALUserBlocked; // inherited from NSObject

	applicationKey: string;

	blockedBy: string;

	blockedTo: string;

	createdAtTime: number;

	id: string;

	updatedAtTime: number;

	userBlocked: boolean;

	userblockedBy: boolean;
}

declare class ALUserClientService extends NSObject {

	static alloc(): ALUserClientService; // inherited from NSObject

	static multiUserSendMessageToContactsToGroupsWithCompletion(messageDictionary: NSDictionary<any, any>, contactIdsArray: NSMutableArray<any>, channelKeysArray: NSMutableArray<any>, completion: (p1: string, p2: NSError) => void): void;

	static new(): ALUserClientService; // inherited from NSObject

	static readCallResettingUnreadCountWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	static userBlockServerCallWithCompletion(userId: string, completion: (p1: string, p2: NSError) => void): void;

	static userBlockSyncServerCallWithCompletion(lastSyncTime: number, completion: (p1: string, p2: NSError) => void): void;

	static userLastSeenDetailWithCompletion(lastSeenAt: number, completionMark: (p1: ALLastSeenSyncFeed) => void): void;

	static userUnblockServerCallWithCompletion(userId: string, completion: (p1: string, p2: NSError) => void): void;

	fetchOnlineContactFromServerWithCompletion(limit: number, completion: (p1: any, p2: NSError) => void): void;

	getListOfRegisteredUsersAndPageSizeWithCompletion(startTime: number, pageSize: number, completion: (p1: ALContactsResponse, p2: NSError) => void): void;

	markConversationAsReadforContactWithCompletion(contactId: string, completion: (p1: string, p2: NSError) => void): void;

	markMessageAsReadforPairedMessageKeyWithCompletion(pairedMessageKey: string, completion: (p1: string, p2: NSError) => void): void;

	subProcessUserDetailServerCallPOSTWithCompletion(ob: ALUserDetailListFeed, completionMark: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	subProcessUserDetailServerCallWithCompletion(paramString: string, completionMark: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	updateApplicationInfoDeatilsWithCompletion(applicationInfoDeatils: AlApplicationInfoFeed, completion: (p1: string, p2: NSError) => void): void;

	updateUserDisplayNameAndUserImageLinkUserStatusWithCompletion(displayName: string, imageLink: string, status: string, completionHandler: (p1: any, p2: NSError) => void): void;

	updateUserDisplayNameWithCompletion(alContact: ALContact, completion: (p1: any, p2: NSError) => void): void;

	userDetailServerCallWithCompletion(contactId: string, completionMark: (p1: ALUserDetail) => void): void;
}

declare class ALUserDefaultsHandler extends NSObject {

	static alloc(): ALUserDefaultsHandler; // inherited from NSObject

	static clearAll(): void;

	static getApnDeviceToken(): string;

	static getAppModuleName(): string;

	static getApplicationKey(): string;

	static getBASEURL(): string;

	static getBoolForKey_isConversationDbSynced(): boolean;

	static getContactViewLoaded(): boolean;

	static getDeviceApnsType(): number;

	static getDeviceKeyString(): string;

	static getDisplayName(): string;

	static getEmailId(): string;

	static getEnableEncryption(): boolean;

	static getEncryptionKey(): string;

	static getFILEURL(): string;

	static getFetchConversationPageSize(): number;

	static getFlagForAllConversationFetched(): boolean;

	static getGoogleMapAPIKey(): string;

	static getLastGroupFilterSyncTIme(): number;

	static getLastMessageListTime(): number;

	static getLastSeenSyncTime(): number;

	static getLastSyncChannelTime(): number;

	static getLastSyncTime(): number;

	static getLoggedInUserStatus(): string;

	static getLoginUserConatactVisibility(): boolean;

	static getMQTTPort(): string;

	static getMQTTURL(): string;

	static getNotificationMode(): number;

	static getNotificationSoundFileName(): string;

	static getPassword(): string;

	static getProcessedNotificationIds(): NSMutableArray<any>;

	static getProfileImageLink(): string;

	static getProfileImageLinkFromServer(): string;

	static getUnreadCountType(): number;

	static getUserAuthenticationTypeId(): number;

	static getUserBlockLastTimeStamp(): number;

	static getUserId(): string;

	static getUserKeyString(): string;

	static getUserPricingPackage(): number;

	static getUserTypeId(): number;

	static isBackButtonHidden(): boolean;

	static isBottomTabBarHidden(): boolean;

	static isContactScrollingIsInProgress(): boolean;

	static isContactServerCallIsDone(): boolean;

	static isConversationContactImageVisible(): boolean;

	static isDebugLogsRequire(): boolean;

	static isLoggedIn(): boolean;

	static isMsgSyncRequired(): boolean;

	static isNavigationRightButtonHidden(): boolean;

	static isNotificationProcessd(withNotificationId: string): boolean;

	static isServerCallDoneForMSGList(contactId: string): boolean;

	static isServerCallDoneForUserInfoForContact(contactId: string): boolean;

	static isShowLoadEarlierOption(constactId: string): boolean;

	static isUserLoggedInUserSubscribedMQTT(): boolean;

	static new(): ALUserDefaultsHandler; // inherited from NSObject

	static setApnDeviceToken(apnDeviceToken: string): void;

	static setAppModuleName(appModuleName: string): void;

	static setApplicationKey(applicationKey: string): void;

	static setBASEURL(baseURL: string): void;

	static setBackButtonHidden(flagValue: boolean): void;

	static setBoolForKey_isConversationDbSynced(value: boolean): void;

	static setBottomTabBarHidden(visibleStatus: boolean): void;

	static setContactScrollingIsInProgress(flag: boolean): void;

	static setContactServerCallIsDone(flag: boolean): void;

	static setContactViewLoadStatus(status: boolean): void;

	static setConversationContactImageVisibility(visibility: boolean): void;

	static setDebugLogsRequire(flag: boolean): void;

	static setDeviceApnsType(type: number): void;

	static setDeviceKeyString(deviceKeyString: string): void;

	static setDisplayName(displayName: string): void;

	static setEmailId(emailId: string): void;

	static setEmailVerified(value: boolean): void;

	static setEnableEncryption(flag: boolean): void;

	static setEncryptionKey(encrptionKey: string): void;

	static setFILEURL(fileURL: string): void;

	static setFetchConversationPageSize(limit: number): void;

	static setFlagForAllConversationFetched(flag: boolean): void;

	static setGoogleMapAPIKey(googleMapAPIKey: string): void;

	static setLastGroupFilterSyncTime(lastSyncTime: number): void;

	static setLastMessageListTime(lastTime: number): void;

	static setLastSeenSyncTime(lastSeenTime: number): void;

	static setLastSyncChannelTime(lastSyncChannelTime: number): void;

	static setLastSyncTime(lastSyncTime: number): void;

	static setLoggedInUserStatus(status: string): void;

	static setLoggedInUserSubscribedMQTT(flag: boolean): void;

	static setLoginUserConatactVisibility(flag: boolean): void;

	static setMQTTPort(portNumber: string): void;

	static setMQTTURL(mqttURL: string): void;

	static setMsgSyncRequired(flag: boolean): void;

	static setNavigationRightButtonHidden(flagValue: boolean): void;

	static setNotificationMode(mode: number): void;

	static setNotificationSoundFileName(notificationSoundFileName: string): void;

	static setPassword(password: string): void;

	static setProcessedNotificationIds(arrayWithIds: NSMutableArray<any>): void;

	static setProfileImageLink(imageLink: string): void;

	static setProfileImageLinkFromServer(imageLink: string): void;

	static setServerCallDoneForMSGListForContactId(value: boolean, constactId: string): void;

	static setServerCallDoneForUserInfoForContact(value: boolean, contactId: string): void;

	static setShowLoadEarlierOptionForContactId(value: boolean, constactId: string): void;

	static setUnreadCountType(mode: number): void;

	static setUserAuthenticationTypeId(type: number): void;

	static setUserBlockLastTimeStamp(lastTimeStamp: number): void;

	static setUserId(userId: string): void;

	static setUserKeyString(userKeyString: string): void;

	static setUserPricingPackage(pricingPackage: number): void;

	static setUserTypeId(type: number): void;
}

declare class ALUserDetail extends ALJson {

	static alloc(): ALUserDetail; // inherited from NSObject

	static new(): ALUserDetail; // inherited from NSObject

	connected: boolean;

	contactNumber: string;

	deletedAtTime: number;

	displayName: string;

	imageLink: string;

	keyArray: NSArray<any>;

	lastSeenAtTime: number;

	unreadCount: number;

	userDetailDBObjectId: NSManagedObjectID;

	userId: string;

	userIdString: string;

	userStatus: string;

	userTypeId: number;

	valueArray: NSArray<any>;

	constructor(o: { dictonary: NSDictionary<any, any>; });

	getDisplayName(): string;

	initWithDictonary(messageDictonary: NSDictionary<any, any>): this;

	parsingDictionaryFromJSON(JSONDictionary: NSDictionary<any, any>): void;

	setUserDetails(jsonString: string): void;

	userDetail(): void;
}

declare class ALUserDetailListFeed extends ALJson {

	static alloc(): ALUserDetailListFeed; // inherited from NSObject

	static new(): ALUserDetailListFeed; // inherited from NSObject

	contactSync: boolean;

	userIdList: NSMutableArray<any>;

	setArray(array: NSMutableArray<any>): void;
}

declare class ALUserProfileVC extends UITableViewController implements UIImagePickerControllerDelegate, UINavigationControllerDelegate {

	static alloc(): ALUserProfileVC; // inherited from NSObject

	static new(): ALUserProfileVC; // inherited from NSObject

	profileImage: UIImageView;

	uploadImageButton: UIButton;

	userDesignationLabel: UILabel;

	userNameLabel: UILabel;

	userView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	notificationToggle(sender: any): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	uploadImageAction(sender: any): void;
}

declare class ALUserService extends NSObject {

	static alloc(): ALUserService; // inherited from NSObject

	static getLastSeenUpdateForUsersWithCompletion(lastSeenAt: number, completionMark: (p1: NSMutableArray<any>) => void): void;

	static markConversationAsReadWithCompletion(contactId: string, completion: (p1: string, p2: NSError) => void): void;

	static markMessageAsReadWithPairedkeyValueWithCompletion(alMessage: ALMessage, pairedkeyValue: string, completion: (p1: string, p2: NSError) => void): void;

	static new(): ALUserService; // inherited from NSObject

	static processContactFromMessagesWithCompletion(messagesArr: NSArray<any>, completionMark: () => void): void;

	static setUnreadCountZeroForContactId(contactId: string): void;

	static updateUserDetailWithCompletion(userId: string, completionMark: (p1: ALUserDetail) => void): void;

	static updateUserDisplayName(alContact: ALContact): void;

	static userDetailServerCallWithCompletion(contactId: string, completionMark: (p1: ALUserDetail) => void): void;

	blockUserSync(lastSyncTime: number): void;

	blockUserWithCompletionHandler(userId: string, completion: (p1: NSError, p2: boolean) => void): void;

	fetchAndupdateUserDetailsWithCompletion(userArray: NSMutableArray<any>, completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	fetchOnlineContactFromServer(completion: (p1: NSMutableArray<any>, p2: NSError) => void): void;

	getListOfBlockedUserByCurrentUser(): NSMutableArray<any>;

	getListOfRegisteredUsersWithCompletion(completion: (p1: NSError) => void): void;

	getTotalUnreadCount(): number;

	getUserDetailWithCompletion(userId: string, completion: (p1: ALContact) => void): void;

	resettingUnreadCountWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	unblockUserWithCompletionHandler(userId: string, completion: (p1: NSError, p2: boolean) => void): void;

	updateBlockUserStatusToLocalDB(userblock: ALUserBlockResponse): void;

	updateUserApplicationInfo(): void;

	updateUserDisplayNameAndUserImageUserStatusWithCompletion(displayName: string, imageLink: string, status: string, completion: (p1: any, p2: NSError) => void): void;
}

declare class ALUtilityClass extends NSObject {

	static alloc(): ALUtilityClass; // inherited from NSObject

	static checkDeviceKeyString(string: string): boolean;

	static colorWithHexString(hex: string): UIColor;

	static displayToastWithMessage(toastMessage: string): void;

	static fileMIMEType(file: string): string;

	static formatTimestampToFormat(timeInterval: number, forMatStr: string): string;

	static generateJsonStringFromDictionary(dictionary: NSDictionary<any, any>): string;

	static getDevieUUID(): string;

	static getFileNameWithCurrentTimeStamp(): string;

	static getImageFromFramworkBundle(UIImageName: string): UIImage;

	static getNameAlphabets(actualName: string): string;

	static getNormalizedImage(rawImage: UIImage): UIImage;

	static getSizeForTextMaxWidthFontFontSize(text: string, width: number, fontName: string, fontSize: number): CGSize;

	static getVOIPMessageImage(alMessage: ALMessage): UIImage;

	static isThisDebugBuild(): boolean;

	static isToday(todayDate: Date): boolean;

	static movementAnimationAndHide(button: UIButton, flag: boolean): void;

	static new(): ALUtilityClass; // inherited from NSObject

	static openApplicationSettings(): void;

	static parsedALChatCostomizationPlistForKey(key: string): any;

	static permissionPopUpWithMessageAndViewController(msgText: string, viewController: UIViewController): void;

	static setAlertControllerFrameAndViewController(alertController: UIAlertController, viewController: UIViewController): void;

	static setImageFromURLAndImageView(urlString: string, imageView: UIImageView): void;

	static setStatusBarStyle(): UIView;

	static setVideoThumbnail(videoFilePATH: string): UIImage;

	static showAlertMessageAndTitle(text: string, title: string): void;

	static stringFromTimeInterval(interval: number): string;

	static subProcessThumbnail(url: NSURL): UIImage;

	static thirdDisplayNotificationTSAndForContactIdWithGroupIdCompletionHandler(toastMessage: string, contactId: string, groupID: number, handler: (p1: boolean) => void): void;

	static thirdDisplayNotificationTSAndForContactIdWithGroupIdDelegate(toastMessage: string, contactId: string, groupID: number, delegate: any): void;

	msgdate: string;

	msgtime: string;

	getExactDate(dateValue: number): void;
}

declare class ALVCFClass extends NSObject implements UIAlertViewDelegate {

	static alloc(): ALVCFClass; // inherited from NSObject

	static new(): ALVCFClass; // inherited from NSObject

	emailID: string;

	firstName: string;

	fullName: string;

	lastName: string;

	phoneNumber: string;

	retrievedImage: UIImage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	alertViewCancel(alertView: UIAlertView): void;

	alertViewClickedButtonAtIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewDidDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewShouldEnableFirstOtherButton(alertView: UIAlertView): boolean;

	alertViewWillDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPresentAlertView(alertView: UIAlertView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	parseVCFData(vcfFilePath: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveContactToDocumentDirectory(person: any): string;

	self(): this;

	showOptionForContact(): void;

	willPresentAlertView(alertView: UIAlertView): void;
}

declare class ALVCardClass extends NSObject implements UIAlertViewDelegate {

	static alloc(): ALVCardClass; // inherited from NSObject

	static new(): ALVCardClass; // inherited from NSObject

	alCNContact: ALContact;

	contactImage: UIImage;

	fullName: string;

	userEMAIL_ID: string;

	userPHONE_NO: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addContact(alVcard: ALVCardClass): void;

	alertViewCancel(alertView: UIAlertView): void;

	alertViewClickedButtonAtIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewDidDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewShouldEnableFirstOtherButton(alertView: UIAlertView): boolean;

	alertViewWillDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPresentAlertView(alertView: UIAlertView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveContactToDocDirectory(contact: any): string;

	self(): this;

	vCardParser(filePath: string): void;

	willPresentAlertView(alertView: UIAlertView): void;
}

declare class ALVOIPCell extends ALChatCell {

	static alloc(): ALVOIPCell; // inherited from NSObject

	static appearance(): ALVOIPCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALVOIPCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALVOIPCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALVOIPCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALVOIPCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALVOIPCell; // inherited from UIAppearance

	static new(): ALVOIPCell; // inherited from NSObject
}

declare class ALVOIPNotificationHandler extends NSObject implements UIApplicationDelegate, UNUserNotificationCenterDelegate {

	static alloc(): ALVOIPNotificationHandler; // inherited from NSObject

	static getMetaDataAndCallAudioAndRoomId(msgType: string, flag: boolean, metaRoomID: string): NSMutableDictionary<any, any>;

	static new(): ALVOIPNotificationHandler; // inherited from NSObject

	static sendMessageWithMetaDataAndReceiverIdAndContentTypeAndMsgText(dictionary: NSMutableDictionary<any, any>, userId: string, contentType: number, msgText: string): void;

	static sharedManager(): ALVOIPNotificationHandler;

	backgroundTask: number;

	baseAV: ALAudioVideoBaseVC;

	presenterVC: UIViewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	window: UIWindow; // inherited from UIApplicationDelegate

	readonly  // inherited from NSObjectProtocol

	applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<any>) => void): boolean;

	applicationDidBecomeActive(application: UIApplication): void;

	applicationDidChangeStatusBarFrame(application: UIApplication, oldStatusBarFrame: CGRect): void;

	applicationDidChangeStatusBarOrientation(application: UIApplication, oldStatusBarOrientation: UIInterfaceOrientation): void;

	applicationDidDecodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	applicationDidEnterBackground(application: UIApplication): void;

	applicationDidFailToContinueUserActivityWithTypeError(application: UIApplication, userActivityType: string, error: NSError): void;

	applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunching(application: UIApplication): void;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveMemoryWarning(application: UIApplication): void;

	applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	applicationDidUpdateUserActivity(application: UIApplication, userActivity: NSUserActivity): void;

	applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

	applicationHandleIntentCompletionHandler(application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void): void;

	applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean;

	applicationHandleWatchKitExtensionRequestReply(application: UIApplication, userInfo: NSDictionary<any, any>, reply: (p1: NSDictionary<any, any>) => void): void;

	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationPerformActionForShortcutItemCompletionHandler(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

	applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationProtectedDataDidBecomeAvailable(application: UIApplication): void;

	applicationProtectedDataWillBecomeUnavailable(application: UIApplication): void;

	applicationShouldAllowExtensionPointIdentifier(application: UIApplication, extensionPointIdentifier: string): boolean;

	applicationShouldRequestHealthAuthorization(application: UIApplication): void;

	applicationShouldRestoreApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldSaveApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationSignificantTimeChange(application: UIApplication): void;

	applicationSupportedInterfaceOrientationsForWindow(application: UIApplication, window: UIWindow): UIInterfaceOrientationMask;

	applicationUserDidAcceptCloudKitShareWithMetadata(application: UIApplication, cloudKitShareMetadata: CKShareMetadata): void;

	applicationViewControllerWithRestorationIdentifierPathCoder(application: UIApplication, identifierComponents: NSArray<any>, coder: NSCoder): UIViewController;

	applicationWillChangeStatusBarFrame(application: UIApplication, newStatusBarFrame: CGRect): void;

	applicationWillChangeStatusBarOrientationDuration(application: UIApplication, newStatusBarOrientation: UIInterfaceOrientation, duration: number): void;

	applicationWillContinueUserActivityWithType(application: UIApplication, userActivityType: string): boolean;

	applicationWillEncodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	applicationWillEnterForeground(application: UIApplication): void;

	applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationWillResignActive(application: UIApplication): void;

	applicationWillTerminate(application: UIApplication): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleAVMsgAndViewController(alMessage: ALMessage, viewSelf: UIViewController): void;

	invalidateCallNotifying(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	launchAVViewControllerAndLaunchForOrRoomIdAndCallAudioAndViewController(userID: string, type: number, roomId: string, flag: boolean, viewSelf: UIViewController): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}

declare class ALVideoCell extends ALMediaBaseCell {

	static alloc(): ALVideoCell; // inherited from NSObject

	static appearance(): ALVideoCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALVideoCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALVideoCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALVideoCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALVideoCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALVideoCell; // inherited from UIAppearance

	static new(): ALVideoCell; // inherited from NSObject

	tapper: UITapGestureRecognizer;

	videoFileURL: NSURL;

	videoPlayFrontView: UIImageView;

	downloadRetryAction(): void;

	setVideoThumbnail(videoFilePATH: string): void;

	videoFullScreen(sender: UITapGestureRecognizer): void;
}

declare const enum AL_NetworkStatus {

	NotReachable = 0,

	ReachableViaWiFi = 2,

	ReachableViaWWAN = 1
}

declare var AL_kReachabilityChangedNotification: string;

declare const enum APP_TRI_STATE {

	STATE_BACKGROUND = -1,

	STATE_INACTIVE = 0,

	STATE_ACTIVE = 1
}

declare const enum AV_LAUNCH_OPTIONS {

	CALL_DIALLED = 0,

	CALL_RECEIVED = 1
}

declare class AlApplicationInfoFeed extends ALJson {

	static alloc(): AlApplicationInfoFeed; // inherited from NSObject

	static new(): AlApplicationInfoFeed; // inherited from NSObject

	applicationKey: string;

	bundleIdentifier: string;

	packageName: string;

	webInfo: string;
}

declare class AlMultipleAttachmentCell extends UICollectionViewCell {

	static alloc(): AlMultipleAttachmentCell; // inherited from NSObject

	static appearance(): AlMultipleAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AlMultipleAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AlMultipleAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AlMultipleAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AlMultipleAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AlMultipleAttachmentCell; // inherited from UIAppearance

	static new(): AlMultipleAttachmentCell; // inherited from NSObject

	imageView: UIImageView;
}

declare var ApplozicVersionNumber: number;

declare var ApplozicVersionNumberVar: number;

declare var ApplozicVersionString: interop.Reference<number>;

declare var ApplozicVersionStringVar: interop.Reference<number>;

declare const enum AuthenticationType {

	CLIENT = 0,

	APPLOZIC = 1,

	FACEBOOK = 2
}

declare const enum CALL_CONTENT_TYPE {

	AV_CALL_CONTENT_TWO = 102,

	AV_CALL_CONTENT_THREE = 103
}

declare const enum CHANNEL_TYPE {

	VIRTUAL = 0,

	PRIVATE = 1,

	PUBLIC = 2,

	SELLER = 3,

	SELF = 4,

	BROADCAST = 5,

	OPEN = 6,

	GROUP_OF_TWO = 7,

	CONTACT_GROUP = 9,

	BROADCAST_ONE_BY_ONE = 106
}

declare var CSToastPositionBottom: string;

declare var CSToastPositionCenter: string;

declare var CSToastPositionTop: string;

declare class DB_CHANNEL extends NSManagedObject {

	static alloc(): DB_CHANNEL; // inherited from NSObject

	static new(): DB_CHANNEL; // inherited from NSObject

	adminId: string;

	channelDisplayName: string;

	channelImageURL: string;

	channelKey: number;

	clientChannelKey: string;

	deletedAtTime: number;

	isLeft: boolean;

	metadata: string;

	notificationAfterTime: number;

	parentClientGroupKey: string;

	parentGroupKey: number;

	type: number;

	unreadCount: number;

	userCount: number;
}

declare class DB_CHANNEL_USER_X extends NSManagedObject {

	static alloc(): DB_CHANNEL_USER_X; // inherited from NSObject

	static new(): DB_CHANNEL_USER_X; // inherited from NSObject

	channelKey: number;

	parentGroupKey: number;

	role: number;

	status: number;

	unreadCount: number;

	userId: string;
}

declare class DB_CONTACT extends NSManagedObject {

	static alloc(): DB_CONTACT; // inherited from NSObject

	static new(): DB_CONTACT; // inherited from NSObject

	block: boolean;

	blockBy: boolean;

	connected: boolean;

	contactImageUrl: string;

	contactNumber: string;

	contactType: number;

	deletedAtTime: number;

	displayName: string;

	email: string;

	fullName: string;

	lastSeenAt: number;

	localImageResourceName: string;

	unreadCount: number;

	userId: string;

	userStatus: string;

	userTypeId: number;
}

declare class DB_ConversationProxy extends NSManagedObject {

	static alloc(): DB_ConversationProxy; // inherited from NSObject

	static new(): DB_ConversationProxy; // inherited from NSObject

	closed: number;

	created: number;

	groupId: number;

	iD: number;

	topicDetailJson: string;

	topicId: string;

	userId: string;
}

declare class DB_FileMetaInfo extends NSManagedObject {

	static alloc(): DB_FileMetaInfo; // inherited from NSObject

	static new(): DB_FileMetaInfo; // inherited from NSObject

	blobKeyString: string;

	contentType: string;

	createdAtTime: number;

	key: string;

	name: string;

	size: string;

	suUserKeyString: string;

	thumbnailUrl: string;
}

declare class DB_Message extends NSManagedObject {

	static alloc(): DB_Message; // inherited from NSObject

	static new(): DB_Message; // inherited from NSObject

	contactId: string;

	contentType: number;

	conversationId: number;

	createdAt: number;

	deletedFlag: number;

	delivered: number;

	deviceKey: string;

	fileMetaInfo: DB_FileMetaInfo;

	filePath: string;

	groupId: number;

	inProgress: number;

	isSentToDevice: number;

	isShared: number;

	isStoredOnDevice: number;

	isUploadFailed: number;

	key: string;

	messageText: string;

	metadata: string;

	msgHidden: number;

	pairedMessageKey: string;

	sentToServer: number;

	status: number;

	to: string;

	type: string;

	userKey: string;
}

declare class KAProgressLabel extends UILabel {

	static alloc(): KAProgressLabel; // inherited from NSObject

	static appearance(): KAProgressLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): KAProgressLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): KAProgressLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): KAProgressLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): KAProgressLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): KAProgressLabel; // inherited from UIAppearance

	static new(): KAProgressLabel; // inherited from NSObject

	cancelButton: UIButton;

	delegate: KAProgressLabelDelegate;

	endDegree: number;

	fillColor: UIColor;

	isEndDegreeUserInteractive: boolean;

	isStartDegreeUserInteractive: boolean;

	labelVCBlock: (p1: KAProgressLabel) => void;

	progress: number;

	progressColor: UIColor;

	progressWidth: number;

	roundedCornersWidth: number;

	startDegree: number;

	trackColor: UIColor;

	trackWidth: number;

	radius(): number;

	setEndDegreeTimingDurationDelay(endDegree: number, timing: TPPropertyAnimationTiming, duration: number, delay: number): void;

	setProgressTimingDurationDelay(progress: number, timing: TPPropertyAnimationTiming, duration: number, delay: number): void;

	setStartDegreeTimingDurationDelay(startDegree: number, timing: TPPropertyAnimationTiming, duration: number, delay: number): void;

	stopAnimations(): void;
}

interface KAProgressLabelDelegate extends NSObjectProtocol {

	cancelAction(): void;
}
declare var KAProgressLabelDelegate: {

	prototype: KAProgressLabelDelegate;
};

declare class MQTTCFSocketDecoder extends NSObject implements NSStreamDelegate {

	static alloc(): MQTTCFSocketDecoder; // inherited from NSObject

	static new(): MQTTCFSocketDecoder; // inherited from NSObject

	delegate: MQTTCFSocketDecoderDelegate;

	error: NSError;

	runLoop: NSRunLoop;

	runLoopMode: string;

	state: MQTTCFSocketDecoderState;

	stream: NSInputStream;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

interface MQTTCFSocketDecoderDelegate extends NSObjectProtocol {

	decoderDidFailWithError(sender: MQTTCFSocketDecoder, error: NSError): void;

	decoderDidOpen(sender: MQTTCFSocketDecoder): void;

	decoderDidReceiveMessage(sender: MQTTCFSocketDecoder, data: NSData): void;

	decoderdidClose(sender: MQTTCFSocketDecoder): void;
}
declare var MQTTCFSocketDecoderDelegate: {

	prototype: MQTTCFSocketDecoderDelegate;
};

declare const enum MQTTCFSocketDecoderState {

	Initializing = 0,

	Ready = 1,

	Error = 2
}

declare class MQTTCFSocketEncoder extends NSObject implements NSStreamDelegate {

	static alloc(): MQTTCFSocketEncoder; // inherited from NSObject

	static new(): MQTTCFSocketEncoder; // inherited from NSObject

	delegate: MQTTCFSocketEncoderDelegate;

	error: NSError;

	runLoop: NSRunLoop;

	runLoopMode: string;

	state: MQTTCFSocketEncoderState;

	stream: NSOutputStream;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	send(data: NSData): boolean;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

interface MQTTCFSocketEncoderDelegate extends NSObjectProtocol {

	encoderDidFailWithError(sender: MQTTCFSocketEncoder, error: NSError): void;

	encoderDidOpen(sender: MQTTCFSocketEncoder): void;

	encoderdidClose(sender: MQTTCFSocketEncoder): void;
}
declare var MQTTCFSocketEncoderDelegate: {

	prototype: MQTTCFSocketEncoderDelegate;
};

declare const enum MQTTCFSocketEncoderState {

	Initializing = 0,

	Ready = 1,

	Error = 2
}

declare class MQTTCFSocketTransport extends MQTTTransport implements MQTTCFSocketDecoderDelegate, MQTTCFSocketEncoderDelegate, MQTTTransportProtocol {

	static alloc(): MQTTCFSocketTransport; // inherited from NSObject

	static clientCertsFromP12Passphrase(path: string, passphrase: string): NSArray<any>;

	static new(): MQTTCFSocketTransport; // inherited from NSObject

	certificates: NSArray<any>;

	host: string;

	port: number;

	tls: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: MQTTTransportDelegate; // inherited from MQTTTransportProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	runLoop: NSRunLoop; // inherited from MQTTTransportProtocol

	runLoopMode: string; // inherited from MQTTTransportProtocol

	state: MQTTTransportState; // inherited from MQTTTransportProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decoderDidFailWithError(sender: MQTTCFSocketDecoder, error: NSError): void;

	decoderDidOpen(sender: MQTTCFSocketDecoder): void;

	decoderDidReceiveMessage(sender: MQTTCFSocketDecoder, data: NSData): void;

	decoderdidClose(sender: MQTTCFSocketDecoder): void;

	encoderDidFailWithError(sender: MQTTCFSocketEncoder, error: NSError): void;

	encoderDidOpen(sender: MQTTCFSocketEncoder): void;

	encoderdidClose(sender: MQTTCFSocketEncoder): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	send(data: NSData): boolean;
}

declare const enum MQTTCommandType {

	T_None = 0,

	TConnect = 1,

	TConnack = 2,

	TPublish = 3,

	TPuback = 4,

	TPubrec = 5,

	TPubrel = 6,

	TPubcomp = 7,

	TSubscribe = 8,

	TSuback = 9,

	TUnsubscribe = 10,

	TUnsuback = 11,

	TPingreq = 12,

	TPingresp = 13,

	TDisconnect = 14
}

declare const enum MQTTConnectReturnCode {

	Accepted = 0,

	RefusedUnacceptableProtocolVersion = 1,

	RefusedIdentiferRejected = 2,

	RefusedServerUnavailable = 3,

	RefusedBadUserNameOrPassword = 4,

	RefusedNotAuthorized = 5
}

declare class MQTTCoreDataFlow extends NSObject implements MQTTFlowProtocol {

	static alloc(): MQTTCoreDataFlow; // inherited from NSObject

	static new(): MQTTCoreDataFlow; // inherited from NSObject

	clientId: string; // inherited from MQTTFlowProtocol

	commandType: number; // inherited from MQTTFlowProtocol

	data: NSData; // inherited from MQTTFlowProtocol

	deadline: Date; // inherited from MQTTFlowProtocol

	incomingFlag: number; // inherited from MQTTFlowProtocol

	messageId: number; // inherited from MQTTFlowProtocol

	qosLevel: number; // inherited from MQTTFlowProtocol

	retainedFlag: number; // inherited from MQTTFlowProtocol

	topic: string; // inherited from MQTTFlowProtocol
}

declare class MQTTCoreDataPersistence extends NSObject implements MQTTPersistence {

	static alloc(): MQTTCoreDataPersistence; // inherited from NSObject

	static new(): MQTTCoreDataPersistence; // inherited from NSObject

	maxMessages: number; // inherited from MQTTPersistence

	maxSize: number; // inherited from MQTTPersistence

	maxWindowSize: number; // inherited from MQTTPersistence

	persistent: boolean; // inherited from MQTTPersistence

	allFlowsforClientIdIncomingFlag(clientId: string, incomingFlag: boolean): NSArray<any>;

	deleteAllFlowsForClientId(clientId: string): void;

	deleteFlow(flow: MQTTFlowProtocol): void;

	flowforClientIdIncomingFlagMessageId(clientId: string, incomingFlag: boolean, messageId: number): MQTTFlowProtocol;

	storeMessageForClientIdTopicDataRetainFlagQosMsgIdIncomingFlagCommandTypeDeadline(clientId: string, topic: string, data: NSData, retainFlag: boolean, qos: MQTTQosLevel, msgId: number, incomingFlag: boolean, commandType: number, deadline: Date): MQTTFlowProtocol;

	sync(): void;

	windowSize(clientId: string): number;
}

declare class MQTTDecoder extends NSObject implements NSStreamDelegate {

	static alloc(): MQTTDecoder; // inherited from NSObject

	static new(): MQTTDecoder; // inherited from NSObject

	dataBuffer: NSMutableData;

	delegate: MQTTDecoderDelegate;

	length: number;

	lengthMultiplier: number;

	offset: number;

	runLoop: NSRunLoop;

	runLoopMode: string;

	state: MQTTDecoderState;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decodeMessage(data: NSData): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

interface MQTTDecoderDelegate extends NSObjectProtocol {

	decoderDidReceiveMessage(sender: MQTTDecoder, data: NSData): void;

	decoderHandleEventError(sender: MQTTDecoder, eventCode: MQTTDecoderEvent, error: NSError): void;
}
declare var MQTTDecoderDelegate: {

	prototype: MQTTDecoderDelegate;
};

declare const enum MQTTDecoderEvent {

	ProtocolError = 0,

	ConnectionClosed = 1,

	ConnectionError = 2
}

declare const enum MQTTDecoderState {

	Initializing = 0,

	DecodingHeader = 1,

	DecodingLength = 2,

	DecodingData = 3,

	ConnectionClosed = 4,

	ConnectionError = 5,

	ProtocolError = 6
}

declare class MQTTFlow extends NSManagedObject implements MQTTFlowProtocol {

	static alloc(): MQTTFlow; // inherited from NSObject

	static new(): MQTTFlow; // inherited from NSObject

	clientId: string; // inherited from MQTTFlowProtocol

	commandType: number; // inherited from MQTTFlowProtocol

	data: NSData; // inherited from MQTTFlowProtocol

	deadline: Date; // inherited from MQTTFlowProtocol

	incomingFlag: number; // inherited from MQTTFlowProtocol

	messageId: number; // inherited from MQTTFlowProtocol

	qosLevel: number; // inherited from MQTTFlowProtocol

	retainedFlag: number; // inherited from MQTTFlowProtocol

	topic: string; // inherited from MQTTFlowProtocol
}

interface MQTTFlowProtocol {

	clientId: string;

	commandType: number;

	data: NSData;

	deadline: Date;

	incomingFlag: number;

	messageId: number;

	qosLevel: number;

	retainedFlag: number;

	topic: string;
}
declare var MQTTFlowProtocol: {

	prototype: MQTTFlowProtocol;
};

declare class MQTTInMemoryFlow extends NSObject implements MQTTFlowProtocol {

	static alloc(): MQTTInMemoryFlow; // inherited from NSObject

	static new(): MQTTInMemoryFlow; // inherited from NSObject

	clientId: string; // inherited from MQTTFlowProtocol

	commandType: number; // inherited from MQTTFlowProtocol

	data: NSData; // inherited from MQTTFlowProtocol

	deadline: Date; // inherited from MQTTFlowProtocol

	incomingFlag: number; // inherited from MQTTFlowProtocol

	messageId: number; // inherited from MQTTFlowProtocol

	qosLevel: number; // inherited from MQTTFlowProtocol

	retainedFlag: number; // inherited from MQTTFlowProtocol

	topic: string; // inherited from MQTTFlowProtocol
}

declare class MQTTInMemoryPersistence extends NSObject implements MQTTPersistence {

	static alloc(): MQTTInMemoryPersistence; // inherited from NSObject

	static new(): MQTTInMemoryPersistence; // inherited from NSObject

	maxMessages: number; // inherited from MQTTPersistence

	maxSize: number; // inherited from MQTTPersistence

	maxWindowSize: number; // inherited from MQTTPersistence

	persistent: boolean; // inherited from MQTTPersistence

	allFlowsforClientIdIncomingFlag(clientId: string, incomingFlag: boolean): NSArray<any>;

	deleteAllFlowsForClientId(clientId: string): void;

	deleteFlow(flow: MQTTFlowProtocol): void;

	flowforClientIdIncomingFlagMessageId(clientId: string, incomingFlag: boolean, messageId: number): MQTTFlowProtocol;

	storeMessageForClientIdTopicDataRetainFlagQosMsgIdIncomingFlagCommandTypeDeadline(clientId: string, topic: string, data: NSData, retainFlag: boolean, qos: MQTTQosLevel, msgId: number, incomingFlag: boolean, commandType: number, deadline: Date): MQTTFlowProtocol;

	sync(): void;

	windowSize(clientId: string): number;
}

declare class MQTTMessage extends NSObject {

	static alloc(): MQTTMessage; // inherited from NSObject

	static connectMessageWithClientIdUserNamePasswordKeepAliveCleanSessionWillWillTopicWillMsgWillQoSWillRetainProtocolLevel(clientId: string, userName: string, password: string, keeplive: number, cleanSessionFlag: boolean, will: boolean, willTopic: string, willData: NSData, willQoS: MQTTQosLevel, willRetainFlag: boolean, protocolLevel: number): MQTTMessage;

	static disconnectMessage(): MQTTMessage;

	static messageFromData(data: NSData): MQTTMessage;

	static new(): MQTTMessage; // inherited from NSObject

	static pingreqMessage(): MQTTMessage;

	static pubackMessageWithMessageId(msgId: number): MQTTMessage;

	static pubcompMessageWithMessageId(msgId: number): MQTTMessage;

	static publishMessageWithDataOnTopicQosMsgIdRetainFlagDupFlag(payload: NSData, topic: string, qosLevel: MQTTQosLevel, msgId: number, retain: boolean, dup: boolean): MQTTMessage;

	static pubrecMessageWithMessageId(msgId: number): MQTTMessage;

	static pubrelMessageWithMessageId(msgId: number): MQTTMessage;

	static subscribeMessageWithMessageIdTopics(msgId: number, topics: NSDictionary<any, any>): MQTTMessage;

	static unsubscribeMessageWithMessageIdTopics(msgId: number, topics: NSArray<any>): MQTTMessage;

	data: NSData;

	dupFlag: boolean;

	mid: number;

	qos: MQTTQosLevel;

	retainFlag: boolean;

	type: MQTTCommandType;

	constructor(o: { type: MQTTCommandType; });

	constructor(o: { type: MQTTCommandType; data: NSData; });

	constructor(o: { type: MQTTCommandType; qos: MQTTQosLevel; data: NSData; });

	constructor(o: { type: MQTTCommandType; qos: MQTTQosLevel; retainFlag: boolean; dupFlag: boolean; data: NSData; });

	initWithType(type: MQTTCommandType): this;

	initWithTypeData(type: MQTTCommandType, data: NSData): this;

	initWithTypeQosData(type: MQTTCommandType, qos: MQTTQosLevel, data: NSData): this;

	initWithTypeQosRetainFlagDupFlagData(type: MQTTCommandType, qos: MQTTQosLevel, retainFlag: boolean, dupFlag: boolean, data: NSData): this;

	wireFormat(): NSData;
}

interface MQTTPersistence {

	maxMessages: number;

	maxSize: number;

	maxWindowSize: number;

	persistent: boolean;

	allFlowsforClientIdIncomingFlag(clientId: string, incomingFlag: boolean): NSArray<any>;

	deleteAllFlowsForClientId(clientId: string): void;

	deleteFlow(flow: MQTTFlowProtocol): void;

	flowforClientIdIncomingFlagMessageId(clientId: string, incomingFlag: boolean, messageId: number): MQTTFlowProtocol;

	storeMessageForClientIdTopicDataRetainFlagQosMsgIdIncomingFlagCommandTypeDeadline(clientId: string, topic: string, data: NSData, retainFlag: boolean, qos: MQTTQosLevel, msgId: number, incomingFlag: boolean, commandType: number, deadline: Date): MQTTFlowProtocol;

	sync(): void;

	windowSize(clientId: string): number;
}
declare var MQTTPersistence: {

	prototype: MQTTPersistence;
};

declare const enum MQTTProtocolVersion {

	Version31 = 3,

	Version311 = 4
}

declare const enum MQTTQosLevel {

	AtMostOnce = 0,

	AtLeastOnce = 1,

	ExactlyOnce = 2
}

declare const enum MQTTSSLPinningMode {

	None = 0,

	PublicKey = 1,

	Certificate = 2
}

declare class MQTTSSLSecurityPolicy extends NSObject {

	static alloc(): MQTTSSLSecurityPolicy; // inherited from NSObject

	static defaultPolicy(): MQTTSSLSecurityPolicy;

	static new(): MQTTSSLSecurityPolicy; // inherited from NSObject

	static policyWithPinningMode(pinningMode: MQTTSSLPinningMode): MQTTSSLSecurityPolicy;

	readonly SSLPinningMode: MQTTSSLPinningMode;

	allowInvalidCertificates: boolean;

	pinnedCertificates: NSArray<any>;

	validatesCertificateChain: boolean;

	validatesDomainName: boolean;

	evaluateServerTrustForDomain(serverTrust: any, domain: string): boolean;
}

declare class MQTTSSLSecurityPolicyDecoder extends MQTTCFSocketDecoder {

	static alloc(): MQTTSSLSecurityPolicyDecoder; // inherited from NSObject

	static new(): MQTTSSLSecurityPolicyDecoder; // inherited from NSObject

	securityDomain: string;

	securityPolicy: MQTTSSLSecurityPolicy;
}

declare class MQTTSSLSecurityPolicyEncoder extends MQTTCFSocketEncoder {

	static alloc(): MQTTSSLSecurityPolicyEncoder; // inherited from NSObject

	static new(): MQTTSSLSecurityPolicyEncoder; // inherited from NSObject

	securityDomain: string;

	securityPolicy: MQTTSSLSecurityPolicy;
}

declare class MQTTSSLSecurityPolicyTransport extends MQTTCFSocketTransport {

	static alloc(): MQTTSSLSecurityPolicyTransport; // inherited from NSObject

	static new(): MQTTSSLSecurityPolicyTransport; // inherited from NSObject

	securityPolicy: MQTTSSLSecurityPolicy;
}

declare class MQTTSession extends NSObject {

	static alloc(): MQTTSession; // inherited from NSObject

	static new(): MQTTSession; // inherited from NSObject

	certificates: NSArray<any>;

	cleanSessionFlag: boolean;

	clientId: string;

	connectHandler: (p1: NSError) => void;

	connectMessage: MQTTMessage;

	connectionHandler: (p1: MQTTSessionEvent) => void;

	delegate: MQTTSessionDelegate;

	keepAliveInterval: number;

	messageHandler: (p1: NSData, p2: string) => void;

	password: string;

	persistence: MQTTPersistence;

	protocolLevel: MQTTProtocolVersion;

	runLoop: NSRunLoop;

	runLoopMode: string;

	securityPolicy: MQTTSSLSecurityPolicy;

	readonly sessionPresent: boolean;

	readonly status: MQTTSessionStatus;

	transport: MQTTTransportProtocol;

	userName: string;

	willFlag: boolean;

	willMsg: NSData;

	willQoS: MQTTQosLevel;

	willRetainFlag: boolean;

	willTopic: string;

	constructor(o: { clientId: string; });

	constructor(o: { clientId: string; keepAlive: number; connectMessage: MQTTMessage; runLoop: NSRunLoop; forMode: string; });

	constructor(o: { clientId: string; runLoop: NSRunLoop; forMode: string; });

	constructor(o: { clientId: string; userName: string; password: string; });

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; });

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; runLoop: NSRunLoop; forMode: string; });

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; willTopic: string; willMsg: NSData; willQoS: number; willRetainFlag: boolean; });

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; willTopic: string; willMsg: NSData; willQoS: number; willRetainFlag: boolean; runLoop: NSRunLoop; forMode: string; });

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; will: boolean; willTopic: string; willMsg: NSData; willQoS: MQTTQosLevel; willRetainFlag: boolean; protocolLevel: number; runLoop: NSRunLoop; forMode: string; });

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; will: boolean; willTopic: string; willMsg: NSData; willQoS: MQTTQosLevel; willRetainFlag: boolean; protocolLevel: number; runLoop: NSRunLoop; forMode: string; securityPolicy: MQTTSSLSecurityPolicy; });

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; will: boolean; willTopic: string; willMsg: NSData; willQoS: MQTTQosLevel; willRetainFlag: boolean; protocolLevel: number; runLoop: NSRunLoop; forMode: string; securityPolicy: MQTTSSLSecurityPolicy; certificates: NSArray<any>; });

	constructor(o: { clientId: string; userName: string; password: string; runLoop: NSRunLoop; forMode: string; });

	close(): void;

	closeAndWait(timeout: number): void;

	closeWithDisconnectHandler(disconnectHandler: (p1: NSError) => void): void;

	connect(): void;

	connectAndWaitTimeout(timeout: number): boolean;

	connectAndWaitToHostPortUsingSSL(host: string, port: number, usingSSL: boolean): boolean;

	connectAndWaitToHostPortUsingSSLTimeout(host: string, port: number, usingSSL: boolean, timeout: number): boolean;

	connectToHostPort(ip: string, port: number): void;

	connectToHostPortUsingSSL(host: string, port: number, usingSSL: boolean): void;

	connectToHostPortUsingSSLConnectHandler(host: string, port: number, usingSSL: boolean, connectHandler: (p1: NSError) => void): void;

	connectToHostPortUsingSSLWithConnectionHandlerMessageHandler(ip: string, port: number, usingSSL: boolean, connHandler: (p1: MQTTSessionEvent) => void, messHandler: (p1: NSData, p2: string) => void): void;

	connectToHostPortWithConnectionHandlerMessageHandler(ip: string, port: number, connHandler: (p1: MQTTSessionEvent) => void, messHandler: (p1: NSData, p2: string) => void): void;

	connectWithConnectHandler(connectHandler: (p1: NSError) => void): void;

	disconnect(): void;

	initWithClientId(theClientId: string): this;

	initWithClientIdKeepAliveConnectMessageRunLoopForMode(theClientId: string, theKeepAliveInterval: number, theConnectMessage: MQTTMessage, theRunLoop: NSRunLoop, theRunLoopMode: string): this;

	initWithClientIdRunLoopForMode(theClientId: string, theRunLoop: NSRunLoop, theRunLoopMode: string): this;

	initWithClientIdUserNamePassword(theClientId: string, theUsername: string, thePassword: string): this;

	initWithClientIdUserNamePasswordKeepAliveCleanSession(theClientId: string, theUsername: string, thePassword: string, theKeepAliveInterval: number, cleanSessionFlag: boolean): this;

	initWithClientIdUserNamePasswordKeepAliveCleanSessionRunLoopForMode(theClientId: string, theUsername: string, thePassword: string, theKeepAlive: number, theCleanSessionFlag: boolean, theRunLoop: NSRunLoop, theMode: string): this;

	initWithClientIdUserNamePasswordKeepAliveCleanSessionWillTopicWillMsgWillQoSWillRetainFlag(theClientId: string, theUserName: string, thePassword: string, theKeepAliveInterval: number, theCleanSessionFlag: boolean, willTopic: string, willMsg: NSData, willQoS: number, willRetainFlag: boolean): this;

	initWithClientIdUserNamePasswordKeepAliveCleanSessionWillTopicWillMsgWillQoSWillRetainFlagRunLoopForMode(theClientId: string, theUserName: string, thePassword: string, theKeepAliveInterval: number, theCleanSessionFlag: boolean, willTopic: string, willMsg: NSData, willQoS: number, willRetainFlag: boolean, theRunLoop: NSRunLoop, theRunLoopMode: string): this;

	initWithClientIdUserNamePasswordKeepAliveCleanSessionWillWillTopicWillMsgWillQoSWillRetainFlagProtocolLevelRunLoopForMode(clientId: string, userName: string, password: string, keepAliveInterval: number, cleanSessionFlag: boolean, willFlag: boolean, willTopic: string, willMsg: NSData, willQoS: MQTTQosLevel, willRetainFlag: boolean, protocolLevel: number, runLoop: NSRunLoop, runLoopMode: string): this;

	initWithClientIdUserNamePasswordKeepAliveCleanSessionWillWillTopicWillMsgWillQoSWillRetainFlagProtocolLevelRunLoopForModeSecurityPolicy(clientId: string, userName: string, password: string, keepAliveInterval: number, cleanSessionFlag: boolean, willFlag: boolean, willTopic: string, willMsg: NSData, willQoS: MQTTQosLevel, willRetainFlag: boolean, protocolLevel: number, runLoop: NSRunLoop, runLoopMode: string, securityPolicy: MQTTSSLSecurityPolicy): this;

	initWithClientIdUserNamePasswordKeepAliveCleanSessionWillWillTopicWillMsgWillQoSWillRetainFlagProtocolLevelRunLoopForModeSecurityPolicyCertificates(clientId: string, userName: string, password: string, keepAliveInterval: number, cleanSessionFlag: boolean, willFlag: boolean, willTopic: string, willMsg: NSData, willQoS: MQTTQosLevel, willRetainFlag: boolean, protocolLevel: number, runLoop: NSRunLoop, runLoopMode: string, securityPolicy: MQTTSSLSecurityPolicy, certificates: NSArray<any>): this;

	initWithClientIdUserNamePasswordRunLoopForMode(theClientId: string, theUserName: string, thePassword: string, theRunLoop: NSRunLoop, theRunLoopMode: string): this;

	publishAndWaitDataOnTopicRetainQos(data: NSData, topic: string, retainFlag: boolean, qos: MQTTQosLevel): boolean;

	publishAndWaitDataOnTopicRetainQosTimeout(data: NSData, topic: string, retainFlag: boolean, qos: MQTTQosLevel, timeout: number): boolean;

	publishDataAtLeastOnceOnTopic(theData: NSData, theTopic: string): void;

	publishDataAtLeastOnceOnTopicRetain(theData: NSData, theTopic: string, retainFlag: boolean): void;

	publishDataAtMostOnceOnTopic(theData: NSData, theTopic: string): void;

	publishDataAtMostOnceOnTopicRetain(theData: NSData, theTopic: string, retainFlag: boolean): void;

	publishDataExactlyOnceOnTopic(theData: NSData, theTopic: string): void;

	publishDataExactlyOnceOnTopicRetain(theData: NSData, theTopic: string, retainFlag: boolean): void;

	publishDataOnTopic(theData: NSData, theTopic: string): void;

	publishDataOnTopicRetainQos(data: NSData, topic: string, retainFlag: boolean, qos: MQTTQosLevel): number;

	publishDataOnTopicRetainQosPublishHandler(data: NSData, topic: string, retainFlag: boolean, qos: MQTTQosLevel, publishHandler: (p1: NSError) => void): number;

	publishJsonOnTopic(payload: any, theTopic: string): void;

	subscribeAndWaitToTopicAtLevel(topic: string, qosLevel: MQTTQosLevel): boolean;

	subscribeAndWaitToTopicAtLevelTimeout(topic: string, qosLevel: MQTTQosLevel, timeout: number): boolean;

	subscribeAndWaitToTopics(topics: NSDictionary<string, number>): boolean;

	subscribeAndWaitToTopicsTimeout(topics: NSDictionary<string, number>, timeout: number): boolean;

	subscribeToTopicAtLevel(topic: string, qosLevel: MQTTQosLevel): number;

	subscribeToTopicAtLevelSubscribeHandler(topic: string, qosLevel: MQTTQosLevel, subscribeHandler: (p1: NSError, p2: NSArray<number>) => void): number;

	subscribeToTopics(topics: NSDictionary<string, number>): number;

	subscribeToTopicsSubscribeHandler(topics: NSDictionary<string, number>, subscribeHandler: (p1: NSError, p2: NSArray<number>) => void): number;

	subscribeTopic(theTopic: string): void;

	unsubscribeAndWaitTopic(topic: string): boolean;

	unsubscribeAndWaitTopicTimeout(topic: string, timeout: number): boolean;

	unsubscribeAndWaitTopics(topics: NSArray<string>): boolean;

	unsubscribeAndWaitTopicsTimeout(topics: NSArray<string>, timeout: number): boolean;

	unsubscribeTopic(topic: string): number;

	unsubscribeTopicUnsubscribeHandler(topic: string, unsubscribeHandler: (p1: NSError) => void): number;

	unsubscribeTopics(topics: NSArray<string>): number;

	unsubscribeTopicsUnsubscribeHandler(topics: NSArray<string>, unsubscribeHandler: (p1: NSError) => void): number;
}

interface MQTTSessionDelegate extends NSObjectProtocol {

	bufferedFlowingInFlowingOut?(session: MQTTSession, flowingIn: number, flowingOut: number): void;

	bufferedQueuedFlowingInFlowingOut?(session: MQTTSession, queued: number, flowingIn: number, flowingOut: number): void;

	connected?(session: MQTTSession): void;

	connectedSessionPresent?(session: MQTTSession, sessionPresent: boolean): void;

	connectionClosed?(session: MQTTSession): void;

	connectionErrorError?(session: MQTTSession, error: NSError): void;

	connectionRefusedError?(session: MQTTSession, error: NSError): void;

	handleEventEventError?(session: MQTTSession, eventCode: MQTTSessionEvent, error: NSError): void;

	ignoreReceivedTypeQosRetainedDupedMidData?(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): boolean;

	messageDeliveredMsgID?(session: MQTTSession, msgID: number): void;

	newMessageDataOnTopicQosRetainedMid?(session: MQTTSession, data: NSData, topic: string, qos: MQTTQosLevel, retained: boolean, mid: number): void;

	newMessageWithFeedbackDataOnTopicQosRetainedMid?(session: MQTTSession, data: NSData, topic: string, qos: MQTTQosLevel, retained: boolean, mid: number): boolean;

	protocolErrorError?(session: MQTTSession, error: NSError): void;

	receivedTypeQosRetainedDupedMidData?(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): void;

	sendingTypeQosRetainedDupedMidData?(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): void;

	sessionHandleEvent?(session: MQTTSession, eventCode: MQTTSessionEvent): void;

	sessionNewMessageOnTopic?(session: MQTTSession, data: NSData, topic: string): void;

	subAckReceivedMsgIDGrantedQoss?(session: MQTTSession, msgID: number, qoss: NSArray<number>): void;

	unsubAckReceivedMsgID?(session: MQTTSession, msgID: number): void;
}
declare var MQTTSessionDelegate: {

	prototype: MQTTSessionDelegate;
};

declare const enum MQTTSessionError {

	ConnectionRefused = -8,

	IllegalMessageReceived = -7,

	DroppingOutgoingMessage = -6,

	NoResponse = -6,

	EncoderNotReady = -5,

	InvalidConnackReceived = -2,

	NoConnackReceived = -1,

	ConnackUnacceptableProtocolVersion = 1,

	ConnackIdentifierRejected = 2,

	ConnackServeUnavailable = 3,

	ConnackBadUsernameOrPassword = 4,

	ConnackNotAuthorized = 5,

	ConnackReserved = 6
}

declare var MQTTSessionErrorDomain: string;

declare const enum MQTTSessionEvent {

	Connected = 0,

	ConnectionRefused = 1,

	ConnectionClosed = 2,

	ConnectionError = 3,

	ProtocolError = 4,

	ConnectionClosedByBroker = 5
}

declare class MQTTSessionManager extends NSObject implements MQTTSessionDelegate {

	static alloc(): MQTTSessionManager; // inherited from NSObject

	static new(): MQTTSessionManager; // inherited from NSObject

	delegate: MQTTSessionManagerDelegate;

	readonly effectiveSubscriptions: NSDictionary<string, number>;

	readonly lastErrorCode: NSError;

	readonly state: MQTTSessionManagerState;

	subscriptions: NSDictionary<string, number>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { persistence: boolean; maxWindowSize: number; maxMessages: number; maxSize: number; });

	constructor(o: { persistence: boolean; maxWindowSize: number; maxMessages: number; maxSize: number; connectInForeground: boolean; });

	bufferedFlowingInFlowingOut(session: MQTTSession, flowingIn: number, flowingOut: number): void;

	bufferedQueuedFlowingInFlowingOut(session: MQTTSession, queued: number, flowingIn: number, flowingOut: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectToLast(): void;

	connectToPortTlsKeepaliveCleanAuthUserPassWillTopicWillWillQosWillRetainFlagWithClientId(host: string, port: number, tls: boolean, keepalive: number, clean: boolean, auth: boolean, user: string, pass: string, willTopic: string, will: NSData, willQos: MQTTQosLevel, willRetainFlag: boolean, clientId: string): void;

	connectToPortTlsKeepaliveCleanAuthUserPassWillWillTopicWillMsgWillQosWillRetainFlagWithClientId(host: string, port: number, tls: boolean, keepalive: number, clean: boolean, auth: boolean, user: string, pass: string, will: boolean, willTopic: string, willMsg: NSData, willQos: MQTTQosLevel, willRetainFlag: boolean, clientId: string): void;

	connectToPortTlsKeepaliveCleanAuthUserPassWillWillTopicWillMsgWillQosWillRetainFlagWithClientIdSecurityPolicyCertificates(host: string, port: number, tls: boolean, keepalive: number, clean: boolean, auth: boolean, user: string, pass: string, will: boolean, willTopic: string, willMsg: NSData, willQos: MQTTQosLevel, willRetainFlag: boolean, clientId: string, securityPolicy: MQTTSSLSecurityPolicy, certificates: NSArray<any>): void;

	connectToPortTlsKeepaliveCleanAuthUserPassWillWillTopicWillMsgWillQosWillRetainFlagWithClientIdSecurityPolicyCertificatesProtocolLevel(host: string, port: number, tls: boolean, keepalive: number, clean: boolean, auth: boolean, user: string, pass: string, will: boolean, willTopic: string, willMsg: NSData, willQos: MQTTQosLevel, willRetainFlag: boolean, clientId: string, securityPolicy: MQTTSSLSecurityPolicy, certificates: NSArray<any>, protocolLevel: MQTTProtocolVersion): void;

	connected(session: MQTTSession): void;

	connectedSessionPresent(session: MQTTSession, sessionPresent: boolean): void;

	connectionClosed(session: MQTTSession): void;

	connectionErrorError(session: MQTTSession, error: NSError): void;

	connectionRefusedError(session: MQTTSession, error: NSError): void;

	disconnect(): void;

	handleEventEventError(session: MQTTSession, eventCode: MQTTSessionEvent, error: NSError): void;

	ignoreReceivedTypeQosRetainedDupedMidData(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): boolean;

	initWithPersistenceMaxWindowSizeMaxMessagesMaxSize(persistent: boolean, maxWindowSize: number, maxMessages: number, maxSize: number): this;

	initWithPersistenceMaxWindowSizeMaxMessagesMaxSizeConnectInForeground(persistent: boolean, maxWindowSize: number, maxMessages: number, maxSize: number, connectInForeground: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	messageDeliveredMsgID(session: MQTTSession, msgID: number): void;

	newMessageDataOnTopicQosRetainedMid(session: MQTTSession, data: NSData, topic: string, qos: MQTTQosLevel, retained: boolean, mid: number): void;

	newMessageWithFeedbackDataOnTopicQosRetainedMid(session: MQTTSession, data: NSData, topic: string, qos: MQTTQosLevel, retained: boolean, mid: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	protocolErrorError(session: MQTTSession, error: NSError): void;

	receivedTypeQosRetainedDupedMidData(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendDataTopicQosRetain(data: NSData, topic: string, qos: MQTTQosLevel, retainFlag: boolean): number;

	sendingTypeQosRetainedDupedMidData(session: MQTTSession, type: MQTTCommandType, qos: MQTTQosLevel, retained: boolean, duped: boolean, mid: number, data: NSData): void;

	sessionHandleEvent(session: MQTTSession, eventCode: MQTTSessionEvent): void;

	sessionNewMessageOnTopic(session: MQTTSession, data: NSData, topic: string): void;

	subAckReceivedMsgIDGrantedQoss(session: MQTTSession, msgID: number, qoss: NSArray<number>): void;

	unsubAckReceivedMsgID(session: MQTTSession, msgID: number): void;
}

interface MQTTSessionManagerDelegate extends NSObjectProtocol {

	handleMessageOnTopicRetained(data: NSData, topic: string, retained: boolean): void;

	messageDelivered?(msgID: number): void;

	sessionManagerDidChangeState?(sessonManager: MQTTSessionManager, newState: MQTTSessionManagerState): void;
}
declare var MQTTSessionManagerDelegate: {

	prototype: MQTTSessionManagerDelegate;
};

declare const enum MQTTSessionManagerState {

	Starting = 0,

	Connecting = 1,

	Error = 2,

	Connected = 3,

	Closing = 4,

	Closed = 5
}

declare const enum MQTTSessionStatus {

	Created = 0,

	Connecting = 1,

	Connected = 2,

	Disconnecting = 3,

	Closed = 4,

	Error = 5
}

declare class MQTTTransport extends NSObject implements MQTTTransportProtocol {

	static alloc(): MQTTTransport; // inherited from NSObject

	static new(): MQTTTransport; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: MQTTTransportDelegate; // inherited from MQTTTransportProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	runLoop: NSRunLoop; // inherited from MQTTTransportProtocol

	runLoopMode: string; // inherited from MQTTTransportProtocol

	state: MQTTTransportState; // inherited from MQTTTransportProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	send(data: NSData): boolean;
}

interface MQTTTransportDelegate extends NSObjectProtocol {

	mqttTransportDidClose?(mqttTransport: MQTTTransportProtocol): void;

	mqttTransportDidFailWithError?(mqttTransport: MQTTTransportProtocol, error: NSError): void;

	mqttTransportDidOpen?(mqttTransport: MQTTTransportProtocol): void;

	mqttTransportDidReceiveMessage(mqttTransport: MQTTTransportProtocol, message: NSData): void;
}
declare var MQTTTransportDelegate: {

	prototype: MQTTTransportDelegate;
};

interface MQTTTransportProtocol extends NSObjectProtocol {

	delegate: MQTTTransportDelegate;

	runLoop: NSRunLoop;

	runLoopMode: string;

	state: MQTTTransportState;

	close(): void;

	open(): void;

	send(data: NSData): boolean;
}
declare var MQTTTransportProtocol: {

	prototype: MQTTTransportProtocol;
};

declare const enum MQTTTransportState {

	Created = 0,

	Opening = 1,

	Open = 2,

	Closing = 3,

	Closed = 4
}

declare var MQTT_MAX_MESSAGES: number;

declare var MQTT_MAX_SIZE: number;

declare var MQTT_MAX_WINDOW_SIZE: number;

declare var MQTT_PERSISTENT: boolean;

declare class MessageListRequest extends NSObject {

	static alloc(): MessageListRequest; // inherited from NSObject

	static new(): MessageListRequest; // inherited from NSObject

	channelKey: number;

	channelType: number;

	conversationId: number;

	endTimeStamp: number;

	pageSize: string;

	startIndex: string;

	startTimeStamp: number;

	userId: string;

	getParamString(): string;

	isFirstCall(): boolean;
}

interface MessageServiceWrapperDelegate extends NSObjectProtocol {

	DownloadCompleted?(alMessage: ALMessage): void;

	updateBytesDownloaded?(bytesReceived: number): void;

	updateBytesUploaded?(bytesSent: number): void;

	uploadCompleted?(alMessage: ALMessage): void;

	uploadDownloadFailed?(alMessage: ALMessage): void;
}
declare var MessageServiceWrapperDelegate: {

	prototype: MessageServiceWrapperDelegate;
};

declare const enum MessageStatus {

	SENT = 3,

	DELIVERED = 4,

	DELIVERED_AND_READ = 5,

	PENDING = 2,

	UNREAD = 0,

	READ = 1
}

declare const enum NOTIFICATION_TYPE_MODE {

	ENABLE_SOUND = 0,

	DISABLE_SOUND = 1,

	ENABLE = 0,

	DISABLE = 2
}

declare const enum PRICING_PACKAGE {

	CLOSED = -1,

	BETA = 0,

	STARTER = 1,

	LAUNCH = 2,

	GROWTH = 3,

	ENTERPRISE = 4
}

declare class PSPDFTextView extends UITextView {

	static alloc(): PSPDFTextView; // inherited from NSObject

	static appearance(): PSPDFTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PSPDFTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PSPDFTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PSPDFTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PSPDFTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PSPDFTextView; // inherited from UIAppearance

	static new(): PSPDFTextView; // inherited from NSObject

	scrollRangeToVisibleConsideringInsetsAnimated(range: NSRange, animated: boolean): void;

	scrollToVisibleCaretAnimated(animated: boolean): void;
}

declare const enum ROLE_TYPE {

	USER = 0,

	ADMIN = 1,

	MODERATOR = 2,

	MEMBER = 3
}

declare var ReachabilityVersionNumber: number;

declare var ReachabilityVersionString: interop.Reference<number>;

declare class TPPropertyAnimation extends NSObject {

	static allPropertyAnimationsForTarget(target: any): NSArray<any>;

	static alloc(): TPPropertyAnimation; // inherited from NSObject

	static new(): TPPropertyAnimation; // inherited from NSObject

	static propertyAnimationWithKeyPath(keyPath: string): TPPropertyAnimation;

	chainedAnimation: TPPropertyAnimation;

	delegate: any;

	duration: number;

	fromValue: any;

	readonly keyPath: string;

	startDelay: number;

	target: any;

	timing: TPPropertyAnimationTiming;

	toValue: any;

	beginWithTarget(target: any): void;

	cancel(): void;
}

declare const enum TPPropertyAnimationTiming {

	Linear = 0,

	EaseIn = 1,

	EaseOut = 2,

	EaseInEaseOut = 3
}

declare class TSBlurView extends UIView {

	static alloc(): TSBlurView; // inherited from NSObject

	static appearance(): TSBlurView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TSBlurView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TSBlurView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TSBlurView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TSBlurView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TSBlurView; // inherited from UIAppearance

	static new(): TSBlurView; // inherited from NSObject

	blurTintColor: UIColor;
}

declare class TSMessage extends NSObject {

	static addCustomDesignFromFileWithName(fileName: string): void;

	static alloc(): TSMessage; // inherited from NSObject

	static defaultViewController(): UIViewController;

	static dismissActiveNotification(): boolean;

	static dismissActiveNotificationWithCompletion(completion: () => void): boolean;

	static iOS7StyleEnabled(): boolean;

	static isNavigationBarInNavigationControllerHidden(navController: UINavigationController): boolean;

	static isNotificationActive(): boolean;

	static new(): TSMessage; // inherited from NSObject

	static prepareNotificationToBeShown(messageView: TSMessageView): void;

	static queuedMessages(): NSArray<any>;

	static setDefaultViewController(defaultViewController: UIViewController): void;

	static setDelegate(delegate: TSMessageViewProtocol): void;

	static sharedMessage(): TSMessage;

	static showNotificationInViewControllerTitleSubtitleImageTypeDurationCallbackButtonTitleButtonCallbackAtPositionCanBeDismissedByUser(viewController: UIViewController, title: string, subtitle: string, image: UIImage, type: TSMessageNotificationType, duration: number, callback: () => void, buttonTitle: string, buttonCallback: () => void, messagePosition: TSMessageNotificationPosition, dismissingEnabled: boolean): void;

	static showNotificationInViewControllerTitleSubtitleType(viewController: UIViewController, title: string, subtitle: string, type: TSMessageNotificationType): void;

	static showNotificationInViewControllerTitleSubtitleTypeDuration(viewController: UIViewController, title: string, subtitle: string, type: TSMessageNotificationType, duration: number): void;

	static showNotificationInViewControllerTitleSubtitleTypeDurationCanBeDismissedByUser(viewController: UIViewController, title: string, subtitle: string, type: TSMessageNotificationType, duration: number, dismissingEnabled: boolean): void;

	static showNotificationWithTitleSubtitleType(title: string, subtitle: string, type: TSMessageNotificationType): void;

	static showNotificationWithTitleType(message: string, type: TSMessageNotificationType): void;

	delegate: TSMessageViewProtocol;
}

declare const enum TSMessageNotificationDuration {

	Automatic = 0,

	Endless = -1
}

declare const enum TSMessageNotificationPosition {

	Top = 0,

	NavBarOverlay = 1,

	Bottom = 2
}

declare const enum TSMessageNotificationType {

	Message = 0,

	Warning = 1,

	Error = 2,

	Success = 3
}

declare class TSMessageView extends UIView {

	static addNotificationDesignFromFile(file: string): void;

	static alloc(): TSMessageView; // inherited from NSObject

	static appearance(): TSMessageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TSMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TSMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TSMessageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TSMessageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TSMessageView; // inherited from UIAppearance

	static new(): TSMessageView; // inherited from NSObject

	contentFont: UIFont;

	contentTextColor: UIColor;

	duration: number;

	errorIcon: UIImage;

	messageIcon: UIImage;

	messageIsFullyDisplayed: boolean;

	messagePosition: TSMessageNotificationPosition;

	readonly subtitle: string;

	successIcon: UIImage;

	readonly title: string;

	titleFont: UIFont;

	titleTextColor: UIColor;

	readonly viewController: UIViewController;

	warningIcon: UIImage;

	constructor(o: { title: string; subtitle: string; image: UIImage; type: TSMessageNotificationType; duration: number; inViewController: UIViewController; callback: () => void; buttonTitle: string; buttonCallback: () => void; atPosition: TSMessageNotificationPosition; canBeDismissedByUser: boolean; });

	fadeMeOut(): void;

	initWithTitleSubtitleImageTypeDurationInViewControllerCallbackButtonTitleButtonCallbackAtPositionCanBeDismissedByUser(title: string, subtitle: string, image: UIImage, notificationType: TSMessageNotificationType, duration: number, viewController: UIViewController, callback: () => void, buttonTitle: string, buttonCallback: () => void, position: TSMessageNotificationPosition, dismissingEnabled: boolean): this;
}

interface TSMessageViewProtocol extends NSObjectProtocol {

	customizeMessageView?(messageView: TSMessageView): void;

	messageLocationOfMessageView?(messageView: TSMessageView): number;
}
declare var TSMessageViewProtocol: {

	prototype: TSMessageViewProtocol;
};

declare var chatRoomEngage: boolean;

declare const enum deviceApnsType {

	DEVELOPMENT = 0,

	DISTRIBUTION = 1
}
