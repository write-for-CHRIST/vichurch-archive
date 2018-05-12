// Library import
import React, {Component} from 'react'
import {ImageBackground, StatusBar, View} from 'react-native'
import {Container, Spinner} from 'native-base'

// Internal import
import {launchBg, launchLogo} from '../../constants/assets'

import styles from './style'

class LoadingScreen extends Component {
  componentDidMount() {
    const {navigation} = this.props
    // setTimeout(() => {
    //   navigation.navigate('Home')
    // }, 3000)
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
