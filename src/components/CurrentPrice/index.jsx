import { View, Text } from "react-native";
import styles from './style';

export default function CurrentPrice({coinsDataList}) {
  const currentPrice = coinsDataList.pop()?.value || 0;

  return (
    <View style={styles.headerCurrentPrice}>
      <Text style={styles.currentPrice}> {`$ ${currentPrice}`} </Text>
      <Text style={styles.textPrice}> Última cotação </Text>
    </View>
  );
}