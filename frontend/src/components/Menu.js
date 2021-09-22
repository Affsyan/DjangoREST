import React from 'react'

const Menu = ({menus}) => {
    return (
            <div>
                <ul>
                <li><a href="http://192.168.1.44:3000/">Главная</a></li>
                <li><a href="http://127.0.0.1:8000/api/">Api</a></li>
                <li><a href="http://127.0.0.1:8000/admin/">Админка</a></li>
                </ul>
            </div>
    )
}

export default Menu