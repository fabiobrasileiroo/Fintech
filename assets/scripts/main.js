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


// show or hide sidebar

const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('aside')

menuBtn.addEventListener('click',() => {
    // Verificar se o sidebar está visível
    const isSidebarVisible = sidebar.style.display === 'block';

    // Alternar a visibilidade do sidebar com base no estado atual
    sidebar.style.display = isSidebarVisible ? 'none' : 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})


// change theme
const themeBtn = document.querySelector('.theme-btn')

themeBtn.addEventListener('click',()=> {
    document.body.classList.toggle('dark-theme');
    
    themeBtn.querySelector('span:first-child').classList.toggle('active');

    themeBtn.querySelector('span:last-child').classList.toggle('active');
})