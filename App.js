import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const data = {
  labels: ['Java', 'Javascript', 'Node', 'Python', 'React-Native', 'React'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '10',
            strokeWidth: '4',
            stroke: '#000',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color:'purple',
          marginTop: 20,
        }}>Bar Chart</Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width}
        height={250}
        chartConfig={{
          backgroundGradientFrom: 'blue',
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: 'red',
          backgroundGradientToOpacity: 0.5,
          color: (opacity) => `rgba(255, 255, 255,1)`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.8,
          barRadius:2,
          useShadowColorFromDataset: false, // optional
        }}
        style={{borderRadius:10, alignSelf:'center'}}
      />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'grey'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
    marginTop: 20,
  },
});
