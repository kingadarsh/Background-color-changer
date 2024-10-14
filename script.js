// const buttons=document.getElementsByClassName(".button");

// buttons.forEach(button => {
//     button.addEventListener("click", (event) => {
//         // 1. Change the background color based on the clicked button
//         const color = button.id;  // assuming the button's ID matches the color name
//         document.body.style.backgroundColor = color;

//         // 2. Reset the colors of all buttons to their original state
//         buttons.forEach(btn => {
//             btn.style.backgroundColor = btn.id; // assuming ID is the color, you can adjust as needed
//             btn.style.color = "azure";  // reset text color
//         });

//         // 3. Change the clicked button's color to highlight it
//         button.style.backgroundColor = "grey";  // highlight the active button
//         button.style.color = "white"; // change text color for visibility
//     });
// });

// Get all the buttons
const buttons = document.querySelectorAll(".button");

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        // Get the color from the button's ID (assuming button IDs are color names)
        const color = button.id;

        // Change the background color of the page
        document.body.style.backgroundColor = color;

        // Reset all buttons to their original state
        buttons.forEach(btn => {
            btn.style.backgroundColor = btn.id;  
            btn.classList.remove("active"); 
        });

        // Highlight the clicked button
        button.style.backgroundColor = "grey";
        button.classList.add("active");  
    });
});
