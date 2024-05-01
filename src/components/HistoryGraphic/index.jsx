import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
export default function HisttoryGraphics({ coinsDataList }) {
  const list = coinsDataList.map(({value}) => value);
  if (list.length === 0) return;

  return (
    <View>
      <LineChart
        data={{
          datasets: [
            { data: list }
          ]
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel="$"
        yAxisSuffix=" "
        withVerticalLines={false}
        yLabelsOffset={1}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#232323',
          backgroundGradientTo: '#3f3f3f',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#a1810c"
          }
        }}
        bezier
      />
    </View>
  );
}