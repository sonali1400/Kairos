import React from "react";
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';

const videoConstraints = {
  facingMode: "user"
};

const WebcamComponent = () => {

  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [imageSrc, setImageSrc] = React.useState([]);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc)
    },
    [webcamRef]
  );

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );
  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [handleDataAvailable]);

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/mp4"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.mp4";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <div className="webcam-container">
        {/* <Webcam
        audio={true}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      /> */}
        <div className="camera-wrap">
          <Webcam audio={false} ref={webcamRef} height={400} width={500} />
          <Button variant="outlined" color="primary" onClick={capture}>Capture photo</Button>

          {capturing ? (
            <Button variant="outlined" color="primary" onClick={handleStopCaptureClick}>Stop Capture</Button>
          ) : (
              <Button variant="outlined" color="primary" onClick={handleStartCaptureClick}>Capture a video</Button>
            )}

          {recordedChunks.length > 0 && (
            <Button variant="outlined" color="primary" onClick={handleDownload}>Download</Button>
          )}
        </div>

        <div className="imageWrap">
          <iframe src={imageSrc} allow="camera; microphone;" key={Math.random()} width='520px' height='379px' />
          <span className="showText">You can capture again</span>
        </div>

      </div>
    </>
  );
};

export default WebcamComponent;

