import { Modal as ModalMU, ModalProps } from '@material-ui/core'
import React, { FC } from 'react'
import { CloseButton } from '../CloseButton'
import s from './index.module.scss'

interface IProps extends ModalProps {
    open: boolean
    onClose: () => void;
    closeButton?: boolean
}

export const Modal: FC<IProps> = ({ children, open, closeButton, onClose }) => {
    return <ModalMU className={s.ModalMU} open={open}>
        <div className={s.Modal}>
            {closeButton ? 
            <div className={s.Modal__Header}>
                <CloseButton onClick={onClose} />
            </div> : null}
            <div>{children}</div>
        </div></ModalMU>
}