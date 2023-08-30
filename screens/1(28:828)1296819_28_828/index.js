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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74a27e25-e69c-4bf8-857f-7e6b7e0d8bcc"
        }}
        style={styles.ImageBackground_28_829}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e299cca-170d-46f8-9a9a-6dcf9dcc090e"
        }}
        style={styles.ImageBackground_28_830}
      />
      <View style={styles.View_28_831}>
        <TouchableOpacity
          style={styles.TouchableOpacity_28_832}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("28_147"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eadb155c-eeba-4181-a754-d3aee124211e"
            }}
            style={styles.ImageBackground_28_833}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_28_839}>
        <Text style={styles.Text_28_839}>GHC17.30</Text>
      </View>
      <View style={styles.View_28_890}>
        <Text style={styles.Text_28_890}>1</Text>
      </View>
      <View style={styles.View_28_844}>
        <Text style={styles.Text_28_844}>Spudnut dounut</Text>
      </View>
      <View style={styles.View_28_845}>
        <Text style={styles.Text_28_845}>1 Medium </Text>
      </View>
      <View style={styles.View_28_846} />
      <View style={styles.View_28_860}>
        <Text style={styles.Text_28_860}>-</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_861}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("548_197"))
        }
      />
      <View style={styles.View_28_862}>
        <Text style={styles.Text_28_862}>Next</Text>
      </View>
      <View style={styles.View_28_863}>
        <View style={styles.View_28_864}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d66a4160-5779-4559-9912-b77e9edef897"
            }}
            style={styles.ImageBackground_28_865}
          />
          <View style={styles.View_28_866}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b85bd867-fa1f-4a61-b01f-c92158cc7bd3"
              }}
              style={styles.ImageBackground_28_867}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff3e5fdc-2293-4f59-b958-e3c73f2ce2c7"
              }}
              style={styles.ImageBackground_28_868}
            />
          </View>
        </View>
        <View style={styles.View_28_869}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e8bd825-0679-4f7d-ba07-8521c6f264fd"
            }}
            style={styles.ImageBackground_28_870}
          />
          <View style={styles.View_28_871}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1968f1cc-5c68-4331-a42d-d42461c02d8b"
              }}
              style={styles.ImageBackground_28_872}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a31a75dd-a1ed-4600-ba41-029cf1b7ce02"
              }}
              style={styles.ImageBackground_28_873}
            />
          </View>
        </View>
        <View style={styles.View_28_874}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff3e2bd6-f69e-4256-acbc-983c65b4b4fe"
            }}
            style={styles.ImageBackground_28_875}
          />
          <View style={styles.View_28_876}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9fef8b1-2b3b-496d-9aa5-2b22c3257c52"
              }}
              style={styles.ImageBackground_28_877}
            />
            <View style={styles.View_28_878} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_895}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_903"))
        }
      >
        <View style={styles.View_28_894}>
          <View style={styles.View_28_891} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d6f3f48-69bd-4838-be33-839baa3cfb89"
          }}
          style={styles.ImageBackground_28_893}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_896}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_147"))
        }
      >
        <View style={styles.View_28_897}>
          <View style={styles.View_28_898} />
        </View>
      </TouchableOpacity>
      <View style={styles.View_28_901} />
      <View style={styles.View_28_902}>
        <Text style={styles.Text_28_902}>Choose Count</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/745d732c-e285-40d0-8b22-15385ef86083"
        }}
        style={styles.ImageBackground_33_321}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f258c1b8-5c08-4ef0-affe-f197d3d00c0f"
        }}
        style={styles.ImageBackground_33_322}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b487b9a-61fd-4899-8c11-eb12ca67dc65"
        }}
        style={styles.ImageBackground_33_323}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adc2afbb-411f-41d7-89fc-f9942c442e66"
        }}
        style={styles.TouchableOpacity_35_5}
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
  ImageBackground_28_829: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("-1%")
  },
  ImageBackground_28_830: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("13%")
  },
  View_28_831: {
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
  TouchableOpacity_28_832: {
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
  ImageBackground_28_833: {
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
  View_28_839: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_28_839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_890: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_28_890: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_844: {
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
  Text_28_844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_845: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_28_845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_846: {
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
  View_28_860: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_28_860: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_28_861: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("109%"),
    backgroundColor: "rgba(121, 134, 253, 1)"
  },
  View_28_862: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("112%"),
    justifyContent: "flex-start"
  },
  Text_28_862: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_863: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("29%")
  },
  View_28_864: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_28_865: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_866: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_867: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_28_868: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_869: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_28_870: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_871: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_872: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_28_873: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_874: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_28_875: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_876: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_877: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_878: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  TouchableOpacity_28_895: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("84%")
  },
  View_28_894: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_891: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  ImageBackground_28_893: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  TouchableOpacity_28_896: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("84%")
  },
  View_28_897: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_898: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  View_28_901: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("88%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_28_902: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_28_902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_33_321: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("68%")
  },
  ImageBackground_33_322: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("29%")
  },
  ImageBackground_33_323: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("36%")
  },
  TouchableOpacity_35_5: {
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
