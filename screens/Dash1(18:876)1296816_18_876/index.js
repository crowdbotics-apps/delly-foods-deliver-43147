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
      <View style={styles.View_18_877} />
      <View style={styles.View_18_878}>
        <Text style={styles.Text_18_878}>Good morning, Felix</Text>
      </View>
      <View style={styles.View_18_879}>
        <Text style={styles.Text_18_879}>Donuts</Text>
      </View>
      <View style={styles.View_18_880}>
        <Text style={styles.Text_18_880}>What you wanna order today ?..</Text>
      </View>
      <View style={styles.View_18_881} />
      <View style={styles.View_18_882}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a162147-d696-40b1-95d1-1f53383ecb48"
          }}
          style={styles.ImageBackground_18_883}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc0fa47c-7392-445d-8a3f-f887a3aef14c"
        }}
        style={styles.ImageBackground_18_1042}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89622bd7-fb20-4905-adca-3215a77bb228"
        }}
        style={styles.ImageBackground_18_1043}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_18_1045}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("18_667"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a026c114-e8ca-495e-bdc7-57cfad85f37e"
          }}
          style={styles.ImageBackground_18_1046}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eadc4487-7367-4562-be9a-fa41c3696fa0"
        }}
        style={styles.ImageBackground_18_1050}
      />
      <View style={styles.View_18_921} />
      <View style={styles.View_18_1060}>
        <Text style={styles.Text_18_1060}>Coconut</Text>
      </View>
      <View style={styles.View_18_1061} />
      <View style={styles.View_21_178}>
        <View style={styles.View_21_179}>
          <Text style={styles.Text_21_179}>4.5</Text>
        </View>
        <View style={styles.View_21_183}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18379d87-febd-4f06-8755-197c5cb9c5ed"
            }}
            style={styles.ImageBackground_21_184}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_271}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_147"))
        }
      >
        <View style={styles.View_18_917} />
        <View style={styles.View_18_918} />
        <View style={styles.View_18_919}>
          <Text style={styles.Text_18_919}>
            Want a delicious meal, but no time we will deliver it hot and yummy.
          </Text>
        </View>
        <View style={styles.View_21_195}>
          <Text style={styles.Text_21_195}>GHC7.50</Text>
        </View>
        <View style={styles.View_18_1266} />
        <View style={styles.View_18_1267} />
        <View style={styles.View_18_1268}>
          <Text style={styles.Text_18_1268}>
            Want a delicious meal, but no time we will deliver it hot and yummy.
          </Text>
        </View>
        <View style={styles.View_18_1269} />
        <View style={styles.View_18_1287}>
          <Text style={styles.Text_18_1287}>Ube</Text>
        </View>
        <View style={styles.View_18_1288} />
        <View style={styles.View_18_1305} />
        <View style={styles.View_18_1306} />
        <View style={styles.View_18_1307}>
          <Text style={styles.Text_18_1307}>
            Want a delicious meal, but no time we will deliver it hot and yummy.
          </Text>
        </View>
        <View style={styles.View_18_1309}>
          <Text style={styles.Text_18_1309}>
            Want a delicious meal, but no time we will deliver it hot and yummy.
          </Text>
        </View>
        <View style={styles.View_18_1310}>
          <Text style={styles.Text_18_1310}>Vanilla</Text>
        </View>
        <View style={styles.View_18_1311} />
        <View style={styles.View_21_212}>
          <Text style={styles.Text_21_212}>GHC3.50</Text>
        </View>
        <View style={styles.View_25_644}>
          <View style={styles.View_25_645}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ae7492f-3581-4c4b-ba8c-57ac5b207fe2"
              }}
              style={styles.ImageBackground_25_646}
            />
            <View style={styles.View_25_647}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e6b7662-bacf-43b0-ae0b-cd68dbe1d1b5"
                }}
                style={styles.ImageBackground_25_648}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66f59bc6-9d4d-41c9-93e3-189a652e5087"
                }}
                style={styles.ImageBackground_25_649}
              />
            </View>
          </View>
          <View style={styles.View_25_650}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d1e5b38-8383-4b78-9e13-3410689f9c99"
              }}
              style={styles.ImageBackground_25_651}
            />
            <View style={styles.View_25_652}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5af0cc0e-cb78-4267-9207-942a012b21cc"
                }}
                style={styles.ImageBackground_25_653}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f0014e7-1057-4614-ba37-712009f24fad"
                }}
                style={styles.ImageBackground_25_654}
              />
            </View>
          </View>
          <View style={styles.View_25_655}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9404e048-871f-475c-8535-bce35247a960"
              }}
              style={styles.ImageBackground_25_656}
            />
            <View style={styles.View_25_657}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19f56882-7fab-47a3-99cb-18de1ea381a7"
                }}
                style={styles.ImageBackground_25_658}
              />
              <View style={styles.View_25_659} />
            </View>
          </View>
        </View>
        <View style={styles.View_25_660}>
          <View style={styles.View_25_661}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f0bbd3f-bf3f-4a50-85d4-4fb69b1e11f1"
              }}
              style={styles.ImageBackground_25_662}
            />
            <View style={styles.View_25_663}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb7c8aa9-940d-490d-8d91-107a77a01354"
                }}
                style={styles.ImageBackground_25_664}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a1bb46c-d7d6-4bd1-92ec-eb5262f9aecc"
                }}
                style={styles.ImageBackground_25_665}
              />
            </View>
          </View>
          <View style={styles.View_25_666}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d1e82c9-e58a-4625-9875-76cda2ddaf90"
              }}
              style={styles.ImageBackground_25_667}
            />
            <View style={styles.View_25_668}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c79d5db3-faa9-4e5f-9c51-5d0e69183fd4"
                }}
                style={styles.ImageBackground_25_669}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/658ca0f5-2ed3-4067-b7c5-ccc5a35436d7"
                }}
                style={styles.ImageBackground_25_670}
              />
            </View>
          </View>
          <View style={styles.View_25_671}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40f871ba-fadb-499e-aee3-1f3533c20630"
              }}
              style={styles.ImageBackground_25_672}
            />
            <View style={styles.View_25_673}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/154a02a2-0f24-4cf0-b2de-43baf67581c6"
                }}
                style={styles.ImageBackground_25_674}
              />
              <View style={styles.View_25_675} />
            </View>
          </View>
        </View>
        <View style={styles.View_25_676}>
          <View style={styles.View_25_677}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/529fe77b-d989-499d-ae5f-3c95cd716778"
              }}
              style={styles.ImageBackground_25_678}
            />
            <View style={styles.View_25_679}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77ff8764-1c82-4cc6-b1bb-0a3122677619"
                }}
                style={styles.ImageBackground_25_680}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d27be05-a98c-4ae1-b6dd-7b8f8646e5f8"
                }}
                style={styles.ImageBackground_25_681}
              />
            </View>
          </View>
          <View style={styles.View_25_682}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bd958f6-f4b6-4d38-a1b8-39ccda158779"
              }}
              style={styles.ImageBackground_25_683}
            />
            <View style={styles.View_25_684}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c0c8d8e-3499-439b-b788-132d9c5c2bf6"
                }}
                style={styles.ImageBackground_25_685}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e75740c1-a033-457e-acb8-e7c57b78a3ba"
                }}
                style={styles.ImageBackground_25_686}
              />
            </View>
          </View>
          <View style={styles.View_25_687}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a673fe0-107a-4d90-b005-4ab468a413d9"
              }}
              style={styles.ImageBackground_25_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f84c7eb7-e38d-49e8-a3b0-7df846940cd8"
              }}
              style={styles.ImageBackground_25_689}
            />
          </View>
        </View>
        <View style={styles.View_28_270}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97bc3b35-bb41-4d0a-a6ec-5a0866cc1ada"
            }}
            style={styles.ImageBackground_18_1044}
          />
          <View style={styles.View_18_1211} />
          <View style={styles.View_18_1212} />
          <View style={styles.View_21_211}>
            <Text style={styles.Text_21_211}>GHC17.30</Text>
          </View>
          <View style={styles.View_18_1231}>
            <Text style={styles.Text_18_1231}>
              Want a delicious meal, but no time we will deliver it hot and
              yummy.
            </Text>
          </View>
          <View style={styles.View_18_1232}>
            <Text style={styles.Text_18_1232}>Spudnut</Text>
          </View>
          <View style={styles.View_18_1233} />
          <View style={styles.View_25_708}>
            <View style={styles.View_21_204} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8075ffb-01c0-49d2-980f-ca598c99d22b"
              }}
              style={styles.ImageBackground_21_209}
            />
          </View>
        </View>
        <View style={styles.View_25_712}>
          <View style={styles.View_25_713} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cfa84aa-3dab-471e-8af6-caac5b2852e0"
            }}
            style={styles.ImageBackground_25_714}
          />
        </View>
        <View style={styles.View_25_709}>
          <View style={styles.View_25_710} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38920fb8-2e8d-4d83-84fc-302875011ff3"
            }}
            style={styles.ImageBackground_25_711}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_47_2}>
        <View style={styles.View_47_3}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3e9326c-51e7-4fa7-ad81-be759524861b"
            }}
            style={styles.ImageBackground_47_4}
          />
          <View style={styles.View_47_5}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0caa708c-f5f4-49d9-8d94-2736356c5ce6"
              }}
              style={styles.ImageBackground_47_6}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b036c365-3db2-4567-ad75-044eb619815a"
              }}
              style={styles.ImageBackground_47_7}
            />
          </View>
        </View>
        <View style={styles.View_47_8}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/006cd31e-b38f-4192-9c13-c64317da3908"
            }}
            style={styles.ImageBackground_47_9}
          />
          <View style={styles.View_47_10}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b5b914-0271-4ee8-a2d8-fdf46636246a"
              }}
              style={styles.ImageBackground_47_11}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf532fef-5484-4916-8b15-79fda9d90cc2"
              }}
              style={styles.ImageBackground_47_12}
            />
          </View>
        </View>
        <View style={styles.View_47_13}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3ca29c2-21a2-417c-87d2-26da2064d445"
            }}
            style={styles.ImageBackground_47_14}
          />
          <View style={styles.View_47_15}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/162b8967-38ca-4c19-9f8d-2c64f1f27f1e"
              }}
              style={styles.ImageBackground_47_16}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ea1d2d3-f8f8-4539-8e69-de2896291a50"
              }}
              style={styles.ImageBackground_47_17}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_47_249}>
        <View style={styles.View_47_250}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/570f386b-64d4-4521-985f-ca3aa455b06d"
            }}
            style={styles.ImageBackground_47_251}
          />
          <View style={styles.View_47_252}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7701a593-06c2-4614-96ad-517ced0ae075"
              }}
              style={styles.ImageBackground_47_253}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3570ed6f-e017-4d4b-b8d0-ce4c8fcb11c0"
              }}
              style={styles.ImageBackground_47_254}
            />
          </View>
        </View>
        <View style={styles.View_47_255}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85c9d45d-d97d-429e-b6f7-39d4f8a54a87"
            }}
            style={styles.ImageBackground_47_256}
          />
          <View style={styles.View_47_257}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2dee5be-d3c6-462b-9588-413a6e487ffa"
              }}
              style={styles.ImageBackground_47_258}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4de1b0fa-5fdb-4ecf-b52c-ca6b4a593b96"
              }}
              style={styles.ImageBackground_47_259}
            />
          </View>
        </View>
        <View style={styles.View_47_260}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f65855e9-1697-4ce9-b8da-eccc5e9fa112"
            }}
            style={styles.ImageBackground_47_261}
          />
          <View style={styles.View_47_262}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8f3d60c-84ef-4637-b929-7fcf7c9382e4"
              }}
              style={styles.ImageBackground_47_263}
            />
            <View style={styles.View_47_264} />
          </View>
        </View>
      </View>
      <View style={styles.View_548_324}>
        <View style={styles.View_548_325} />
        <View style={styles.View_548_326}>
          <Text style={styles.Text_548_326}>HOME</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_548_327} />
        <View style={styles.View_548_328}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/929bbf15-d01d-45f8-9d46-c23ecc8f0ac3"
            }}
            style={styles.ImageBackground_548_329}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e977d0b0-fc89-456d-892a-de2d7c8babe0"
            }}
            style={styles.ImageBackground_548_330}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2778611c-fe10-4b88-9e0f-2f7bb177e143"
            }}
            style={styles.ImageBackground_548_333}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7286c5d1-b6db-46c1-9e17-a133b8a34232"
            }}
            style={styles.TouchableOpacity_548_334}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("548_339"))
            }
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(246, 246, 255, 1)" },
  View_2: { height: hp("122%") },
  View_18_877: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_878: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_18_878: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_879: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_18_879: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_880: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_18_880: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_881: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_882: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_18_883: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_1042: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%"),
    top: hp("15%")
  },
  ImageBackground_18_1043: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("22%")
  },
  TouchableOpacity_18_1045: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("9%")
  },
  ImageBackground_18_1046: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_18_1050: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("27%")
  },
  View_18_921: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("45%"),
    backgroundColor: "rgba(250, 187, 45, 1)"
  },
  View_18_1060: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_18_1060: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1061: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("45%"),
    backgroundColor: "rgba(250, 187, 45, 1)"
  },
  View_21_178: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("42%")
  },
  View_21_179: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_21_179: {
    color: "rgba(251, 201, 87, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_183: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_21_184: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_33_271: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%")
  },
  View_18_917: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_918: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(250, 187, 45, 1)",
    borderWidth: 1
  },
  View_18_919: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_18_919: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_195: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_21_195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1266: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_1267: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(232, 69, 60, 1)",
    borderWidth: 1
  },
  View_18_1268: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_18_1268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1269: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("59%"),
    backgroundColor: "rgba(250, 187, 45, 1)"
  },
  View_18_1287: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_18_1287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1288: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("59%"),
    backgroundColor: "rgba(234, 87, 79, 1)"
  },
  View_18_1305: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_1306: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(250, 187, 45, 1)",
    borderWidth: 1
  },
  View_18_1307: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_18_1307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1309: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_18_1309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1310: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_18_1310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1311: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("85%"),
    backgroundColor: "rgba(250, 187, 45, 1)"
  },
  View_21_212: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_21_212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_644: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("49%")
  },
  View_25_645: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_646: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_647: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_648: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_25_649: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_650: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_651: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_652: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_653: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_25_654: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_655: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_656: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_657: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_658: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_659: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  View_25_660: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("72%")
  },
  View_25_661: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_662: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_663: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_664: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_25_665: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_666: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_667: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_668: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_669: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_25_670: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_671: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_672: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_673: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_674: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_675: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  View_25_676: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%")
  },
  View_25_677: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_678: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_679: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_680: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_25_681: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_682: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_683: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_25_684: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_685: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_25_686: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_25_687: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_688: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_25_689: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_270: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  ImageBackground_18_1044: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_18_1211: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_18_1212: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(77, 176, 102, 1)",
    borderWidth: 1
  },
  View_21_211: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_21_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1231: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_18_1231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1232: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_18_1232: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1233: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("8%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  View_25_708: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("16%")
  },
  View_21_204: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  ImageBackground_21_209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_25_712: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("18%")
  },
  View_25_713: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  ImageBackground_25_714: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_25_709: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("68%")
  },
  View_25_710: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 176, 102, 1)"
  },
  ImageBackground_25_711: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_47_2: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("61%")
  },
  View_47_3: {
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
  ImageBackground_47_4: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_47_5: {
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
  ImageBackground_47_6: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_47_7: {
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
  View_47_8: {
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
  ImageBackground_47_9: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_47_10: {
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
  ImageBackground_47_11: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_47_12: {
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
  View_47_13: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_47_14: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_47_15: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_16: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_47_17: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_249: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("104%")
  },
  View_47_250: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_251: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_47_252: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_253: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_47_254: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_255: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_256: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_47_257: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_258: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_47_259: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_260: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_261: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_47_262: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_263: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_47_264: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 87, 255, 1)"
  },
  View_548_324: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("112%")
  },
  View_548_325: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_548_326: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_548_326: {
    color: "rgba(121, 134, 253, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_548_327: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%")
  },
  View_548_328: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%")
  },
  ImageBackground_548_329: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_548_330: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_548_333: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  TouchableOpacity_548_334: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
