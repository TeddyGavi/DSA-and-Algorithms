/* isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false. 

*/

const isPalindrome = (str: string): boolean => {
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else if (str.length !== 1) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return true;
  }
};

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
