import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flexDirection:"row",
    },
    
    flexButtons: {
      flexDirection: "row", 
      marginLeft:15, 
      marginTop: 15,
    },
    buttonWrapper: {
      width: 150,
      marginRight: 15,
      
    },
    buttonWrapperSecondary: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "white",
      paddingBottom: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    text: {
      fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    },
    box : {
      borderStyle: "solid",
      marginTop: 20,
      borderColor: "white",
      marginLeft: 15,
      marginRight: 15,
    },
    
      row: {
        backgroundColor: "white",
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      rowSecondary: {
        backgroundColor: "white",
        fontSize: 20,
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10,
      },
      image: {
        flex: 1,
        width: "100%",
        height: 200,
      },
    });