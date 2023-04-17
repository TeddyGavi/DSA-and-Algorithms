/* reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.


// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

const reverse = (str: string): string => {
  if (str.length === 0) return str;
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
};

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
