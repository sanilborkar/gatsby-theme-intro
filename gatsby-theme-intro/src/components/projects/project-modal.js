import React, { useState, forwardRef, useImperativeHandle } from "react"
import Portal from "./Portal"
import * as styles from "../../styles/project-modal.module.css"

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    }
  })

  const handleOpen = () => {
    setDisplay(true)
  }

  const handleClose = () => {
    setDisplay(false)
  }

  if (display) {
    return (
      <Portal>
        <div className={styles.modalwrapper}>
          <div onClick={close} className={styles.modalbackdrop} />
          <div className={styles.modalbox}>
            {props.children}
            <button onClick={handleClose}>
              <span className="text-sm font-medium opacity-80">Close</span>
            </button>
          </div>
        </div>
      </Portal>
    )
  }

  return null
})

export default Modal
