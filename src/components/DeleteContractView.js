import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DeleteContractView = ({ itemId, toggle, modalIsOpen, modalBackdrop, deleteHandler }) => (
  <>
  <Button
    color="white"
    onClick={toggle}
    className="p-0 button_as-icon"
    tag="a"
    title="Delete contract"
  >
    <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
  </Button>

  <Modal
    centered
    size="sm"
    toggle={toggle}
    isOpen={modalIsOpen}
    backdrop={modalBackdrop}
  >
    <ModalHeader toggle={toggle} className="text-danger">
      Delete contract <span className="font-weight-bold">#{itemId}</span>
    </ModalHeader>

    <ModalBody>
      Are You sure that you want to delete contract <span className="font-weight-bold">#{itemId}</span>?
    </ModalBody>

    <ModalFooter>
      <Button
        color="secondary"
        onClick={toggle}
        outline
      >
        Cancel
      </Button>

      <Button
        color="danger"
        onClick={deleteHandler}
      >
        Delete
      </Button>
    </ModalFooter>
  </Modal>
  </>
);

export default DeleteContractView;