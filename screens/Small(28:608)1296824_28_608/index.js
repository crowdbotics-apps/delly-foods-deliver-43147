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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb3a6af6-2fe0-4a43-ae39-57628553d2ee"
        }}
        style={styles.ImageBackground_28_609}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bbadbee-1f5f-4c67-85f0-b294734ffe55"
        }}
        style={styles.ImageBackground_28_610}
      />
      <View style={styles.View_28_611}>
        <TouchableOpacity
          style={styles.TouchableOpacity_28_612}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("18_876"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/063af328-15cd-4041-9bf6-22dba3c9ad65"
            }}
            style={styles.ImageBackground_28_613}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_28_617} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b68593eb-a8a9-4428-a3ea-909a486b36ec"
        }}
        style={styles.ImageBackground_28_618}
      />
      <View style={styles.View_28_619}>
        <Text style={styles.Text_28_619}>GHC 7.30</Text>
      </View>
      <View style={styles.View_28_620}>
        <Text style={styles.Text_28_620}>479 Calories</Text>
      </View>
      <View style={styles.View_28_621}>
        <Text style={styles.Text_28_621}>Calories</Text>
      </View>
      <View style={styles.View_28_622}>
        <Text style={styles.Text_28_622}>400 gr</Text>
      </View>
      <View style={styles.View_28_623}>
        <Text style={styles.Text_28_623}>Weight</Text>
      </View>
      <View style={styles.View_28_624}>
        <Text style={styles.Text_28_624}>Spudnut dounut</Text>
      </View>
      <View style={styles.View_28_625}>
        <Text style={styles.Text_28_625}>Choose size -Small</Text>
      </View>
      <View style={styles.View_28_626} />
      <View style={styles.View_28_640}>
        <Text style={styles.Text_28_640}>-</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_641}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_828"))
        }
      />
      <View style={styles.View_28_642}>
        <Text style={styles.Text_28_642}>Next</Text>
      </View>
      <View style={styles.View_28_744}>
        <View style={styles.View_28_745}>
          <View style={styles.View_28_746} />
        </View>
        <View style={styles.View_28_747}>
          <Text style={styles.Text_28_747}>S</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_757}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_147"))
        }
      >
        <View style={styles.View_28_748}>
          <View style={styles.View_28_749}>
            <View style={styles.View_28_750} />
          </View>
          <View style={styles.View_28_751}>
            <Text style={styles.Text_28_751}>M</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_752}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_659"))
        }
      >
        <View style={styles.View_28_753}>
          <View style={styles.View_28_754}>
            <View style={styles.View_28_755} />
          </View>
        </View>
        <View style={styles.View_28_756}>
          <Text style={styles.Text_28_756}>L</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_33_289}>
        <View style={styles.View_33_290}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57dfc139-59cf-49ac-a3a2-62e2a0229139"
            }}
            style={styles.ImageBackground_33_291}
          />
          <View style={styles.View_33_292}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2be2c565-5b38-45ac-a6f7-733ce274c9e4"
              }}
              style={styles.ImageBackground_33_293}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f1d46fc-2407-4956-9d83-0124970ba0c9"
              }}
              style={styles.ImageBackground_33_294}
            />
          </View>
        </View>
        <View style={styles.View_33_295}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53a1d601-c2be-4fc9-ab84-1dea8d31b712"
            }}
            style={styles.ImageBackground_33_296}
          />
          <View style={styles.View_33_297}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a95efdd-b9cb-4713-8c47-23f2e9003aa1"
              }}
              style={styles.ImageBackground_33_298}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bce18b1a-c03f-4df1-a23d-251df53bb3c6"
              }}
              style={styles.ImageBackground_33_299}
            />
          </View>
        </View>
        <View style={styles.View_33_300}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0aa84af4-85b8-4be4-80c1-4e57d82c64fc"
            }}
            style={styles.ImageBackground_33_301}
          />
          <View style={styles.View_33_302}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99394792-76b5-4492-b097-d358028881fa"
              }}
              style={styles.ImageBackground_33_303}
            />
            <View style={styles.View_33_304} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b10ad1ea-c0db-429b-ba27-ba0bb1b4e383"
        }}
        style={styles.TouchableOpacity_35_7}
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
  ImageBackground_28_609: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  ImageBackground_28_610: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("2%")
  },
  View_28_611: {
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
  TouchableOpacity_28_612: {
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
  ImageBackground_28_613: {
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
  View_28_617: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("89%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(77, 176, 102, 1)",
    borderWidth: 1
  },
  ImageBackground_28_618: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("51%")
  },
  View_28_619: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_28_619: {
    color: "rgba(82, 0, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_620: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_28_620: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_621: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_28_621: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_622: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_28_622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_623: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_28_623: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_624: {
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
  Text_28_624: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_625: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_28_625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_626: {
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
  View_28_640: {
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
  Text_28_640: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_28_641: {
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
  View_28_642: {
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
  Text_28_642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_744: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("81%")
  },
  View_28_745: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_746: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  View_28_747: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_28_747: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_28_757: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("82%")
  },
  View_28_748: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_749: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_750: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(88, 89, 89, 1)"
  },
  View_28_751: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_28_752: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("82%")
  },
  View_28_753: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_754: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_755: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(88, 89, 89, 1)"
  },
  View_28_756: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_756: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_289: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("37%")
  },
  View_33_290: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_33_291: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_33_292: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_33_293: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_33_294: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_295: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_33_296: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_33_297: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_33_298: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_33_299: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_300: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_33_301: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_33_302: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_33_303: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_33_304: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  TouchableOpacity_35_7: {
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
