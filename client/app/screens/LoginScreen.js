import React, {Component} from 'react'
import {Container, Header, Left, Body, Text, Title, Icon, Button} from 'native-base'

export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>My Church</Title>
          </Body>
        </Header>
        <Text>Login</Text>
      </Container>
    )
  }
}
