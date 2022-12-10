import React from 'react'

export default function PortfolioPopup({ Image, ImageCaption, PopupActive, PopupClose }) {
    return (
        <>
            <div className={`modal portfolio-popup-modal ${PopupActive}`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0 overflow-hidden position-relative">
                            <button
                                type="button"
                                onClick={PopupClose}
                                className="btn-close position-absolute shadow-none"
                                style={{ top: '10px', right: '10px' }}>
                            </button>
                            <img src={Image} alt='' className='img-fuild' />
                            <p className='m-0 p-0 mt-2 text-light'>{ImageCaption}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
