export const fetchParks = async (state) => {
	const response = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=jd03rGVMgfyl9RFBbSTUwXPh1IBNhbUf6Mt40p3E`);
	const data = await response.json();
	return data.data;
}

export const fetchVisitorCenters = async (code) => {
	const response = await fetch(`https://developer.nps.gov/api/v1/visitorcenters?parkCode=${code}&api_key=jd03rGVMgfyl9RFBbSTUwXPh1IBNhbUf6Mt40p3E`);
	const data = await response.json();
	return data.data;
}