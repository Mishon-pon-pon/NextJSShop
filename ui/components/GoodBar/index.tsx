import React, { FC, useState } from 'react'
import { IncDecControl } from '../Controls/IncDecControl'
import BasketIcon from '../../../assets/svg/BasketIcon.svg'
import { GoodDetails } from '../GoodDetails'
import Image from 'next/image'
import s from './index.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { incrementByAmount } from '../../store/Basket'

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

    const count = useAppSelector(state => state.basket.products)
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(0)
    const increment = () => {
        setAmount(i => i + 1)
    }
    const decriment = () => {
        if (amount > 0) {
            setAmount(i => i - 1)
        }
    }

    const commitAmmount = () => {
        dispatch(incrementByAmount({ amount: amount, goodId: params.GoodId }))
    }

    return <React.Fragment>
        <GoodDetails item={params} open={isOpenModal} onClose={onClose} increment={increment} decriment={decriment} value={amount} commit={commitAmmount} />
        <div className={s.GoodBar}>
            <div onClick={onOpen} className={s.GoodBar__clickzone} >
                <Image width="300" height="300" src={imgPath} />
                <div style={{ textAlign: 'left' }}>
                    <p className={s.GoodBar__Name}>{name}</p>
                </div>
            </div>
            <div className={s['GoodBar__Footer']}>
                <div className={s['GoodBar__value-price']}>
                    <div>{value}ml</div>
                    <div>${price}</div>
                </div>
                <div className={s.GoodBar__actions}>
                    <IncDecControl value={amount} increment={increment} decrement={decriment} />
                    <BasketIcon className={s.GoodBar__Basket} onClick={commitAmmount} />
                </div>
            </div>
        </div>
    </React.Fragment>
}