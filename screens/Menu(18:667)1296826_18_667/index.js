import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fba22134-dc8a-48a0-8405-02796982fa16"
        }}
        style={styles.TouchableOpacity_18_848}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_3"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_18_837}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("548_433"))
        }
      >
        <Text style={styles.Text_18_837}>Order History</Text>
      </TouchableOpacity>
      <View style={styles.View_18_838}>
        <Text style={styles.Text_18_838}>Offers</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_18_839}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("548_229"))
        }
      >
        <Text style={styles.Text_18_839}>Settings</Text>
      </TouchableOpacity>
      <View style={styles.View_18_840}>
        <Text style={styles.Text_18_840}>Wallet</Text>
      </View>
      <View style={styles.View_18_841}>
        <Text style={styles.Text_18_841}>Supprort</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_18_842}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("505_2"))
        }
      >
        <Text style={styles.Text_18_842}>Logout</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02b6bd7f-529d-4fb8-8697-a3f97d80455e"
        }}
        style={styles.ImageBackground_18_863}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ee2935e-83c4-4ca1-a558-561e8dab9cc0"
        }}
        style={styles.ImageBackground_18_864}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0b01796-b9fe-40a7-9086-6b2333648aa9"
        }}
        style={styles.ImageBackground_18_865}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 246, 246, 1)" },
  View_2: { height: hp("113%") },
  TouchableOpacity_18_848: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("10%")
  },
  TouchableOpacity_18_837: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_18_837: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_838: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_18_838: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_18_839: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_18_839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_840: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_18_840: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_841: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_18_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_18_842: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_18_842: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_863: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("68%")
  },
  ImageBackground_18_864: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("96%")
  },
  ImageBackground_18_865: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("89%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
