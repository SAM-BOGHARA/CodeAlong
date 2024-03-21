import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ZegoCloud = () => {
  const location = useLocation();
  const username = location.state?.username;
  const { roomID } = useParams();
  let myMeeting = async (element) => {
    const appID = 1114127358;
    const serverSecret = "e9758aed57773c645f9e3fd9890a80ea";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      username,
      username
    );

    const customConfig = {
      showPreJoinView: true, // Hide the prejoin view page
      turnOnMicrophoneWhenJoining: false, // Enable microphone when joining
      turnOnCameraWhenJoining: false, // Enable camera when joining
      useFrontFacingCamera: true, // Use front-facing camera when joining
      showMyCameraToggleButton: true, // Show button to toggle camera
      showMyMicrophoneToggleButton: true, // Show button to toggle microphone
      showAudioVideoSettingsButton: true, // Show button for audio and video settings
      showTextChat: true, // Show text chat on the right side
      showUserList: true, // Show participant list
      showScreenSharingButton: true, // Show screen sharing button
      showPinButton: false, // Show pin button
      showRoomDetailsButton: false, // Show room details button
      maxUsers: 10,
      preJoinViewConfig: {
        title: "Join as : " + username, // The title of the prejoin view. Uses "enter Room" by default.
      },
      videoResolutionDefault: 720,
      layOut: "Auto",
      enableUserSearch: true,
      autoHideFooter: true,
    };



    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: document.querySelector("#zegocloud"),
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      sharedLinks: [
        {
          name: "Share link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      ...customConfig
    });
  };

  return (
    <div>
      <div ref={myMeeting} id="zegocloud" className="h-full" />
    </div>
  );
};

export default ZegoCloud;
