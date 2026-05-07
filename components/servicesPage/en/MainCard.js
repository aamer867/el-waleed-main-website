"use client";
export default function MainCard() {
    return (
        <>
            <div className="container mx-auto px-10 my-10 grid grid-cols-1 md:grid-cols-3 items-center">
                <div className="col-span-2 text-main-blue-color animate-slide-left text-center">
                    <h1 className="text-4xl lg:text-7xl font-bold md:block inline-block">El-Waleed&nbsp;</h1>
                    <h1 className="text-4xl lg:text-7xl font-bold md:block inline-block">Service!</h1>
                </div>
                <div className="text-md col-span-1 lg:text-xl font-semibold animate-slide-right mt-4 text-center md:text-left">
                    <p>A professional team of financial advisors, chartered accountants, and tax experts ensures that your business reaches the highest levels of success</p>
                </div>
            </div>
        </>
    );
}
