### Build and update iOS native library

XCODE_BUILD_PATH="./native-src/ios/build"
DESTIONATION_PATH="./src/platforms/ios"
rm -rf "$DESTIONATION_PATH/include"
rm -f "$DESTIONATION_PATH/ALVideoAudioCall.a"

# build the iOS library both for emulator and device
xcodebuild -workspace ./native-src/ios/ALVideoAudioCall.xcworkspace -scheme ALVideoAudioCall -derivedDataPath $XCODE_BUILD_PATH -sdk iphoneos -configuration Release ARCHS="armv7 arm64"
xcodebuild -workspace ./native-src/ios/ALVideoAudioCall.xcworkspace -scheme ALVideoAudioCall -derivedDataPath $XCODE_BUILD_PATH -sdk iphonesimulator -configuration Release ARCHS="i386 x86_64"
xcodebuild -workspace ./native-src/ios/ALVideoAudioCall.xcworkspace -scheme ALAudioVideoCallResources -derivedDataPath $XCODE_BUILD_PATH -sdk iphoneos -configuration Release ARCHS="armv7 arm64"
xcodebuild -workspace ./native-src/ios/ALVideoAudioCall.xcworkspace -scheme ALAudioVideoCallResources -derivedDataPath $XCODE_BUILD_PATH -sdk iphonesimulator -configuration Release ARCHS="i386 x86_64"


# create fat binary
lipo -create "$XCODE_BUILD_PATH/Build/Products/Release-iphoneos/ALVideoAudioCall.a" "$XCODE_BUILD_PATH/Build/Products/Release-iphonesimulator/ALVideoAudioCall.a" -output "$DESTIONATION_PATH/ALVideoAudioCall.a"
# copy all headers
cp -r "$XCODE_BUILD_PATH/Build/Products/Release-iphoneos/include" "$DESTIONATION_PATH/include"

#resources bundle
cp -r "$XCODE_BUILD_PATH/Build/Products/Release-iphoneos/ALAudioVideoCallResources.bundle" "$DESTIONATION_PATH/ALAudioVideoCallResources.bundle"


