$(function () {
    getData2();
});

var totalPass=0;
var totalFail=0;
var totalSkipped=0;
function configChart(){
    Highcharts.chart('chartdiv', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Status of tests'
        },
        subtitle: {
            text: 'passed/failed/skipped'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        credits: {
            enabled: false
        },

        series: [{
            name: ' Tests',
            data: [
                ['Pass', totalPass],
                ['Fail', totalFail],
                ['Skipped', totalSkipped],
//['Oranges', 6],
  //              ['Apples', 8],
    //            ['Pears', 4],
      //          ['Clementines', 4],
        //        ['Reddish (bag)', 1],
          //      ['Grapes (bunch)', 1]
            ]
        }]
    });
}

function getData2(){
    $.get( "http://localhost:8080/api/v1/results/testRun1/result_summary", function( data ) {
        //console.log(JSON.stringify(data));
        totalPass = data.totalTestsPassed;
        totalFail = data.totalTestsFailed;
        totalSkipped = data.totalTestsSkipped;
        configChart();
    });
}
