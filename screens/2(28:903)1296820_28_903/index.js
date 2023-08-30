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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5fad09f-1d69-4583-bfc6-df0743435960"
        }}
        style={styles.ImageBackground_28_904}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8425d2ec-aef2-4425-8f12-bf207495d1c2"
        }}
        style={styles.ImageBackground_28_905}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_28_906}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_147"))
        }
      >
        <View style={styles.View_28_907}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84a99cb5-84aa-4cf3-92fb-de4f24a250be"
            }}
            style={styles.ImageBackground_28_908}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_28_912}>
        <Text style={styles.Text_28_912}>GHC34.60</Text>
      </View>
      <View style={styles.View_28_913}>
        <Text style={styles.Text_28_913}>2</Text>
      </View>
      <View style={styles.View_28_914}>
        <Text style={styles.Text_28_914}>Spudnut dounut</Text>
      </View>
      <View style={styles.View_28_915}>
        <Text style={styles.Text_28_915}>2 Medium</Text>
      </View>
      <View style={styles.View_28_916} />
      <View style={styles.View_28_917}>
        <Text style={styles.Text_28_917}>-</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_918}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("548_197"))
        }
      />
      <View style={styles.View_28_919}>
        <Text style={styles.Text_28_919}>Next</Text>
      </View>
      <View style={styles.View_28_920}>
        <View style={styles.View_28_921}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/423f5482-6559-45b2-8ed2-9b63d88752ba"
            }}
            style={styles.ImageBackground_28_922}
          />
          <View style={styles.View_28_923}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bac6facb-1275-48eb-958d-8a122af6fa41"
              }}
              style={styles.ImageBackground_28_924}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/daf9b2aa-0038-4956-8b93-d3d2ed2efabf"
              }}
              style={styles.ImageBackground_28_925}
            />
          </View>
        </View>
        <View style={styles.View_28_926}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20d46789-69cb-4185-95c9-fc36e0e4e4d6"
            }}
            style={styles.ImageBackground_28_927}
          />
          <View style={styles.View_28_928}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c8dfa12-b77e-451a-97e0-315fe40c9d50"
              }}
              style={styles.ImageBackground_28_929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f05a63f-43f2-4dbc-b5e1-0f640500468b"
              }}
              style={styles.ImageBackground_28_930}
            />
          </View>
        </View>
        <View style={styles.View_28_931}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48a3d78c-dcd8-436e-a646-65f517d735f0"
            }}
            style={styles.ImageBackground_28_932}
          />
          <View style={styles.View_28_933}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e130f96d-71bf-4515-9a11-287ac0fc32a4"
              }}
              style={styles.ImageBackground_28_934}
            />
            <View style={styles.View_28_935} />
          </View>
        </View>
      </View>
      <View style={styles.View_28_989}>
        <View style={styles.View_28_990}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50c183c3-4914-426e-a6d3-1fd4f3c1e962"
            }}
            style={styles.ImageBackground_28_991}
          />
          <View style={styles.View_28_992}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bca46b86-97c8-482b-bf99-ca3bfe3f57b8"
              }}
              style={styles.ImageBackground_28_993}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b8e6cb-909c-48ac-ba9f-13b8fdc64705"
              }}
              style={styles.ImageBackground_28_994}
            />
          </View>
        </View>
        <View style={styles.View_28_995}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77d21a74-4cf2-481c-ba66-4109445ebaee"
            }}
            style={styles.ImageBackground_28_996}
          />
          <View style={styles.View_28_997}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ced8c92-71a1-4b56-a968-207de2fefce5"
              }}
              style={styles.ImageBackground_28_998}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccdd511d-513b-493a-a39a-2145099410bc"
              }}
              style={styles.ImageBackground_28_999}
            />
          </View>
        </View>
        <View style={styles.View_28_1000}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b241afb5-bb8f-4282-8628-ef05832c68d7"
            }}
            style={styles.ImageBackground_28_1001}
          />
          <View style={styles.View_28_1002}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c4adef4-a815-45dc-bdd9-459f80ea4374"
              }}
              style={styles.ImageBackground_28_1003}
            />
            <View style={styles.View_28_1004} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_936}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_946"))
        }
      >
        <View style={styles.View_28_937}>
          <View style={styles.View_28_938} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cb908e5-7196-48ea-948f-3ca16d089844"
          }}
          style={styles.ImageBackground_28_939}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_941}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_828"))
        }
      >
        <View style={styles.View_28_942}>
          <View style={styles.View_28_943} />
        </View>
      </TouchableOpacity>
      <View style={styles.View_28_1058} />
      <View style={styles.View_28_945}>
        <Text style={styles.Text_28_945}>Choose Count</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34d16764-1dd4-4bc1-b205-0deefcb72a99"
        }}
        style={styles.ImageBackground_33_324}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5467613c-b976-4ed7-b3d0-a5eb0475085f"
        }}
        style={styles.ImageBackground_33_325}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82c4a9b9-6db1-40bb-833f-ff2801816ef2"
        }}
        style={styles.ImageBackground_33_326}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9d8aadf-27df-4529-b1d6-065e8865c1d8"
        }}
        style={styles.TouchableOpacity_35_4}
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
  ImageBackground_28_904: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("6%")
  },
  ImageBackground_28_905: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("-5%")
  },
  TouchableOpacity_28_906: {
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
  View_28_907: {
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
  ImageBackground_28_908: {
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
  View_28_912: {
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
  Text_28_912: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_913: {
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
  Text_28_913: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_914: {
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
  Text_28_914: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_915: {
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
  Text_28_915: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_916: {
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
  View_28_917: {
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
  Text_28_917: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_28_918: {
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
  View_28_919: {
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
  Text_28_919: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_920: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("31%")
  },
  View_28_921: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_28_922: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_923: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_924: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_28_925: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_926: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_28_927: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_928: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_929: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_28_930: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_931: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_28_932: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_933: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_934: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_935: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  View_28_989: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("36%")
  },
  View_28_990: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_28_991: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_992: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_993: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_28_994: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_995: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_28_996: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_997: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_998: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_28_999: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1000: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_28_1001: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_1002: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_1003: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_1004: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  TouchableOpacity_28_936: {
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
  View_28_937: {
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
  View_28_938: {
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
  ImageBackground_28_939: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  TouchableOpacity_28_941: {
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
  View_28_942: {
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
  View_28_943: {
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
  View_28_1058: {
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
  View_28_945: {
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
  Text_28_945: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_33_324: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("62%")
  },
  ImageBackground_33_325: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("61%")
  },
  ImageBackground_33_326: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("23%")
  },
  TouchableOpacity_35_4: {
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
