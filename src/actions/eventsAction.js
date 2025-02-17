"use strict"
import nconf from "../config";
import axios from 'axios';

const host = nconf("host");

export function getEvents(){
    return function(dispatch){
        axios.get(host + '/events')
            .then(function(response){
                dispatch({
                    type: "GET_EVENTS",
                    payload: response.data
                })
            })
            .catch(function(err){
                dispatch({
                    type: "GET_EVENT_REJECTED",
                    payload: err
                })
            })
    }
}

export function postEvents(event){
    return function(dispatch){
        axios.post( host + '/events', event)
            .then(function(response){
                dispatch({
                    type: "POST_EVENT",
                    payload: response.data
                })
            })
            .catch(function(err){
                dispatch({
                    type: "POST_EVENT_REJECTED",
                    payload: err
                })
            })
    }
}

export function deleteEvents(id){
    return function(dispatch){
        axios.delete(host + '/events/'+id)
            .then(function(response){
                dispatch({
                    type: "DELETE_BOOK",
                    payload: id
                })
            })
            .catch(function(err){
                dispatch({
                    type: "DELETE_BOOK_REJECTED",
                    payload: err
                })
            })
    }
}

export function updateEvents(event){
    console.log('====check what revieved by update====', event[0]._id);
    console.log('========', event[0]);
    return function(dispatch){
        axios.put(host + '/events/'+event[0]._id, event[0])
            .then(function(response){
                dispatch({
                    type: "UPDATE_EVENT",
                    payload: event
                })
            })
            .catch(function(err){
                dispatch({
                    type: "UPDATE_EVENT_REJECTED",
                    payload: err
                })
            })
    }
}