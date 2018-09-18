import {
  handleActions,
  createAction
} from 'redux-actions'

import axios from 'axios'
import {
  pender
} from 'redux-pender'

function getPostAPI (postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST'

export const getPost = createAction(GET_POST, getPostAPI)

const initialState = {
  data: {
    title: '',
    body: ''
  }
}

export default handleActions({
  ...pender({
    type: GET_POST,
    onSuccess: (state, action) => {
      const { title, body } = action.payload.data
      return {
        data: {
          title,
          body
        }
      }
    },
    onCancel: (state, action) => {
      return {
        data: {
          title: 'canceled',
          body: 'canceled'
        }
      }
    }

  })
}, initialState)
