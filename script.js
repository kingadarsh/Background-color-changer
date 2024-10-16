// // const buttons=document.getElementsByClassName(".button");

// // buttons.forEach(button => {
// //     button.addEventListener("click", (event) => {
// //         // 1. Change the background color based on the clicked button
// //         const color = button.id;  // assuming the button's ID matches the color name
// //         document.body.style.backgroundColor = color;

// //         // 2. Reset the colors of all buttons to their original state
// //         buttons.forEach(btn => {
// //             btn.style.backgroundColor = btn.id; // assuming ID is the color, you can adjust as needed
// //             btn.style.color = "azure";  // reset text color
// //         });

// //         // 3. Change the clicked button's color to highlight it
// //         button.style.backgroundColor = "grey";  // highlight the active button
// //         button.style.color = "white"; // change text color for visibility
// //     });
// // });

// // Get all the buttons
// const buttons = document.querySelectorAll(".button");

// // Add event listeners to each button
// buttons.forEach(button => {
//     button.addEventListener("click", (event) => {
//         // Get the color from the button's ID (assuming button IDs are color names)
//         const color = button.id;

//         // Change the background color of the page
//         document.body.style.backgroundColor = color;

//         // Reset all buttons to their original state
//         buttons.forEach(btn => {
//             btn.style.backgroundColor = btn.id;  
//             btn.classList.remove("active"); 
//         });

//         // Highlight the clicked button
//         button.style.backgroundColor = "grey";
//         button.classList.add("active");  
//     });
// });

// function resetbuttonstyle(){
//     const buttons=document.querySelectorAll(".button");

//     buttons.forEach(button=>{
//     button.addEventListener("click",(event)=>{
//         document.style.backgroundColor=button.id;
//         document.style.color="azure";

//     })
// })
// }

// function addbutton(){
//     document.getElementById("addbutton").addEventListener("click",(event)=>{
//         const value =document.getElementById("input").value;
//         // 
//         const container=document.getElementById("button-container");
//         // 
//         const button=document.createElement("button");
//         button.setAttribute("id",value);
//         button.classList.add("button");
//         container.appendChild(button);

//         button.addEventListener("click",()=>{
//             document.body.style.backgroundColor=value;
//         })

//         resetbuttonstyle();
//         button.style.backgroundColor = "grey";

//     })
// }


// const buttons=document.querySelectorAll(".button");
// buttons.forEach(button=>{
//     const color=button.id;
//     document.body.style.backgroundColor=color;

//     resetbuttonstyle();
//     button.style.backgroundColor="grey";
// }) 




// Function to reset button styles
function resetbuttonstyle() {
    const buttons = document.querySelectorAll(".button");

    // Loop through each button and reset its background color and text color
    buttons.forEach(button => {
        if (button.id === "white") {
            // Special case for white button
            button.style.backgroundColor = "white";
            button.style.color = "black"; // Text color to black
        } else {
            button.style.color = "azure"; // Reset text color to azure
            // Reset button color to its own ID (which corresponds to its color)
            button.style.backgroundColor = button.id; 
        }
    });
}

// Add event listener to the Add button
document.getElementById("addbutton").addEventListener("click", (event) => {
    const value = document.getElementById("input").value.trim().toLowerCase(); // Get value from input field and normalize to lowercase
    const label = document.querySelector('label[for="input"]'); // Select the label element

    // Validate if the value is not empty
    if (value === '') {
        alert('Please enter a valid color!'); // Alert user for invalid input
        return; // Stop the function if input is empty
    }

    const container = document.getElementById("button-container");

    // Create new button dynamically
    const button = document.createElement("button");
    button.setAttribute("id", value); // Set the button's ID to the color name
    button.classList.add("button"); // Add the "button" class
    button.textContent = value.charAt(0).toUpperCase() + value.slice(1); // Capitalize the button text

    // Set the button's background color to the specified color
    button.style.backgroundColor = value; // Set the button's background color to the input color
    container.appendChild(button); // Add the button to the container

    // Add click event to the new button
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = value; // Change background to button's color

        resetbuttonstyle(); // Reset all buttons
        button.style.backgroundColor = "grey"; // Highlight the clicked button
        button.style.color = "white"; // Change text color for visibility

        // Check if the background is black and change the label text color
        if (value === "black") {
            label.style.color = "white"; // Change label text color to white
        } else {
            label.style.color = "black"; // Change label text color back to black for other colors
        }
    });

    // Reset the input field after adding the button
    document.getElementById("input").value = '';
});

// Initial setup for existing buttons
const buttons = document.querySelectorAll(".button");

// Add click event to each existing button
buttons.forEach(button => {
    const label = document.querySelector('label[for="input"]'); // Select the label element

    button.addEventListener("click", () => {
        const color = button.id; // Get the color from the button's ID

        document.body.style.backgroundColor = color; // Change the background color

        resetbuttonstyle(); // Reset the styles of all buttons
        button.style.backgroundColor = "grey"; // Highlight the clicked button
        button.style.color = "white"; // Change the clicked button's text color

        // Special handling for the white button
        if (button.id === "white") {
            button.style.backgroundColor = "lightgray"; // Light gray instead of white when active
            button.style.color = "black"; // Ensure text is visible
        }

        // Check if the background is black and change the label text color
        if (color === "black") {
            label.style.color = "white"; // Change label text color to white
        } else {
            label.style.color = "black"; // Change label text color back to black for other colors
        }
    });
});
