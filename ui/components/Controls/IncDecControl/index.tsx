import React, { FC, useState } from 'react'
import s from './index.module.scss'

export const IncDecControl: FC = () => {
    const [value, setValue] = useState(0)
    const Inc = () => {
        setValue(value => value + 1)
    }
    const Dec = () => {
        if (value <= 0) return
        setValue(value => value - 1)
    }
    return <div className={s.IncDecControl}>
        <div className={s["IncDecControl__Decrement"]} onClick={Dec}>-</div>
        <div className={s["IncDecControl__Value"]}>{value}</div>
        <div className={s["IncDecControl__Increment"]} onClick={Inc}>+</div>
    </div>
}