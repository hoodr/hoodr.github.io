/*
The modal window should have a descriptive title
The modal window should have a Cancel/Close button
Escape key should close the window
Close when clicking outside the modal window
Add a drop shadow and a transparent background
Don’t make the modal with too much contents in it. This is confusing.
*/

import React, { useRef, useEffect } from "react";
import CopyButton from "./button";
import "./modal.css";

const Modal = ({
  text,
  show,
}: {
  text: string;
  show: () => void;
}): JSX.Element => {
  const textRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const CopyText = () => {
    if (textRef.current) {
      textRef.current.select();
      document.execCommand("copy");
    }
    // e.target.focus();
  };

  const handleClickOutside = (event: { target: any }) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      show();
    }
  };

  const handleEsc = (event: { keyCode: number }) => {
    if (event.keyCode === 27) {
      show();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc, false);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc, false);
    };
  });

  return (
    <div className="modal">
      <div className="modal-container" ref={modalRef}>
        <div className="close-icon-container">
          <button
            type="button"
            className="mdc-fab mdc-fab--mini close-icon"
            onClick={() => show()}
          >
            <i className="mdc-fab__icon material-icons">close</i>
          </button>
        </div>
        <h2 className="modal-heading">Here&apos;s my email!</h2>
        <div className="text-bar-container">
          <input
            ref={textRef}
            className="text-bar-input"
            value={text}
            readOnly
          />
          {document.queryCommandSupported("copy") && (
            <CopyButton
              customClass="modal-button"
              cta="COPY"
              click={() => CopyText()}
              linkTo="#"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
