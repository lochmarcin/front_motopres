import React from "react"
import { ButtonGroup, ToggleButton, FloatingLabel, Form } from "react-bootstrap"


const Filter = (props) => {

    return (
        <>
        <div id="SearchAndFilter">
            <Form id="search">
                <Form.Control type="text" placeholder="Szukaj..." onChange={(e)=>props.setSearch(e.target.value)}/>
            </Form>
            {}
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
            </div>
        </>
    )
}

export default Filter