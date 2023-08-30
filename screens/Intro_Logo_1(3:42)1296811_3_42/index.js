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
      <View source={{ uri: "null" }} style={styles.View_506_43} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f790cc1-a75b-488e-bbf3-ca4c95cb9a2e"
        }}
        style={styles.ImageBackground_3_43}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f1832ae-6fd3-49fe-ab8d-ba5ba6b21904"
        }}
        style={styles.ImageBackground_3_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7cf78fe-0fa1-411f-85e3-1798368157f0"
        }}
        style={styles.ImageBackground_3_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01abee8c-e241-4356-97f2-5e93b7f3c429"
        }}
        style={styles.ImageBackground_3_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c63b648-3899-4a44-b865-abb4b613ad21"
        }}
        style={styles.ImageBackground_3_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2b6d9c3-ea03-43a1-a4e0-59af13171c4c"
        }}
        style={styles.ImageBackground_3_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6bf2eea-9357-4a6f-88f6-7806f523f7e7"
        }}
        style={styles.ImageBackground_3_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f86f1b39-1c73-46f3-b6ba-2e015abc5ef2"
        }}
        style={styles.ImageBackground_3_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05ddb1dc-2d24-47cc-88c1-6507a54d507f"
        }}
        style={styles.ImageBackground_3_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/821f017c-8d14-403e-ac8a-ac83fdf09439"
        }}
        style={styles.ImageBackground_3_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/886ace37-c805-4944-9f49-8f7cbe4ee847"
        }}
        style={styles.ImageBackground_3_54}
      />
      <View style={styles.View_3_55}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97fb822e-4490-41d7-84ec-1ed4665e9e6f"
          }}
          style={styles.ImageBackground_3_56}
        />
        <View style={styles.View_3_59}>
          <Text style={styles.Text_3_59}>Fast delivery</Text>
        </View>
        <View style={styles.View_3_60}>
          <Text style={styles.Text_3_60}>Taste that best, its on time.</Text>
        </View>
      </View>
      <View style={styles.View_44_18}>
        <View style={styles.View_44_19}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6565e13-fed0-424b-9a3a-ff4ed636e99f"
            }}
            style={styles.ImageBackground_44_20}
          />
          <View style={styles.View_44_21}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd63316e-5093-4683-9427-5bd6ab7ecb6b"
              }}
              style={styles.ImageBackground_44_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07774925-fd5d-4924-9145-44d3ecd81734"
              }}
              style={styles.ImageBackground_44_23}
            />
          </View>
        </View>
        <View style={styles.View_44_24}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/829d3e80-9b82-45be-83f8-1c3b18c8501e"
            }}
            style={styles.ImageBackground_44_25}
          />
          <View style={styles.View_44_26}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddb7cf76-5e16-4f7e-90b9-71e3ccd0910d"
              }}
              style={styles.ImageBackground_44_27}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0156931f-cbcf-4072-ac18-5615f9917892"
              }}
              style={styles.ImageBackground_44_28}
            />
          </View>
        </View>
        <View style={styles.View_44_29}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53d20e5b-23ed-405e-9128-f2d4b716f944"
            }}
            style={styles.ImageBackground_44_30}
          />
          <View style={styles.View_44_31}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e717153c-7386-4293-a1b7-84bedf3cf3e7"
              }}
              style={styles.ImageBackground_44_32}
            />
            <View style={styles.View_44_33} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_505_40}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("505_2"))
        }
      />
      <View style={styles.View_505_41}>
        <Text style={styles.Text_505_41}>Sign In</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_506_42}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("512_16"))
        }
      >
        <Text style={styles.Text_506_42}>Create an account</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6daee982-90ff-433c-8f30-ae013ee0e1cc"
        }}
        style={styles.ImageBackground_508_45}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b6681a0-d773-449d-8fbd-72245f8f69a6"
        }}
        style={styles.TouchableOpacity_512_88}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("44_18"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(215, 229, 252, 1)" },
  View_2: { height: hp("122%") },
  View_506_43: {
    width: wp("202%"),
    minWidth: wp("202%"),
    height: hp("155%"),
    minHeight: hp("155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-75%"),
    top: hp("-16%")
  },
  ImageBackground_3_43: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("16%")
  },
  ImageBackground_3_44: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%")
  },
  ImageBackground_3_45: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("79%")
  },
  ImageBackground_3_46: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("90%")
  },
  ImageBackground_3_47: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3%")
  },
  ImageBackground_3_48: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%")
  },
  ImageBackground_3_49: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("80%"),
    resizeMode: "cover"
  },
  ImageBackground_3_51: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("34%"),
    resizeMode: "cover"
  },
  ImageBackground_3_52: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_3_53: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_3_54: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  View_3_55: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("43%")
  },
  ImageBackground_3_56: {
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
  View_3_59: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_3_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_60: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_3_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_18: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("90%")
  },
  View_44_19: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_44_20: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_44_21: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_44_22: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_44_23: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_24: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_44_25: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_44_26: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_44_27: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_44_28: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_44_29: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_44_30: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_44_31: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_44_32: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_44_33: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  TouchableOpacity_505_40: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("68%"),
    backgroundColor: "rgba(121, 134, 253, 1)"
  },
  View_505_41: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_505_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_506_42: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_506_42: {
    color: "rgba(66, 12, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_508_45: {
    width: wp("160%"),
    minWidth: wp("160%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-40%"),
    top: hp("-34%")
  },
  TouchableOpacity_512_88: {
    width: wp("111%"),
    minWidth: wp("111%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("101%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
