"use client";
import React, { useEffect, useState } from "react";
import Card from '../Card';

export default function Services() {

    const [servicesData, setServicesData] = useState([]);
    const [servicesSectionData, setservicesSectionData] = useState([]);

    useEffect(() => {
        fetch("/api/services-sub-section")
            .then(res => res.json())
            .then(data => {
                setServicesData(data);
            });
        
        fetch("/api/services-section")
            .then(res => res.json())
            .then(data => {
                setservicesSectionData(data);
            });
    }, []);

    return(
        <div className="container mx-auto mt-20 mb-20">

            <div className="mb-12 text-center">
                <h1 className="text-main-red-color text-2xl md:text-4xl mb-6 font-bold">
                    {servicesSectionData.header}
                </h1>

                <p className="text-main-blue-color lg:w-1/2 w-full px-10 mx-auto text-sm">
                    {servicesSectionData.description}
                </p>
            </div>

            <div className="grid grid-cols-12 gap-y-8">
                
                {servicesData.length > 0 ? (
                    servicesData.map((service, index) => (
                        <Card
                            key={index}
                            imageUrl={service.image_url}
                            title={service.header}
                            description={service.description}
                        />
                    ))
                ) : (
                    <p className="col-span-12 text-center">Loading services...</p>
                )}

            </div>
        </div>
    );
}