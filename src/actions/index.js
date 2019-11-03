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

export const getInfoName = (infoName) => ({
	type: 'GET_INFO_NAME',
	infoName
})

export const getParkId = (parkId) => ({
	type: 'GET_PARK_ID',
	parkId
})