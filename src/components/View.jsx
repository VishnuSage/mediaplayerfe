import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getAllVideos } from "../services/AllApi";
import { Col, Row } from "react-bootstrap";

function View({ uploadVideoStatus }) {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false);
  const getVideos = async () => {
    const response = await getAllVideos();
    const { data } = response;
    setAllVideos(data);
  };
  useEffect(() => {
    getVideos();
    setDeleteVideoStatus(false);
  }, [uploadVideoStatus, deleteVideoStatus]);
  const handleDelete = (id) => {
    setAllVideos(allVideos.filter((video) => video.id !== id));
  };
  return (
    <>
      <Row>
        {allVideos.length > 0 ? (
          allVideos.map((video, index) => (
            <Col sm={12} md={2} key={index} lg={2} xl={4} className="mt-2">
              <VideoCard
                displayVideo={video}
                onDelete={() => handleDelete(video.id)}
                setDeleteVideoStatus={setDeleteVideoStatus}
              />
            </Col>
          ))
        ) : (
          <p style={{ fontSize: "30px" }} className="text-warning m-4">
            Nothing To Display
          </p>
        )}
      </Row>
    </>
  );
}

export default View;
