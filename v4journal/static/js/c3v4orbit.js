var bpm_names = ["bpm_names","BPM1","BPM2","BPM3","BPM4","BPM5"],
    bpm_pos = ["bpm_pos",1,4,5,6,10],
    e1_x = ['e1_x',0.5,1,3.2,4.3,3],
    e1_z = ['e1_z',3,2.5,4.3,2.6,1];

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
                    }
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
                    }
                }
            }
        }
    });
});