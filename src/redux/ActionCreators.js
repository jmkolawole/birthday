import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';




export const fetchMessages = (page) => (dispatch) => {
    
    dispatch(messagesLoading());
    let url; 
    if(page == ""){
     url = 'https://tomilola.herokuapp.com/api/messages';
    }else{
     url = 'https://tomilola.herokuapp.com/api/messages?page='+page;
    }
    
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(messages => dispatch(addMessages(messages)))
    .catch(error => dispatch(messagesFailed(error.message)));
}

export const messagesLoading = () => ({
    type: ActionTypes.MESSAGES_LOADING
});

export const messagesFailed = (errmess) => ({
    type: ActionTypes.MESSAGES_FAILED,
    payload: errmess
});

export const addMessages = (messages) => ({
    type: ActionTypes.ADD_MESSAGES,
    payload: messages
});


//For posting message
export const addMessage = (message) => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
});


export const postMessage = (name, message, anonymous,info) => (dispatch) => {

    const newMessage = {
        name: name,
        message: message,
        anonymous: anonymous,
        info: info
    }
    //console.log('Message is this', newMessage);
  

    return fetch(baseUrl + 'messages', {
        method: 'POST',
        body: JSON.stringify(newMessage),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
   .then(response => dispatch(addMessage(response)))
    .catch(error => { console.log('Post messages ', error.message);
        alert('Your message could not be posted\nError: '+ error.message); })
    alert('message posted');
    
}



export const postLike = (messageId) => (dispatch) => {

    return fetch(baseUrl + 'messages/' + messageId + '/likes', {
        method: "POST",
        body: JSON.stringify({"id": messageId}),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(likes => { console.log('Like Added', likes); dispatch(addLikes(likes)); })
    .catch(error => dispatch(likesFailed(error.message)));
}

export const likesFailed = (errmess) => ({
    type: ActionTypes.LIKES_FAILED,
    payload: errmess
});

export const addLikes = (likes) => ({
    type: ActionTypes.ADD_LIKES,
    payload: likes
});
