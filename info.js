const ctx = document.getElementById('myChart1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["11","27", "11" ,"26", "11" ,"27", "11", "27", "11" ,"26", "11", "27", "11", "26", "11", "27", "11", "26"],
        datasets: [{
            label: " $ - data",
            data: [100, 89, 84, 87, 83, 30,33,31,35,32,29,32,27,31],
            backgroundColor: [
                'rgba(122, 110, 170,0.5)'
            ],
            borderColor: [
                'rgba(122, 110, 170)'
            ],
            fill: true,
            
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
    }
});

const ctx1 = document.getElementById('myChart2').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
     labels: ["$0.00","$1.00B", "$2.00B", "$3.00B", "$4.00B","$5.00B","$6.00B", "$7.00B"],
        datasets: [{
            label: ' $ - data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(31, 199, 212,0.5)'
            ],
            borderColor: [
                'rgba(31, 199, 212)'
            ],
            fill:true,

            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});