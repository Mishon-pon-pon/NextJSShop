import React, { FC, useState } from 'react'
import { IncDecControl } from '../Controls/IncDecControl'
import BasketIcon from '../../../assets/svg/BasketIcon.svg'
import { GoodDetails } from '../GoodDetails'
import s from './index.module.scss'

export interface IGood {
    GoodId: number;
    Name: string;
    Value: number;
    Price: number;
    imgPath: string;
    Description: string;
}

export const GoodBar: FC<IGood> = (params) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const onOpen = () => { setIsOpenModal(true) }
    const onClose = () => { setIsOpenModal(false) }
    const { Value: value, Price: price, Name: name, imgPath } = params

    return <div className={s.GoodBar}>
        <GoodDetails item={params} open={isOpenModal} onClose={onClose} />
        <img src={imgPath} />
        <div style={{ textAlign: 'left' }}>
            <p onClick={onOpen} className={s.GoodBar__Name}>{name}</p>
        </div>
        <div className={s['GoodBar__value-price']}>
            <div>{value}ml</div>
            <div>${price}</div>
        </div>
        <div className={s['GoodBar__Footer']}>
            <IncDecControl />
            <BasketIcon className={s.GoodBar__Basket} onClick={() => { }} />
        </div>
    </div>
}