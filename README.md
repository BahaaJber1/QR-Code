# QR Code Generator (CLI)

<img width="637" height="57" alt="image" src="https://github.com/user-attachments/assets/953b2741-0dce-4529-829e-5bea23473c68" />

<img width="228" height="225" alt="image" src="https://github.com/user-attachments/assets/0cc4a1eb-3d47-4938-a982-5ab6c123b76e" />



A simple Node.js command-line application that generates a QR code image from a user-provided URL and saves both the QR code and the URL to files.

---

## Features

- **Interactive CLI:** Prompts the user to enter a URL using the command line.
- **QR Code Generation:** Creates a QR code image (`qr_img.png`) from the entered URL.
- **URL Logging:** Saves the entered URL to a text file (`URL.txt`).
- **Automatic Preview:** Opens the generated QR code image automatically (on Windows).

---

## Technologies Used

- Node.js
- [inquirer](https://www.npmjs.com/package/inquirer) (for user prompts)
- [qr-image](https://www.npmjs.com/package/qr-image) (for QR code generation)
- fs (Node.js file system module)
- child_process (Node.js module to open files)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-github-username>/qr-code-project.git
   cd qr-code-project
   ```

2. **Install dependencies:**
   ```bash
   npm install inquirer qr-image
   ```

3. **Run the application:**
   ```bash
   node index.js
   ```

4. **Follow the prompt:**  
   Enter the URL you want to convert to a QR code.

---

## How It Works

- The app prompts you to enter a URL.
- It generates a QR code image (`qr_img.png`) for that URL.
- The URL is saved to `URL.txt`.
- The QR code image is automatically opened (on Windows).

---

## Example

```bash
$ node index.js
? Type in your URL: https://github.com/BahaaJber1
The file has been saved!
```
- You will see `qr_img.png` and `URL.txt` in your project folder.

---

## Author

Developed by [Bahaa Jber](https://github.com/BahaaJber1).

---

## License

This project is licensed under the MIT License.
