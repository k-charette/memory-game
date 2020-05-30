import React, { memo, useReducer, useMemo, useEffect } from 'react'
import 'rc-switch/assets/index.css'

import { Field } from './components/GameField';
import { GameFieldView, GameView, SwitchView } from './components/Styled';
import {
    GameReducer, initialState, NEW_LEVEL,
    FIELD_HIDE, FIELD_SHOW, RESET_LEVEL,
} from './game.reducer';
import { generateGameField } from './game.utils';
import Switch from 'rc-switch';

const Game = ({ toggleTheme }) => {
    const [{ level, showHidden, showField, levelConfig }, dispatch] = useReducer(
        GameReducer, initialState
    )

    const { cellCount, memoryCount } = levelConfig

    const { field, hiddenCells } = useMemo(
        () => generateGameField(cellCount, memoryCount), 
        [levelConfig]
    )

    useEffect(
        () => setTimeout(dispatch, 500, { type: FIELD_SHOW }),
        [levelConfig]
    )

    const updateLevel = (shouldReset) => {
        dispatch({ type: FIELD_HIDE })
        setTimeout(dispatch, 500, { type: shouldReset ? RESET_LEVEL : NEW_LEVEL, level: level + 1  })

    }

    return (
        <div>

        </div>
    )
}

export default Game
