async function city()
{
    let city =document.getElementById(`searchQuery`).value
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e9d6441734mshecf8fe5152c181bp1fe0f2jsn59500b905dd8',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}   
}