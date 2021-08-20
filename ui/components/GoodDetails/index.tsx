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
    increment: () => void;
    decriment: () => void;
    value: number;
    commit: () => void;
}

export const GoodDetails: FC<IProps> = ({ open, item, value, increment, decriment, onClose, commit }) => {

    return <Modal open={open} onClose={onClose}>
        <div className={s.GoodDetails}>
            <div className={s.GoodDetails__Img}>
                <div style={{ backgroundImage: `url(${item.imgPath})` }}></div>
            </div>
            <div className={s.GoodDetails__Info}>
                <InfoHeader onClose={onClose} />
                <InfoContent value={value} increment={increment} decriment={decriment} item={item} commit={commit} />
            </div>
        </div>
    </Modal>
}