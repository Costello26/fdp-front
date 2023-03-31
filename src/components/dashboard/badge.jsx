import React from "react";
import { Select } from "antd";

export const Badge = ({title, children, filterOptions, className}) => {
    return(
        <div className={`badge flex flex-row flex-wrap border w-full p-5 rounded-lg mb-2 ${className}`}>
            <div className="flex justify-between w-full max-h-[35px] mb-3">
                <h4 className="text-xl font-semibold inline-block text-black/[.65]">{title}</h4>
                {filterOptions && <Select className="w-1/2" options={filterOptions} defaultValue={filterOptions[0]}/>}
            </div> 
            {children}
        </div>
    );
};