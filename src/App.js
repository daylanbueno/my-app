import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, Drawer, List, ListItem } from 'material-ui';

class App extends Component {

  constructor () {
    super();
    this.state = {
      drawerOpened: false
    }
  }

  openDrawer() {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    });
  }

  render() {
    return (
      <MuiThemeProvider> 
        <div>
          <AppBar title="My App" onLeftIconButtonClick={() => this.openDrawer()}/>
          <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={()=> this.openDrawer()}> 
            <List>
              <ListItem> Cadastro  Usuário </ListItem>
              <ListItem> Lista Usuários</ListItem>
              <ListItem> Sair</ListItem>
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;  

