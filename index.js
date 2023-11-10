const express = require('express'); // Include the express module
const app = express(); // Create an instance of express

// Define a route for GET requests on the root URL '/'
app.get('/', (req, res) => {
  // Respond with a JSON object when the root URL is accessed
  res.json({ message: 'Hello, World!' });
});


app.get('/api/testGetQuery', async function (req, res) {
    let query = req.query.q			//If the URL is /search?q=something, query will be 'something'

	var response = {
		message: 'Unsuccessful'
	}
	if(query){
		response.message = 'Successful: ' + query
	}
    res.send(response)
    
}); 

app.get('/api/testGetParams/:query', async function (req, res) {
    let query = req.params.query;

	var response = {
		message: 'Unsuccessful'
	}
	if(query){
		response.message = 'Successful: ' + query
	}
    res.send(response)
    
}); 


// Start the server on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port ' + process.env.PORT || 3000);
});