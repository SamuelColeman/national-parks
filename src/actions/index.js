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


export const getVisitorCenters = (visitorCenters) => ({
	type: 'GET_VISITOR_CENTERS',
	visitorCenters
})