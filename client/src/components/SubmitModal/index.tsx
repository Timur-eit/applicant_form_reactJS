import ModalWindow from 'shared/ui/Modal';
import getSubmitModalData from './submitModalData'

export interface ISubmitModalProps {
    userName: string,
    openState: boolean,
    setOpenState: (state: boolean) => void,
    additionalStateHandler: (state: boolean) => void,
}

function SubmitModal (props: ISubmitModalProps) {
    const {
        userName,
        openState,
        setOpenState,
        additionalStateHandler,
    } = props;

    return (
        <ModalWindow
            modalData={getSubmitModalData(userName)}
            declineButton={false}
            openState={openState}
            setOpenState={setOpenState}
            additionalStateHandler={additionalStateHandler}
        />
    )
}

export default SubmitModal;