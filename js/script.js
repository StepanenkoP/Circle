$(document).ready(function() {
  var chart = $("#chart");

  var myChart = new Chart(chart, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [
        {
          label: 'Points',
          backgroundColor: ['#000', '#000', '#000', '#000'],
          data: [10,20,30,40]
        }
      ]
    },
    options: {
      cutoutPercentage: 80,
      animation: {
        animateRotate: false
      }
    }
  });

var index = 0;
for (var i = 0; i< 50; i++) {
  $(".wrapper").append('<div class="wrap"></div>');
  $(".wrap").eq(i).css("transform", "rotate(" + index + "deg)");
  index += 7.2;
}


});
