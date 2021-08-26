import React from "react";
import ModalWindow from "shared/ui/Modal";
import getPolicyModalData from "./privacyPolicyModalData";
import "./style.scss";

export interface IPrivatePolicyModalProps {
  openState: boolean;
  setOpenState: (state: boolean) => void;
  acceptAction: () => void;
  declineAction: () => void;
}

function PrivatePolicyModal(props: IPrivatePolicyModalProps) {
  const { openState, setOpenState, acceptAction, declineAction } = props;

  return (
    <ModalWindow
      modalData={getPolicyModalData()}
      declineButton={true}
      openState={openState}
      setOpenState={setOpenState}
      acceptAction={acceptAction}
      declineAction={declineAction}
    />
  );
}

export default PrivatePolicyModal;
