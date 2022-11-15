import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
    box : {
      flex: 1,
      borderStyle: "solid",
      marginTop: 20,
      borderColor: "white",
      marginLeft: 15,
      marginRight: 15,
    },
    paragraph: {
        backgroundColor: "#e0d9c7",
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },
      row: {
        backgroundColor: "#e0d9c7",
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
      },
      rowSecondary: {
        backgroundColor: "#e0d9c7",
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