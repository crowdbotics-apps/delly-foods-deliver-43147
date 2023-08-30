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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d90fe07e-7257-4691-8920-2201c0974251"
        }}
        style={styles.ImageBackground_548_403}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e33d675-216a-4e67-89f4-91f977d9a70f"
        }}
        style={styles.ImageBackground_33_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5534aa14-43c2-474d-a59d-9e5181a9687f"
        }}
        style={styles.ImageBackground_33_4}
      />
      <View style={styles.View_33_5}>
        <TouchableOpacity
          style={styles.TouchableOpacity_33_6}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("28_147"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/374a9c4e-f986-4609-99bb-487235517f73"
            }}
            style={styles.ImageBackground_33_7}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_33_11}>
        <Text style={styles.Text_33_11}>$51.90</Text>
      </View>
      <View style={styles.View_33_77}>
        <Text style={styles.Text_33_77}>Total price</Text>
      </View>
      <View style={styles.View_33_87}>
        <Text style={styles.Text_33_87}>Estimated delivery time - 10 mins</Text>
      </View>
      <View style={styles.View_33_13}>
        <Text style={styles.Text_33_13}>Spudnut dounut</Text>
      </View>
      <View style={styles.View_33_14}>
        <Text style={styles.Text_33_14}>Medium</Text>
      </View>
      <View style={styles.View_33_15} />
      <View style={styles.View_33_16}>
        <Text style={styles.Text_33_16}>-</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_17}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_161"))
        }
      />
      <View style={styles.View_33_18}>
        <Text style={styles.Text_33_18}>Check out</Text>
      </View>
      <View style={styles.View_33_19}>
        <View style={styles.View_33_20}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22708a06-e9b0-4cdc-a76d-7f30e3141d94"
            }}
            style={styles.ImageBackground_33_21}
          />
          <View style={styles.View_33_22}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/645e46c3-130d-4d46-8088-1d7f82ec479b"
              }}
              style={styles.ImageBackground_33_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb262350-d6d0-4019-ab8c-fc609a4a6bce"
              }}
              style={styles.ImageBackground_33_24}
            />
          </View>
        </View>
        <View style={styles.View_33_25}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f7c79c2-5b0a-489d-b6e5-b72aa588cdd0"
            }}
            style={styles.ImageBackground_33_26}
          />
          <View style={styles.View_33_27}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f5bf6aa-a0a1-4c2e-9241-fea1a7cf44d7"
              }}
              style={styles.ImageBackground_33_28}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94a550ce-20af-40c5-b293-22ec89e37fdb"
              }}
              style={styles.ImageBackground_33_29}
            />
          </View>
        </View>
        <View style={styles.View_33_30}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f52bdadd-74cb-4693-bb2b-9a009c77d479"
            }}
            style={styles.ImageBackground_33_31}
          />
          <View style={styles.View_33_32}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/865bded8-9dfc-4fda-b6f8-9ee10606e3e8"
              }}
              style={styles.ImageBackground_33_33}
            />
            <View style={styles.View_33_34} />
          </View>
        </View>
      </View>
      <View style={styles.View_33_35}>
        <View style={styles.View_33_36}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44cc5738-cc7e-40cb-9b44-e7369c31a84f"
            }}
            style={styles.ImageBackground_33_37}
          />
          <View style={styles.View_33_38}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3353abc4-a698-4985-9ec6-ac6e55fbb3a0"
              }}
              style={styles.ImageBackground_33_39}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b6ef283-d2e4-4cdc-b239-124ceb63652f"
              }}
              style={styles.ImageBackground_33_40}
            />
          </View>
        </View>
        <View style={styles.View_33_41}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1898cb30-1afe-4ff8-ac7e-0ed7254942b6"
            }}
            style={styles.ImageBackground_33_42}
          />
          <View style={styles.View_33_43}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb6ed8cd-0471-420d-ab5e-3069c6669fe2"
              }}
              style={styles.ImageBackground_33_44}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc3b6fac-cd54-4c60-8d2e-7289fc00d169"
              }}
              style={styles.ImageBackground_33_45}
            />
          </View>
        </View>
        <View style={styles.View_33_46}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff25e23f-09f7-4233-970e-d6c07614f8cd"
            }}
            style={styles.ImageBackground_33_47}
          />
          <View style={styles.View_33_48}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce6e928a-3f13-41fe-90bb-e53d7c34d44d"
              }}
              style={styles.ImageBackground_33_49}
            />
            <View style={styles.View_33_50} />
          </View>
        </View>
      </View>
      <View style={styles.View_33_51}>
        <View style={styles.View_33_52}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfef0144-0628-41f3-b299-90ab025eca24"
            }}
            style={styles.ImageBackground_33_53}
          />
          <View style={styles.View_33_54}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41ea12e5-8def-45ec-8e31-64b320db7f18"
              }}
              style={styles.ImageBackground_33_55}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/481014e8-944d-488f-a0bc-6ef5e2444118"
              }}
              style={styles.ImageBackground_33_56}
            />
          </View>
        </View>
        <View style={styles.View_33_57}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f66244af-48bd-4aaa-b8fa-86d83aac62ed"
            }}
            style={styles.ImageBackground_33_58}
          />
          <View style={styles.View_33_59}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/117b6e27-cd0e-4f51-9a76-6e6f67bca2b8"
              }}
              style={styles.ImageBackground_33_60}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d7e4045-8f1a-4329-b32a-cbd87d88da28"
              }}
              style={styles.ImageBackground_33_61}
            />
          </View>
        </View>
        <View style={styles.View_33_62}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c48731ed-60ae-4250-9187-a8286386b0a1"
            }}
            style={styles.ImageBackground_33_63}
          />
          <View style={styles.View_33_64}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c25b1b0-e53a-4787-b757-d8d28542df17"
              }}
              style={styles.ImageBackground_33_65}
            />
            <View style={styles.View_33_66} />
          </View>
        </View>
      </View>
      <View style={styles.View_33_94} />
      <View style={styles.View_33_96}>
        <Text style={styles.Text_33_96}>Apply coupon code</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/141effbe-96de-4835-a277-a7dfec651cf8"
        }}
        style={styles.TouchableOpacity_49_494}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_548_403: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("52%")
  },
  ImageBackground_33_3: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  ImageBackground_33_4: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("14%")
  },
  View_33_5: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%")
  },
  TouchableOpacity_33_6: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_33_7: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_11: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_33_11: {
    color: "rgba(70, 136, 240, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_77: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("102%"),
    justifyContent: "flex-start"
  },
  Text_33_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_87: {
    width: wp("96%"),
    minWidth: wp("96%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_33_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_13: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_33_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_14: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_33_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_15: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  View_33_16: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_33_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_33_17: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("109%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  View_33_18: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("112%"),
    justifyContent: "flex-start"
  },
  Text_33_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_19: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("21%")
  },
  View_33_20: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_33_21: {
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
  View_33_22: {
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
  ImageBackground_33_23: {
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
  ImageBackground_33_24: {
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
  View_33_25: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_33_26: {
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
  View_33_27: {
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
  ImageBackground_33_28: {
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
  ImageBackground_33_29: {
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
  View_33_30: {
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
  ImageBackground_33_31: {
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
  View_33_32: {
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
  ImageBackground_33_33: {
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
  View_33_34: {
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
  View_33_35: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("30%")
  },
  View_33_36: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_33_37: {
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
  View_33_38: {
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
  ImageBackground_33_39: {
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
  ImageBackground_33_40: {
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
  View_33_41: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_33_42: {
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
  View_33_43: {
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
  ImageBackground_33_44: {
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
  ImageBackground_33_45: {
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
  View_33_46: {
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
  ImageBackground_33_47: {
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
  View_33_48: {
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
  ImageBackground_33_49: {
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
  View_33_50: {
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
  View_33_51: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("32%")
  },
  View_33_52: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_33_53: {
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
  View_33_54: {
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
  ImageBackground_33_55: {
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
  ImageBackground_33_56: {
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
  View_33_57: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_33_58: {
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
  View_33_59: {
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
  ImageBackground_33_60: {
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
  ImageBackground_33_61: {
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
  View_33_62: {
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
  ImageBackground_33_63: {
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
  View_33_64: {
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
  ImageBackground_33_65: {
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
  View_33_66: {
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
  View_33_94: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("91%"),
    backgroundColor: "rgba(250, 187, 45, 1)",
    borderColor: "rgba(250, 187, 45, 1)",
    borderWidth: 1
  },
  View_33_96: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_33_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_49_494: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
