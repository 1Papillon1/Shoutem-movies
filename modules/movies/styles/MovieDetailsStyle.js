import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
    box : {
      flex: 1,
      backgroundColor: "white",
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
    },
    paragraph: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },
      row: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
      },
      rowSecondary: {
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