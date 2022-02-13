import React from "react"
import { ButtonGroup, ToggleButton } from "react-bootstrap"


const Filter = (props) => {
    
    return (
        <>
            <ButtonGroup id="filter_buttons">
                <ToggleButton
                    // key={idx}
                    id='all'
                    type="radio"
                    variant={'outline-success'}
                    checked={props.radioValue == "Wszystko" ? true : false}
                    name="Wszystko"
                    value="Wszystko"
                    onChange={(e) => props.setRadioValue(e.currentTarget.value)}
                >
                    Wszystko
                </ToggleButton>
                <ToggleButton
                    // key={idx}
                    id='reg'
                    type="radio"
                    variant={'outline-secondary'}
                    name="reg"
                    value="Regenerowane"
                    checked={props.radioValue == "Regenerowane" ? true : false}
                    onChange={(e) => props.setRadioValue(e.currentTarget.value)}
                >
                    Regenerowane
                </ToggleButton>
                <ToggleButton
                    // key={idx}
                    id='neew'
                    type="radio"
                    variant={'outline-warning'}
                    name="neew"
                    value="Nowe / używane"
                    checked={props.radioValue == "Nowe / używane" ? true : false}
                    onChange={(e) => props.setRadioValue(e.currentTarget.value)}
                >
                    Nowe / Używane
                </ToggleButton>
            </ButtonGroup>
        </>
    )
}

export default Filter