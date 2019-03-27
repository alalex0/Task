let height = 30;
let wight =40;
let lenght = 10;
height = parseInt(height);
wight = parseInt(wight);
lenght = parseInt(lenght);
let Square = 2*(height*wight+lenght*height+lenght*wight);
console.log("Площадь параллелепипеда");
console.log(Square);
res = (height > wight)? "высота больше":"ширина больше";
console.log(res);

/*2. На садовом участке
 площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?
 */
 let sarea = 10;
 let ratio = 100;
 sarea = parseInt(sarea);
 ratio = parseInt(ratio);
 height = 25;
 wight = 15;
 console.log(sarea*ratio - height*wight,"м2 осталось");
 
 /*3. Найдите площадь овального кольца,
 полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.*/

let squareO = 15;
ratio = 100;
let squarecut = 600;
console.log(squareO*ratio - squarecut,"см2 площадь овального кольца");

/*4. Переопределить значения переменных X и Y так,
 чтобы значение X оказалось меньшим, а Y — большим.*/
 let x = 10;
 let y = 4;
 let X = x;
 let Y = y;
 console.log(X, "значение начальное X");
 console.log(Y, "значение начальное Y");
 let resX = (X > Y)? Y : (X < Y)? X : X;
 X = resX;
 let resY = (y > x)? y : (y < x)? x : x;
 Y = resY;
console.log(X, "значение X");
console.log(Y, "значение Y");


 /*5. Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.
  Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.*/

  let m = 8.5;
  let n = 11.45;
  res = (Math.abs(parseInt(m) - 10) > Math.abs(parseInt(n) - 10))? n : m;
console.log(res);
