'use client'

import { useState } from "react"

export default () => {

    const [showMenu, setShowMenu] = useState(false);

    const showList = () => {
        setShowMenu(!showMenu)
    }



    return (
        <div>
            <button onClick={showList}>{showMenu ? 'Hide Menu' : 'Show Menu'}</button>
           {

            showMenu &&  <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Admin Panel</li>
                        </ul>

           }
        </div>    
    )
}