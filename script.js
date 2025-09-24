const arabicMode = document.querySelector('.arabic-mode');
const romanMode = document.querySelector('.roman-mode');
const numberInput = document.getElementById('number');
const romanInput = document.getElementById('roman-input')
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const switchBtn = document.querySelectorAll('.switch-btn');
const heading = document.querySelectorAll('h1');

// Arabic to Roman converter function
const arabic2roman = (num) => {
  const romanMap = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];
  let result = '';
  for (let { value, symbol } of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

// Roman to Arabic converter function
function roman2arabic(roman) {
  const romanMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (next && current < next) {
      // Subtraction case (like IV = 4)
      total += next - current;
      i++; // Skip the next character, already used
    } else {
      total += current;
    }
  }

  return total;
};

//Toggles between Roman and Arabic converter
const switchConverter = () => {
  arabicMode.classList.toggle('hidden');
  romanMode.classList.toggle('hidden');
  heading[0].classList.toggle('hidden');
  heading[1].classList.toggle('hidden');
  switchBtn[0].classList.toggle('hidden');
  switchBtn[1].classList.toggle('hidden');
  output.textContent = '';
  numberInput.value = '';
  romanInput.value = '';
};

//Animation triggering function
const triggerAnimation = (element, animationClass, withColor = false) => {
  // Reset output color and animations
  element.classList.remove('color-transition', 'pulse', 'tilt-shaking');
  element.style.transition = 'none'; // Disable transition temporarily
  element.style.color = ''; // Reset to default color (#155263)
  void element.offsetWidth; // Trigger reflow
  element.style.transition = ''; // Restore transition

  // Apply the new animation
  element.classList.add(animationClass);

  // Apply color-transition for invalid inputs
  if (withColor) {
    element.classList.add('color-transition');
  }
};


//Validation of Roman input
const romanRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

const validateRomanInput = () => {
  const romanValue = romanInput.value.trim().toUpperCase();

  if (!romanValue || !romanRegex.test(romanValue)) {
    output.textContent = 'Please enter a valid Roman numeral (I - MMMCMXCIX)';
    triggerAnimation(output, 'tilt-shaking', true);
  } else {
    output.textContent = roman2arabic(romanValue);
    triggerAnimation(output, 'pulse');
  }
};


//Input check for incorrect numerical values and conversion execution
const checkInput = () => {
  if (!arabicMode.classList.contains('hidden')) {
    const inputValue = parseInt(numberInput.value);

    if (!inputValue) {
      output.textContent = 'Please enter a valid number!';
      triggerAnimation(output, 'tilt-shaking', true);
    } else if (inputValue < 1) {
      output.textContent = 'Please enter a number greater than or equal to 1';
      triggerAnimation(output, 'tilt-shaking', true);
    } else if (inputValue >= 4000) {
      output.textContent = 'Please enter a number less than or equal to 3999';
      triggerAnimation(output, 'tilt-shaking', true);
    } else {
      output.textContent = arabic2roman(inputValue);
      triggerAnimation(output, 'pulse');
    }
  } else {
    validateRomanInput();
  }
};

// Event handler for click and keyup
const handleConvert = (event) => {
  if (event.type === 'click' || (event.type === 'keyup' && event.key === 'Enter')) {
    checkInput();

    romanInput.value = '';
    numberInput.value = '';
  }
};

convertBtn.addEventListener('click', handleConvert);
numberInput.addEventListener('keyup', handleConvert);
romanInput.addEventListener('keyup', handleConvert);


switchBtn.forEach((btn) => {
  btn.addEventListener('click', switchConverter);
  });

// const arabic2roman = (num) => {
//     const romanMap = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1
//     };

//     return Object.entries(romanMap).reduce((acc, [roman, value]) => {
//       while (num >= value) {
//         acc += roman;
//         num -= value;
//       }
//       return acc;
//     }, '');
//   };

