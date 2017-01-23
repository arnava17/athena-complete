export const DEFAULT_CHART_CONFIG = 
{
	BAR_CHART : {
		chart: {
        	renderTo : '',
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
             },
        xAxis: {
            categories: [''],
            title: {
                text: ''
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
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
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: ['']
	},

	DONUT_CHART : {
		chart: {
	            renderTo : '',
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
	        colors : [''],
	        series: [{
	            name: '',
	            data: ['']
	        }]
	},

	PYRAMID_CHART : {
        
        chart: {
            renderTo : '',
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: '',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: 'black',
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
            name: '',
            data: ['']
        }]
    }


}