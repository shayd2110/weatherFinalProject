import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Exit() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>האם ברצונך להתנתק?</Modal.Title>
			</Modal.Header>
			<Modal.Body>נתראה בפעם הבאה!</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					ביטול
				</Button>
				<Button variant="primary" onClick={handleClose}>
					התנתק/י
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default Exit;
