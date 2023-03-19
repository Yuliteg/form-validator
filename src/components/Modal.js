import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalWindow = ({ isModalShow }) => {
  return (
    <>
      <Modal isModalShow={isModalShow} className="modal">
      <Modal.Header>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We process your data..</Modal.Body>
      </Modal>
    </>
  )
}

export default ModalWindow
