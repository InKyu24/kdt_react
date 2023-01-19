import React from 'react';
import InnerTest from './InnerTest';

function Test({ text }) {
    return (
        <div>
            <h1>Hello, {text}</h1>
            <InnerTest innerText={text} />
        </div>
    );
}

export default Test;