import { Button } from '@material-ui/core'
import React, { FC } from 'react'
import { IncDecControl } from '../../Controls/IncDecControl'
import { IGood } from '../../GoodBar'
import s from './index.module.scss'

interface IProps {
    item: IGood
}

export const InfoContent: FC<IProps> = ({ item }) => {
    return <div className={s.InfoContent}>
        <div className={s.InfoContent__Name}>{item.name}</div>
        <div className={s.InfoContent__Description}>{item.description}</div>
        <div className={s.InfoContent__ValueGroup}>
            <div className={s.InfoContent__Value}>Volume: {item.value}ml</div>
            <div className={s.InfoContent__Price}>${item.price}</div>
        </div>
        <div className={s.InfoContent__ControlsGroup}>
            <IncDecControl />
            <button className={s.InfoContent__AddCard}>Add to cart</button>
        </div>
    </div>
}