import React from 'react'
import GradientLineChart from '../../charts/GradientLineChart/GradientLineChart'

const PerformanceGraph = () => {
    const myData = [
        { label: "Monday", value: 10 },
        { label: "Tuesday", value: 20 },
        { label: "Wednesday", value: 15 },
        { label: "Thursday", value: 25 },
        { label: "Friday", value: 30 },
        { label: "Saturday", value: 22 },
        { label: "Sunday", value: 35 },
    ];
    return (
        <div>
            <GradientLineChart
                //width={'100%'}
                dataPoints={myData}
            />
        </div>
    )
}

export default PerformanceGraph