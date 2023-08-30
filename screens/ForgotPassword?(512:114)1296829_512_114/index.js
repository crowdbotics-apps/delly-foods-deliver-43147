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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a957b9f9-ddba-440f-a0e7-5ecff610da62"
        }}
        style={styles.ImageBackground_512_127}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9732671-2488-4be0-bcb6-ebf11f097784"
        }}
        style={styles.ImageBackground_512_170}
      />
      <View style={styles.View_512_171}>
        <Text style={styles.Text_512_171}>Forgot Password</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_512_178}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("505_2"))
        }
      >
        <View style={styles.View_I512_178_1_681}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e53b784-307d-4769-ad88-6ea223132403"
            }}
            style={styles.ImageBackground_I512_178_1_682}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_512_185}>
        <Text style={styles.Text_512_185}>Enter Email Address</Text>
      </View>
      <View style={styles.View_512_188}>
        <View style={styles.View_512_189} />
        <View style={styles.View_512_190}>
          <Text style={styles.Text_512_190}>Email</Text>
        </View>
      </View>
      <View style={styles.View_512_208}>
        <Text style={styles.Text_512_208}>
          Please enter your Email to receive a verification code.
        </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaa428bd-621f-4a55-a411-4441e0c96cf9"
        }}
        style={styles.TouchableOpacity_512_191}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_140"))
        }
      />
      <View style={styles.View_512_192}>
        <Text style={styles.Text_512_192}>Send</Text>
      </View>
      <View style={styles.View_512_193}>
        <Text style={styles.Text_512_193}>Or continue with</Text>
      </View>
      <View style={styles.View_512_194}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aef7c75f-b15d-4eac-bcf0-e22b0fff0ece"
          }}
          style={styles.ImageBackground_I512_194_202_3550}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0eec0a85-62d8-49ac-bdf5-d7e614d0f405"
          }}
          style={styles.ImageBackground_I512_194_202_3551}
        />
      </View>
      <View style={styles.View_512_201}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dadb83a6-26e4-4114-a0d4-a8efb2a0864f"
          }}
          style={styles.ImageBackground_I512_201_202_3428}
        />
        <View source={{ uri: "null" }} style={styles.View_I512_201_202_3429} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc579663-fbb1-44f6-a030-8a3308fa0a95"
          }}
          style={styles.ImageBackground_I512_201_202_3430}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_512_207}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_16"))
        }
      >
        <Text style={styles.Text_512_207}>
          Don&#39;t have an account? Sign Up{" "}
        </Text>
      </TouchableOpacity>
      <View style={styles.View_512_329}>
        <View style={styles.View_512_330}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/184f1488-ace4-43e2-9955-115275c0ac85"
            }}
            style={styles.ImageBackground_512_331}
          />
          <View style={styles.View_512_332}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9c90438-698b-454d-a5cf-604dcc03bdbf"
              }}
              style={styles.ImageBackground_512_333}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3efc98e2-3dd2-4f4c-bf0a-a4bdc1d0904a"
              }}
              style={styles.ImageBackground_512_336}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_512_127: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("-14%")
  },
  ImageBackground_512_170: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("82%")
  },
  View_512_171: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_512_171: {
    color: "rgba(68, 68, 68, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_512_178: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I512_178_1_681: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I512_178_1_682: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_512_185: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_512_185: {
    color: "rgba(68, 68, 68, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_188: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_512_189: {
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
  View_512_190: {
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
  Text_512_190: {
    color: "rgba(123, 123, 123, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_208: {
    width: wp("95%"),
    minWidth: wp("95%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_512_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_512_191: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("73%")
  },
  View_512_192: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_512_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_193: {
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_512_193: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_194: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I512_194_202_3550: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I512_194_202_3551: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_512_201: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(242, 240, 240, 1)"
  },
  ImageBackground_I512_201_202_3428: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I512_201_202_3429: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I512_201_202_3430: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  TouchableOpacity_512_207: {
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("117%"),
    justifyContent: "flex-start"
  },
  Text_512_207: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_329: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("19%")
  },
  View_512_330: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_512_331: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_512_332: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_512_333: {
    width: wp("67%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_512_336: {
    width: wp("52%"),
    height: hp("24%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
