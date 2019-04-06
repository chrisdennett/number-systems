import React from 'react';
// ui
import '@material/slider/dist/mdc.slider.css';
import { Slider } from '@rmwc/slider';
// coms
import NumberSystemTable from '../NumberSystemTable';

const ColourVisualiser = ({value, onChange}) => {
    return (
        <div style={{flex: 1, margin:10}}>
            <NumberSystemTable currentValue={value} base={16} totalColumns={2} />
            <Slider
                value={value}
                onChange={e => onChange(e.detail.value)}
                onInput={e => onChange(e.detail.value)}
                discrete
                min={0}
                max={255}
                step={1}
                />
        </div>
    )           
};

export default ColourVisualiser;