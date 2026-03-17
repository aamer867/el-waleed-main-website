import Image from "next/image";
import React from "react";

export default function Card({imageUrl, imageAlt, title, description, props}) {
    return(
        <div className="2xl:col-start-10 2xl:col-end-13 xl:col-end-12 lg:col-start-9 lg:col-end-13 border border-blue-500 rounded-[40px] bg-white w-full lg:w-full sm:w-1/2 mx-auto bounce-animation card-container" >
            <div className="flex justify-center items-center lg:m-[45px] m-[20px]">
                <Image 
                    src={imageUrl} 
                    width={250} 
                    height={250} 
                    alt={imageAlt}
                    className="2xl:w-[250px] 2xl:h-[250px] w-[200px] h-[200px] rounded-full object-cover"
                />
            </div>
            <div className="mb-8 mx-12">
                <h4 className="text-main-red-color text-2xl">{title}</h4>
                <p className="text-base">{description}</p>
            </div>
        </div>
    );
}