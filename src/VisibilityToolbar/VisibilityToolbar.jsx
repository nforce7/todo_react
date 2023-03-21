import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { VisibilityType } from '../utilities/constants';

export default function VisibiltyToolbar({onVisibilityChange}) {              //destrukturiram prop  onVisibilityChange
    const [radioValue, setRadioValue] = useState(VisibilityType.ALL);

    const radios = [
        { name: 'All', value: VisibilityType.ALL },
        { name: 'Active', value: VisibilityType.ACTIVE },
        { name: 'Completed', value: VisibilityType.COMPLETED },
    ];


    function handleChange(e) {      //e je event
            setRadioValue(e.target.value);


            onVisibilityChange(e.target.value);   //ovo je za 3 gumbića
    }

    return (
        <ButtonGroup className="mb-2">
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={handleChange}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
}