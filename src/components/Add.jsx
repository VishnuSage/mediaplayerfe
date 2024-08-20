import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({ setUploadVideoStatus }) {
  const [show, setShow] = useState(false);

  //state to store all form values
  const [videoDetails, setVideoDetails] = useState({
    videoId: "",
    caption: "",
    imageURL: "",
    youtubeLink: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addVideoDetails = async () => {
    const { videoId, caption, imageURL, youtubeLink } = videoDetails;
    if (!videoId || !caption || !imageURL || !youtubeLink) {
      toast.warning("Please fill the form completely");
    } else {
      console.log("====final data====");
      console.log(videoDetails);
      const response = await uploadVideo(videoDetails);
      console.log(response);
      if (response.status === 201) {
        setUploadVideoStatus(response.data);
        toast.success(`${response.data.caption} successfully uploaded`);
        handleClose();
        setVideoDetails({
          caption: "",
          imageURL: "",
          youtubeLink: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  const getEmbeddedLink = (data) => {
    console.log("====inside getEmbeddedLink method======");
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
    console.log(link);
    setVideoDetails({ ...videoDetails, youtubeLink: link });
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 className="textStyle me-3">Upload A New Video</h5>
        <button className="btn" onClick={handleShow}>
          <i
            className="fa-solid fa-cloud-arrow-up fs-5"
            style={{ color: "white" }}
          ></i>
        </button>
      </div>
      <Modal show={show} onHide={handleClose} data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa-solid fa-film text-warning me-3"></i>
            <span className="textStyle">UPLOAD VIDEO</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="textStyle" style={{ fontWeight: "700" }}>
            Please Fill the form
          </p>
          <Form
            className="border border-secondary p-3 rounded"
            data-bs-theme="light"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Video ID"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, videoId: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Video Caption"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Video Thumbnail URL"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imageURL: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Youtube Video Link"
                onChange={(e) => getEmbeddedLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addVideoDetails}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
      ></ToastContainer>
    </>
  );
}

export default Add;
