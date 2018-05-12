// Library import
import React, {Component} from 'react'
import {ImageBackground, StatusBar, View} from 'react-native'
import {Container, Spinner} from 'native-base'

// Internal import
import {launchBg, launchLogo} from '../../constants/assets'
import {checkLogin} from '../../api/auth'

import styles from './style'

class LoadingScreen extends Component {
  async componentDidMount() {
    const {navigation} = this.props
    const isLogged = await checkLogin()
    setTimeout(() => {
      if (isLogged) {
        navigation.navigate('Home')
      } else {
        navigation.navigate('Auth')
      }
    }, 3000)
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchLogo} style={styles.logo} />
          </View>
          <View>
            <Spinner color="white" />
          </View>
        </ImageBackground>
      </Container>
    )
  }
}

export default LoadingScreen
