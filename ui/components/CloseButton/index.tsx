import React, { FC } from 'react'
import CloseIcon from '../../../assets/svg/CloseIcon.svg'
import s from './index.module.scss'

interface IProps {
    onClick: () => void;
}

export const CloseButton: FC<IProps> = ({ onClick }) => {
    return <div onClick={onClick} className={s.CloseButton}>
        <CloseIcon />
    </div>
}