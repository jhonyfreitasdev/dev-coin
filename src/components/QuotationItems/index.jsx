import { View, Text, Image } from "react-native";
import styles from './style';

export default function ({date, value}) {
  const dateFormated = date.split('-').reverse().join('/');
  return (
    <View style={styles.mainContent}>
      <View style={styles.dataContent}>
        <View style={styles.cotationContent}>
          <Image 
            style={styles.logoBitcoin}
            source={require('../../assets/images/bitcoin.png')} 
          />
          <Text style={styles.dayCotation}> {dateFormated} </Text>
        </View>

        <View>
          <Text style={styles.price}> {`$ ${value}`} </Text>
        </View>
      </View>
    </View>
  );
}