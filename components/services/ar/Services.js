"use client";
import React from "react";
import Card from '../Card';
import { faCalculator, faComputer, faMoneyBill, faChartBar, faBolt, faFolderTree, faBullseye } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    return(
        <div className="container mx-auto mt-20 mb-20">
            <div className="mb-12 text-center">
                <h1 className="text-main-red-color text-2xl md:text-4xl mb-6 font-bold">لماذا الوليد؟</h1>
                <p className="text-main-blue-color lg:w-1/2 w-full px-10 mx-auto text-sm">نموذج عملنا يركز على إخفاء مشاكلك المالية من خلال عدة خدمات مثل تقديم قرض لك من فرع إسلامي في بنك موثوق، أو إذا كان لديك مشكلة مع مصلحة الضرائب، يمكننا حلها أو تقديم أفضل خيار للتعامل مع ضرائبك. إذا كانت لديك شركة جديدة وتحتاج إلى إعداد أوراقك الضريبية الأولى، يمكننا العمل بسهولة على هذه الأوراق.</p>
            </div>
            <div className="grid grid-cols-12 gap-y-8">
                <Card iconName={faCalculator} title={"التمويل"} description={"خبراء في تقديم خدمات التمويل والاستثمار المتكاملة لتمكينك من تحقيق أهدافك المالية"} />
                <Card iconName={faComputer} title={"المراجعات الضريبية"} description={"نستخدم أحدث التقنيات والأدوات لإدارة شؤونك المالية بكفاءة وفعالية"} />
                <Card iconName={faMoneyBill} title={"الضرائب"} description={"نقدم لك مجموعة واسعة من الخدمات لتلبية احتياجاتك الضريبية المحددة"} />
                <Card iconName={faChartBar} title={"دراسة الجدوى"} description={"خطط بذكاء لاتخاذ قرار استثماري موثوق"} />
                <Card iconName={faBolt} title={"الضرائب الإلكترونية"} description={"ضرائب أسهل، أسرع، أكثر كفاءة ودقة"} />
                <Card iconName={faFolderTree} title={"التأسيس"} description={"شريكك في تأسيس شركتك وبدء رحلتك نحو النجاح"} />
                <Card 
                    iconName={faBullseye} 
                    title={"التسويق"} 
                    description={"خبراء في تطوير وتنفيذ استراتيجيات التسويق المتكاملة لزيادة مبيعاتك وتحقيق أهدافك"} 
                    customClasses="lg:col-start-5 lg:col-span-4" 
                />
            </div>
        </div>
    );
}
