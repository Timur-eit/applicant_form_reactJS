import React from 'react';

export interface IModalData {
    title: string,
    content: React.ReactElement<string, string>,
    closeButtonLabel: string,
}

export type ModalDataHandler = (param?: string) => IModalData

export interface IModalWindowProps {
    modalDataHandler: IModalData,
    declineButton: boolean,
    openState: boolean,
    setOpenState: (state: boolean) => void,
    additionalStateHandler?: (state: boolean) => void,
    acceptAction?: () => void,
    declineAction?: () => void,
}

