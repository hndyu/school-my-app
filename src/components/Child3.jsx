import React, { memo } from 'react'

const style = {
    height: "50px",
    backgroundColor: "lightgray",
};

const Child3 = memo(() => {
    console.log("Child3 Rendering");

    return (
        <div style={style}>
            <p>Child3</p>
        </div>
    )
});

export default Child3