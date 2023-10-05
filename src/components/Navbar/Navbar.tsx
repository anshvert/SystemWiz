import React from "react"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            <div className="flex justify-evenly mt-5 font-black text-xl" id="Navbar">
                <div>SystemWiz</div>
                <div>Search Bar</div>
                <div id="Navigaton">
                    <div>
                        <div>Login</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar