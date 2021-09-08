import React from 'react'
import { Link } from "react-router-dom";
import './Stylesheets/Home.css'
import './Stylesheets/title.css'

export default function Home() {
    return (
        <>
        <div className="homebg">
            <h1 className="hometitle">Watch List</h1>
            <h3>An interactive dynamic one-stop shop of the trending picks for you to binge watch.</h3>
            <button className="button"><Link to="/discover" style={{textDecoration: 'none', color: 'green'}}>DISCOVER</Link></button>
        </div>
        </>
    )
}