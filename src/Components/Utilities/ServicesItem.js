import React from 'react'

export default function ServicesItem({ Title, Description, SerialNumber, Icon }) {
    return (
        <>
            <div className="col-sm-6 col-lg-6">
                <div className="services-list b-box hover-state p-4 mt-4">
                    <div className="services-list-icon">
                        {Icon}
                        <span>{SerialNumber}</span>
                    </div>
                    <div className="mt-4">
                        <h5 className="mb-0">{Title}</h5>
                        <p className=" mt-3">{Description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
