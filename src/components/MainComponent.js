import React,{Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeComponent from './HomeComponent';
import GalleryComponent from './GalleryComponent';
import MessagesComponent from './MessagesComponent';

import {fetchMessages, postMessage, postLike, fetchSingle} from '../redux/ActionCreators'


import {Grid} from '@material-ui/core';



const mapStateToProps = state => {
    state.messages.messages && console.log(state.messages.messages);
    return {
      messages: state.messages,
      likes: state.likes,
      single: state.single

    }
}

const mapDispatchToProps = (dispatch) => ({
    postMessage: (name, message, anonymous,info) => dispatch(postMessage(name, message, anonymous,info)),
    fetchMessages: (page) => dispatch(fetchMessages(page)),
    fetchSingle: () => {dispatch(fetchSingle())},
    postLike: (messageId) => dispatch(postLike(messageId))
  });



class MainComponent extends Component {


    componentDidMount() {
        const page = "";
        this.props.fetchMessages(page);
        this.props.fetchSingle();

      }


    render(){
        return (
            <>
             <Header/>

             <Grid container direction="column" className="body">
             <Switch> 
             <Route path="/home" component={() => <HomeComponent postLike ={this.props.postLike}
             postMessage = {this.props.postMessage} single={this.props.single} fetchSingle = {this.props.fetchSingle} messages = {this.props.messages} fetchMessages = {this.props.fetchMessages}/>} />
              <Route exact path='/gallery' component={() => <GalleryComponent/>}  />
              <Route exact path='/messages' component={() => <MessagesComponent messages={this.props.messages} 
              fetchMessages = {this.props.fetchMessages} single={this.props.single} fetchSingle={this.props.fetchSingle}
              postLike = {this.props.postLike}/>} />} />
    
              <Redirect to="/home" />
            </Switch>

             </Grid>
             <Footer/>
            </>
        );
    }


}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));