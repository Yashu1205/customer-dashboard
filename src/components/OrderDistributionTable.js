import React from 'react'

const OrderDistributionTable = (props) => {
    const {orderFrequency} = props

    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Order Count</th>
                    <th>No. of Customers</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(orderFrequency).map(ele => {
                        return <tr key={ele}>
                            <td>{ele}</td>
                            <td>{orderFrequency[ele]}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default OrderDistributionTable