import React, { memo } from 'react'

const style = {
    height: "200px",
    backgroundColor: "wheat",
    padding: "8px",
};

const Child4 = memo(() => {
    console.log("Child4 Rendering");

    return (
        <div style={style}>
            <p>Child4</p>
        </div>
    )
});

export default Child4