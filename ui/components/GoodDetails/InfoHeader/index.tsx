import React, { FC } from 'react'
import { CloseButton } from '../../CloseButton'
import s from './index.module.scss'

interface IProps {
    onClose: () => void;
}

export const InfoHeader: FC<IProps> = ({onClose}) => {
    return <div className={s.InfoHeader}>
        <div></div>
        <CloseButton onClick={onClose} />
    </div>
}