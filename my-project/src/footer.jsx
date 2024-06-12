import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and brand */}
                    <div className="mb-4 md:mb-0">
                        <a href="#" className="flex items-center text-white">
                            <svg className="h-8 w-8 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.633 0 3 1.367 3 3s-1.367 3-3 3-3-1.367-3-3 1.367-3 3-3zm0 10a7 7 0 110-14 7 7 0 010 14zm0-18a9 9 0 100 18 9 9 0 000-18z" />
                            </svg>
                            <span className="font-bold text-lg">Brand</span>
                        </a>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">Home</a>
                        <a href="#" className="text-gray-400 hover:text-white">About</a>
                        <a href="#" className="text-gray-400 hover:text-white">Services</a>
                        <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; 2024 Brand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
