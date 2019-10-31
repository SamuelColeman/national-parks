export const getParks = async () => {
	const response = await fetch('https://developer.nps.gov/api/v1/parks?api_key=jd03rGVMgfyl9RFBbSTUwXPh1IBNhbUf6Mt40p3E');
	const data = await response.json();
	console.log(data)
	return data;
}