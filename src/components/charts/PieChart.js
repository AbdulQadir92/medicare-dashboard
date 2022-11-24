import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';


const PieChart = ({ chartData }) => {
    return (
        <Pie data={chartData} options={{
            responsive: true,
            maintainAspectRation: true,
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

export default PieChart