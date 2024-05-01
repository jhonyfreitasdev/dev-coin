import { FlatList, ScrollView, View } from "react-native";
import QueryButton from "../QueryButton";
import QuotationItems from '../QuotationItems';
import styles from './style';

export default function QuotationsList({setDays, coinsDataList}) {
  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <QueryButton updateState={() => setDays(7)} text="7D"/>
        <QueryButton updateState={() => setDays(15)} text="15D"/>
        <QueryButton updateState={() => setDays(30)} text="1M"/>
        <QueryButton updateState={() => setDays(90)} text="3M"/>
        <QueryButton updateState={() => setDays(180)} text="6M"/>
      </View>

      <FlatList 
        style={styles.list}
        data={coinsDataList}
        renderItem={({item}) => {
          return <QuotationItems date={item.date} value={item.value} />
        }}
      />
    </View>
  );
}