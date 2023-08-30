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
        style={styles.TouchableOpacity_505_38}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_62"))
        }
      />
      <View style={styles.View_508_74}>
        <View style={styles.View_508_75} />
        <View style={styles.View_508_76}>
          <Text style={styles.Text_508_76}>Email</Text>
        </View>
      </View>
      <View style={styles.View_508_77}>
        <View style={styles.View_508_78} />
        <View style={styles.View_508_79}>
          <Text style={styles.Text_508_79}>Password</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_508_80}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_114"))
        }
      >
        <Text style={styles.Text_508_80}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={styles.View_505_39}>
        <Text style={styles.Text_505_39}>
          # Happy Delights Bringing the flavors of the world to your doorstep
          one bite at a time
        </Text>
      </View>
      <View style={styles.View_508_73}>
        <Text style={styles.Text_508_73}>
          Don&#39;t have an account? Sign Up{" "}
        </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/216ddbb1-37c7-4edf-b86d-ec7edc1f4ffe"
        }}
        style={styles.TouchableOpacity_508_81}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_3"))
        }
      />
      <View style={styles.View_508_82}>
        <Text style={styles.Text_508_82}>Log In</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd27eecb-b0e3-4d1b-a4c2-5422d55f438c"
        }}
        style={styles.ImageBackground_512_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6f69126-7dd2-4511-83be-e4ce71e57a60"
        }}
        style={styles.ImageBackground_512_92}
      />
      <View style={styles.View_505_31}>
        <View style={styles.View_505_32}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25a81071-d408-461f-babe-0418ce32a063"
            }}
            style={styles.ImageBackground_505_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc1736fa-c486-46e8-bde1-87f8212715a4"
            }}
            style={styles.ImageBackground_505_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7701dfb6-cf2f-44f5-a8e2-71a2fc22dc47"
            }}
            style={styles.ImageBackground_512_89}
          />
        </View>
        <View style={styles.View_505_35}>
          <View style={styles.View_505_36}>
            <Text style={styles.Text_505_36}>Fast delivery</Text>
          </View>
          <View style={styles.View_505_37}>
            <Text style={styles.Text_505_37}>
              Taste that best, its on time.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(215, 229, 252, 1)" },
  View_2: { height: hp("122%") },
  TouchableOpacity_505_38: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_508_74: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_508_75: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(207, 207, 207, 1)",
    borderWidth: 1
  },
  View_508_76: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_508_76: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_77: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_508_78: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(207, 207, 207, 1)",
    borderWidth: 1
  },
  View_508_79: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_508_79: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_508_80: {
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_508_80: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_505_39: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_505_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_508_73: {
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("110%"),
    justifyContent: "flex-start"
  },
  Text_508_73: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_508_81: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("100%")
  },
  View_508_82: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("103%"),
    justifyContent: "flex-start"
  },
  Text_508_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_512_15: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("-15%")
  },
  ImageBackground_512_92: {
    width: wp("81%"),
    height: hp("45%"),
    top: hp("-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_505_31: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("19%")
  },
  View_505_32: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_505_33: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  ImageBackground_505_34: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%")
  },
  ImageBackground_512_89: {
    width: wp("20%"),
    height: hp("12%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_505_35: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("12%")
  },
  View_505_36: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_505_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_505_37: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_505_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
