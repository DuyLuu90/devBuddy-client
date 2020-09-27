import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TokenService from '../src/services/TokenService'
import {GeneralApiServices} from '../src/services/api-service'
import './app-style.css';
//ROUTES:

//COMPONENTS:
import NotFoundPage from './component/notfoundpage/notfoundpage';
import NavBar from './component/app_nav/navBar';
import Footer from './component/app_footer/footer';
import LoginForm from './component/forms/loginform/loginform'
import RegForm from './component/forms/regForm/regForm'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
      hasAuthToken: TokenService.hasAuthToken(),
      userid: '',
      isAdmin: false,
      full_name:''
    }
  }
  componentDidMount(){
    const authToken= TokenService.getAuthToken()
    if (authToken) {
      this.handleLoginSuccess()
    }
  }

  handleLoginSuccess = ()=>{
    const authToken=TokenService.getAuthToken()
    const userid=TokenService.parseJwt(authToken).user_id
    GeneralApiServices.getItemById('users',userid)
      .then(user=>this.setState({
        hasAuthToken: TokenService.hasAuthToken(),
        isAdmin: user.isAdmin,
        userid: userid,
        full_name: user.full_name
      }))
  }

  handleLogoutSuccess = ()=>{
    TokenService.clearAuthToken()
    this.setState({
      hasAuthToken: TokenService.hasAuthToken(),
      isAdmin: false,
      userid:'',
      full_name: ''
    })
  }
  render() {
    const {hasError} = this.state
    return (
      <div className="App">
        <NavBar token = {this.state} onLogoutSuccess={this.handleLogoutSuccess}/>

        <main className="App_main">
          {hasError &&<div className='red'>An unknown error has occurred.</div>}
          <Switch>
            <Route path={'/register'}component={RegForm}/>
            <Route path={'/login'} component={(props) => 
              <LoginForm {...props} onLoginSuccess={this.handleLoginSuccess}/>}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </main>

        <Footer />
        
      </div>
    )
  }

}