import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({ iconName, title, description, customClasses }) {
    return (
        <div className={`border border-[1px] border-main-blue-color pt-5 pb-5 px-10 text-center lg:col-span-4 md:col-span-6 col-span-12 w-3/4 mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${customClasses}`}>
            <FontAwesomeIcon icon={iconName} className="mx-auto text-4xl mb-2" />
            <h6 className="text-main-red-color font-bold text-[16px] mb-2">{title}</h6>
            <p className="text-main-blue-color font-semibold text-[16px]">{description}</p>
        </div>
    );
}
