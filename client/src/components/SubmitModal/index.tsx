import ModalWindow from 'shared/ui/Modal';
import getSubmitModalData from './submitModalData'

export interface ISubmitModalProps {
    userName: string | null,
    openState: boolean,
    setOpenState: (state: boolean) => void,
    // additionalStateHandler: (state: boolean) => void,
}

function SubmitModal (props: ISubmitModalProps) {
    const {
        userName,
        openState,
        setOpenState,        
    } = props;

    const submitMessage = userName ? getSubmitModalData(userName) : null;

    return (
        <ModalWindow
            modalData={submitMessage}
            declineButton={false}
            openState={openState}
            setOpenState={setOpenState}
            // additionalStateHandler={additionalStateHandler}
        />
    )
}

export default SubmitModal;