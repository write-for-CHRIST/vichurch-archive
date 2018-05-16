import {Notifications} from 'expo'
import React from 'react'
import {Root} from 'native-base'
import {Animated, Easing} from 'react-native'
import {DrawerNavigator, StackNavigator} from 'react-navigation'

import SideBar from '../screens/sidebar'
import Home from '../screens/home'
import AuthScreen from '../screens/auth'
import LoadingScreen from '../screens/loading'
import MainTabNavigator from './MainTabNavigator'
import LoginScreen from '../screens/LoginScreen'
import registerForPushNotificationsAsync from '../api/notification'

const Drawer = DrawerNavigator(
  {
    Home: {screen: Home},
    Auth: {screen: AuthScreen},
    Loading: {screen: LoadingScreen},
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideBar {...props} />,
  },
)

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {position, layout, scene, index, scenes} = sceneProps
      const toIndex = index
      const thisSceneIndex = scene.index
      const height = layout.initHeight
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0],
      })

      // Since we want the card to take the same amount of time
      // to animate downwards no matter if it's 3rd on the stack
      // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0],
      })

      const slideFromRight = {transform: [{translateX}]}
      const slideFromBottom = {transform: [{translateY}]}

      const lastSceneIndex = scenes[scenes.length - 1].index

      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return {opacity: 0}
        // Slide top screen down
        return slideFromBottom
      }

      return slideFromRight
    },
  }
}

const RootStackNavigator = StackNavigator(
  {
    Auth: {screen: AuthScreen},
    Loading: {screen: LoadingScreen},
    Drawer: {screen: Drawer},
    Home: {screen: Home},
    Main: {screen: MainTabNavigator},
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    transitionConfig,
    // navigationOptions: () => ({
    //   headerTitleStyle: {
    //     fontWeight: 'normal',
    //   },
    // }),
  },
)

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications()
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove()
  }

  render() {
    return (
      <Root>
        <RootStackNavigator />
      </Root>
    )
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync()

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = ({origin, data}) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`)
  }
}
