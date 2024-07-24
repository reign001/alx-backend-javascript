function getResponseFromAPI() {
    return Promise.resolve("API response data");
    // or for a rejected promise:
    // return Promise.reject(new Error("API request failed"));
}

// Example usage:
getResponseFromAPI()
    .then(response => {
        console.log("API response:", response);
    })
    .catch(error => {
        console.error("API request failed:", error.message);
    });
