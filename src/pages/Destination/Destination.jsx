import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SearchBox from '../../components/SearchBox/SearchBox';

const Destination = () => {
    return (
        <div style={{backgroundImage:`url('/images/Rectangle 1.png')` , backgroundSize:'cover'}}>
            <div className="bg-black bg-opacity-65 min-h-screen w-screen">
                <div className="mx-auto container">
                    <Navbar from={0}></Navbar>
                    <div className="flex flex-col gap-24 justify-center items-center py-16">
                        <h1 className='text-center text-white font-extrabold text-3xl md:text-4xl lg:text-5xl'>
                            Search your next destination for tour !!!
                        </h1>
                        <div className="flex w-full md:w-2/3 lg:w-1/2 flex-col flex-grow-0">
                        <SearchBox/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Destination.propTypes = {
    
};

export default Destination;