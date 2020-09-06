const physical = document.getElementById('physicalActivity').getContext('2d');
const activity = document.getElementById('todayActivity').getContext('2d');
const hydradion = document.getElementById('todayHydradion').getContext('2d');
const calorie = document.getElementById('todayCalorie').getContext('2d');
const sleep = document.getElementById('sleep').getContext('2d');
const training = document.getElementById('lastTraining').getContext('2d');




var chart = new Chart(physical, {

    type: 'line',

    data: {
        labels: ['5:00', '11:00', '13:00', '16:00', '20:00'],
        datasets: [{
            label: 'Calorie',
            backgroundColor: '#0e1a36',
            borderColor: 'rgb(255, 255, 255)',
            data: [0, 90, 300, 200, 0]
        }]
    },

    options: {}
});



new Chart(activity, {
    type: 'pie',
    data: {
        labels: ["5 hr", "7 hr"],
        datasets: [{
            backgroundColor: ["#ff0000", "#8A2BE2"],
            data: [40, 60]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Activity       Rest'
        }
    }
});


var myChart = new Chart(hydradion, {
    type: 'bar',
    data: {
        labels: ["Morning", "", "", "", "", "", "Noon", "", "", "", "", "Night"],
        datasets: [{
            label: 'Dehydrated',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            backgroundColor: [
                'rgb(0, 0, 255)',
                'rgb(0, 0, 255)',
                'rgb(53,55,174)',
                'rgb(53,55,174)',
                'rgb(116,6,153)',
                'rgb(116,6,153)',
                'rgb(183,11,11)',
                'rgb(0, 0, 255)',
                'rgb(0, 0, 255)',
                'rgb(0, 0, 255)',
                'rgb(0, 0, 255)',
                'rgb(0, 0, 255)'
            ],

        }]
    },
    options: {
        responsive: false,
        scales: {
            xAxes: [{
                ticks: {
                    maxRotation: 90,
                    minRotation: 80
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


new Chart(calorie, {
    type: 'pie',
    data: {
        labels: ["Fat", "Protein", "Carbs"],
        datasets: [{
            backgroundColor: ["#f3c623", "#127681", "$10375c"],
            data: [16, 38, 46]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Activity       Rest'
        }
    }
});




var myChart = new Chart(sleep, {
    type: 'bar',
    data: {
        labels: ["1", "", "", "", "", "", "", "", "", "10", "", "", "", "", "15", "", "", "", "", "20", "", "", "", "", "", "", "", "", "", "30"],
        datasets: [{
            label: 'hours slept',
            data: [6, 5, 6, 7, 8, 6, 7, 8, 8, 9, 10, 4, 10, 6, 6, 9, 8, 7, 9, 9, 5, 5, 6, 7, 8, 9, 7, 6, 4, 7],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)'
            ],

        }]
    },
    options: {
        responsive: false,
        scales: {
            xAxes: [{
                ticks: {
                    maxRotation: 90,
                    minRotation: 80
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});