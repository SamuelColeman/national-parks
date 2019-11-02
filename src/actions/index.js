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


export const getVisitorCenters = (parkInfo) => ({
	type: 'GET_VISITOR_CENTERS',
	parkInfo
})

export const getEvents = (parkInfo) => ({
	type: 'GET_EVENTS',
	parkInfo
})