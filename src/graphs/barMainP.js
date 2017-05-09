/**
 * Created by Caspar on 2017-05-09.
 */
/**
 * Created by Caspar on 2017-05-08.
 */
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

const GREEN = processColor('#71BD6A');
const RED = processColor('#D14B5A');

class barMainP extends React.Component {

    constructor() {
        super();

        this.state = {
            //colorDay: [RED, RED, RED, RED, RED],
            //valueDay: [1,2,4,5],
            data: {
                dataSets: [{
                    values: [{y: 5}],
                    label: 'Zero line dataset',
                    config: {
                        //drawValues: false,
                        valueTextSize: 20,
                        colors: [GREEN]
                    }
                }],
            },
            xAxis: {
                enabled: false
            },
            yAxis: {
                left: {
                    drawLabels: false,
                    drawAxisLine: false,
                    drawGridLines: false,
                    zeroLine: {
                        enabled: false,
                        lineWidth: 100
                    }
                },
                right: {
                    enabled: false
                }
            }
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    }

    render() {
        return (

            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        description={{text: 'where is dis'}}
                        showDataPoint={{true}}
                        legend={{enabled: false}}

                        onSelect={this.handleSelect.bind(this)}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    chart: {
        flex: 1,
        height: 500,
        width: 500,

    }
});

module.exports = barMainP;