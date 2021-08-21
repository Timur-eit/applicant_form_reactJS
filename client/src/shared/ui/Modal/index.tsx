import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
interface IModalWindowProps {
  openButtonTitle: string,
  modalTitle: string,
  modalText: string,
  closeButtonText: string,
  openState?: boolean | undefined,
  setExternalOpenState?: React.Dispatch<React.SetStateAction<boolean>>,
}

const ModalWindow: React.FC<IModalWindowProps> = (props) => {

  const {
    openButtonTitle,
    modalTitle,
    modalText,
    closeButtonText,
    openState,
  } = props;

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    React.useEffect(() => {
      if (openState) {
        handleShow()
      } 
    }, [openState]);

    // console.log(show)

    return (
      <>
        <Button variant="primary" onClick={() => handleShow()}>
          {openButtonTitle}
        </Button>

        <Modal show={show} onHide={() => handleClose()} centered>
            <Modal.Body>
                <Modal.Title>{modalTitle}</Modal.Title>
                <p>{modalText}</p>
                <Button variant="primary" onClick={() => handleClose()}>
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
