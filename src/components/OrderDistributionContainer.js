import React from 'react'
import OrderDistributionTable from './OrderDistributionTable'
import OrderDistributionChart from './OrderDistributionChart'
import uniqueCustomers from '../helper/UniqueCustomers'

const OrderDistributionContainer = (props) => {
    const {customers} = props

    const orderFrequency = {1:0, 2: 0, 3: 0, 4: 0, '5+': 0}
    const uniqueCustomersData = uniqueCustomers(customers)

    uniqueCustomersData.forEach(c => {
        const customerOrders = customers.filter(cust => c.Phone === cust.Phone )
        if(customerOrders.length >= 5){
            orderFrequency['5+']++
        }
        else{
            orderFrequency[customerOrders.length]++
        }
    })

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h2>Order Distribution</h2> 
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <OrderDistributionTable orderFrequency={orderFrequency}/>
                </div>
                <div className="col-md-6" style={{margin:'-45px 0' }}>
                    <OrderDistributionChart orderFrequency={orderFrequency} />                    
                </div>
            </div>
        </div>
    )
}

export default OrderDistributionContainer