import React from "react";

function Service(){
    return(
        <>
         <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Service One</h3>
                            <p className="text-gray-600">Description of service one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Service Two</h3>
                            <p className="text-gray-600">Description of service two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-xl font-bold mb-4">Service Three</h3>
                            <p className="text-gray-600">Description of service three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Service