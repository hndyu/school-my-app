import React, { useState } from 'react'
import Counter from './Counter'

const AppRender = () => {
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <div>
            {isAdmin ? (<Counter name="管理者" />) : (<Counter name="スタッフ" />)}
            <br />
            <button onClick={() => setIsAdmin((user) => !user)}>切り替え</button>
        </div>
    )
}

export default AppRender