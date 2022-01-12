import React from "react";

import Trollface from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <div className="header--logo">
                <img src={Trollface} />
                <h1>Meme generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}