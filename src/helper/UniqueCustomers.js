import _ from 'lodash'

const uniqueCustomers = (customersArray) => {
    return _.uniqBy(customersArray,'Phone')
}

export default uniqueCustomers