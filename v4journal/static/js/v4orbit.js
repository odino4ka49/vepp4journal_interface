var bpm_names = ["STP0","STP2","STP4","SRP1","SRP2","SRP3","SRP4","SRP5","SRP6","SRP7","SRP8","SRP9","SIP1","SIP2","SRP10","SRP11","SRP12","SRP13","SRP14","SRP15","SRP16","SRP17","SEP5","SEP4","SEP3","SEP1","SEP0","NEP0","NEP1","NEP3","NEP4","NEP5","NRP17","NRP16","NRP15","NRP14","NRP13","NRP12","NRP11","NRP10","NIP3","NIP1","NRP9","NRP8","NRP7","NRP6","NRP5","NRP4","NRP3","NRP2","NRP1","NTP4","NTP2","NTP0"],
    bpm_pos = [2.71,10.038,16.705,20.228,27.375,34.522,41.669,48.817,55.964,63.111,70.258,77.405,87.49,91.671,98.845,105.992,113.139,120.286,127.433,134.58,141.727,148.875,152.573,158.383,166.687,173.956,179.648,186.428,192.119,199.388,207.692,213.502,217.2,224.348,231.495,238.642,245.789,252.936,260.083,267.23,271.882,278.585,288.67,295.817,302.964,310.111,317.258,324.406,331.553,338.7,345.847,349.37,356.037,363.345],
    e1_x = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    e1_z = [1,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];

var markers = parseMarkers(bpm_pos,bpm_names);

var myConfig = 
{
    graphset: [
        {
            "type": "line",
            "background-color": "#003849",
            "utc": true,
            "title": {
                "y": "7px",
                "text": "Измеренная орбита",
                "background-color": "#003849",
                "font-size": "24px",
                "font-color": "white",
                "height": "25px"
            },
            "plotarea": {
                //"margin": "20% 8% 14% 12%",
                "background-color": "#003849"
            },
            "scale-x": {
                //"min-value": 1383292800000,
                "shadow": 0,
                //"step": 3600000,
                "line-color": "#f6f7f8",
                "tick": {
                    "line-color": "#f6f7f8"
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
                "markers": markers,
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
                    "text": "Pricing",
                    "line-color": "#007790",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    },
                    "marker": {
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
            "background-color": "#003849",
            "utc": true,
            "plotarea": {
                //"margin": "20% 8% 14% 12%",
                "background-color": "#003849"
            },
            "scale-x": {
                //"min-value": 1383292800000,
                "shadow": 0,
                //"step": 3600000,
                "line-color": "#f6f7f8",
                "tick": {
                    "line-color": "#f6f7f8"
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
                "markers": markers,
                "min-value": bpm_pos[0]-1,
                "max-value": bpm_pos[bpm_pos.length-1]+3
                //"minor-ticks": 0
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
                    "values": e1_x,
                    "text": "Pricing",
                    "line-color": "#007790",
                    "legend-marker": {
                        "type": "circle",
                        "size": 5,
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    },
                    "marker": {
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

function parseMarkers(pos,names){
    var markers = [];
    for(i=0;i<pos.length;i++){
        markers.push({
            "type": 'line',
                "range": [pos[i]],
                "line-color": "lightblue",
                "line-gap-size": 4,
                "line-segment-size": 1,
                "label": {
                    "text": names[i],
                    "font-color": "lightblue",
                    "padding": "-8 -40"
                }
            })
    }
    markers.push({
        "type": 'line',
            "range": [pos[26]+(pos[27]-pos[26])/2],
            "line-color": "#f6f7f8",
            /*"line-gap-size": 100,
            "line-segment-size": 8,*/
        })
    markers.push({
            "type": 'line',
            "range": [pos[pos.length-1]+2],
            "line-color": "#f6f7f8"
        })
    return markers;
}


$(document).ready(function(){
    zingchart.render({ 
        id : 'v4xorbit', 
        data : myConfig
    });
});