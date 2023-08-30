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
      <View style={styles.View_512_620} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8ee6215-a06b-418a-8c1d-0870d2374cee"
        }}
        style={styles.ImageBackground_512_618}
      />
      <View style={styles.View_512_577}>
        <View style={styles.View_512_578} />
        <View style={styles.View_512_579}>
          <Text style={styles.Text_512_579}>At least 8 digits</Text>
        </View>
      </View>
      <View style={styles.View_512_580} />
      <View style={styles.View_512_581}>
        <Text style={styles.Text_512_581}>Confirm Password</Text>
      </View>
      <View style={styles.View_512_582}>
        <View style={styles.View_512_583} />
        <View style={styles.View_512_584}>
          <Text style={styles.Text_512_584}>********</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_512_585}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_16"))
        }
      >
        <Text style={styles.Text_512_585}>
          Don&#39;t have an account? Sign Up{" "}
        </Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe2a0850-f4ec-47af-b602-b36d7f096222"
        }}
        style={styles.ImageBackground_512_586}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_512_587}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_140"))
        }
      >
        <View style={styles.View_I512_587_1_681}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb6c4ef9-e670-42fd-9500-3e5a61931364"
            }}
            style={styles.ImageBackground_I512_587_1_682}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_512_588}>
        <View style={styles.View_512_589}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dfcdd6d-c7f2-4994-ad44-4823c7e4a9ca"
            }}
            style={styles.ImageBackground_512_590}
          />
          <View style={styles.View_512_591}>
            <View style={styles.View_512_592}>
              <View style={styles.View_512_593}>
                <View style={styles.View_512_619}>
                  <Text style={styles.Text_512_619}>********</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b30adbc7-903f-4b3e-ab9e-d9a5143724a6"
                  }}
                  style={styles.ImageBackground_512_594}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74b877c4-007a-425c-9518-dc365edbeed3"
                  }}
                  style={styles.ImageBackground_512_595}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_512_608}>
        <Text style={styles.Text_512_608}>Enter New Password</Text>
      </View>
      <View style={styles.View_512_609}>
        <Text style={styles.Text_512_609}>Enter New Password</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99153cf5-bbaa-499d-bdae-74f35df4e534"
        }}
        style={styles.TouchableOpacity_512_683}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_154"))
        }
      />
      <View style={styles.View_512_684}>
        <Text style={styles.Text_512_684}>Reset</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_512_620: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("24%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  ImageBackground_512_618: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("80%")
  },
  View_512_577: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_512_578: {
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
  View_512_579: {
    width: wp("30%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_512_579: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_580: {
    width: wp("41%"),
    height: hp("4%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_512_581: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_512_581: {
    color: "rgba(68, 68, 68, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_582: {
    width: wp("90%"),
    height: hp("8%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_512_583: {
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
  View_512_584: {
    width: wp("20%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_512_584: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_512_585: {
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("117%"),
    justifyContent: "flex-start"
  },
  Text_512_585: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_512_586: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("-15%")
  },
  TouchableOpacity_512_587: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I512_587_1_681: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I512_587_1_682: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_512_588: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("18%")
  },
  View_512_589: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_512_590: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_512_591: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_512_592: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_512_593: {
    width: wp("49%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_512_619: {
    width: wp("24%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_512_619: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_512_594: {
    width: wp("49%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_512_595: {
    width: wp("35%"),
    height: hp("20%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_512_608: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_512_608: {
    color: "rgba(68, 68, 68, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_512_609: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_512_609: {
    color: "rgba(68, 68, 68, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_512_683: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("78%")
  },
  View_512_684: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_512_684: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
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
