# Roman Numeral Converter

This is a **Roman Numeral Converter** built as part of the [freeCodeCamp JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) certification. It converts numbers (1–3999) to Roman numerals and vice versa, with a user-friendly interface, animations, and keyboard support.

## Features
- **Bidirectional Conversion**: Convert Arabic numbers (1–3999) to Roman numerals or Roman numerals (I–MMMCMXCIX) to Arabic numbers.
- **Mode Switching**: Toggle between Arabic-to-Roman and Roman-to-Arabic modes.
- **Input Validation**: Displays error messages for invalid inputs (e.g., numbers < 1, > 3999, or incorrect Roman numerals).
- **Animations**: Visual feedback with `pulse` (valid inputs) and `tilt-shaking` (errors), plus color and text-shadow transitions for errors.
- **Keyboard Support**: Trigger conversions with the **Enter** key or button click.
- **Responsive Design**: Clean, centered layout with a colorful theme.

## Demo
Enter a number (e.g., `100`) or Roman numeral (e.g., `C`), click **Convert** or press **Enter**, and see the result. Toggle modes with the **Switch** button for reverse conversion.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   
2.  **Navigate to the Project**:

    bash

    CollapseWrapCopy

    `cd roman-numeral-converter`

3.  **Open in Browser**:
    -   Open index.html in a web browser (e.g., Chrome, Firefox).
    -   Recommended: Use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code to avoid CORS issues.

Usage
-----

-   **Arabic Mode**:
    -   Enter a number (1--3999) in the input field.
    -   Click **Convert** or press **Enter** to see the Roman numeral (e.g., 100 → C).
    -   Invalid inputs (e.g., 0, 4000) show an error with a red color, shadow, and shake animation.
-   **Roman Mode**:
    -   Toggle to Roman mode using the **Switch** button.
    -   Enter a Roman numeral (e.g., C, MCMLXXXIV).
    -   Click **Convert** or press **Enter** to see the number (e.g., C → 100).
    -   Invalid Roman numerals (e.g., IIII) show an error.
-   **Switching**: Click **Switch** to alternate between modes; inputs and outputs reset automatically.

Project Structure
-----------------

-   index.html: HTML structure for inputs, button, and output.
-   styles.css: Styling, animations (pulse, tilt-shaking), and error transitions.
-   script.js: Logic for conversion, validation, mode switching, animations, and event handling.

Credits
-------

-   Built for the [freeCodeCamp JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) certification, specifically the Roman Numeral Converter project.
-   Font: [Underdog](https://fonts.google.com/) (used via CSS).
-   Developed by [asavicki](https://github.com/asavicki).

License
-------

This project is open-source and available under the .
