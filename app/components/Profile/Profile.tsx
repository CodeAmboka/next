'use client'
import { useState } from "react"
import styles from "./profile.module.scss"

type Props = {
    title: string;
}

export default (props : Props) => {

    const [showMenu, setShowMenu] = useState(false);

    const onChange = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            <button className={styles.login} onClick={onChange}>{props.title}</button>
                {
                    showMenu && <ul className={styles.menu}>
                                    <li>Profile</li>
                                    <li>Settings</li>
                                    <li>Subscription</li>
                                    <li>Exit</li>
                                </ul>
                }
        </div>
    )
}