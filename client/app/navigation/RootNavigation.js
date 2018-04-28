import {Notifications} from 'expo'
import React from 'react'
import {Root} from 'native-base'
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

const RootStackNavigator = StackNavigator(
  {
    Loading: {
      screen: LoadingScreen,
    },
    Drawer: {
      screen: Drawer,
    },
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
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
