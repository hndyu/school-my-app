import React, { memo } from 'react'
import Child2 from './Child2';
import Child3 from './Child3';

const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px",
};

const Child1 = memo((props) => {
    console.log("Child1 Rendering");

    const {onClickReset} = props;

    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick={onClickReset}>Reset</button>
            <Child2 />
            <Child3 />
        </div>
    )
});

export default Child1