
import React from 'react';

const randomColor = () => {
    let letter = '1234567890abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
    
}
const Color = (WrappedComponent) => {
            const colorRandom = randomColor();
    return (props) => (
        <div style={{color: colorRandom}}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Color;