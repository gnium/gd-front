
const Header = () => {
    return (
        <header className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold">Pagely®</span>
                <span className="text-gray-400 text-sm">| A GoDaddy Brand</span>
            </div>
            <nav>
                <ul className="flex space-x-6 text-gray-300">
                    <li className="hover:text-white cursor-pointer">Hosting Solutions</li>
                    <li className="hover:text-white cursor-pointer">Pricing</li>
                    <li className="hover:text-white cursor-pointer">Support</li>
                    <li className="hover:text-white cursor-pointer">Affiliate</li>
                    <li className="hover:text-white cursor-pointer">Blog</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
