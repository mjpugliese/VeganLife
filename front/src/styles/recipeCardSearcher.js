import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  touchableContainer: {
    height: normalize(100),
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginVertical: "1.5%",
    backgroundColor: colors.darkGray,
  },
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    backgroundColor: colors.ligthGray,
  },
  image: {
    width: "60%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    width: "40%",
    height: "100%",
    marginLeft: normalize(15),
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: "5%",
    paddingVertical: "1%",
  },
  title: {
    fontWeight: "bold",
  },
  author: {
    color: colors.dartmouthGreen,
    marginBottom: " 3%",
  },
});
