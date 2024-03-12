import ModalWindow from "./ModalWindow";
import React, {useState} from "react";

export default function ModalButtons () {
    const [open, setOpen] = useState(false)
    const [show, setShow ] = useState(false)

    return (
        <>
            <button className="open-modal-btn" onClick={() => setShow(true)}>Open Modal Window without Animation
            </button>
            {show && <ModalWindow open={show} setOpen={setShow}>
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdtZG96djVobnVtNDg0NW10NmNsZjY2MXE1dHA1eHZkanBidGZwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M90mJvfWfd5mbUuULX/giphy.gif"/>
                <h3> This is modal window</h3>
            </ModalWindow>}

            <button className="open-modal-btn" onClick={() => setOpen(true)}>Open Modal Window with Animation</button>
            <ModalWindow open={open} setOpen={setOpen}>
                <img
                    src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
                <h3> This is modal window</h3>
            </ModalWindow>
        </>
    )
}