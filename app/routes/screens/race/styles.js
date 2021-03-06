import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 250,
    left: 0,
    backgroundColor: "black",
    opacity: 0.6
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  text: {
    color: "#FC4C02",
    textAlign: "center"
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  },
  buttonText: {
    textAlign: "center",
    color: "#FC4C02"
  }
});
