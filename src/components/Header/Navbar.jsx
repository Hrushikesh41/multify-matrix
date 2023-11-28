import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className="navbar">
            <div className="title" onClick={() => { navigate("/", { replace: true }) }}>
                <h2>Multify</h2>
            </div>

            <div className="btns">
                
                    <div className="matrix">
                        <a href="/">2X2</a>
                    </div>
                    <div className="triple-matrix">
                        <a href="/3X3">3X3</a>
                    </div>
                    <div className="double-matrix">
                        <a href="/2X3">2X3</a>
                    </div>
               
            </div>
        </div>

    </>
)
}

export default Navbar;