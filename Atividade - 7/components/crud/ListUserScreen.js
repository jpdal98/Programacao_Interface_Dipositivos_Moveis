import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import ConfirmationModal from '../ConfirmationModal'

import firestore from '@react-native-firebase/firestore'

import Card from '../card/Card'
import CardItem from '../card/CardItem'
import MyButton from '../MyButton'

export default class ListUserScrenn extends Component {

    constructor(props) {
        super(props)
        this.state = { users: [], modalVisible: false, lastDeletedId: '' }
    }

    componentDidMount() {
        this.listUsers()
    }

    deleteUser = (id) => {
      firestore()
        .collection('users')
        .doc(id)
        .delete()
        .then(() => {
          console.log('User deleted!');
        });
      this.listUsers();
    };

    listUsers() {
        firestore()
            .collection('users')
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);
                let users = []
                querySnapshot.forEach(
                    documentSnapshot => {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        users.push({data: documentSnapshot.data(), id: documentSnapshot.id})
                    }
                );
                console.log('users list was fetched');
                this.setState({ users })
            });
    }

    renderUsers() {
        return (
            <FlatList
                data={this.state.users}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                                <View style={{ flex: 1.5 }}>
                                    <Text style={{ fontSize: 18 }}>{item.data.name}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <MyButton
                                        title='Edit'
                                        onPress={
                                            () => this.props.navigation.navigate('EditUserScreen', { 
                                              name: item.data.name, id: item.id,
                                              goBackAndUpdateList: () => this.listUsers()
                                             })
                                        }
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <MyButton title='Delete' onPress={() => this.setState({lastDeletedId: item.id, modalVisible: true})}/>
                                </View>
                            </View>
                        )
                    }
                }
                keyExtractor={(item, index) => item + index}
            />
        )
    }

    render() {
        return (
          <View>
            <Card>
                <CardItem>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>List Users</Text>
                </CardItem>
                <CardItem>
                    {this.renderUsers()}
                </CardItem>
                <CardItem>
                    <MyButton
                        title='Add User'
                        onPress={
                            () => this.props.navigation.navigate('AddUserScreen', {goBackAndUpdateList: () => this.listUsers()})
                        }
                    />
                </CardItem>

            </Card>
            <ConfirmationModal 
              modalVisible={this.state.modalVisible}
              message='Você tem certeza que quer excluir esse usuário?'
              deleteUser={
                () => {
                  this.deleteUser(this.state.lastDeletedId)
                  this.setState({modalVisible: false})
                }
              }
              closeModal={
                () => {
                  this.setState({modalVisible: false, lastDeletedId: ''})
                }
              }
            />
          </View>
        )
    }
}

