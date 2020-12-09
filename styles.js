import { Platform, StyleSheet, StatusBar } from "react-native"; 

export default StyleSheet.create({   
  container: {
    flex: 1, justifyContent: 'top', flexDirection: "column", 
    ...Platform.select({ ios: { paddingTop: 20 }, android: { paddingTop: StatusBar.currentHeight } })   
  },
  item: {
    margin: 5, 
    padding: 5,
    color: "slategrey", 
    backgroundColor: "ghostwhite",
    textAlign: "center"
  },
  title: {
    fontSize: 32,
  },   
});
