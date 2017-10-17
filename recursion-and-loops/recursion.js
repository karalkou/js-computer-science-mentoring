/**
 * This recursive algorithm helps to count greatest common divisor (GCD)
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function euclidianAlgorithmRecursive(a, b) {

  if ( a !== 0 && b !== 0 ) {

    if ( a > b ) {
      return euclidianAlgorithmRecursive(a % b, b)
    } else {
      return euclidianAlgorithmRecursive(a, b % a)
    }

  }

  return a+b;
}
/**
 * This cycle algorithm helps to count greatest common divisor (GCD)
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function euclidianAlgorithmCycle(a, b) {

  while( a !== 0 && b !== 0 ){
    if( a > b ) {

      a = a % b;

    }else{

      b = b % a;

    }
  }

  return a+b;
}
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Recursive realization
 * @param num {number}
 * @returns {number}
 */
function fibonacci(num) {

  if ( num > 2 ) {
    return fibonacci(num-1) + fibonacci(num-2);
  }

  return 1;

}

/**
 * Loop realization
 * @param num {number}
 * @returns {number}
 */
function fibonacciCycle(num) {

  if(num > 2){
      let fibArr = [1, 1];

      for( let i = 2; i < num; i+=1 ){

          fibArr.push( fibArr[i-1] + fibArr[i-2] );

      }

      return fibArr[fibArr.length-1];
  }

  return null;
}
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 *
 * @param disksCount {number}
 * @param src {string}
 * @param dest {string}
 * @param tmp {string}
 * @returns full description of moving disks from the first tower to the third tower
 *
 * hint: much more simpler to find out algorithm when playing this game (e.g. http://igroflot.ru/logic/flash_game_206/)
 */
function hanoiTower(disksCount, src, dest, tmp) {

    if(disksCount === 1){
        console.log( `Move ${disksCount} from ${src} to ${dest}` );
    }else{
        hanoiTower(disksCount-1, src, tmp, dest);
        console.log( `Move ${disksCount} from ${src} to ${dest}` );
        hanoiTower(disksCount-1, tmp, dest, src);
    }

}
/*--------------------------------------------------------------------------------------------------------------------*/

// @param num {number}
// @param p {number} = 2, you don't need to pass this argument
// @return {bool}

function isPrime(num, p = 2) {

    if (num < 2) {
        return false;
    } // Базовый случай
    else if (num === 2) {
        return true;
    } // Базовый случай
    else if (num % p === 0) {
        return false;
    } // Шаг рекурсии / рекурсивное условие
    else if (p < num/2) {
        return isPrime(num, p+1);
    } else {
        return true;
    }
}
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Recursive realization
 * @param num {number}
 * @param exp {number}
 * @returns {number}
 */
function power(num, exp) {

    if (exp !== 1) {
        return num * power(num, exp - 1);
    } else {
        return num;
    }

}