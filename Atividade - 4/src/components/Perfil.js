import React, {Component} from 'react';
import { globalStyles } from '../views/Home'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";

export default class Perfil extends Component {

  render() {
    const { modalVisible, name, age, email } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.profileImg}
                source={{uri: 'https://thispersondoesnotexist.com/image'}}
              />
              <Text style={styles.modalText}>Nome: {name}</Text>
              <Text style={styles.modalText}>Idade: {age}</Text>
              <Text style={styles.modalText}>Email: {email}</Text>

              <TouchableHighlight
                style={{ ...globalStyles.openButton, backgroundColor: "#2196F3" }}
                onPress={this.props.closeModal}
              >
                <Text style={globalStyles.textStyle}>Ok</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  profileImg: {
    width: 100,
    height: 100
  }
});
