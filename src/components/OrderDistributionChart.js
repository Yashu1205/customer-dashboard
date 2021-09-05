import React from 'react'
import Chart from 'react-google-charts'

const OrderDistributionChart = (props) => {
    const {orderFrequency} = props
    
    const data = Object.entries(orderFrequency)
    data.unshift(['Orders Count','No of Customers'])

    const pieOptions = {
        title: "Order Distribution",
        legend: {
          position: "right",
          alignment: "center",
          textStyle: {
            color: "233238",
            fontSize: 14
          }
        },
        tooltip: {
          showColorCode: true
        },
        chartArea: {
          left: 0,
          top: 0,
          width: "70%",
          height: "80%"
                 
        },
        fontName: "Roboto"
      };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options = {pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
      />
    )
}

export default OrderDistributionChart