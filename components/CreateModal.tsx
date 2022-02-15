import React, { FunctionComponent, useState } from 'react';
import { Button, ButtonToolbar, Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

type CreateModalProps = {
    closeModal: () => void;
    isOpen: boolean;
    createMetric: (name: string) => void;
}

const CreateModal: FunctionComponent<CreateModalProps> = ({
    closeModal, 
    isOpen,
    createMetric
}) => {
    const [inputVal, setInputVal] = useState();

    const onInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const createAndClose = async () => {
        await createMetric(inputVal);
        closeModal();
    }

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>
                Create Metric
            </ModalHeader>
            <ModalBody>
            <Input
                placeholder="Metric Name"
                value={inputVal}
                onChange={onInputChange}
                type="text"
            />
            </ModalBody>
            <ModalFooter style={{ justifyContent: "flex-start" }}>
                <ButtonToolbar>
                    <Button
                        className="me-2"
                        color="primary"
                        onClick={closeModal}
                    >
                        Close
                    </Button>
                    {' '}
                    <Button onClick={createAndClose}>
                        Save
                    </Button>
                </ButtonToolbar>
            </ModalFooter>
        </Modal>
    )
};

export default CreateModal;
