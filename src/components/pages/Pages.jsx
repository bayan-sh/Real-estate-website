import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

import AddProperity from "../AddProperity";
import PropertyDetails  from "../properityDetails"
import signup from "../signup"
import signin from "../signin"
import profile from"../profile/profile"
import creatAnAccount  from "../creatAnAccount/creatAnAccount"
import Login from"../Login/Login"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signup' component={signup} />
          <Route exact path='/signin' component={signin} />
          <Route exact path='/profile' component={profile} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/creatAnAccount' component={creatAnAccount} />
          <Route exact path='/AddProperity' component={AddProperity} />
          <Route  exact path='/Property/:id' component={PropertyDetails}/>
          
         
          

        </Switch>
     {/* <Footer />*/}
      </Router>
    </>
  )
}

export default Pages
