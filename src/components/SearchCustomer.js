import React from 'react'


const SearchCustomer = (props) => { 
    const {search, handleSearch} = props 
    
    return (
        <input type="text" className="form-control" value={search} onChange={handleSearch} placeholder="search by name or phone" />
    )
}

export default SearchCustomer