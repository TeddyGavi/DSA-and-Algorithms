# Solve and Simplify

- sometimes you are not sure how to solve the problem even at this step
- if you can't solve the entire problem solve a simpler problem
- ignore the part that is giving you a hard time and then come back to the problem that is giving you a hard time
- its common that while solving the problem something will click into place
- ```js
  function charCount(str) {
    // make object to return at end
    // loop over string
    // lowercase
    // for each char check if char is num/letter is key in object add 1 to value (count)
    // if not, add it and set value to 1
    // if something else, do nothing
    // return object
  }
  ```
- if you have problem with looping, start by hardcoding the values
- if you aren't comfortable with keys and objects start with the loop
- might not remember the exact method needed, ignore them and at the end go back
- problem with determining if its alpha numeric

- ```js
  function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
    // lowercase
    // for each char check if char is num/letter is key in object add 1 to value (count)
    // if not, add it and set value to 1
    // if something else, do nothing
    // return object
    return result;
  }
  ```

#### next step

- ```js
  function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase(); //lowercase
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
    // for each char check if char is num/letter is key in object add 1 to value (count)
    // if not, add it and set value to 1
    // if something else, do nothing
    // return object
    return result;
  }
  ```

#### next

- how to tell if char is alphanumeric?
- make an array that contains all allowed chars
- use a regExp?
- use the charCodes to limit
- currently the solution is not 100% but we are 90% there and this shows how you think and the line of thinking that you are taking
- this shows that you can break down problems and make progress
