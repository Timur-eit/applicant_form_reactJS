import React from "react";

export interface IModalData {
  title: string;
  content: React.ReactElement<string, string>;
  closeButtonLabel: string;
}

export type ModalDataHandler = (param?: string) => IModalData;
