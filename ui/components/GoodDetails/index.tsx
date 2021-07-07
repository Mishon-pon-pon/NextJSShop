import React, { FC } from 'react'
import { Modal } from '../Modal'
import { InfoContent } from './InfoContent'
import { InfoHeader } from './InfoHeader'
import { IGood } from '../GoodBar'
import s from './index.module.scss'

interface IProps {
    open: boolean;
    onClose: () => void;
    item: IGood
}

export const GoodDetails: FC<IProps> = ({ open, item, onClose }) => {
    return <Modal open={open} onClose={onClose}>
        <div className={s.GoodDetails}>
            <div className={s.GoodDetails__Img}>
                <div style={{backgroundImage: `url(${item.imgPath})`}}></div>
            </div>
            <div className={s.GoodDetails__Info}>
                <InfoHeader onClose={onClose} />
                <InfoContent item={item} />
            </div>
        </div>
    </Modal>
}