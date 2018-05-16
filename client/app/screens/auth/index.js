import React, {Component} from 'react'
import {ImageBackground, View, StatusBar, KeyboardAvoidingView} from 'react-native'
import {Container, Content, Form, Item, Input, Button, Text, Spinner} from 'native-base'

import {launchBg, launchLogo} from '../../constants/assets'

import {authenticate} from '../../api/auth'

import styles from './style'

const launchscreenBg = launchBg
const launchscreenLogo = launchLogo

class AuthScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLogging: false,
      email: 'developer@example.com',
      password: 'nooneknows',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  async handleSubmit() {
    const {navigation} = this.props
    const {email, password} = this.state
    this.setState({isLogging: true})
    const success = await authenticate({email, password})
    if (success) {
      this.setState({isLogging: false})
      const screenNumber = navigation.state.params ? navigation.state.params.screenNumber : 0
      console.log(screenNumber)
      const params = {screenNumber: screenNumber + 1}
      if( Math.random() > .75) params.plain = true
      navigation.navigate('Home', params)
    }
  }

  handleEmailChange(value) {
    this.setState({email: value})
  }

  handlePasswordChange(value) {
    this.setState({password: value})
  }

  render() {
    const {email, password, isLogging} = this.state
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
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                    onChangeText={this.handleEmailChange}
                  />
                </Item>
                <Item rounded last style={styles.formItem}>
                  <Input
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    placeholder="Mật Khẩu"
                    style={styles.input}
                    value={password}
                    onChangeText={this.handlePasswordChange}
                  />
                </Item>
                {isLogging ? (
                  <Spinner color="white" />
                ) : (
                  <Button primary rounded style={styles.button} onPress={this.handleSubmit}>
                    <Text>Đăng Nhập</Text>
                  </Button>
                )}
              </Form>
            </Content>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Container>
    )
  }
}

export default AuthScreen
