import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount((num) => num + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount((num) => num - 1)}>-</button>
        </div>
    )
}

export default Count