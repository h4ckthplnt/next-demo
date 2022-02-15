import React, { FunctionComponent, useState } from 'react';
import { Button, ButtonToolbar, Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

type UpdateModalProps = {
    closeModal: () => void;
    isOpen: boolean;
    updateMetric: (inputValue: number) => void;
}

const UpdateModal: FunctionComponent<UpdateModalProps> = ({
    closeModal, 
    isOpen,
    updateMetric
}) => {

  const [inputVal, setInputVal] = useState();

  const onInputChange = (e) => {
    setInputVal(e.target.value);
  }

  const updateAndClose = async () => {
      await updateMetric(inputVal);
      closeModal();
  }

  return (
    <Modal isOpen={isOpen}>
        <ModalHeader>
            Add Value
        </ModalHeader>
        <ModalBody>
        <Input
            placeholder="Number Value"
            value={inputVal}
            onChange={onInputChange}
            type="number"
        />
        </ModalBody>
        <ModalFooter style={{ justifyContent: "flex-start" }}>
            <ButtonToolbar>
                <Button
                    style={{ color: "#424242", backgroundColor: "#E0E0E0"}}
                    className="me-2"
                    onClick={closeModal}
                >
                Close
                </Button>
                {' '}
                <Button 
                    style={{ color: "#ffffff", backgroundColor: "#3E50B5"}}
                    onClick={updateAndClose}>
                    Save
                </Button>
            </ButtonToolbar>
        </ModalFooter>
    </Modal>
  )
};

export default UpdateModal;
