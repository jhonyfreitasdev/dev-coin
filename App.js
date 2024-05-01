import { useEffect, useState } from 'react';
import CurrentPrice from './src/components/CurrentPrice';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform
} from 'react-native';
import HisttoryGraphics from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';

export default function App() {
  const [coinsDataList, setCoinsDataList] = useState([]);
  const [days, setDays] = useState(7);

  useEffect(() => {
    async function fetchCoinsData() {
      const coinsData = await getCoinsDataGraphic(days);
      setCoinsDataList(coinsData);
    }
    fetchCoinsData();
  }, [days]);

  const createUrl = (daysQuantity) => {
    const date = new Date();
    const endDateString = date.toISOString().split('T')[0];
    const endDate = endDateString;

    date.setDate(date.getDate() - daysQuantity)
    const startDateString = date.toISOString().split('T')[0];
    const startDate = startDateString;

    return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
  };

  const getCoinsDataGraphic = async (daysQuantity) => {
    const response = await fetch(createUrl(daysQuantity));
    const json = await response.json();
    const bpiList = await json.bpi;
    return Object.entries(bpiList).map((item) => (
      { date: item[0], value: item[1] }
    ));
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#a1810c"
        barStyle="light-content"
      />
      <CurrentPrice coinsDataList={coinsDataList}/>
      <HisttoryGraphics coinsDataList={coinsDataList}/>
      <QuotationsList setDays={setDays} coinsDataList={coinsDataList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});
