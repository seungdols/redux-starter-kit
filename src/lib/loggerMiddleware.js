const loggerMiddleware = store => next => action => {
  console.log('현재 상태', store.getState())

  console.log('action: ', action)

  const result = next(action)

  console.log('Next status: ', store.getState())
  console.log('\n')

  return result
}

export default loggerMiddleware;