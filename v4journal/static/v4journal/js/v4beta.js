var bpm_names_default = ["STP0","STP2","STP4","SRP1","SRP2","SRP3","SRP4","SRP5","SRP6","SRP7","SRP8","SRP9","SIP1","SIP2","SRP10","SRP11","SRP12","SRP13","SRP14","SRP15","SRP16","SRP17","SEP5","SEP4","SEP3","SEP1","SEP0","NEP0","NEP1","NEP3","NEP4","NEP5","NRP17","NRP16","NRP15","NRP14","NRP13","NRP12","NRP11","NRP10","NIP3","NIP1","NRP9","NRP8","NRP7","NRP6","NRP5","NRP4","NRP3","NRP2","NRP1","NTP4","NTP2","NTP0"],
    bpm_pos_default = [2.71,10.038,16.705,20.228,27.375,34.522,41.669,48.817,55.964,63.111,70.258,77.405,87.49,91.671,98.845,105.992,113.139,120.286,127.433,134.58,141.727,148.875,152.573,158.383,166.687,173.956,179.648,186.428,192.119,199.388,207.692,213.502,217.2,224.348,231.495,238.642,245.789,252.936,260.083,267.23,271.882,278.585,288.67,295.817,302.964,310.111,317.258,324.406,331.553,338.7,345.847,349.37,356.037,363.345];
var e1_x = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    e1_z = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];

var window_height = $(window).height();
var orbit_data = {
        "VEPP4:TableName-RB":{
            "value": "",
            "units": ""
        },
        "VEPP4:Status-RB":{
            "value": "",
            "units": ""
        },
        "VEPP4:EnergySet-RB": {
            "value": 0,
            "units": "MeV"
        },
        "VEPP4:EnergyMeas-RB": {
            "value": 0,
            "units": "MeV"
        },
        "VEPP4:FrequencySet-RB": {
            "value": 0,
            "coef": 0.001,
            "units": "kHz"
        },
        "VEPP4:CurrentTotal-RB": {
            "value": 0,
            "units": "mA"
        },
        "VEPP4:CurrentE1-RB": {
            "value": 0,
            "units": "mA"
        },
        "VEPP4:CurrentE2-RB": {
            "value": 0,
            "units": "mA"
        },
        "VEPP4:CurrentP1-RB": {
            "value": 0,
            "units": "mA"
        },
        "VEPP4:CurrentP2-RB": {
            "value": 0,
            "units": "mA"
        },
        "VEPP4:CurrentLifeTime-RB": {
            "value": 0,
            "units": "sec"
        },
        "VEPP4:Qx-RB": {
            "value": 0,
            "units": ""
        },
        "VEPP4:Qz-RB": {
            "value": 0,
            "units": ""
        }
    };
var graph_data = {
        "VEPP4:fourier:Bx-I": [],
        "VEPP4:fourier:Bz-I": []
    };
var bpm_pv_names = ["VEPP4:BPM_name-RB","VEPP4:BPM_pos-RB"]

function displayOrbitData(){
    var list_div = $("#orbit_data");
    list_div.empty();
    for(var pv in orbit_data){
        var orb_pv = orbit_data[pv];
            value = orb_pv.value;
        if("coef" in orb_pv){
            value *= orb_pv.coef;
        }
        list_div.append($("<p>").append(value+" "+orb_pv.units))
    }
};

function getMode1(){
    return $("#mode").val();
};

function renderCharts(bpm_pos,bpm_names){
    if(!bpm_pos){
        bpm_pos = bpm_pos_default;
    }
    else {
        bpm_pos_default = bpm_pos;
    }
    if(!bpm_names){
        bpm_names = bpm_names_default;
    }
    else {
        bpm_names_default = bpm_names;
    }
    var markers1 = parseMarkers(bpm_pos,bpm_names);
    var markers2 = parseMarkers(bpm_pos);
    var myConfig = 
    {
        theme: 'dark',
        height: window_height - 50,
        graphset: [
            {
                "type": "line",
                "background-color": "#0000000",
                "alpha": 0,//"#003849",
                "utc": true,
                /*"title": {
                    "y": "7px",
                    "text": "Измеренная орбита",
                    "background-color": "#003849",
                    "font-size": "24px",
                    "font-color": "white",
                    "height": "25px"
                },*/
                "plotarea": {
                    "margin": "30px dynamic 0px dynamic",
                    "background-color": "#0000000",
                    "alpha": 0,
                    //"padding": "dynamic dynamic 60px dynamic",
                    //"background-color": "#003849",
                    "height": window_height/2 - 120,
                },
                "scale-x": {
                    //"min-value": 1383292800000,
                    "shadow": 0,
                    //"step": 3600000,
                    "line-color": "#f6f7f8",
                    "tick": {
                        "alpha": 0
                    },
                    "guide": {
                        //"line-color": "#f6f7f8",
                        "alpha": 0
                    },
                    "item": {
                        "font-color": "#f6f7f8",
                        "visible": false
                    },
                    /*"transform": {
                        "type": "date",
                        "all": "%D, %d %M<br />%h:%i %A",
                        "guide": {
                            "visible": false
                        },
                        "item": {
                            "visible": false
                        }
                    },*/
                    "label": {
                        "visible": false
                    },
                    "markers": markers1,
                    "min-value": bpm_pos[0]-1,
                    "max-value": bpm_pos[bpm_pos.length-1]+3
                },
                "scale-y": {
                    //"values": "0:1000:250",
                    "line-color": "#f6f7f8",
                    "shadow": 0,
                    "tick": {
                        "line-color": "#f6f7f8"
                    },
                    "guide": {
                        //"line-color": "#f6f7f8",
                        //"line-style": "dashed",
                        "alpha": 0
                    },
                    "item": {
                        "font-color": "#f6f7f8"
                    },
                    "label": {
                        "text": "Z (mm)",
                        "font-color": "#f6f7f8",
                        "angle": -90,
                    },
                    "min-value": -10,
                    "max-value": 10,
                    "markers": [
                        {
                            "type": "line",
                            "range": [10],
                            "line-color": "#f6f7f8"

                        }
                    ]
                    //"minor-ticks": 0,
                    //"thousands-separator": ","
                },
                "crosshair-x": {
                    "line-color": "#f6f7f8",
                    "plot-label": {
                        "border-radius": "5px",
                        "border-width": "1px",
                        "border-color": "#f6f7f8",
                        "padding": "10px",
                        "font-weight": "bold"
                    },
                    "scale-label": {
                        "font-color": "#00baf0",
                        "background-color": "#f6f7f8",
                        "border-radius": "5px"
                    }
                },
                "tooltip": {
                    "visible": false
                },
                "plot": {
                    "tooltip-text": "%t views: %v<br>%k",
                    "shadow": 0,
                    "line-width": "3px",
                    /*"marker": {
                        "type": "circle",
                        "size": 3
                    },*/
                    "hover-marker": {
                        "type": "circle",
                        "size": 4,
                        "border-width": "1px"
                    }
                },
                "series": [
                    {
                        "values": e1_z,
                        //"line-color": "#007790",
                        /*"legend-marker": {
                            "type": "circle",
                            "size": 5,
                            "background-color": "#007790",
                            "border-width": 1,
                            "shadow": 0,
                            "border-color": "#69dbf1"
                        },*/
                        "marker": {
                            "alpha": 0,
                            "background-color": "#007790",
                            "border-width": 1,
                            "shadow": 0,
                            "border-color": "#69dbf1"
                        }
                    }
                ]
            },
            {
                "type": "line",
                //"background-color": "#0000000",
                "alpha": 0,
                "utc": true,
                "plotarea": {
                    "margin": "1px dynamic",
                    //"background-color": "#003849",
                    "height": window_height/2 - 120
                },
                "scale-x": {
                    "shadow": 0,
                    "line-color": "#f6f7f8",
                    "tick": {
                        "alpha": 0
                    },
                    "guide": {
                        //"line-color": "#f6f7f8",
                        "alpha": 0
                    },
                    "item": {
                        "font-color": "#f6f7f8",
                        "visible": false
                    },
                    "label": {
                        "visible": false
                    },
                    "markers": markers2,
                    "min-value": bpm_pos[0]-1,
                    "max-value": bpm_pos[bpm_pos.length-1]+3
                },
                "scale-y": {
                    //"values": "0:1000:250",
                    //"line-color": "#f6f7f8",
                    "shadow": 0,
                    "tick": {
                        "line-color": "#f6f7f8"
                    },
                    "guide": {
                        //"line-color": "#f6f7f8",
                        //"line-style": "dashed",
                        "alpha": 0
                    },
                    "item": {
                        "font-color": "#f6f7f8"
                    },
                    "label": {
                        "text": "X (mm)",
                        "font-color": "#f6f7f8",
                        "angle": -90,
                    },
                    "min-value": -10,
                    "max-value": 10,
                    "markers": [
                        {
                            "type": "line",
                            "range": [10],
                            "line-color": "#f6f7f8"
                        }
                    ]
                },
                "crosshair-x": {
                    //"line-color": "#f6f7f8",
                    "plot-label": {
                        "border-radius": "5px",
                        "border-width": "1px",
                        "border-color": "#f6f7f8",
                        "padding": "10px",
                        "font-weight": "bold"
                    },
                    /*"scale-label": {
                        "font-color": "#00baf0",
                        "background-color": "#f6f7f8",
                        "border-radius": "5px"
                    }*/
                },
                "tooltip": {
                    "visible": false
                },
                "plot": {
                    "tooltip-text": "%t views: %v<br>%k",
                    "shadow": 0,
                    "line-width": "3px",
                    /*"marker": {
                        "type": "circle",
                        "size": 3
                    },*/
                    /*"hover-marker": {
                        "type": "circle",
                        "size": 4,
                        "border-width": "1px"
                    }*/
                },
                "series": [
                    {
                        "values": e1_x,
                        //"line-color": "#007790",
                        /*"legend-marker": {
                            "type": "circle",
                            "size": 5,
                            "background-color": "#007790",
                            "border-width": 1,
                            "shadow": 0,
                            "border-color": "#69dbf1"
                        },*/
                        "marker": {
                            "alpha": 0,
                            "background-color": "#007790",
                            "border-width": 1,
                            "shadow": 0,
                            "border-color": "#69dbf1"
                        }
                    }
                ]
            }
        ]
    };
    
    zingchart.render({ 
        id : 'v4xorbit', 
        data : myConfig
    });
}

function parseMarkers(pos,names=[]){
    var markers = [];
    for(i=0;i<pos.length;i++){
        markers.push({
            "type": 'line',
                "range": [pos[i]],
                "line-color": "lightblue",
                "line-gap-size": 6,
                "line-segment-size": 1,
                "alpha": 0.5,
                "label": {
                    "text": names[i],
                    "font-color": "#59c1f9",
                    "padding": "-8 -55",
                    "font-size": 15.5
                }
            })
    }
    markers.push({
        "type": 'line',
        "range": [pos[26]+(pos[27]-pos[26])/2],
        "line-color": "#f6f7f8",
    })
    markers.push({
        "type": 'line',
        "range": [pos[pos.length-1]+2],
        "line-color": "#f6f7f8"
    })
    markers.push({
        "type": 'line',
        "range": [pos[3]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": window_height/2-150,
        "line-segment-size": 15
    })
    markers.push({
        "type": 'line',
        "range": [2*pos[11]-pos[10]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": window_height/2-150,
        "line-segment-size": 15
    })
    markers.push({
        "type": 'line',
        "range": [pos[14]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": 125,
        "line-segment-size": 8
    })
    markers.push({
        "type": 'line',
        "range": [pos[22]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": 125,
        "line-segment-size": 8
    })
    markers.push({
        "type": 'line',
        "range": [pos[31]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": 125,
        "line-segment-size": 8
    })
    markers.push({
        "type": 'line',
        "range": [pos[39]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": 125,
        "line-segment-size": 8
    })
    markers.push({
        "type": 'line',
        "range": [2*pos[42]-pos[43]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": 125,
        "line-segment-size": 8
    })
    markers.push({
        "type": 'line',
        "range": [pos[50]],
        "line-color": "#f6f7f8",
        "line-style": "dashed",
        "line-gap-size": 125,
        "line-segment-size": 8
    })
    return markers;
}

function myzip(a,b){
    return(a.map(function(e, i) {
        return [b[i],e];
      }));
}

function updatePvData(pv,data){
    //console.log(pv,data)
    if(!data) return;
    if(pv == "VEPP4:fourier:Bx-I"){
        zingchart.exec('v4xorbit', 'setseriesvalues', {
            graphid: 1,
            values : [
                myzip(data, bpm_pos_default)
            ]
        });
    }
    else if(pv == "VEPP4:fourier:Bz-I") {
        zingchart.exec('v4xorbit', 'setseriesvalues', {
            values : [
                myzip(data, bpm_pos_default)
            ]
        });
    }
    if(pv in graph_data){
        graph_data[pv] = data;
        var graphscale = pv[15];
        if(graphscale=="x"){
            zingchart.exec('v4xorbit', 'setseriesvalues', {
                graphid: 1,
                values : [
                    myzip(data, bpm_pos_default)
                ]
            });
        }
        else{
            zingchart.exec('v4xorbit', 'setseriesvalues', {
                values : [
                    myzip(data, bpm_pos_default)
                ]
            });
        }
    }
    else if(pv in orbit_data){
        orbit_data[pv].value = data;
        displayOrbitData();
    }
}

$(document).on("pvs_lastdata",function(event,data){
    if(bpm_pv_names[0] in data){
        renderCharts(data[bpm_pv_names[1]],data[bpm_pv_names[0]])
        return;
    }
    for(var pv in data){
        updatePvData(pv,data[pv]);
    }
});

$(document).on("orbit_changed",function(event, pv,data){
    updatePvData(pv,data);
});

function substracting(a,b){
    result = a.map(function(item, index) {
        if(b[index]){
            if(item) return item-b[index];
            else return -b[index];
        }
        else{
            if(item) return item;
            else if(b[index]==null && item == null) return null;
            else return 0;
        }
    });
    return result;
}

$(document).ready(function(){
    //displayOrbitData();

    sendMessageToServer(JSON.stringify({"func":"get_pvs_data","pvs":bpm_pv_names}))
    sendMessageToServer(JSON.stringify({"func":"get_pvs_data","pvs": Object.keys(graph_data).concat(Object.keys(orbit_data))}))
});

