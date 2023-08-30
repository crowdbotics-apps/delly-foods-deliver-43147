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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d17e31b5-6175-45e9-a96f-a757a7f416c8"
        }}
        style={styles.ImageBackground_512_694}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_512_17}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_62"))
        }
      />
      <View style={styles.View_512_18}>
        <View style={styles.View_512_19} />
        <View style={styles.View_512_20}>
          <Text style={styles.Text_512_20}>Email</Text>
        </View>
      </View>
      <View style={styles.View_512_68}>
        <View style={styles.View_512_69} />
        <View style={styles.View_512_70}>
          <Text style={styles.Text_512_70}>Email</Text>
        </View>
      </View>
      <View style={styles.View_512_71}>
        <View style={styles.View_512_72} />
        <View style={styles.View_512_73}>
          <Text style={styles.Text_512_73}>Username</Text>
        </View>
      </View>
      <View style={styles.View_512_21}>
        <View style={styles.View_512_22} />
        <View style={styles.View_512_23}>
          <Text style={styles.Text_512_23}>Password</Text>
        </View>
      </View>
      <View style={styles.View_512_25}>
        <Text style={styles.Text_512_25}>
          Explore a World of Tastes from the Comfort of Home, One Bite at a
          Time.&quot;
        </Text>
      </View>
      <View style={styles.View_512_26}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/422ac36e-89ac-4954-b99e-e18f10cbf6d4"
          }}
          style={styles.ImageBackground_I512_26_202_3550}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e613c7a-fb0a-47cf-a288-40d1b9550542"
          }}
          style={styles.ImageBackground_I512_26_202_3551}
        />
      </View>
      <View style={styles.View_512_27}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9fd295d-2d72-46b6-8921-7410a5751cfc"
          }}
          style={styles.ImageBackground_I512_27_202_3428}
        />
        <View source={{ uri: "null" }} style={styles.View_I512_27_202_3429} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1c3e2f8-13f8-444d-9a3b-ef663ff1444b"
          }}
          style={styles.ImageBackground_I512_27_202_3430}
        />
      </View>
      <View style={styles.View_512_28}>
        <Text style={styles.Text_512_28}>Or continue with</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_512_29}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_62"))
        }
      />
      <View style={styles.View_512_30}>
        <Text style={styles.Text_512_30}>Sign Up</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ebb5731-f03a-49fd-afab-e5eb659dd11b"
        }}
        style={styles.ImageBackground_512_31}
      />
      <View style={styles.View_512_51}>
        <Text style={styles.Text_512_51}># Your Culinary Journey</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_512_52}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("505_2"))
        }
      >
        <Text style={styles.Text_512_52}>Already have an account? Sign In</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32740812-1b85-4454-b7db-c576fb37ca08"
        }}
        style={styles.ImageBackground_512_93}
      />
      <View style={styles.View_512_32}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf1dd080-e31b-4558-8df5-b5cbb6c526c2"
          }}
          style={styles.ImageBackground_512_33}
        />
        <View style={styles.View_512_36}>
          <View style={styles.View_512_37}>
            <Text style={styles.Text_512_37}>Fast delivery</Text>
          </View>
          <View style={styles.View_512_38}>
            <Text style={styles.Text_512_38}>
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
  ImageBackground_512_694: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("84%")
  },
  TouchableOpacity_512_17: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_512_18: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_512_19: {
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
  View_512_20: {
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
  Text_512_20: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_68: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_512_69: {
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
  View_512_70: {
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
  Text_512_70: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_71: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_512_72: {
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
  View_512_73: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_512_73: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_21: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_512_22: {
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
  View_512_23: {
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
  Text_512_23: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_25: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_512_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_26: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I512_26_202_3550: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I512_26_202_3551: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_512_27: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(242, 240, 240, 1)"
  },
  ImageBackground_I512_27_202_3428: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I512_27_202_3429: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I512_27_202_3430: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_512_28: {
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_512_28: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_512_29: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("98%"),
    backgroundColor: "rgba(121, 134, 253, 1)"
  },
  View_512_30: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_512_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_512_31: {
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
  View_512_51: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_512_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_512_52: {
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_512_52: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_512_93: {
    width: wp("95%"),
    height: hp("55%"),
    top: hp("-21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_512_32: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("5%")
  },
  ImageBackground_512_33: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_512_36: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_512_37: {
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
  Text_512_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_38: {
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
  Text_512_38: {
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
