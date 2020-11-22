/** @jsx jsx */
import { Input, jsx } from "theme-ui";
import { Image, Modal } from "react-bootstrap";
import Classic from "../../Templates/Classic/Classic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "theme-ui";
import Template1 from "../../../assets/images/template-1.png";

const Preview = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <span
        sx={{
          variant: "previewCV",
        }}
        onClick={handleShow}
      >
        <img sx={{ width: 200 }} src={Template1} />
      </span>
      <Modal dialogClassName="modal-90w" show={show} onHide={handleClose}>
        <Modal.Body>
          <Classic scale={0.2} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Preview;
