import React, { memo } from 'react'

const style = {
    height: "50px",
    backgroundColor: "lightgray",
};

const Child2 = memo(() => {
    console.log("Child2 Rendering");

    return (
        <div style={style}>
            <p>Child2</p>
        </div>
    )
});

export default Child2