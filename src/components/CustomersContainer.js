import React, { useState } from 'react'
import CustomersTable from './CustomersTable'
import SearchCustomer from './SearchCustomer'
import CustomerDetails from './CustomerDetails'
import uniqueCustomers from '../helper/UniqueCustomers'

const CustomersContainer = (props) => {
    const {customers} = props
    const [search, setSearch] = useState('')
    const [customerDetails, setCustomerDetails]  = useState([])
    const [openModal, setOpenModal] = useState(false)

    const uniqueCustomersData = uniqueCustomers(customers,'Phone')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        getSearchResult()
    } 

    const getSearchResult = () => {
        const result = uniqueCustomersData.filter(ele => {
            return ele.Name.toLowerCase().includes(search) || ele.Phone.toString().includes(search)
        })
        return result
    }

    const getCustomerDetail = (phone) => {
        const result = customers.filter(ele => ele.Phone === phone)
        setCustomerDetails(result)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <h2>Listing Customers</h2>
                </div>
                <div className="col-md-4">
                    <SearchCustomer search={search} handleSearch={handleSearch}/>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-12">
                    {   getSearchResult().length > 0 ? (
                            <CustomersTable customers={getSearchResult()} getCustomerDetail={getCustomerDetail}/>

                        ) : (
                            <div class="card mb-3 mt-2">
                                <div class="card-body">
                                    <h5>No Customer Found</h5>
                                </div>
                            </div>                        
                        )
                    }
                </div> 
            </div>         
            
            
            <CustomerDetails customerDetails={customerDetails} openModal={openModal}    
                             handleCloseModal={handleCloseModal}/>
        </div>
    )
}

export default CustomersContainer