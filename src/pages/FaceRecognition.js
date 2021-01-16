import React, { useState } from 'react';
import WebcamComponent from '../Components/WebCam/WebcamComponent';
import Button from '@material-ui/core/Button';
import './../Components/WebCam/WebcamComponent.css'
import { STOP_RECOGNITION, START_RECOGNITION } from "../Constants";


const FaceRecognition = () => {

  const [showWebcam, setShowWebcam] = useState(false);
  const buttonText = showWebcam ? STOP_RECOGNITION : START_RECOGNITION;
  console.log(showWebcam, "showWebcam");
  return (
    <div className="page-wrap">
      <Button variant="outlined" color="primary" onClick={() => setShowWebcam(!showWebcam)}>
        {buttonText}
      </Button>
      <div className="webcam-wrap">
        {showWebcam && <WebcamComponent />}
      </div>
    </div >
  );
};

export default FaceRecognition;