import React, { useEffect, useRef, useState } from 'react'

function AppEffect() {

    // const [textState, setTextState] = useState("");
    const textRef = useRef();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.count("副作用");
    }, [flag]);

    console.log("レンダリング");

    return (
        <div className='App'>
            <input
                type="text"
                // value={textState}
                // onChange={(e) => { setTextState(e.target.value) }}
                ref={textRef}
            />
            <button onClick={() => setFlag((prev) => !prev)}>送信</button>
        </div>
    )
}

export default AppEffect