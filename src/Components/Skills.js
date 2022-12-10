import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const Skills = () => {
    return (
        <div className="container mt-5 pt-3">
            <div className="section-head ">
                <span>ABILITIES</span>
                <h2>My Skills</h2>
            </div>
            <div className=''>
                <div className='row justify-content-center'>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={86}
                            text='HTML5'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={75}
                            text='CSS3'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={85}
                            text='Bootstrap'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={85}
                            text='Tailwind'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={65}
                            text='JavaScript'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={70}
                            text='React.js'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={50}
                            text='Node.js'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={60}
                            text='Express'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 px-1 px-xl-3 mb-3'>
                        <CircularProgressbar
                            value={40}
                            text='MongoDB'
                            styles={buildStyles({
                                textSize: '18px'
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
