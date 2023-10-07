import React, { useState } from "react"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const login = true
    return (
        <>
            <div className="flex justify-evenly mt-5 font-black text-xl" id="Navbar">
                <div>SystemWiz</div>
                <div>Search Bar</div>
                <div id="Navigaton">
                    {!login ? <a href="/api/auth/signin">
                        <div>Login</div>
                    </a> : <a href="/api/auth/signout">
                        <div>Logout</div>
                    </a>}
                </div>
            </div>
        </>
    )
}
export default Navbar