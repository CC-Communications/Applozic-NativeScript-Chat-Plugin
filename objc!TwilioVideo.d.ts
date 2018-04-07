
interface TVIAspectRatio {
	numerator: number;
	denominator: number;
}
declare var TVIAspectRatio: interop.StructType<TVIAspectRatio>;

declare var TVIAspectRatio11x9: TVIAspectRatio;

declare var TVIAspectRatio16x9: TVIAspectRatio;

declare var TVIAspectRatio4x3: TVIAspectRatio;

declare class TVIAudioController extends NSObject {

	static alloc(): TVIAudioController; // inherited from NSObject

	static new(): TVIAudioController; // inherited from NSObject

	static sharedController(): TVIAudioController;

	audioOutput: TVIAudioOutput;

	configureAudioSession(audioOutput: TVIAudioOutput): void;

	startAudio(): boolean;

	stopAudio(): void;
}

declare class TVIAudioOptions extends NSObject {

	static alloc(): TVIAudioOptions; // inherited from NSObject

	static new(): TVIAudioOptions; // inherited from NSObject

	static options(): TVIAudioOptions;

	static optionsWithBlock(block: (p1: TVIAudioOptionsBuilder) => void): TVIAudioOptions;

	readonly audioJitterBufferFastAccelerate: boolean;

	readonly audioJitterBufferMaxPackets: number;

	readonly highpassFilter: boolean;

	readonly levelControl: boolean;

	readonly levelControlInitialPeakLevelDBFS: number;
}

declare class TVIAudioOptionsBuilder extends NSObject {

	static alloc(): TVIAudioOptionsBuilder; // inherited from NSObject

	static new(): TVIAudioOptionsBuilder; // inherited from NSObject

	audioJitterBufferFastAccelerate: boolean;

	audioJitterBufferMaxPackets: number;

	highpassFilter: boolean;

	levelControl: boolean;

	levelControlInitialPeakLevelDBFS: number;
}

declare const enum TVIAudioOutput {

	VideoChatDefault = 0,

	VideoChatSpeaker = 1,

	VoiceChatDefault = 2,

	VoiceChatSpeaker = 3
}

declare class TVIAudioTrack extends TVITrack {

	static alloc(): TVIAudioTrack; // inherited from NSObject

	static new(): TVIAudioTrack; // inherited from NSObject
}

declare class TVIAudioTrackStats extends TVITrackStats {

	static alloc(): TVIAudioTrackStats; // inherited from NSObject

	static new(): TVIAudioTrackStats; // inherited from NSObject

	readonly audioLevel: number;

	readonly jitter: number;
}

declare class TVIBaseTrackStats extends NSObject {

	static alloc(): TVIBaseTrackStats; // inherited from NSObject

	static new(): TVIBaseTrackStats; // inherited from NSObject

	readonly codec: string;

	readonly packetsLost: number;

	readonly ssrc: string;

	readonly timestamp: number;

	readonly trackId: string;
}

declare const enum TVICameraCaptureSource {

	FrontCamera = 0,

	BackCameraWide = 1,

	BackCameraTelephoto = 2
}

declare class TVICameraCapturer extends NSObject implements TVIVideoCapturer {

	static alloc(): TVICameraCapturer; // inherited from NSObject

	static availableSources(): NSArray<number>;

	static isSourceAvailable(source: TVICameraCaptureSource): boolean;

	static new(): TVICameraCapturer; // inherited from NSObject

	readonly capturing: boolean;

	delegate: TVICameraCapturerDelegate;

	readonly interrupted: boolean;

	readonly previewView: TVICameraPreviewView;

	readonly source: TVICameraCaptureSource;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly screencast: boolean; // inherited from TVIVideoCapturer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly supportedFormats: NSArray<TVIVideoFormat>; // inherited from TVIVideoCapturer

	readonly  // inherited from NSObjectProtocol

	constructor(o: { source: TVICameraCaptureSource; });

	constructor(o: { source: TVICameraCaptureSource; delegate: TVICameraCapturerDelegate; });

	constructor(o: { source: TVICameraCaptureSource; delegate: TVICameraCapturerDelegate; enablePreview: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSource(source: TVICameraCaptureSource): this;

	initWithSourceDelegate(source: TVICameraCaptureSource, delegate: TVICameraCapturerDelegate): this;

	initWithSourceDelegateEnablePreview(source: TVICameraCaptureSource, delegate: TVICameraCapturerDelegate, enablePreview: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectSource(source: TVICameraCaptureSource): boolean;

	self(): this;

	startCaptureConsumer(format: TVIVideoFormat, consumer: TVIVideoCaptureConsumer): void;

	stopCapture(): void;
}

interface TVICameraCapturerDelegate extends NSObjectProtocol {

	cameraCapturerDidFailWithError?(capturer: TVICameraCapturer, error: NSError): void;

	cameraCapturerDidStartWithSource?(capturer: TVICameraCapturer, source: TVICameraCaptureSource): void;

	cameraCapturerWasInterruptedReason?(capturer: TVICameraCapturer, reason: TVICameraCapturerInterruptionReason): void;
}
declare var TVICameraCapturerDelegate: {

	prototype: TVICameraCapturerDelegate;
};

declare const enum TVICameraCapturerInterruptionReason {

	VideoDeviceNotAvailableInBackground = 1,

	AudioDeviceInUseByAnotherClient = 2,

	VideoDeviceInUseByAnotherClient = 3,

	VideoDeviceNotAvailableWithMultipleForegroundApps = 4
}

declare class TVICameraPreviewView extends UIView {

	static alloc(): TVICameraPreviewView; // inherited from NSObject

	static appearance(): TVICameraPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TVICameraPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TVICameraPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TVICameraPreviewView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TVICameraPreviewView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TVICameraPreviewView; // inherited from UIAppearance

	static new(): TVICameraPreviewView; // inherited from NSObject

	readonly orientation: UIInterfaceOrientation;

	readonly videoDimensions: CMVideoDimensions;
}

declare class TVIConnectOptions extends NSObject {

	static alloc(): TVIConnectOptions; // inherited from NSObject

	static new(): TVIConnectOptions; // inherited from NSObject

	static optionsWithToken(token: string): TVIConnectOptions;

	static optionsWithTokenBlock(token: string, block: (p1: TVIConnectOptionsBuilder) => void): TVIConnectOptions;

	readonly accessToken: string;

	readonly audioTracks: NSArray<TVILocalAudioTrack>;

	readonly delegateQueue: NSObject;

	readonly iceOptions: TVIIceOptions;

	readonly insightsEnabled: boolean;

	readonly reconnectAfterReturningToForeground: boolean;

	readonly roomName: string;

	readonly uuid: NSUUID;

	readonly videoTracks: NSArray<TVILocalVideoTrack>;
}

declare class TVIConnectOptionsBuilder extends NSObject {

	static alloc(): TVIConnectOptionsBuilder; // inherited from NSObject

	static new(): TVIConnectOptionsBuilder; // inherited from NSObject

	audioTracks: NSArray<TVILocalAudioTrack>;

	delegateQueue: NSObject;

	iceOptions: TVIIceOptions;

	insightsEnabled: boolean;

	reconnectAfterReturningToForeground: boolean;

	roomName: string;

	uuid: NSUUID;

	videoTracks: NSArray<TVILocalVideoTrack>;
}

declare const enum TVIError {

	Unknown = 0,

	AccessTokenInvalidError = 20101,

	AccessTokenHeaderInvalidError = 20102,

	AccessTokenIssuerInvalidError = 20103,

	AccessTokenExpiredError = 20104,

	AccessTokenNotYetValidError = 20105,

	AccessTokenGrantsInvalidError = 20106,

	AccessTokenSignatureInvalidError = 20107,

	SignalingConnectionError = 53000,

	SignalingConnectionDisconnectedError = 53001,

	SignalingConnectionTimeoutError = 53002,

	SignalingIncomingMessageInvalidError = 53003,

	SignalingOutgoingMessageInvalidError = 53004,

	RoomNameInvalidError = 53100,

	RoomNameTooLongError = 53101,

	RoomNameCharsInvalidError = 53102,

	RoomCreateFailedError = 53103,

	RoomConnectFailedError = 53104,

	RoomMaxParticipantsExceededError = 53105,

	RoomNotFoundError = 53106,

	RoomMaxParticipantsOutOfRangeError = 53107,

	RoomTypeInvalidError = 53108,

	RoomTimeoutOutOfRangeError = 53109,

	RoomStatusCallbackMethodInvalidError = 53110,

	RoomStatusCallbackInvalidError = 53111,

	RoomStatusInvalidError = 53112,

	ParticipantIdentityInvalidError = 53200,

	ParticipantIdentityTooLongError = 53201,

	ParticipantIdentityCharsInvalidError = 53202,

	ParticipantMaxTracksExceededError = 53203,

	ParticipantNotFoundError = 53204,

	ParticipantDuplicateIdentityError = 53205,

	TrackInvalidError = 53300,

	TrackNameInvalidError = 53301,

	TrackNameTooLongError = 53302,

	TrackNameCharsInvalidError = 53303,

	MediaClientLocalDescFailedError = 53400,

	MediaServerLocalDescFailedError = 53401,

	MediaClientRemoteDescFailedError = 53402,

	MediaServerRemoteDescFailedError = 53403,

	MediaNoSupportedCodecError = 53404,

	MediaConnectionError = 53405,

	ConfigurationAcquireFailedError = 53500,

	ConfigurationAcquireTurnFailedError = 53501
}

declare class TVIIceOptions extends NSObject {

	static alloc(): TVIIceOptions; // inherited from NSObject

	static new(): TVIIceOptions; // inherited from NSObject

	static options(): TVIIceOptions;

	static optionsWithBlock(block: (p1: TVIIceOptionsBuilder) => void): TVIIceOptions;

	readonly servers: NSArray<TVIIceServer>;

	readonly transportPolicy: TVIIceTransportPolicy;
}

declare class TVIIceOptionsBuilder extends NSObject {

	static alloc(): TVIIceOptionsBuilder; // inherited from NSObject

	static new(): TVIIceOptionsBuilder; // inherited from NSObject

	servers: NSArray<TVIIceServer>;

	transportPolicy: TVIIceTransportPolicy;
}

declare class TVIIceServer extends NSObject {

	static alloc(): TVIIceServer; // inherited from NSObject

	static new(): TVIIceServer; // inherited from NSObject

	readonly password: string;

	readonly urlString: string;

	readonly username: string;

	constructor(o: { URLString: string; });

	constructor(o: { URLString: string; username: string; password: string; });

	initWithURLString(serverURLString: string): this;

	initWithURLStringUsernamePassword(serverURLString: string, username: string, password: string): this;
}

declare const enum TVIIceTransportPolicy {

	All = 0,

	Relay = 1
}

declare class TVILocalAudioTrack extends TVIAudioTrack {

	static alloc(): TVILocalAudioTrack; // inherited from NSObject

	static new(): TVILocalAudioTrack; // inherited from NSObject

	static track(): TVILocalAudioTrack;

	static trackWithOptionsEnabled(options: TVIAudioOptions, enabled: boolean): TVILocalAudioTrack;

	enabled: boolean;

	readonly options: TVIAudioOptions;
}

declare class TVILocalAudioTrackStats extends TVILocalTrackStats {

	static alloc(): TVILocalAudioTrackStats; // inherited from NSObject

	static new(): TVILocalAudioTrackStats; // inherited from NSObject

	readonly audioLevel: number;

	readonly jitter: number;
}

declare class TVILocalParticipant extends NSObject {

	static alloc(): TVILocalParticipant; // inherited from NSObject

	static new(): TVILocalParticipant; // inherited from NSObject

	readonly audioTracks: NSArray<TVILocalAudioTrack>;

	readonly identity: string;

	readonly sid: string;

	readonly videoTracks: NSArray<TVILocalVideoTrack>;

	addAudioTrack(track: TVILocalAudioTrack): boolean;

	addVideoTrack(track: TVILocalVideoTrack): boolean;

	removeAudioTrack(track: TVILocalAudioTrack): boolean;

	removeVideoTrack(track: TVILocalVideoTrack): boolean;
}

declare class TVILocalTrackStats extends TVIBaseTrackStats {

	static alloc(): TVILocalTrackStats; // inherited from NSObject

	static new(): TVILocalTrackStats; // inherited from NSObject

	readonly bytesSent: number;

	readonly packetsSent: number;

	readonly roundTripTime: number;
}

declare class TVILocalVideoTrack extends TVIVideoTrack {

	static alloc(): TVILocalVideoTrack; // inherited from NSObject

	static new(): TVILocalVideoTrack; // inherited from NSObject

	static trackWithCapturer(capturer: TVIVideoCapturer): TVILocalVideoTrack;

	static trackWithCapturerEnabledConstraints(capturer: TVIVideoCapturer, enabled: boolean, constraints: TVIVideoConstraints): TVILocalVideoTrack;

	readonly capturer: TVIVideoCapturer;

	readonly constraints: TVIVideoConstraints;

	enabled: boolean;
}

declare class TVILocalVideoTrackStats extends TVILocalTrackStats {

	static alloc(): TVILocalVideoTrackStats; // inherited from NSObject

	static new(): TVILocalVideoTrackStats; // inherited from NSObject

	readonly captureDimensions: CMVideoDimensions;

	readonly captureFrameRate: number;

	readonly dimensions: CMVideoDimensions;

	readonly frameRate: number;
}

declare const enum TVILogLevel {

	Off = 0,

	Fatal = 1,

	Error = 2,

	Warning = 3,

	Info = 4,

	Debug = 5,

	Trace = 6,

	All = 7
}

declare const enum TVILogModule {

	Core = 0,

	Platform = 1,

	Signaling = 2,

	WebRTC = 3
}

declare class TVIParticipant extends NSObject {

	static alloc(): TVIParticipant; // inherited from NSObject

	static new(): TVIParticipant; // inherited from NSObject

	readonly audioTracks: NSArray<TVIAudioTrack>;

	readonly connected: boolean;

	delegate: TVIParticipantDelegate;

	readonly identity: string;

	readonly sid: string;

	readonly videoTracks: NSArray<TVIVideoTrack>;
}

interface TVIParticipantDelegate extends NSObjectProtocol {

	participantAddedAudioTrack?(participant: TVIParticipant, audioTrack: TVIAudioTrack): void;

	participantAddedVideoTrack?(participant: TVIParticipant, videoTrack: TVIVideoTrack): void;

	participantDisabledTrack?(participant: TVIParticipant, track: TVITrack): void;

	participantEnabledTrack?(participant: TVIParticipant, track: TVITrack): void;

	participantRemovedAudioTrack?(participant: TVIParticipant, audioTrack: TVIAudioTrack): void;

	participantRemovedVideoTrack?(participant: TVIParticipant, videoTrack: TVIVideoTrack): void;
}
declare var TVIParticipantDelegate: {

	prototype: TVIParticipantDelegate;
};

declare const enum TVIPixelFormat {

	Format32ARGB = 32,

	Format32BGRA = 1111970369,

	FormatYUV420BiPlanarVideoRange = 875704438,

	FormatYUV420BiPlanarFullRange = 875704422,

	FormatYUV420PlanarVideoRange = 2033463856,

	FormatYUV420PlanarFullRange = 1714696752
}

declare class TVIRoom extends NSObject {

	static alloc(): TVIRoom; // inherited from NSObject

	static new(): TVIRoom; // inherited from NSObject

	readonly delegate: TVIRoomDelegate;

	readonly localParticipant: TVILocalParticipant;

	readonly name: string;

	readonly participants: NSArray<TVIParticipant>;

	readonly recording: boolean;

	readonly sid: string;

	readonly state: TVIRoomState;

	readonly uuid: NSUUID;

	disconnect(): void;

	getParticipantWithSid(sid: string): TVIParticipant;

	getStatsWithBlock(block: (p1: NSArray<TVIStatsReport>) => void): void;
}

interface TVIRoomDelegate extends NSObjectProtocol {

	didConnectToRoom?(room: TVIRoom): void;

	roomDidDisconnectWithError?(room: TVIRoom, error: NSError): void;

	roomDidFailToConnectWithError?(room: TVIRoom, error: NSError): void;

	roomDidStartRecording?(room: TVIRoom): void;

	roomDidStopRecording?(room: TVIRoom): void;

	roomParticipantDidConnect?(room: TVIRoom, participant: TVIParticipant): void;

	roomParticipantDidDisconnect?(room: TVIRoom, participant: TVIParticipant): void;
}
declare var TVIRoomDelegate: {

	prototype: TVIRoomDelegate;
};

declare const enum TVIRoomState {

	Connecting = 0,

	Connected = 1,

	Disconnected = 2
}

declare class TVIScreenCapturer extends NSObject implements TVIVideoCapturer {

	static alloc(): TVIScreenCapturer; // inherited from NSObject

	static new(): TVIScreenCapturer; // inherited from NSObject

	readonly capturing: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly screencast: boolean; // inherited from TVIVideoCapturer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly supportedFormats: NSArray<TVIVideoFormat>; // inherited from TVIVideoCapturer

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithView(view: UIView): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startCaptureConsumer(format: TVIVideoFormat, consumer: TVIVideoCaptureConsumer): void;

	stopCapture(): void;
}

declare class TVIStatsReport extends NSObject {

	static alloc(): TVIStatsReport; // inherited from NSObject

	static new(): TVIStatsReport; // inherited from NSObject

	readonly audioTrackStats: NSArray<TVIAudioTrackStats>;

	readonly localAudioTrackStats: NSArray<TVILocalAudioTrackStats>;

	readonly localVideoTrackStats: NSArray<TVILocalVideoTrackStats>;

	readonly peerConnectionId: string;

	readonly videoTrackStats: NSArray<TVIVideoTrackStats>;
}

declare class TVITrack extends NSObject {

	static alloc(): TVITrack; // inherited from NSObject

	static new(): TVITrack; // inherited from NSObject

	readonly enabled: boolean;

	readonly state: TVITrackState;

	readonly trackId: string;
}

declare const enum TVITrackState {

	Ended = 0,

	Live = 1
}

declare class TVITrackStats extends TVIBaseTrackStats {

	static alloc(): TVITrackStats; // inherited from NSObject

	static new(): TVITrackStats; // inherited from NSObject

	readonly bytesReceived: number;

	readonly packetsReceived: number;
}

interface TVIVideoCaptureConsumer extends NSObjectProtocol {

	captureDidStart(success: boolean): void;

	consumeCapturedFrame(frame: TVIVideoFrame): void;
}
declare var TVIVideoCaptureConsumer: {

	prototype: TVIVideoCaptureConsumer;
};

interface TVIVideoCapturer extends NSObjectProtocol {

	screencast: boolean;

	supportedFormats: NSArray<TVIVideoFormat>;

	startCaptureConsumer(format: TVIVideoFormat, consumer: TVIVideoCaptureConsumer): void;

	stopCapture(): void;
}
declare var TVIVideoCapturer: {

	prototype: TVIVideoCapturer;
};

declare class TVIVideoConstraints extends NSObject {

	static alloc(): TVIVideoConstraints; // inherited from NSObject

	static constraints(): TVIVideoConstraints;

	static constraintsWithBlock(builderBlock: (p1: TVIVideoConstraintsBuilder) => void): TVIVideoConstraints;

	static new(): TVIVideoConstraints; // inherited from NSObject

	readonly aspectRatio: TVIAspectRatio;

	readonly maxFrameRate: number;

	readonly maxSize: CMVideoDimensions;

	readonly minFrameRate: number;

	readonly minSize: CMVideoDimensions;
}

declare var TVIVideoConstraintsAspectRatioNone: TVIAspectRatio;

declare class TVIVideoConstraintsBuilder extends NSObject {

	static alloc(): TVIVideoConstraintsBuilder; // inherited from NSObject

	static new(): TVIVideoConstraintsBuilder; // inherited from NSObject

	aspectRatio: TVIAspectRatio;

	maxFrameRate: number;

	maxSize: CMVideoDimensions;

	minFrameRate: number;

	minSize: CMVideoDimensions;
}

declare var TVIVideoConstraintsFrameRate10: number;

declare var TVIVideoConstraintsFrameRate15: number;

declare var TVIVideoConstraintsFrameRate20: number;

declare var TVIVideoConstraintsFrameRate24: number;

declare var TVIVideoConstraintsFrameRate30: number;

declare var TVIVideoConstraintsFrameRateNone: number;

declare var TVIVideoConstraintsMaximumFPS: number;

declare var TVIVideoConstraintsMinimumFPS: number;

declare var TVIVideoConstraintsSize1280x720: CMVideoDimensions;

declare var TVIVideoConstraintsSize1280x960: CMVideoDimensions;

declare var TVIVideoConstraintsSize352x288: CMVideoDimensions;

declare var TVIVideoConstraintsSize480x360: CMVideoDimensions;

declare var TVIVideoConstraintsSize640x480: CMVideoDimensions;

declare var TVIVideoConstraintsSize960x540: CMVideoDimensions;

declare var TVIVideoConstraintsSizeNone: CMVideoDimensions;

declare class TVIVideoFormat extends NSObject {

	static alloc(): TVIVideoFormat; // inherited from NSObject

	static new(): TVIVideoFormat; // inherited from NSObject

	dimensions: CMVideoDimensions;

	frameRate: number;

	pixelFormat: TVIPixelFormat;
}

declare class TVIVideoFrame extends NSObject {

	static alloc(): TVIVideoFrame; // inherited from NSObject

	static new(): TVIVideoFrame; // inherited from NSObject

	readonly height: number;

	readonly imageBuffer: any;

	readonly orientation: TVIVideoOrientation;

	readonly timestamp: number;

	readonly width: number;

	constructor(o: { timestamp: number; buffer: any; orientation: TVIVideoOrientation; });

	initWithTimestampBufferOrientation(timestamp: number, imageBuffer: any, orientation: TVIVideoOrientation): this;
}

declare const enum TVIVideoOrientation {

	Up = 0,

	Left = 1,

	Down = 2,

	Right = 3
}

interface TVIVideoRenderer extends NSObjectProtocol {

	optionalPixelFormats?: NSArray<number>;

	renderFrame(frame: TVIVideoFrame): void;

	updateVideoSizeOrientation(videoSize: CMVideoDimensions, orientation: TVIVideoOrientation): void;
}
declare var TVIVideoRenderer: {

	prototype: TVIVideoRenderer;
};

declare const enum TVIVideoRenderingType {

	Metal = 0,

	OpenGLES = 1
}

declare class TVIVideoTrack extends TVITrack {

	static alloc(): TVIVideoTrack; // inherited from NSObject

	static new(): TVIVideoTrack; // inherited from NSObject

	readonly renderers: NSArray<TVIVideoRenderer>;

	addRenderer(renderer: TVIVideoRenderer): void;

	removeRenderer(renderer: TVIVideoRenderer): void;
}

declare class TVIVideoTrackStats extends TVITrackStats {

	static alloc(): TVIVideoTrackStats; // inherited from NSObject

	static new(): TVIVideoTrackStats; // inherited from NSObject

	readonly dimensions: CMVideoDimensions;

	readonly frameRate: number;
}

declare class TVIVideoView extends UIView implements TVIVideoRenderer {

	static alloc(): TVIVideoView; // inherited from NSObject

	static appearance(): TVIVideoView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TVIVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TVIVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TVIVideoView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TVIVideoView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TVIVideoView; // inherited from UIAppearance

	static new(): TVIVideoView; // inherited from NSObject

	delegate: TVIVideoViewDelegate;

	readonly hasVideoData: boolean;

	mirror: boolean;

	readonly videoDimensions: CMVideoDimensions;

	readonly videoOrientation: TVIVideoOrientation;

	viewShouldRotateContent: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly optionalPixelFormats: NSArray<number>; // inherited from TVIVideoRenderer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; delegate: TVIVideoViewDelegate; });

	constructor(o: { frame: CGRect; delegate: TVIVideoViewDelegate; renderingType: TVIVideoRenderingType; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFrameDelegate(frame: CGRect, delegate: TVIVideoViewDelegate): this;

	initWithFrameDelegateRenderingType(frame: CGRect, delegate: TVIVideoViewDelegate, renderingType: TVIVideoRenderingType): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	renderFrame(frame: TVIVideoFrame): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateVideoSizeOrientation(videoSize: CMVideoDimensions, orientation: TVIVideoOrientation): void;
}

interface TVIVideoViewDelegate extends NSObjectProtocol {

	videoViewDidReceiveData?(view: TVIVideoView): void;

	videoViewVideoDimensionsDidChange?(view: TVIVideoView, dimensions: CMVideoDimensions): void;

	videoViewVideoOrientationDidChange?(view: TVIVideoView, orientation: TVIVideoOrientation): void;
}
declare var TVIVideoViewDelegate: {

	prototype: TVIVideoViewDelegate;
};

declare class TwilioVideo extends NSObject {

	static alloc(): TwilioVideo; // inherited from NSObject

	static connectWithOptionsDelegate(options: TVIConnectOptions, delegate: TVIRoomDelegate): TVIRoom;

	static logLevel(): TVILogLevel;

	static new(): TwilioVideo; // inherited from NSObject

	static setLogLevel(logLevel: TVILogLevel): void;

	static setLogLevelModule(logLevel: TVILogLevel, module: TVILogModule): void;
}

declare var kTVIErrorDomain: string;
