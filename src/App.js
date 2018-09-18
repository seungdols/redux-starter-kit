import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as counterActions from './modules/counter'
import axios from 'axios'
import * as postActions from './modules/post'

class App extends Component {
	cancelRequest = null

	handleCancel = () => {
		if (this.cancelRequest) {
			this.cancelRequest()
			this.cancelRequest = null
		}
	}

	loadData = async () => {
		const { PostActions, number } = this.props
		try {
			const postRes = PostActions.getPost(number)
			this.cancelRequest = postRes.cancelRequest
			const response = await postRes

			console.log(response)
		} catch (e) {
			console.log(e)
		}
	}

	componentDidMount() {
		this.loadData()
		window.addEventListener('keyup', (e) => {
			if (e.key === 'Escape') {
				this.handleCancel()
			}
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.number !== prevProps.number) {
			this.loadData()
		}
	}

	render() {
		const { CounterActions, number, post, error, loading } = this.props

		return (
			<div>
				<h1> {number} </h1>{' '}
				{loading ? (
					<h2> loading... </h2>
				) : error ? (
					<h2> Error!!!! </h2>
				) : (
					<div>
						<h2> {post.title} </h2> <p> {post.body} </p>{' '}
					</div>
				)}{' '}
				<button onClick={CounterActions.incrementAsync}> + </button>{' '}
				<button onClick={CounterActions.decrementAsync}> - </button>{' '}
			</div>
		)
	}
}

export default connect(
	(state) => ({
		number: state.counter,
		post: state.post.data,
		loading: state.pender.pending['GET_POST'],
		error: state.pender.failure['GET_POST']
	}),
	(dispatch) => ({
		CounterActions: bindActionCreators(counterActions, dispatch),
		PostActions: bindActionCreators(postActions, dispatch)
	})
)(App)
