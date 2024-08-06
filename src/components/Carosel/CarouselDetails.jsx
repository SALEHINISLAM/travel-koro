import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "../../pages/Home/Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdDateRange } from "react-icons/md";
import '../CustomSearch/CustomSuggestion.css';
const CarouselDetails = () => {
  const places = useLoaderData();
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [districts,setDistricts]=useState([]);
  useEffect(()=>{
    fetch('/bd-districts.json').then(res=>res.json()).then(datum=>setDistricts(datum))
  },[])
  const [query, setQuery]=useState('');
  const [filtersuggestions,setFilterSuggestions]=useState([]);
  const [showSuggestions, setShowSuggestions]=useState(false);
  const originInputRef=useRef(null);
  const handleBlur=(e)=>{
    if (!e.relatedTarget || !originInputRef.current.contains(e.relatedTarget)) {
      setTimeout(()=>{
        setShowSuggestions(false);
      },100);
    }
  }
  const handleChange=(e)=>{
    const origin=e.target.value;
    setQuery(origin);
    if (origin) {
      const filtered=districts.filter((district)=>
        district.name.toLowerCase().includes(origin.toLowerCase())
      );
      setFilterSuggestions(filtered)
      setShowSuggestions(true);
    }
    else{
      setShowSuggestions(false);
    }
  };
  const handleClick=(suggestion)=>{
    setQuery(suggestion);
    setShowSuggestions(false)
  };
  return (
    <div className="min-h-screen" 
    style={{backgroundImage:`url(${places[id].photo})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'100%', width:'100%'}}
    >
      <div className="bg-black bg-opacity-50 w-full min-h-screen">
        <div className="container mx-auto">
          <Navbar from={0}/>
          {/* carousel */}
          <div className="flex flex-col md:flex-row pt-32">
            <div className="lg:w-2/5 w-full flex gap-10 flex-col justify-center">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
                {places[id].name}
              </h1>
              <h3 className="text-2xl font-bold text-white">
                {places[id].engagementMessage}
              </h3>
              <p className="text-lg font-semibold text-white">
                {places[id].description}
              </p>
            </div>
            <div className="lg:w-3/5 w-full justify-center">
              <div className="card bg-white w-full m-4 shrink-0 shadow-2xl text-black">
                <form className="card-body">
                  <div 
                  className="search-container w-full" 
                  ref={originInputRef}>
                    <label className="label">
                      <span className="label-text">Origin</span>
                    </label>
                    <input
                      type="text"
                      placeholder="origin"
                      className="input input-bordered font-bold bg-[#F2F2F2] search-box w-full"
                      required
                      value={query}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={()=>setShowSuggestions(true)}
                    ></input>
                    {
                      showSuggestions && filtersuggestions.length>0 && (
                        <div className="suggestions">
                          {
                            filtersuggestions.map((suggestion,index)=>(
                              <div 
                              className="suggestion-item"
                              key={index}
                              onMouseDown={()=>handleClick(suggestion.name)}
                              >
                                {
                                  suggestion.name
                                }
                              </div>
                            ))
                          }
                        </div>
                      )
                    }
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Destination</span>
                    </label>
                    <input
                      type="text"
                      placeholder={`${places[id].name}`}
                      value={`${places[id].name}`}
                      className="input input-bordered bg-[#F2F2F2] placeholder-opacity-100 placeholder-black font-bold"
                      readOnly
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-10 w-full">
                    <div className="form-control w-1/2">
                      <label className="label">
                        <span className="label-text">From</span>
                      </label>
                      <div className="flex items-center">
                        <MdDateRange />
                        <DatePicker
                          className="bg-white cursor-pointer text-center"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                        />
                      </div>
                    </div>

                    <div className="form-control w-1/2">
                      <label className="label">
                        <span className="label-text">To</span>
                      </label>
                      <div className="flex items-center">
                        <MdDateRange />
                        <DatePicker
                          className="bg-white cursor-pointer text-center"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          dateFormat="dd/MM/yyyy"
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary bg-[#F9A51A] border-none font-bold">Start Booking</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CarouselDetails.propTypes = {
  places: PropTypes.array,
};

export default CarouselDetails;
