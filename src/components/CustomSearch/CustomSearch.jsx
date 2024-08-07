import { useEffect, useRef, useState } from "react";

import "./CustomSuggestion.css";
const CustomSearch = () => {
  const [query, setQuery] = useState("");
  const [filterSuggestions, setFilterSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions]=useState([]);
    useEffect(()=>{
        fetch('/bd-districts.json').then(res=>res.json()).then(datum=>setSuggestions(datum))      
    },[])
  const inputRef=useRef(null);
  const handleBlur = (e) => {
    if (!e.relatedTarget || !inputRef.current.contains(e.relatedTarget)) {
        setTimeout(()=>{
            setShowSuggestions(false);
        },100)
    }
  };
  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input) {
      const filtered = suggestions.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilterSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  const handleClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };
  return (
    <div 
    className="search-container" 
    ref={inputRef}
    >
      <input
        type="text"
        name=""
        id=""
        value={query}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={()=>setShowSuggestions(true)}
        placeholder="search"
        className="search-box"
      />
      {
        showSuggestions && filterSuggestions.length>0 && (
            <div className="suggestions">
                {
                    filterSuggestions.map((suggestion,index)=>(
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
  );
};


export default CustomSearch;
