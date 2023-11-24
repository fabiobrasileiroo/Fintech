const chart = document.querySelector("#chart").getContext('2d');
// Crie uma nova instância de gráfico
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49333, 59059, 57938, 36685, 33572, 3999, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [39374, 53537, 19333, 9059, 67938, 36685, 43572, 5999, 68847, 78116, 81004],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});
