// Exploring Space APIs
// In this assignment, you'll use four different APIs to practice fetching data
// and logging specific pieces of information to the console.

// -----------------------------------------------------
// TASK 1: People in Space API
// API: People in Space (Open Notify)

let requestUrl = "http://api.open-notify.org/astros.json"

// 1. Create a function called fetchPeopleInSpace.

async function fetchPeopleInSpace(url){
     const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data
}


fetchPeopleInSpace(requestUrl)

// 2. Look up the documentation for the "People in Space" API.
// 3. Write a fetch request to get a list of people currently in space.
// 4. Convert the response to JSON.
// 5. Log the full data to the console.
// 6. Then, log only the name of the 8th person listed in space.
// -----------------------------------------------------
// CALL IT




// -----------------------------------------------------
// TASK 2: NASA Astronomy Picture of the Day (APOD)
// API: NASA APOD

let requestUrl2 = ""
//
// 1. Create a function called fetchAPOD.
// 2. Read the documentation for the APOD API on api.nasa.gov.
// 3. Your query should include:
//    - your API key
//    - today's date (you can omit the date to get the latest photo)
// 4. Fetch the data and convert it to JSON.
// 5. Log only the image URL or video URL for today's Astronomy Picture of the Day.
// -----------------------------------------------------
// CALL IT





// -----------------------------------------------------
// TASK 3: NASA Mars Rover Photos
// API: NASA Mars Rover Photos
//
// 1. Create a function called fetchMarsPhotos.
// 2. Read the documentation for the Mars Rover Photos API on api.nasa.gov.
// 3. Your query should include:
//    - the name of the rover (for example, Curiosity)
//    - a specific Earth date
//    - your API key
// 4. Fetch the data and convert it to JSON.
// 5. Log the total number of photos returned.
// 6. Then, log the camera name and image URL of the first photo in the list.
// -----------------------------------------------------
// CALL IT





// -----------------------------------------------------
// TASK 4: NASA Image and Video Library
// API: NASA Image and Video Library
//
// 1. Create a function called fetchNasaImage.
// 2. Read the documentation for the NASA Image and Video Library API.
// 3. Your query should include:
//    - a search keyword (for example, “Orion Nebula” or “Jupiter”)
//    - media type set to “image”
// 4. Fetch the data and convert it to JSON.
// 5. Log the total number of results found.
// 6. Then, log the title and image URL of the first result.
// -----------------------------------------------------
// CALL IT





