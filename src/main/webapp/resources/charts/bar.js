$(function () {
    //configBarChart();
    getData1();
});
var cat = [];
var passed = [];
var failed = [];
var skipped = [];
function configBarChart(){
    Highcharts.chart('bardiv', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Functional Area vs tests status'
        },
        subtitle: {
             },
        xAxis: {
            categories: cat,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Tests ',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' tests'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Passed',
        color:'#00ff00',
            data: passed
        }
        , {
            name: 'Failed',
    color:'#ff0000',
            data: failed
        },
    {
     name: 'Skipped',
     color:'#D3D3D3',
            data: skipped

    }



    ]
    });


}

function getData1(){
    $.get( "http://localhost:8080/api/v1/results/testRun1/functional_summary", function( data ) {
        console.log(JSON.stringify(data));
        parseData1(data);
        configBarChart();
    });
}

function parseData1(data){
    var count = data.length;
    console.log("lala"+data);

    /*for(var k in data.functionalAreaStatusCount) cat.push(k);
    var obj = data.functionalAreaStatusCount;
    for(var i=0;i < cat.length ; i++){
        passed.push(obj[cat[i]].passCount);
        failed.push(obj[cat[i]].failCount);
        skipped.push(obj[cat[i]].skipCount);
    }
    //console.log("asda");
    //console.log(passed);*/
    for(var i = 0 ; i < count ; i++){
        cat.push(data[i].functionalAreaName);
        passed.push(data[i].passCount);
        failed.push(data[i].failCount);
        skipped.push(data[i].skipCount);
    }
    console.log(passed);
}
