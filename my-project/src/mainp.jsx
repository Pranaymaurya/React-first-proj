import React from 'react';
import {motion} from 'framer-motion'
const MainContent = () => {
    return (
        <main className="bg-gray-100">
            {/* Header */}
            <motion.div 
            initial={{x:-200,
                opacity:0
            }}
            transition={{duration:1,}}
            animate={{x:1,opacity:1}}
            className="bg-white shadow text-center">
                <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 ">Welcome to Our Waterpark</h1>
                </div>
            </motion.div>
            
            {/* Hero Section */}
            
            <section className="bg-blue-600 text-white flex">
           
            <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center align-middle">
                <motion.dev initial={{x:-200,
                opacity:0
            }}
            transition={{duration:3,}}
            animate={{x:1,opacity:1}}>
                 <img src="im.jpg" alt=""  className='  border-r-amber-400 rounded-md shadow-lg h-96 w-auto text-center hover:w-max'/>
                    <h2 className="text-4xl font-bold mt-4">Discover Our Amazing Water Rides</h2>
                    <p className="mt-4 text-lg">We provide best services and safety .</p>
                    <a href="#" className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-yellow-100">Book Now</a>
                    </motion.dev>
                </div>
                
            </section>
            
            
            {/* Services Section */}
            <motion.div>
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                        initial={{y:100}}
                        whileInView={{y:0}}
                        transition={{duration:1}}
                        
                         className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Service One</h3>
                            <p className="text-gray-600">Description of service one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </motion.div>
                        <motion.div
                        initial={{y:100}}
                        whileInView={{y:-15}}
                        transition={{duration:1}}
                        
                         className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Service Two</h3>
                            <p className="text-gray-600">Description of service two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </motion.div>
                        <motion.div
                        initial={{y:100}}
                        whileInView={{y:0}}
                        transition={{duration:1}}
                        
                         className="bg-white shadow-lg rounded-lg p-8">
                        
                            <h3 className="text-xl font-bold mb-4">Service Three</h3>
                            <p className="text-gray-600">Description of service three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
            </motion.div>
            
            {/* Testimonial Section */}
            <section className="bg-gray-800 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                    <div className="mt-12">
                        <blockquote className="bg-gray-700 rounded-lg p-8">
                            <p className="text-lg italic">"This company provided the best service I've ever experienced. Highly recommend!"</p>
                            <footer className="mt-4">- Satisfied Customer</footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
