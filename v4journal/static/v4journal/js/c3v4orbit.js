var bpm_names = ["bpm_names","STP0","STP2","STP4","SRP1","SRP2","SRP3","SRP4","SRP5","SRP6","SRP7","SRP8","SRP9","SIP1","SIP2","SRP10","SRP11","SRP12","SRP13","SRP14","SRP15","SRP16","SRP17","SEP5","SEP4","SEP3","SEP1","SEP0"],
    bpm_pos = ["bpm_pos",2.71,10.038,16.705,20.228,27.375,34.522,41.669,48.817,55.964,63.111,70.258,77.405,87.49,91.671,98.845,105.992,113.139,120.286,127.433,134.58,141.727,148.875,152.573,158.383,166.687,173.956,179.648,186.428,192.119,199.388,207.692,213.502,217.2,224.348,231.495,238.642,245.789,252.936,260.083,267.23,271.882,278.585,288.67,295.817,302.964,310.111,317.258,324.406,331.553,338.7,345.847,349.37,356.037,363.345],
    e1_x = ['e1_x',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    e1_z = ['e1_z',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];

$(document).ready(function(){
    var chart = c3.generate({
        bindto: '#c3v4xorbit',
        data: {
            x: 'bpm_pos',
            columns: [
                bpm_pos,
                e1_x
            ]
        },
        axis: {
            x: {
                tick: {
                    format: function(x) {
                        return bpm_names[bpm_pos.indexOf(x)]
                    },
                    culling: false,
                    rotate: 60,
                    multiline: true,
                }
            },
            y: {
                min: -9,
                max: 9,
                label: {
                    text: "X\n(mm)",
                    position: 'outer-middle'
                },
                tick: {
                    count: 2
                }
            }
        }
    });
    var chart2 = c3.generate({
        bindto: '#c3v4zorbit',
        data: {
            x: 'bpm_pos',
            columns: [
                bpm_pos,
                e1_z
            ]
        },
        axis: {
            x: {
                tick: {
                    format: function(x) {
                        return bpm_names[bpm_pos.indexOf(x)]
                    },
                    culling: false,
                    rotate: 60
                }
            },
            y: {
                min: -8,
                max: 8,
                label: {
                    text: "Z\n(mm)",
                    position: 'outer-middle'
                },
                tick: {
                    count: 2
                }
            }
        }
    });
});