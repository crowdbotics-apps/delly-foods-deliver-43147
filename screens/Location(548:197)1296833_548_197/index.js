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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55a2504c-b62b-4a60-912d-3187dbd4c66e"
        }}
        style={styles.ImageBackground_548_198}
      />
      <View style={styles.View_548_205} />
      <View style={styles.View_548_206}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0a7c926-3f65-40de-8f48-e1815d134b1a"
          }}
          style={styles.ImageBackground_548_207}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a4ccc15-1cca-4a58-8717-2aafb1178ebc"
          }}
          style={styles.ImageBackground_548_208}
        />
      </View>
      <View style={styles.View_548_211} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96d41aa2-5cec-458d-a374-1577588489cd"
        }}
        style={styles.ImageBackground_548_215}
      />
      <View style={styles.View_548_216}>
        <Text style={styles.Text_548_216}>Kasoa, Kakraba</Text>
      </View>
      <View style={styles.View_548_217}>
        <Text style={styles.Text_548_217}>
          21-42-34, Budumbram,Kasoa, 500072
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f01229a1-f6c5-457f-8557-d5e8658139f0"
        }}
        style={styles.ImageBackground_548_218}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33cf31b2-74f3-47f8-b344-cb5b9644e536"
        }}
        style={styles.ImageBackground_548_224}
      />
      <View style={styles.View_546_161}>
        <View style={styles.View_546_162}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0826c09e-8d6b-4251-b392-5185568ecf29"
            }}
            style={styles.ImageBackground_546_163}
          />
          <View style={styles.View_546_164}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fb0ff2a-ffa2-4483-9cc9-2f6e207870b9"
              }}
              style={styles.ImageBackground_546_165}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/260d3462-9924-4c4e-b38c-abdad9b8eb31"
              }}
              style={styles.ImageBackground_546_166}
            />
          </View>
        </View>
        <View style={styles.View_546_167}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12260950-c652-4b7d-bb08-fce8cc449308"
            }}
            style={styles.ImageBackground_546_168}
          />
          <View style={styles.View_546_169}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82a76fb1-ef21-49a6-94f7-6847255c97f9"
              }}
              style={styles.ImageBackground_546_170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5639052-8cc1-4a5d-a8b5-03abd0b70749"
              }}
              style={styles.ImageBackground_546_171}
            />
          </View>
        </View>
        <View style={styles.View_546_172}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8027d0e-6800-46f4-9e42-b734b8e7454c"
            }}
            style={styles.ImageBackground_546_173}
          />
          <View style={styles.View_546_174}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/008312f8-cc20-4506-886a-7d72cbcd7fa8"
              }}
              style={styles.ImageBackground_546_175}
            />
            <View style={styles.View_546_176} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ef7f578-3b8c-47d5-9458-379a868f3d09"
        }}
        style={styles.ImageBackground_546_177}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3862513c-b6b2-4f1c-ad6a-bde8c6a41ba4"
        }}
        style={styles.ImageBackground_546_188}
      />
      <View style={styles.View_548_202} />
      <View style={styles.View_548_203} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bad26cf3-8f14-4743-9409-399bc71dafee"
        }}
        style={styles.ImageBackground_548_204}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57961333-1384-429b-b075-b0331a091b58"
        }}
        style={styles.ImageBackground_548_212}
      />
      <View style={styles.View_548_214}>
        <Text style={styles.Text_548_214}>Deliver to</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/725af97e-54d0-4dec-98d3-3bfb277b992e"
        }}
        style={styles.ImageBackground_548_213}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_549_891}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_2"))
        }
      >
        <View style={styles.View_549_892} />
      </TouchableOpacity>
      <View style={styles.View_548_220}>
        <Text style={styles.Text_548_220}>Confirm Location</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 242, 1)" },
  View_2: { height: hp("126%") },
  ImageBackground_548_198: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("0%")
  },
  View_548_205: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_548_206: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_548_207: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_548_208: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_548_211: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_548_215: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_548_216: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_548_216: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_217: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_548_217: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_548_218: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_548_224: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%")
  },
  View_546_161: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("-5%")
  },
  View_546_162: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_546_163: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_546_164: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_546_165: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_546_166: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_546_167: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_546_168: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_546_169: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_546_170: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_546_171: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_546_172: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_546_173: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_546_174: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_546_175: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_546_176: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  ImageBackground_546_177: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("-5%"),
    resizeMode: "cover"
  },
  ImageBackground_546_188: {
    width: wp("38%"),
    height: hp("22%"),
    top: hp("-12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_548_202: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("-7%"),
    backgroundColor: "rgba(10, 25, 30, 1)",
    opacity: 0.2800000011920929
  },
  View_548_203: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(242, 242, 242, 1)"
  },
  ImageBackground_548_204: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_548_212: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("15%")
  },
  View_548_214: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_548_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_548_213: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_549_891: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("112%")
  },
  View_549_892: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(121, 134, 253, 1)"
  },
  View_548_220: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("113%"),
    justifyContent: "flex-start"
  },
  Text_548_220: {
    color: "rgba(246, 246, 249, 1)",
    fontSize: 14,
    fontWeight: "600",
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
