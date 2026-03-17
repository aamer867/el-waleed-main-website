"use client";
import React from "react";
import Card from '../Card';
import { faCalculator, faComputer, faMoneyBill, faChartBar, faBolt, faFolderTree, faBullseye } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    return(
        <div className="container mx-auto mt-20 mb-20">
            <div className="mb-12 text-center">
                <h1 className="text-main-red-color text-2xl md:text-4xl mb-6 font-bold">Why El-Waleed?</h1>
                <p className="text-main-blue-color lg:w-1/2 w-full px-10 mx-auto text-sm">Our business model focuses on hiding your money problems through several services like giving you a loan from an Islamic branch in a trusted bank, or if you have a problem with taxes department, we can solve them or giving you the best option to handle your taxes. If you have a new company and need to setup your first taxes paper, we can easily work on these papers.</p>
            </div>
            <div className="grid grid-cols-12 gap-y-8">
                <Card iconName={faCalculator} title={"Funding"} description={"Experts in providing integrated financing and investment services to enable you to achieve your financial goals"} />
                <Card iconName={faComputer} title={"Audit"} description={"We use the latest technologies and tools to manage your financial affairs efficiently and effectively"} />
                <Card iconName={faMoneyBill} title={"Taxes"} description={"We offer you a wide range of services to meet your specific tax needs"} />
                <Card iconName={faChartBar} title={"Feasibility study"} description={"Plan smartly for a reliable investment decision"} />
                <Card iconName={faBolt} title={"E-Taxes"} description={"Easier, faster, more efficient and accurate taxes"} />
                <Card iconName={faFolderTree} title={"Establishment"} description={"Your partner in establishing your company and starting your journey towards success"} />
                <Card 
                    iconName={faBullseye} 
                    title={"Marketing"} 
                    description={"Experts in developing and implementing integrated marketing strategies to increase your sales and achieve your goals"} 
                    customClasses="lg:col-start-5 lg:col-span-4" 
                />
            </div>
        </div>
    );
}