import React, { FC } from 'react'
import s from './index.module.scss'

interface IProps {
    value: number;
    increment: () => void;
    decrement: () => void;
}

export const IncDecControl: FC<IProps> = ({ value, increment, decrement }) => {
    return <div className={s.IncDecControl}>
        <div className={s["IncDecControl__Decrement"]} onClick={decrement}>-</div>
        <div className={s["IncDecControl__Value"]}>{value}</div>
        <div className={s["IncDecControl__Increment"]} onClick={increment}>+</div>
    </div>
}