export const hasError = (errorMsg) => ({
  type: 'HAS_ERROR',
  errorMsg
})

export const getParks = (parks) => ({
	type: 'GET_PARKS',
	parks
})

export const selectState = (selectedState) => ({
	type: 'SELECT_STATE',
	selectedState
})

export const getInfo = (parkInfo) => ({
	type: 'GET_INFO',
	parkInfo
})