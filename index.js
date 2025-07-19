/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer"; // Import inquirer for prompting user input
import qr from "qr-image"; // Import qr-image for generating QR codes
import fs from "fs"; // Import fs for file system operations
import { exec } from "child_process"; // Import exec to execute system commands

// Prompt the user to enter a URL
inquirer
  .prompt([
    {
      message: "Type in your URL", // Message displayed to the user
      name: "URL", // The key used to store the user's input
    },
  ])
  .then((answers) => {
    const url = answers.URL; // Retrieve the user's input (URL)

    // Generate a QR code image from the URL
    var qr_sva = qr.image(url);

    // Save the QR code image to a file named "qr_img.png"
    qr_sva.pipe(fs.createWriteStream("qr_img.png"));

    // Open the QR code image after it has been saved
    qr_sva.on("end", () => {
      exec(`start qr_img.png`); // Use the "start" command to open the image on Windows
    });

    // Save the URL to a text file named "URL.txt"
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err; // Throw an error if the file cannot be written
      console.log("The file has been saved!"); // Log a success message
    });
  })
  .catch((error) => {
    // Handle errors that occur during the prompt
    if (error.isTtyError) {
      // This error occurs if the prompt cannot be rendered in the current environment
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      // Log any other errors
      console.error("Something went wrong:", error);
    }
  });