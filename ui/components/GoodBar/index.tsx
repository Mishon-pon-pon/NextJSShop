import React, { FC } from 'react'
import { IncDecControl } from '../Controls/IncDecControl'
import BasketIcon from '../../../assets/svg/BasketIcon.svg'
import s from './index.module.scss'

export interface IGood {
  id: number;
  name: string;
  value: number;
  price: number;
}

export const GoodBar: FC<IGood> = ({name, value, price}) => {
    return <div className={s.GoodBar}>
        <img src='/png/goodsImg.png' />
        <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '18px' }}>{name}</p>
        </div>
        <div className={s['GoodBar__value-price']}>
            <div>{value}ml</div>
            <div>${price}</div>
        </div>
        <div className={s['GoodBar__Footer']}>
            <IncDecControl />
            <BasketIcon className={s.GoodBar__Basket} onClick={()=>{}} />
        </div>
    </div>
}