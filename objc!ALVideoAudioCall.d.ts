
declare class ALAudioVideoCallVC extends ALAudioVideoBaseVC implements TVICameraCapturerDelegate, TVIParticipantDelegate, TVIRoomDelegate, TVIVideoViewDelegate {

	static alloc(): ALAudioVideoCallVC; // inherited from NSObject

	static createAudioVideoController(): ALAudioVideoCallVC;

	static new(): ALAudioVideoCallVC; // inherited from NSObject

	UserDisplayName: UILabel;

	accessToken: string;

	alContact: ALContact;

	alMQTTObject: ALMQTTConversationService;

	audioCallType: UILabel;

	audioTimerLabel: UILabel;

	callAccept: UIButton;

	callAcceptReject: UIButton;

	callReject: UIButton;

	callView: UIView;

	camera: TVICameraCapturer;

	cameraToggle: UIButton;

	localAudioTrack: TVILocalAudioTrack;

	localVideoTrack: TVILocalVideoTrack;

	loudSpeaker: UIButton;

	muteUnmute: UIButton;

	participant: TVIParticipant;

	previewView: TVIVideoView;

	receiverID: string;

	remoteView: TVIVideoView;

	room: TVIRoom;

	roomID: string;

	tokenUrl: string;

	userProfile: UIImageView;

	videoShare: UIButton;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	callAcceptAction(sender: any): void;

	callAcceptRejectAction(sender: any): void;

	callRejectAction(sender: any): void;

	cameraCapturerDidFailWithError(capturer: TVICameraCapturer, error: NSError): void;

	cameraCapturerDidStartWithSource(capturer: TVICameraCapturer, source: TVICameraCaptureSource): void;

	cameraCapturerWasInterruptedReason(capturer: TVICameraCapturer, reason: TVICameraCapturerInterruptionReason): void;

	cameraToggleAction(sender: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didConnectToRoom(room: TVIRoom): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loudSpeakerAction(sender: any): void;

	micMuteAction(sender: any): void;

	participantAddedAudioTrack(participant: TVIParticipant, audioTrack: TVIAudioTrack): void;

	participantAddedVideoTrack(participant: TVIParticipant, videoTrack: TVIVideoTrack): void;

	participantDisabledTrack(participant: TVIParticipant, track: TVITrack): void;

	participantEnabledTrack(participant: TVIParticipant, track: TVITrack): void;

	participantRemovedAudioTrack(participant: TVIParticipant, audioTrack: TVIAudioTrack): void;

	participantRemovedVideoTrack(participant: TVIParticipant, videoTrack: TVIVideoTrack): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	roomDidDisconnectWithError(room: TVIRoom, error: NSError): void;

	roomDidFailToConnectWithError(room: TVIRoom, error: NSError): void;

	roomDidStartRecording(room: TVIRoom): void;

	roomDidStopRecording(room: TVIRoom): void;

	roomParticipantDidConnect(room: TVIRoom, participant: TVIParticipant): void;

	roomParticipantDidDisconnect(room: TVIRoom, participant: TVIParticipant): void;

	self(): this;

	videoViewDidReceiveData(view: TVIVideoView): void;

	videoViewVideoDimensionsDidChange(view: TVIVideoView, dimensions: CMVideoDimensions): void;

	videoViewVideoOrientationDidChange(view: TVIVideoView, orientation: TVIVideoOrientation): void;
}

declare class ALAudioVideoUtils extends NSObject {

	static alloc(): ALAudioVideoUtils; // inherited from NSObject

	static new(): ALAudioVideoUtils; // inherited from NSObject

	static retrieveAccessTokenFromURLCompletion(tokenURLStr: string, completionHandler: (p1: string, p2: NSError) => void): void;
}

declare var ALVideoAudioCallVersionNumber: number;

declare var ALVideoAudioCallVersionString: interop.Reference<number>;
