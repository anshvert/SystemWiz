
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <>
            <aside className="w-64 bg-gray-900 text-white h-auto">
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Home</h1>
                </div>
                <nav className="py-4">
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a>
                        </li>
                    </ul>
                </nav>
        </aside>
        </>
    )
}
export default Sidebar