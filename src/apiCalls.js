export const fetchParks = async (state) => {
	const response = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=jd03rGVMgfyl9RFBbSTUwXPh1IBNhbUf6Mt40p3E`);
	const data = await response.json();
	console.log(data)
	return data.data;
}