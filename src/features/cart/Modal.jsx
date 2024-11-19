/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

import useOutsideClick from "../../hooks/useOutsideClick";
import { removeAll } from "./cartSlice";

import "./Modal.css";

// @ts-ignore
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowsName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowsName) });
}

function Windows({ children, name }) {
  const { close, openName } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  const dispatch = useDispatch();
  if (name !== openName) return null;

  return createPortal(
    <div id="overlay">
      <div
        id="modal"
        // @ts-ignore
        ref={ref}
      >
        <div id="navbar">
          <button onClick={close} className="modal-button">
            <HiXMark color="white" />
          </button>
          <button
            onClick={() => dispatch(removeAll())}
            className="modal-button"
          >
            حذف همه
          </button>
          <button
            onClick={() => dispatch(removeAll())}
            className="modal-button"
          >
            تایید و پرداخت
          </button>
        </div>

        <div id="main">
          <div>{cloneElement(children, { onCloseModal: close })} </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.open = Open;
Modal.window = Windows;

export default Modal;
