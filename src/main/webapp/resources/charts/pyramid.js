$(function () {
    //configPyramidChart();
    getData3();
});


var completeArray = [];
function configPyramidChart(){
    Highcharts.chart('pyramid-div', {
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'Test pyramid',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },
        series: [{
            name: 'Tests',
            data: completeArray
        }]
    });
}

function getData3(){
    $.get( "http://localhost:8080/api/v1/results/testRun1/test_sub_type_summary", function( data ) {
        console.log(JSON.stringify(data));
        parseData3(data);
        configPyramidChart();
    });
}

function parseData3(data){
    var count = data.length;
    //var count = Object.keys(obj).length;
    //console.log(obj);
    /*for(var k in obj){
        var funcObjArray = [];
        funcObjArray.push(k);
        funcObjArray.push(obj[k]);
        //console.log();
        completeArray.push(funcObjArray);
    }
    console.log(completeArray);*/

    for(var i = 0 ; i < count ; i++){
        var funcObjArray = [];
        funcObjArray.push(data[i].testSubTypeName);
        funcObjArray.push(data[i].testSubTypeCount);
        console.log("asdasdas"+data[i].testSubtypeCount);
        completeArray.push(funcObjArray);       
    }

}
