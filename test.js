console.log("Hi there buddy we have a problem we are looking at here")


function isMatch(input, pattern) {
    const regex = new RegExp(pattern);
    return regex.test(input);
  }

  const str = "2016-05-24T15:54:14.876Z";
const pattern = "^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$"

console.log(isMatch(str, pattern));



function isValidISOTimestamp(str) {
    const pattern = "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(Z|[+-]\\d{2}:\\d{2})$";
    return new RegExp(pattern).test(str);
  }
  
//   console.log(isValidISOTimestamp("2025-06-30T15:45:00Z")); // true
//   console.log(isValidISOTimestamp("2025-06-30")); // false
  