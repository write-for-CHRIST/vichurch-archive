const React = require('react-native')

const {Dimensions, Platform} = React
const deviceHeight = Dimensions.get('window').height

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 0,
  },
  logo: {
    position: 'absolute',
    left: Platform.OS === 'android' ? 40 : 50,
    top: Platform.OS === 'android' ? 35 : 60,
    width: 280,
    height: 120,
  },
  text: {
    alignItems: 'center',
    color: 'white',
    bottom: 6,
    marginTop: 5,
  },
  formWrapper: {
    backgroundColor: 'rgba(60,67,123,0.7)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 160
  },
  formContainer: {
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formItem: {
    marginBottom: 10,
  },
  input: {
    color: '#fff'
  },
  button: {
    minWidth: 200,
    alignSelf: 'center',
    justifyContent: 'center'
  }
}

