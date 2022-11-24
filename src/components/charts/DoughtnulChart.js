import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


const DoughnutChart = ({ chartData }) => {
    return (
        <Doughnut data={chartData} options={{
            responsive: true,
            maintainAspectRatio: true,
            width: "100",
            plugins: {
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: (tooltipItem) => {
                            var dataIndex = tooltipItem.dataIndex;
                            return (tooltipItem.dataset.labels[dataIndex] + ": " + tooltipItem.dataset.data[dataIndex]
                            );
                        }
                    }
                }
            }
        }} />
    )
}

export default DoughnutChart