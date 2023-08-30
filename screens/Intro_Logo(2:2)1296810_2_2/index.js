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
      <View style={styles.View_49_509}>
        <View style={styles.View_49_510}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8e3e36c-5b35-4ca8-a880-1bf6eae7ff2e"
            }}
            style={styles.ImageBackground_49_511}
          />
          <View style={styles.View_49_512}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57f7b115-65a6-41ff-90d6-e106c5bc0f24"
              }}
              style={styles.ImageBackground_49_513}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a473971a-a127-47b7-aed2-5230ba2d0d02"
              }}
              style={styles.ImageBackground_49_514}
            />
          </View>
        </View>
        <View style={styles.View_49_515}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96ba89a9-0922-404c-9a86-14d78c4d2fb9"
            }}
            style={styles.ImageBackground_49_516}
          />
          <View style={styles.View_49_517}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58042e69-98de-4720-9d85-e64e72c71453"
              }}
              style={styles.ImageBackground_49_518}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70125b1e-5df6-4a82-a1fd-83cb3641ce53"
              }}
              style={styles.ImageBackground_49_519}
            />
          </View>
        </View>
        <View style={styles.View_49_520}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60ed04f4-a4e3-44e5-aabe-a8dd754ad098"
            }}
            style={styles.ImageBackground_49_521}
          />
          <View style={styles.View_49_522}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a6e7e7c-56a1-46d5-87aa-efcffa7baa4b"
              }}
              style={styles.ImageBackground_49_523}
            />
            <View style={styles.View_49_524} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e31c4493-8f74-4afd-9894-c02cc1018428"
        }}
        style={styles.ImageBackground_3_28}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/122192b0-a92c-4c55-b7c5-7204985ddc14"
        }}
        style={styles.ImageBackground_3_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76c436c4-cc02-468b-aa27-792c2da3e560"
        }}
        style={styles.ImageBackground_3_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7b2dabc-03d5-4c1f-a1bd-b7e8de2c8b21"
        }}
        style={styles.ImageBackground_3_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0becc682-3d92-4812-85ed-eed2218392ca"
        }}
        style={styles.ImageBackground_3_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1a4efb2-3f6c-4722-8e53-3b7facca851c"
        }}
        style={styles.ImageBackground_3_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f22ef7e1-fa7d-4035-ab4b-b91a38dbec84"
        }}
        style={styles.ImageBackground_3_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c50ff421-f551-4397-aea2-f1a4ba45ce3e"
        }}
        style={styles.ImageBackground_3_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1372a17d-cbac-4ac5-a7cc-7c436a111993"
        }}
        style={styles.ImageBackground_3_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49aac1e2-4ba2-4322-ba7a-051cbcf44971"
        }}
        style={styles.ImageBackground_3_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e9a0da8-3a24-4299-941c-bf228cefae0f"
        }}
        style={styles.ImageBackground_3_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2025396b-6ad0-428f-8879-e2c857a5a7ef"
        }}
        style={styles.ImageBackground_3_6}
      />
      <View style={styles.View_3_39}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49c8e8df-82e2-4d97-be6d-c19aa0e3b7d5"
          }}
          style={styles.ImageBackground_3_37}
        />
        <View style={styles.View_5_43}>
          <View style={styles.View_3_23}>
            <Text style={styles.Text_3_23}>Fast delivery</Text>
          </View>
          <View style={styles.View_3_24}>
            <Text style={styles.Text_3_24}>Taste that best, its on time.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(215, 229, 252, 1)" },
  View_2: { height: hp("122%") },
  View_49_509: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("48%")
  },
  View_49_510: {
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
  ImageBackground_49_511: {
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
  View_49_512: {
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
  ImageBackground_49_513: {
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
  ImageBackground_49_514: {
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
  View_49_515: {
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
  ImageBackground_49_516: {
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
  View_49_517: {
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
  ImageBackground_49_518: {
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
  ImageBackground_49_519: {
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
  View_49_520: {
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
  ImageBackground_49_521: {
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
  View_49_522: {
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
  ImageBackground_49_523: {
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
  View_49_524: {
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
  ImageBackground_3_28: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("46%")
  },
  ImageBackground_3_29: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("51%")
  },
  ImageBackground_3_30: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("46%")
  },
  ImageBackground_3_31: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("46%")
  },
  ImageBackground_3_38: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("48%")
  },
  ImageBackground_3_34: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("51%")
  },
  ImageBackground_3_10: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("47%"),
    resizeMode: "cover"
  },
  ImageBackground_3_9: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("49%"),
    resizeMode: "cover"
  },
  ImageBackground_3_8: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("46%"),
    resizeMode: "cover"
  },
  ImageBackground_3_7: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("49%"),
    resizeMode: "cover"
  },
  ImageBackground_3_4: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("46%"),
    resizeMode: "cover"
  },
  ImageBackground_3_6: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("49%"),
    resizeMode: "cover"
  },
  View_3_39: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("52%")
  },
  ImageBackground_3_37: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_5_43: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  View_3_23: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_24: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_3_24: {
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
