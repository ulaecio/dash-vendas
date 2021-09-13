import Chart from 'react-apexcharts';

const BarChart = () => {
  
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Setor 01', 'Setor 02', 'Setor 03', 'Setor 04', 'Setor 05', 'Setor 06', 'Setor 07']
        },
        series: [
            {
                name: "Volume",
                data: [43.6, 65.1, 67.7, 45.6, 51.1, 71.1, 45.1]                   
            }
        ]
    };
    return (
        <Chart 
            options={{...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
  );
}

export default BarChart;
