import React from 'react'
import StatsItem from './StatsItem'
import uniqueCustomers from '../helper/UniqueCustomers'

const StatsContainer = (props) => {
    const {customers} = props
    
    const uniqueCustomersData = uniqueCustomers(customers,'Phone')

    let totalAmount = 0
    customers.forEach(ele => {
        return totalAmount+= ele.Amount
    })
    
    return (
        <div className="row mb-4 mt-3">
            <StatsItem count={customers.length} text="Orders"/>
            <StatsItem count={totalAmount} text="Amount" />
            <StatsItem count={uniqueCustomersData.length} text="Customers" />
        </div>
    )
}

export default StatsContainer