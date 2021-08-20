import { Button } from '@material-ui/core'
import React, { FC } from 'react'
import { IncDecControl } from '../../Controls/IncDecControl'
import { IGood } from '../../GoodBar'
import s from './index.module.scss'

interface IProps {
    item: IGood
    increment: () => void;
    decriment: () => void;
    commit: () => void;
    value: number
}

export const InfoContent: FC<IProps> = ({ item, value, increment, decriment, commit }) => {
    return <div className={s.InfoContent}>
        <div className={s.InfoContent__Name}>{item.Name}</div>
        <div className={s.InfoContent__Description}>{item.Description}</div>
        <div className={s.InfoContent__ValueGroup}>
            <div className={s.InfoContent__Value}>Volume: {item.Value}ml</div>
            <div className={s.InfoContent__Price}>${item.Price}</div>
        </div>
        <div className={s.InfoContent__ControlsGroup}>
            <IncDecControl increment={increment} decrement={decriment} value={value} />
            <button onClick={commit} className={s.InfoContent__AddCard}>Add to cart</button>
        </div>
    </div>
}