import { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const SearchBox = () => {
    //const places=useLoaderData();
const [places, setPlaces]=useState([]);
useEffect(()=>{
    fetch('/traveldata.json').then(res=>res.json()).then(data=>setPlaces(data)) 
},[])
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        if (item.id) {
            setTimeout(()=>{
                window.location.href=`/place/${parseInt(item.id)-1}`;
            },500);
        }
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }
    return (
        <div>
            <div style={{ width: '100%', minWidth:250 }} className='bg-transparent'>
          <ReactSearchAutocomplete
          styling={
            {
                backgroundColor: `white`,
            }
          }
            items={places}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
        </div>
    );
};

SearchBox.propTypes = {
    
};

export default SearchBox;