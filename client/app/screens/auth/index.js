import React, {Component} from 'react'
import {ImageBackground, View, StatusBar, KeyboardAvoidingView} from 'react-native'
import {Container, Content, Form, Item, Input, Button, Text} from 'native-base'

import {launchBg, launchLogo} from '../../constants/assets'

import {login} from '../../api/auth'

import styles from './style'

const launchscreenBg = launchBg
const launchscreenLogo = launchLogo

class AuthScreen extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    login({email: 'developer@example.com', password: 'nooneknows'})
      .then(data => console.log(data))
      .catch(err => console.error(err))
    console.log('Submitted!')
  }

  render() {
    const {username, password} = this.state
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <Content scrollEnabled={false} padder contentContainerStyle={styles.formWrapper}>
              <Form style={styles.formContainer}>
                <Item rounded style={styles.formItem}>
                  <Input
                    placeholderTextColor="#ccc"
                    placeholder="Tên Đăng Nhập"
                    style={styles.input}
                  />
                </Item>
                <Item rounded last style={styles.formItem}>
                  <Input
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    placeholder="Mật Khẩu"
                    style={styles.input}
                  />
                </Item>
                <Button primary rounded style={styles.button} onPress={this.handleSubmit}>
                  <Text>Đăng Nhập</Text>
                </Button>
              </Form>
            </Content>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Container>
    )
  }
}

export default AuthScreen
