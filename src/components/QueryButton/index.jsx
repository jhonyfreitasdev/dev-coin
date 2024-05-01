import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function QueryButton({text, updateState}) {
  return (
    <TouchableOpacity 
      style={styles.buttonQuery}
      onPress={updateState}
    > 
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}