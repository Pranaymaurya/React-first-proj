import React from "react";
import {color, domMax, motion} from "framer-motion"
function About(){
    return(
        <>
        <header className="bg-white shadow text-center">
                <motion.div whileHover={{
                    scale:1.5
                }}
                transition={{duration:3}}
                 className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 ">About Us</h1>
                </motion.div>
            </header>
            
            
            <section className="bg-blue-600 text-white flex">
                <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center align-middle">
                 {/* <img src="im.jpg" alt=""  className='  border-r-amber-400 rounded-md shadow-lg h-96 w-auto text-center hover:w-max'/> */}
                    {/* <h2 className="text-4xl font-bold mt-4">About us</h2> */}
                    <p className="mt-4 text-lg">The Pranam Amusement Park, recently opened in 2024, is a significant addition to the entertainment landscape. Located near a scenic beach area, this park aims to attract a diverse crowd with its wide range of attractions and state-of-the-art facilities.

Pranam Amusement Park is designed with a mix of traditional carnival elements and modern technology, creating a unique experience for visitors. The park features various themed zones, each offering different types of rides and entertainment. Highlights include roller coasters, water rides, live shows, and interactive experiences that cater to all age groups.

One of the park's standout features is its extensive use of LED lighting, creating vibrant and colorful night-time displays. This aspect of the park enhances the overall atmosphere, making it an appealing destination for evening visits as well.

In addition to the rides and attractions, Pranam Amusement Park offers a variety of dining options, from quick snacks to gourmet meals, ensuring that visitors have a range of culinary experiences to choose from. The park also emphasizes safety and comfort, providing well-maintained facilities and trained staff to assist visitors.

Overall, Pranam Amusement Park is set to become a popular destination for both locals and tourists, offering a comprehensive and enjoyable experience for everyone who visits</p>
                    <motion.div initial={{opacity:0}}
                    // animate={{opacity:1}}
                    transition={{duration:3}}
                    whileHover={{
                        scale:1.5,
                        opacity:1
                    }}
                    >
                    
                    <a href="#" className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full">Book Now</a>
                    </motion.div>
                </div>
            </section>
     </>
    )
}
export default About