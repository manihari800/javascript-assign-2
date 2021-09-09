// api url
const api_url =
	"https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	
}
// Calling that async function
getapi(api_url);
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Movie</th>
		<th>cast</th>
		<th>genres</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.title} </td>
	<td>${r.movie}</td>
	<td>${r.cast}</td>
	<td>${r.genres}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("feteching").innerHTML = tab;
}

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}


