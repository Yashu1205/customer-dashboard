import React from 'react'

const CustomersTable = (props) => {
    const {customers, getCustomerDetail} = props

    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((ele,index) => {
                        return <tr key={ele.Phone}>
                            <td>{index + 1}</td>
                            <td>{ele.Name}</td>
                            <td>{ele.Phone}</td>
                            <td><button className="btn btn-info btn-sm" onClick={() => getCustomerDetail(ele.Phone)}>Show</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default CustomersTable