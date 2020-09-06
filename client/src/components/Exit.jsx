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
				<Modal.Title>��� ������ ������?</Modal.Title>
			</Modal.Header>
			<Modal.Body>����� ���� ����!</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					�����
				</Button>
				<Button variant="primary" onClick={handleClose}>
					�����/�
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default Exit;
