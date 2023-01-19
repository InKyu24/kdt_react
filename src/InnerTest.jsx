import React from 'react';

function InnerTest({ innerText }) {
    return (
        <div>
            <p>물려받은 값 : {innerText}</p>
        </div>
    );
}

export default InnerTest;