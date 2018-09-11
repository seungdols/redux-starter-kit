import { handleActions, createAction } from 'redux-actions'

import axios from 'axios'

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/{postId}`)
}

const GET_POST_PENDING = 'GET_POST_PENDING'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_FAILURE = 'GET_POST_FAILURE'

const getPostPending = createAction(GET_POST_PENDING)
const getPostSuccess = createAction(GET_POST_SUCCESS)
const getPostFailure = createAction(GET_POST_FAILURE)