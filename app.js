const physical = document.getElementById('physicalActivity').getContext('2d');
const activity = document.getElementById('todayActivity').getContext('2d');
const hydradion = document.getElementById('todayHydradion').getContext('2d');
const calorie = document.getElementById('todayCalorie').getContext('2d');
const sleep = document.getElementById('sleep').getContext('2d');
const training1 = document.getElementById('lastTraining1').getContext('2d');
const training2 = document.getElementById('lastTraining2').getContext('2d');




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
    type: 'doughnut',
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



var myChart = new Chart(training1, {
    type: 'line',
    data: {
        labels: ['Breakfast', 'Snacks', 'Lunch', 'Snacks', 'Dinner', 'Sleep'],
        datasets: [{
            label: 'Saturation',
            data: [70, 57, 100, 40, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var context;
var cntText;
var cnt = 0;
var start = 0;
var mydata = [160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190,
    160, 130, 190, 130, 160, 130, 190, 160, 130, 160, 190, 160, 130, , 160, 190
];

function init() {
    context = training2;
    cntText = document.getElementById("data");
    context.fillStyle = "#737373";
    context.fill();


    /*
		var j=0;
		var lastx=0;
		var lasty=160;
	 for(i=0;i<600;i++)
	 {
		var p=j*5;
		drawLine(lastx,lasty,p,mydata[j],"#FF00FF");
		lastx=p;
		lasty=mydata[j];
		i=i+4;
		j++;
	 }*/
    //move();
    //alert(mydata.length);
}

function drawLine(x1, y1, x2, y2, color) {
    context.beginPath();
    //context.fillStyle="#00E600";
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.lineWidth = 0.2;
    context.stroke();
}


function move() {
    var j = 0;
    var lastx = 0;
    var lasty = 160;
    var pos = 0;
    //cnt=100;
    cleareData();
    start = cnt;
    if (cnt > 120) {
        start = 120;
        pos = cnt - 120;
    }
    for (i = 0; i < start; i++) {
        var p = i * 5;
        drawLine(lastx, lasty, p, mydata[pos], "#FF00FF");
        lastx = p;
        lasty = mydata[pos];
        pos++;
    }
    //alert(cnt);
    //cntText.value=cnt;
    cnt = cnt + 1;
}

function cleareData() {
    context.clearRect(0, 0, 600, 600);
    for (i = 0; i < 600; i++) {

        drawLine(i, 0, i, 300, "#CCCCCC");
        i = i + 19
    }

    for (i = 0; i < 300; i++) {

        drawLine(0, i, 600, i, "#CCCCCC");
        i = i + 19
    }
    drawLine(0, 160, 600, 160, "#FF00FF");
}
setInterval(move, 120);
init();
