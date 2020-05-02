/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let toAdd = '';
  if (num % 3 === 0) {
    toAdd += 'Fizz';
  }
  if (num % 5 === 0) {
    toAdd += 'Buzz';
  }
  if (!(num % 3 === 0 || num % 5 === 0)) {
    toAdd = num;
  }
  return toAdd;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  const cache = [1, 1];
  let i = 2;
  if (typeof cache[n] === 'undefined') {
    for (; i <= n; i += 1) {
      cache[i] = cache[i - 1] * i;
    }
  }
  return cache[n];
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  return new Array(n2 - n1 + 1).fill(0)
    .map((value, index) => index + n1)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const rect1Bottom = rect1.top + rect1.height;
  const rect2Bottom = rect2.top + rect2.height;
  const rect1Right = rect1.left + rect1.width;
  const rect2Right = rect2.left + rect2.width;
  const rectLeftOfB = rect1Right < rect2.left;
  const rectRightOfB = rect1.left > rect2Right;
  const rectAboveB = rect1.top > rect2Bottom;
  const rectBelowB = rect1Bottom < rect2.top;
  return !(rectLeftOfB || rectRightOfB || rectAboveB || rectBelowB);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return Math.sqrt((circle.center.x - point.x) ** 2
    + (circle.center.y - point.y) ** 2) < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const result = str.split('')
    .filter((value, index, array) => array.indexOf(value) === array.lastIndexOf(value))[0];
  return result === undefined ? null : result;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const second = b > a ? {
    n: b,
    include: isEndIncluded,
  } : {
    n: a,
    include: isStartIncluded,
  };
  const first = b > a ? {
    n: a,
    include: isStartIncluded,
  } : {
    n: b,
    include: isEndIncluded,
  };
  let result = '';
  result += first.include ? '[' : '(';
  result += `${first.n}, ${second.n}`;
  result += second.include ? ']' : ')';
  return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = num.toString();
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return Number(result);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(cnn) {
  let result = cnn.toString();
  const { length } = result;
  let i = 0;
  let item = 0;
  if (length % 2 !== 0) i = 1;
  for (; i < length; i += 2) {
    item = +result[i] * 2;
    if (item > 9) {
      item -= 9;
    }
    result = result.slice(0, i)
      .concat(item)
      .concat(result.slice(i + 1));
  }
  return (result.split('')
    .reduce((pv, cv) => +pv + +cv)) % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(n) {
  return Number(n.toString()
    .split('')
    .map((value) => Number(value))
    .reduce((previousValue, currentValue, currentIndex, array) => {
      const sum = previousValue + currentValue;
      if (currentIndex === array.length - 1 && sum > 9) {
        return getDigitalRoot(sum);
      }
      return sum;
    }));
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const stack = [];
  const open = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>',
  };
  const closed = {
    '}': true,
    ']': true,
    ')': true,
    '>': true,
  };
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let HexN = '';
  let Q = Math.floor(Math.abs(num));
  let R;
  while (Q !== 0) {
    R = Q % n;
    HexN = '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(R)
      + HexN;
    Q = (Q - R) / n;
  }
  return ((num < 0) ? `-${HexN}` : HexN);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const getCommonTwo = (a, b) => {
    let a1 = a;
    let b1 = b;
    let chunks = a1.split('/')
      .filter((value) => value.length !== 0);
    let common = '';
    if (a1 === '/') {
      common += '/';
    }
    while (chunks.length !== 0) {
      if (a1[0] === '/') {
        chunks[0] = `/${chunks[0]}`;
      }
      a1 = a1.replace(chunks[0], '');
      if (b1.indexOf(chunks[0]) === -1) {
        if (chunks[0][0] === '/' && b1[0] === '/') {
          common += '/';
        }
        break;
      } else {
        if (b1[b1.indexOf(chunks[0]) + chunks[0].length] === undefined
          || b1[b1.indexOf(chunks[0]) + chunks[0].length] === '/') {
          common += chunks[0];
        } else {
          break;
        }
        b1 = b1.replace(chunks[0], '');
      }
      chunks = chunks.reverse();
      chunks.pop();
      chunks = chunks.reverse();
    }
    if (common === '') {
      if (a1[0] === '/' && b1[0] === '/') {
        common = '/';
      }
    }
    return common;
  };
  return pathes.reduce((previousValue, currentValue) => getCommonTwo(previousValue, currentValue));
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  return m1.map((row) => m2[0].map((_, j) => row.reduce((acc, cur, k) => acc + cur * m2[k][j], 0)));
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const winLines = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];
  const X = position.flatMap((value) => {
    if (value.length === 3) {
      return value;
    }
    return [value, new Array(3 - value.length).fill(undefined)].flatMap((value1) => value1);
  })
    .map((value, index) => (value === 'X' ? index + 1 : undefined))
    .filter((value) => value !== undefined);
  const O = position.flatMap((value) => {
    if (value.length === 3) {
      return value;
    }
    return [value, new Array(3 - value.length).fill(undefined)].flatMap((value1) => value1);
  })
    .map((value, index) => (value === '0' ? index + 1 : undefined))
    .filter((value) => value !== undefined);
  const getWinner = (a) => winLines
    .filter((value) => value
      .filter((value1) => a.map((value2) => value2.toString())
        .includes(value1)).length === 3).length !== 0;
  const isXWinner = getWinner(X);
  const isOWinner = getWinner(O);
  if (isXWinner) {
    return 'X';
  }
  return isOWinner ? 0 : undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
