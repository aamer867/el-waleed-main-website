"use client";
import Footer from "../../../components/footer/en/Footer";
import NavbarEn from "../../../components/navbar/en/Navbar";
import NavbarAr from "../../../components/navbar/ar/Navbar";
import Card from "../../../components/servicesPage/Card";
import MainCardEn from "../../../components/servicesPage/en/MainCard";
import MainCardAr from "../../../components/servicesPage/ar/MainCard";
import { useState } from "react";

export default function Services() {
    const fundingDescription = [
        "Consultations on investment and finance.",
        "Assisting entrepreneurs and individuals in dealing with banks – supporting business owners and entrepreneurs in establishing economic projects.",
        "Providing all services to assist business owners and entrepreneurs in obtaining the necessary financing for activities or expansion, whether from banks or official financial institutions.",
        "All financing and investment services in accordance with Islamic finance principles."
    ];
    const AccountingDescription = [
        "Accounting services including bookkeeping, preparing final accounts, financial statements, and accounting reports.",
        "Specialized audits, performance evaluation, and ongoing supervision of internal auditing and control.",
        "Evaluation and development of internal control systems based on modern auditing trends and international auditing standards.",
        "Transition from manual accounting systems to electronic accounting systems using the latest and most powerful software, including the world’s leading accounting software, BOOKS QUICK."
    ];
    const taxDescription = [
        "Preparation and review of analyses required for tax return filing.",
        "Preparation of the tax return in accordance with legal requirements and tax regulations.",
        "Approval of tax returns.",
        "Submission of the tax return within the legal deadline."
    ];
    const taxConsultingDescription = [
        "Providing tax consulting and tax restructuring studies in accordance with applicable tax laws and regulations.",
        "Responding to client inquiries regarding all types of taxes.",
        "Addressing all inquiries related to international agreements and avoiding double taxation.",
        "Conducting tax impact studies, explaining the tax risks associated with transactions, and determining the necessary tax allocations."
    ];
    const auditServices = [
        "Reviewing all financial analyses and documents related to the audit before the audit begins.",
        "Conducting interviews with tax officials and attending tax examinations.",
        "Inspecting and providing any information requested by the examining officer during the tax audit."
    ];
    const auditReviewServices = [
        "Reviewing all financial analyses and documents related to the audit before the audit begins.",
        "Conducting interviews with tax officials, attending tax examinations, and providing any information requested by the examining officer during the tax audit.",
        "Monitoring the tax audit throughout all its stages.",
        "Objecting to assessment forms on behalf of the company, with a reminder to the client to send the forms to us immediately upon receipt, so we can file the objection within the legal period.",
        "Studying the audit report, preparing a summary outlining our opinions and suggestions, and discussing details with the client.",
    ];
    const electronicInvoiceServices = [
        "Subscription to the electronic invoicing system.",
        "Services for obtaining electronic signatures or digital stamps.",
        "Consulting on everything you need to know about the new tax authority system and electronic invoicing.",
        "Setting up client data to comply with the electronic tax authority system.",
        "Integration with the electronic invoicing system.",
        "Coding items according to tax authority classification.",
        "Entering electronic invoices.",
        "Reviewing and ensuring the accuracy of invoices."
    ];
    const FeasibilityStudy = [
        "Conducting market research, technical research, financial research, and preparing a financial plan based on measuring the project's sensitivity to future economic changes.",
        "Identifying potential obstacles.",
        "Providing a comprehensive analysis of competitors.",
        "Understanding supply and demand challenges.",
        "Evaluating the pros and cons of available offers. Comparing profit to costs.",
        "Preparing a comprehensive report with all the above information."
    ];
    const hrDescription = [
        "Recruitment & Onboarding: Identifying staffing needs, managing recruitment, evaluating candidates, and assisting with employee integration.",
        "Training & Development: Assessing training needs, designing and delivering training programs, and evaluating their impact on performance.",
        "Performance Management: Setting performance criteria, evaluating performance, developing improvement plans, and managing performance rewards.",
        "Compensation & Benefits: Designing salary systems, providing employee benefits, and managing reward systems.",
        "Employee Relations & Legal Compliance: Facilitating communication, resolving conflicts, building a positive work culture, ensuring compliance with labor laws, and managing occupational health and safety."
    ];
    const marketingDescription = [
        "Digital Marketing: Enhancing online visibility through SEO, SEM, email marketing, social media management, and content creation.",
        "Influencer Marketing: Collaborating with influencers to expand reach and engage a broader audience.",
        "Market Research: Analyzing target markets to understand customer needs and behaviors.",
        "Branding and Public Relations: Building a strong brand and maintaining positive media and community relations.",
        "Design and Development: Creating websites, mobile apps, and e-commerce platforms to meet business objectives."
    ];
    const companyFormation = [
        "Company Formation: Establishing various types of companies including LLCs, joint-stock companies, foreign branches, representative offices, joint ventures, and foreign direct investment companies.",
        "Mergers and Acquisitions: Handling company mergers, acquisitions, and company liquidation.",
        "Administrative and Legal Support: Managing administrative procedures, legal consultations, tax declarations, and registration paperwork.",
        "Banking and Compliance: Setting up bank accounts, obtaining work permits, and ensuring compliance with necessary regulations.",
        "Intellectual Property and Market Registration: Registering patents, trademarks, and listing company shares on the Egyptian Stock Exchange."
    ];

    const fundingDescriptionAr = [
        "استشارات في الاستثمار والتمويل.",
        "مساعدة رواد الأعمال والأفراد في التعامل مع البنوك - دعم أصحاب المشاريع ورواد الأعمال في تأسيس المشاريع الاقتصادية.",
        "تقديم كافة الخدمات لمساعدة أصحاب الأعمال ورواد الأعمال في الحصول على التمويل اللازم للنشاطات أو التوسع، سواء من البنوك أو المؤسسات المالية الرسمية.",
        "جميع خدمات التمويل والاستثمار وفقاً لمبادئ التمويل الإسلامي."
    ];
    const accountingDescriptionAr = [
        "خدمات المحاسبة بما في ذلك مسك الدفاتر، إعداد الحسابات الختامية، البيانات المالية، وتقارير المحاسبة.",
        "تدقيق متخصص، تقييم الأداء، والإشراف المستمر على التدقيق الداخلي والرقابة.",
        "تقييم وتطوير أنظمة الرقابة الداخلية بناءً على أحدث اتجاهات التدقيق والمعايير الدولية.",
        "الانتقال من أنظمة المحاسبة اليدوية إلى الأنظمة الإلكترونية باستخدام أحدث وأقوى البرمجيات، بما في ذلك برنامج المحاسبة الرائد عالميًا، BOOKS QUICK."
    ];
    const taxDescriptionAr = [
        "إعداد ومراجعة التحليلات المطلوبة لتقديم الإقرار الضريبي.",
        "إعداد الإقرار الضريبي وفقًا للمتطلبات القانونية واللوائح الضريبية.",
        "الموافقة على الإقرارات الضريبية.",
        "تقديم الإقرار الضريبي ضمن الموعد النهائي القانوني."
    ];
    const taxConsultingDescriptionAr = [
        "تقديم استشارات ضريبية ودراسات إعادة هيكلة ضريبية وفقًا للقوانين واللوائح الضريبية المعمول بها.",
        "الرد على استفسارات العملاء بشأن جميع أنواع الضرائب.",
        "التعامل مع جميع الاستفسارات المتعلقة بالاتفاقيات الدولية وتجنب الازدواج الضريبي.",
        "إجراء دراسات تأثير ضريبي، شرح المخاطر الضريبية المرتبطة بالمعاملات، وتحديد المخصصات الضريبية اللازمة."
    ];
    const auditServicesAr = [
        "مراجعة جميع التحليلات والوثائق المالية المتعلقة بالتدقيق قبل بدء التدقيق.",
        "إجراء مقابلات مع مسؤولي الضرائب وحضور الفحوصات الضريبية.",
        "فحص وتقديم أي معلومات يطلبها المسؤول المفحص أثناء التدقيق الضريبي."
    ];
    const auditReviewServicesAr = [
        "مراجعة جميع التحليلات والوثائق المالية المتعلقة بالتدقيق قبل بدء التدقيق.",
        "إجراء مقابلات مع مسؤولي الضرائب، حضور الفحوصات الضريبية، وتقديم أي معلومات يطلبها المسؤول المفحص أثناء التدقيق الضريبي.",
        "مراقبة التدقيق الضريبي طوال جميع مراحله.",
        "الاعتراض على نماذج التقييم نيابة عن الشركة، مع تذكير العميل بإرسال النماذج إلينا فور استلامها، حتى نتمكن من تقديم الاعتراض ضمن الفترة القانونية.",
        "دراسة تقرير التدقيق، إعداد ملخص يوضح آرائنا واقتراحاتنا، ومناقشة التفاصيل مع العميل."
    ];
    const electronicInvoiceServicesAr = [
        "الاشتراك في نظام الفوترة الإلكترونية.",
        "خدمات الحصول على التوقيعات الإلكترونية أو الأختام الرقمية.",
        "الاستشارات حول كل ما تحتاج لمعرفته حول نظام الضرائب الجديد والفوترة الإلكترونية.",
        "إعداد بيانات العملاء للامتثال لنظام الضرائب الإلكترونية.",
        "التكامل مع نظام الفوترة الإلكترونية.",
        "ترميز العناصر وفقًا لتصنيف السلطات الضريبية.",
        "إدخال الفواتير الإلكترونية.",
        "مراجعة وضمان دقة الفواتير."
    ];
    const feasibilityStudyAr = [
        "إجراء أبحاث السوق، الأبحاث الفنية، الأبحاث المالية، وإعداد خطة مالية بناءً على قياس حساسية المشروع للتغيرات الاقتصادية المستقبلية.",
        "تحديد العقبات المحتملة.",
        "تقديم تحليل شامل للمنافسين.",
        "فهم تحديات العرض والطلب.",
        "تقييم إيجابيات وسلبيات العروض المتاحة. مقارنة الربح بالتكاليف.",
        "إعداد تقرير شامل بكل المعلومات المذكورة."
    ];
    const hrDescriptionAr = [
        "التوظيف والتوجيه: تحديد احتياجات التوظيف، إدارة التوظيف، تقييم المرشحين، والمساعدة في دمج الموظفين.",
        "التدريب والتطوير: تقييم احتياجات التدريب، تصميم وتقديم برامج التدريب، وتقييم تأثيرها على الأداء.",
        "إدارة الأداء: تحديد معايير الأداء، تقييم الأداء، تطوير خطط التحسين، وإدارة مكافآت الأداء.",
        "التعويضات والمزايا: تصميم أنظمة الرواتب، تقديم مزايا الموظفين، وإدارة أنظمة المكافآت.",
        "علاقات الموظفين والامتثال القانوني: تسهيل التواصل، حل النزاعات، بناء ثقافة عمل إيجابية، ضمان الامتثال لقوانين العمل، وإدارة الصحة والسلامة المهنية."
    ];
    const marketingDescriptionAr = [
        "التسويق الرقمي: تعزيز الظهور عبر الإنترنت من خلال SEO، SEM، التسويق عبر البريد الإلكتروني، إدارة وسائل التواصل الاجتماعي، وإنشاء المحتوى.",
        "التسويق عبر المؤثرين: التعاون مع المؤثرين لتوسيع نطاق الوصول وزيادة التفاعل مع جمهور أوسع.",
        "أبحاث السوق: تحليل الأسواق المستهدفة لفهم احتياجات وسلوكيات العملاء.",
        "العلامة التجارية والعلاقات العامة: بناء علامة تجارية قوية والحفاظ على علاقات إيجابية مع وسائل الإعلام والمجتمع.",
        "التصميم والتطوير: إنشاء مواقع ويب، تطبيقات موبايل، ومنصات تجارة إلكترونية لتحقيق أهداف الأعمال."
    ];
    const companyFormationAr = [
        "تأسيس الشركات: تأسيس أنواع مختلفة من الشركات بما في ذلك الشركات ذات المسؤولية المحدودة، الشركات المساهمة، الفروع الأجنبية، المكاتب التمثيلية، المشاريع المشتركة، والشركات ذات الاستثمار الأجنبي المباشر.",
        "الاندماجات والاستحواذات: التعامل مع الاندماجات، الاستحواذات، وتصفيه الشركات.",
        "الدعم الإداري والقانوني: إدارة الإجراءات الإدارية، الاستشارات القانونية، التصريحات الضريبية، والأوراق المتعلقة بالتسجيل.",
        "البنوك والامتثال: فتح حسابات بنكية، الحصول على تصاريح العمل، وضمان الامتثال للأنظمة اللازمة.",
        "الملكية الفكرية وتسجيل السوق: تسجيل براءات الاختراع، العلامات التجارية، وإدراج أسهم الشركة في البورصة المصرية."
    ];

    const [language, setLanguage] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem('languageLocalStorage') || 'ar';
        }
        return 'ar'; // Default to 'ar' if window is undefined (e.g., during SSR)
    });

    const handleLanguageToggle = () => {
        const newLanguage = language === 'ar' ? 'en' : 'ar';
        setLanguage(newLanguage);
    
        if (typeof window !== "undefined") {
            localStorage.setItem('languageLocalStorage', newLanguage);
        }
    };

    return (
        <>
        {language==="en" ?
        <div dir="ltr">
            <NavbarEn imageUrl={"/images/logo/logo.jpg"} pageLabel={"Services"} language={language} onLanguageToggle={handleLanguageToggle}/>
            <MainCardEn />
            <Card header={"Funding & Investment"} description={fundingDescription} imageUrl={"/images/servicesPage/services_fuding.jpg"} textDir={"md:text-left"}/>
            <Card header={"Accounting & Auditing"} description={AccountingDescription} imageUrl={"/images/servicesPage/services_accounting_auditing.jpg"} textDir={"md:text-left"}/>
            <Card header={"Company Formation"} description={companyFormation} imageUrl={"/images/servicesPage/services_comp_formatoin.jpg"} textDir={"md:text-left"}/>
            <Card header={"Tax Preparation"} description={taxDescription} imageUrl={"/images/servicesPage/services_tax_preparation.jpg"} textDir={"md:text-left"}/>
            <Card header={"Tax Consulting"} description={taxConsultingDescription} imageUrl={"/images/servicesPage/services_tax_consulting.jpg"} textDir={"md:text-left"}/>
            <Card header={"Tax Inspection"} description={auditServices} imageUrl={"/images/servicesPage/services_tax_inspection.jpg"} textDir={"md:text-left"}/>
            <Card header={"Tax Audit"} description={auditReviewServices} imageUrl={"/images/servicesPage/services_tax_audit.jpg"} textDir={"md:text-left"}/>
            <Card header={"E-Tax"} description={electronicInvoiceServices} imageUrl={"/images/servicesPage/services_e_tax.jpg"} textDir={"md:text-left"}/>
            <Card header={"feasibility Study"} description={FeasibilityStudy} imageUrl={"/images/servicesPage/services_feasibility_study.jpg"} textDir={"md:text-left"}/>
            <Card header={"HR"} description={hrDescription} imageUrl={"/images/servicesPage/services_HR.jpg"} textDir={"md:text-left"}/>
            <Card header={"Marketting"} description={marketingDescription} imageUrl={"/images/servicesPage/services_marketing_1.jpg"} textDir={"md:text-left"}/>
            <Footer />
        </div>
        :
        <div dir="rtl" className="font-cairo">
            <NavbarAr imageUrl={"/images/logo/logo.jpg"} pageLabel={"Services"} language={language} onLanguageToggle={handleLanguageToggle}/>
            <MainCardAr />
            <Card header={"التمويل والاستثمار"} description={fundingDescriptionAr} imageUrl={"/images/servicesPage/services_fuding.jpg"} textDir={"md:text-right"} />
            <Card header={"المحاسبة والتدقيق"} description={accountingDescriptionAr} imageUrl={"/images/servicesPage/services_accounting_auditing.jpg"} textDir={"md:text-right"} />
            <Card header={"تأسيس الشركات"} description={companyFormationAr} imageUrl={"/images/servicesPage/services_comp_formatoin.jpg"} textDir={"md:text-right"} />
            <Card header={"إعداد الضرائب"} description={taxDescriptionAr} imageUrl={"/images/servicesPage/services_tax_preparation.jpg"} textDir={"md:text-right"} />
            <Card header={"استشارات ضريبية"} description={taxConsultingDescriptionAr} imageUrl={"/images/servicesPage/services_tax_consulting.jpg"} textDir={"md:text-right"} />
            <Card header={"تفتيش ضريبي"} description={auditServicesAr} imageUrl={"/images/servicesPage/services_tax_inspection.jpg"} textDir={"md:text-right"} />
            <Card header={"مراجعة ضريبية"} description={auditReviewServicesAr} imageUrl={"/images/servicesPage/services_tax_audit.jpg"} textDir={"md:text-right"} />
            <Card header={"الفوترة الإلكترونية"} description={electronicInvoiceServicesAr} imageUrl={"/images/servicesPage/services_e_tax.jpg"} textDir={"md:text-right"} />
            <Card header={"دراسة الجدوى"} description={feasibilityStudyAr} imageUrl={"/images/servicesPage/services_feasibility_study.jpg"} textDir={"md:text-right"} />
            <Card header={"الموارد البشرية"} description={hrDescriptionAr} imageUrl={"/images/servicesPage/services_HR.jpg"} textDir={"md:text-right"} />
            <Card header={"التسويق"} description={marketingDescriptionAr} imageUrl={"/images/servicesPage/services_marketing_1.jpg"} textDir={"md:text-right"} />
            <Footer />
        </div>
}
        </>
    );
}
