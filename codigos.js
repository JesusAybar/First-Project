function digitsAreEven (n)
{if(n >= 99 || n <= 10){throw new Error("n should have 2 digits");}
const isEven = n => n % 2 === 0;
const firstdigit = Math.floor (n/10);
const seconddigit = n % 10;
return isEven(firstdigit) && isEven(seconddigit);}


function LastDigitIs4 (x)
{const LastDigit = x % 10;
return (LastDigit === 4);}


function ThreedigitsNumber (x)
{return (x >= 100 || x <= 999 )}


function IsNegative (x)
{return (x < 0)}


function SumTwodigitsNumber (x)
{if(x >= 99 || x <= 10){throw new Error("x should have 2 digits")}
const SumDigits = Math.floor (x % 10) + (x / 10)}
