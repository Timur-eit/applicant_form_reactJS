import { ModalDataHandler, IModalData } from "shared/interfaces";
import privacyPolicyContent from "./privacyPolicyContent";

const getPolicyModalData: ModalDataHandler = (): IModalData => {
  return {
    title: "Политика конфиденциальности",
    content: privacyPolicyContent,
    closeButtonLabel: "Я согласен",
  };
};

export default getPolicyModalData;
