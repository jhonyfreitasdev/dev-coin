import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  mainContent: {
    width: '95%',
    marginBottom: 6,
    alignSelf: 'center',
    padding: 10,
    gap: 10
  },
  dataContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 8
  },
  cotationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  logoBitcoin: {
    width: 40,
    height: 40
  },
  dayCotation: {
    color: '#fff',
    fontSize: 16
  },
  price: {
    color: '#a1810c',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
