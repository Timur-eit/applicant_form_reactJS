import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { IModalData } from "shared/interfaces";

export interface IModalWindowProps {
  modalData: IModalData | null;
  declineButton: boolean;
  openState: boolean;
  setOpenState: (state: boolean) => void;
  additionalStateHandler?: (state: boolean) => void;
  acceptAction?: () => void;
  declineAction?: () => void;
  onHide?: boolean;
}

function ModalWindow(props: IModalWindowProps) {
  const {
    modalData,
    declineButton,
    openState,
    setOpenState,
    additionalStateHandler,
    acceptAction,
    declineAction,
    onHide,
  } = props;

  const handleClose = (): void => {
    setOpenState(false);

    if (additionalStateHandler) {
      additionalStateHandler(true);
    }
    if (acceptAction) {
      acceptAction();
    }
  };

  const declineHanlder = (): void => {
    if (declineAction) {
      declineAction();
      setOpenState(false);
    }
  };

  React.useEffect(() => {
    if (openState) {
      setOpenState(true);
    }
  }, [openState, setOpenState]);

  return (
    <>
      <Modal
        show={openState}
        onHide={onHide ? () => handleClose() : null}
        centered
      >
        <Modal.Body>
          <div className="modal-title-block">
            <Modal.Title>{modalData && modalData.title}</Modal.Title>
            {declineButton && (
              <div
                onClick={() => declineHanlder()}
                className={"decline-btn"}
              ></div>
            )}
          </div>
          {modalData && modalData.content}
          <Button variant="primary" onClick={handleClose}>
            {modalData && modalData.closeButtonLabel}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalWindow;
