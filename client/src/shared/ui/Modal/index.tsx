import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
interface IModalWindowProps {
  openButtonTitle?: string,
  declineButton: boolean,
  modalTitle: string,
  modalText: string,
  closeButtonText: string,
  modalButtonVisible: boolean,
  openState?: boolean | undefined,
  externalSetOpenState?: (state: boolean) => void,
  additionalStateHandler?: (state: boolean) => void,
  acceptAction?: () => void,
  declineAction?: () => void,
}

const ModalWindow: React.FC<IModalWindowProps> = (props) => {

  const {
    openButtonTitle,
    declineButton,
    modalTitle,
    modalText,
    closeButtonText,
    modalButtonVisible,
    openState,
    externalSetOpenState,
    additionalStateHandler,
    acceptAction,
    declineAction
  } = props;

    const [show, setShow] = React.useState<boolean>(false);
    
    const handleClose = (): void => {
        setShow(false);

        if (openState && externalSetOpenState) {
            externalSetOpenState(false);
        }      
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
        }
        setShow(false);
    }

    const handleShow= (): void => setShow(true);

    React.useEffect(() => {
        if (openState) {
            handleShow()
        } 
    }, [openState]);    

    return (
      <>
        {modalButtonVisible && <Button variant="primary" onClick={() => handleShow()}>
          {openButtonTitle}
        </Button>}

        <Modal show={show} onHide={() => handleClose()} centered>
            <Modal.Body>
                <div className='modal-title-block'>
                  <Modal.Title>{modalTitle}</Modal.Title>
                  {declineButton && <div onClick={() => declineHanlder()} className={'decline-btn'}></div>}
                </div>
                <p>{modalText}</p>
                <Button variant="primary" onClick={handleClose}>
                    {closeButtonText}
                </Button>
            </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalWindow;


// function CenteredModal(props: ModalProps) {
  //     return (
  //       <Modal
  //         {...props}
  //         size="lg"
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //       >
  //         <Modal.Body>
  //             <Modal.Title id="contained-modal-title-vcenter">
  //                 Спасибо Егор!
  //             </Modal.Title>
  //             <p>Мы скоро свяжемся с вами</p>
  //             <Button onClick={props.onHide}>Понятно</Button>
  //         </Modal.Body>
  //       </Modal>
  //     );
  //   }

  // export function ModalWraper() {
  //   const [modalShow, setModalShow] = React.useState(false);

  //   return (
  //     <>
  //       <Button variant="primary" onClick={() => setModalShow(true)}>
  //         Launch vertically centered modal
  //       </Button>

  //       <CenteredModal
  //         show={modalShow}
  //         onHide={() => setModalShow(false)}
  //       />
  //     </>
  //   );
  // }

  // export default ModalWraper;
