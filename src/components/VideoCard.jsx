import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addToHistory, deleteVideo } from "../services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VideoCard({ displayVideo, onDelete, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const today = new Date();
    const timeStamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);
    console.log(timeStamp);
    const reqBody = {
      url: displayVideo.youtubeLink,
      caption: displayVideo.caption,
      timeStamp: timeStamp,
    };
    await addToHistory(reqBody);
    setShow(true);
  };
  const deleteVideoItem = async (id) => {
    const response = await deleteVideo(id);
    console.log("===response of delete=====");
    console.log(response);
    if (response.status === 200) {
      onDelete(id);
      setDeleteVideoStatus(true);
      toast.success("Video deleted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  const dragStarted = (e, id) => {
    console.log(`video with ID ${id} started dragging`);
    e.dataTransfer.setData("videoID", id);
  };
  return (
    <>
      <Card
        style={{ width: "16rem", height: "350px" }}
        draggable
        onDragStart={(e) => dragStarted(e, displayVideo.id)}
      >
        <Card.Img
          variant="top"
          src={displayVideo.imageURL}
          height="250px"
          style={{ padding: "5px" }}
          onClick={handleShow}
        />
        <Card.Body>
          <div className="d-flex  justify-content-between">
            <Card.Title>{displayVideo.caption}</Card.Title>
            <Button
              variant="danger"
              onClick={() => deleteVideoItem(displayVideo.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            src={displayVideo.youtubeLink}
            title="Ribin Richard - Chekele Ft. Archana Mohan"
            frameborder="0"
            allowFullScreen
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default VideoCard;
