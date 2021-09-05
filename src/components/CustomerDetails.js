import React from 'react'
import { Modal } from 'react-bootstrap' 

const CustomerDetails = (props) => {
    const {customerDetails, openModal, handleCloseModal} = props

    let customerTotal = 0
    
    customerDetails.forEach(ele => customerTotal += ele.Amount)

    return (
        <>{ customerDetails.length > 0 && (   
                
            <Modal show={openModal} size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered scrollable={true}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p style={{fontSize: '25px'}}>{customerDetails[0].Name} -    {customerDetails[0].Phone}</p>
                        <p style={{fontSize: '20px'}}>Order Count - {customerDetails.length}     Total Amount - {customerTotal}   </p>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div >
                        <div >
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Amount</th>    
                                    </tr> 
                                </thead>
                                <tbody>
                                        {
                                        customerDetails.map((ele,index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>  
                                                    <td>{ele.Date}</td>
                                                    <td>{ele.Amount}</td>  
                                                </tr>
                                            )
                                        })
                                    }    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={handleCloseModal}>Close</button>
                </Modal.Footer>
                
            </Modal>

            )
        }
    </>

    )
}

export default CustomerDetails