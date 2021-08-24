import {ModalDataHandler, IModalData} from 'shared/interfaces'

const getSubmitModalData: ModalDataHandler = (userName): IModalData => {
    return {
        title: `Спасибо ${userName}!`,
        content: <p>Мы скоро свяжемся с вами</p>,        
        closeButtonLabel: 'Понятно',
    }
}

export default getSubmitModalData;