import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
// import ReactModal from "react-modal";
import Popup from "reactjs-popup";
import { PopupProps } from "reactjs-popup/dist/types";
import Button from "../Button";

import "reactjs-popup/dist/index.css";

interface ModalProps extends PopupProps {
  header?: ReactNode;
  footer?: ReactNode;
}

// ReactModal.setAppElement("#root");

function Modal({
  children,
  header,
  footer,
  onClose,
  ...restProps
}: ModalProps) {
  return (
    <Popup {...restProps} closeOnDocumentClick={false} closeOnEscape={false} className="p-0">
      <header className="flex items-center justify-between p-4 border border-[#dddddd]">
        <h3 className="text-2xl">{header}</h3>
        <Button variant="default" onClick={onClose}>
          <XMarkIcon className="h-6 w-6 text-blue-500" />
        </Button>
      </header>
      <div className="p-4 flex-1">{children}</div>
      <footer className="p-4 border-t-[1px] border-[#dddddd] flex flex-col">
        {footer}
      </footer>
    </Popup>
  );
}

export default Modal;
