$(function() {
    var marksCanvas = document.getElementById("line-chart");
    
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = false;
    Chart.defaults.scale.gridLines.display = false;
    
    var radarChart = new Chart(marksCanvas, {
        type: "line",
        data: {
            labels: ["ex01", "ex02", "ex03", "ex04", "ex05"],
            datasets: [
                {
                    label: "none",
                    borderColor: "#000000",
                    pointBorderColor: "#000000",
                    pointBackgroundColor: "#000000",
                    pointBorderWidth: 1,
                    pointHoverRadius: 4,
                    pointRadius: 4,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    fill: false,
                    borderWidth: 2,
                    data: [90, 90, 65, 80, 85]
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            scale: {
                ticks: {
                    display: true,
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 20
                },
                pointLabels: {
                    fontSize: 18
                }
            },
            legend: {
                display: false
            },
        }
    });
    })