// UYGA VAZIFA
//  - - Begin - -  //
// Begin1. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.
// S = a * b va P = 2 * (a + b)

// let a = +prompt("A tomonni kiriting");
// let b = +prompt("B tomonni kiriting");

// let s = a * b;
// let p = 2 * (a + b);
// console.log("Bu togri tortburchakning yuzi:" , s  , "Bu togri tortburchakning perimetri:", p);

// Begin2. Aylananing diametri d berilgan. Uning uzunligi aniqlansin.
// L = π * d, π = 3.14

// let diametr = +prompt("Diametrni kiriting");

// let length = diametr * 3.14;

// console.log("Bu aylananing uzunligi:" , length);

// Begin3. Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S aniqlansin.
// V = a^3, S = 6 * a^2

// let a = +prompt ("A tomonni kiriting")

// let v = a ** 3;

// let s = 6 * a **2

// console.log("Bu kubning hajmi:", v, "Bu kubning to`la sirti:", s);

// Begin4. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.
// V = a * b * c, S = 2 * (a * b + b * c + a * c)

// let a = +prompt("A tomonni kiriting");
// let b = +prompt("B tomonni kiriting");
// let c = +prompt("C tomonni kiriting");

// let v = a * b * c;
// let s = 2 * (a * b + b * c + a * c);

// console.log("Hajmi : " , v   ,  "To`la sirti : " , s);

// Begin5. Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin
// M = (a + b) / 2

// let a = +prompt("birinchi son");
// let b = +prompt("ikkinchi son");

// let m = (a + b) / 2;

// console.log("O`rta arifmetik :" , m);

//Begin6. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
//c = a**2+b**2, P = a + b + c

// let a = +prompt("A tomonni kiriting...");
// let b = +prompt("B tomonni kiriting...");

// let c = (a * b) ** (1 / 2);

// let p = a + b + c;

// console.log("Gipotenuza : " , c , "Perimetr : " , p);

//Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularnig yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// S1 = π * r1, S2 = π * r2, S = π * (r1 − r2).

// const pi = 3.14;

// let circle1 = +prompt(" Radiusni kiriting...(1)");

// let s1 =  pi * circle1;

// let circle2 = +prompt(" Radiusni kiriting...(2)");

// let s2 = pi * circle2;

// let different = pi * (circle1 - circle2)

// console.log(different);

// Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// L = 2 * π * R, S = π * R^2, π = 3.14

// let length = +prompt(" Uzunlikni kiriting...");

// let r = 5 ;

// const pi = 3.14;

// let s = pi * r ** 2;

// let l = 2 * pi * r;

// console.log("Yuzi" , s ,"Uzunligi : " , l);

//Begin9. Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.
// L = (x1-x2)2 + (y1 - y2)2
// let x1 = 3;
// let y1 = 2;
// let x2 = 4;
// let y2 = 5;

// let y = (x1 - x2) * 2 + (y1 - y2) * 2;
// console.log(y);

//Begin10. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.

// let a = 21;
// let b = 41;
// let c = 61;

// let k = a;
// a = b;
// b = c;
// c = k;

// console.log( a, b , c);

//Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
//y = 4 * (x - 3)^6 - 7 * (x - 3)^3 + 2

// let x = +prompt("Son kiriting");

// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;

// console.log(y);

//Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
//A^3‚ A^6‚ A^9, A^15

// let a = prompt("Son kiriting");

// let deg = a **  +prompt("darajani kiriting");

// console.log(deg);

//Begin13. Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin.
//Tc = (Tf - 32) * 5/9

// let fahrenheit = +prompt("Fahrenheit bo`yicha temperaturani kiriting...");

// let celsius = (fahrenheit - 32) * 5 / 9;

// console.log(celsius);

//Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.

// let chocolate = +prompt('Shokolad narxini kiriting...');

// let candy = +prompt("Konfet narxini kiriting...");

// let different = chocolate - candy;

// console.log("Shokolad konfetdan " , different , "ming so`m qimmat")  ;

//Begin15. Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?

// let grnApp= +prompt('Yashil olma uchun kerakli miqdordagi og`irlikni kiriting')
// let redApp= +prompt('qizil olma uchun kerakli miqdordagi og`irlikni kiriting')

// let grnPrice = grnApp * 15000;
// let redPrice = redApp * 11000;

// let all = grnPrice + redPrice;

// console.log('Jami' , all , 'ming so`m');

//  - - Integer - -  //
//Integer1. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.

// let number = +prompt(" Uch xonali son kiriting...");

// let singularNum = number % 10;

// let pluralNum = number % 100;

// console.log("Birliklar xonasidagi son", singularNum ,  "O`nliklar xonasidagi son", pluralNum);

//or

// console.log("Birliklar xonasidagi son", singularNum);
// console.log( "O`nliklar xonasidagi son", pluralNum);

// Integer2. Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.

// let number = +prompt("Son kiriting");

// let singular = number % 10;
// let plural = number % 100;
// let pluralNum = (plural - singular) / 10;
// let threedig = ((number % 1000) - plural) / 100;
// let all = singular + pluralNum + threedig;

// console.log(all);
//Integer3. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.
// let number = +prompt("Son kiriting");

// let singular = number % 10;
// let plural = number % 100;
// let pluralNum = (plural - singular) / 10;
// let threedig = ((number % 1000) - plural) / 100;

// let k = singular;
// singular = pluralNum;
// pluralNum = threedig;
// threedig = k;

// console.log(threedig , singular, pluralNum);

//Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
//Input: 123
//Output: 213
// let number = +prompt("Son kiriting");

// let singular = number % 10;
// let plural = number % 100;
// let pluralNum = (plural - singular) / 10;
// let threedig = ((number % 1000) - plural) / 100;

// let k = singular;
// singular = pluralNum;
// pluralNum = threedig;
// threedig = k;

// console.log(singular, pluralNum, threedig);
//Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
//Input: 123
//Output: 132
// let number = +prompt("Son kiriting");

// let singular = number % 10;
// let plural = number % 100;
// let pluralNum = (plural - singular) / 10;
// let threedig = ((number % 1000) - plural) / 100;

// let k = singular;
// singular = pluralNum;
// pluralNum = threedig;
// threedig = k;

// console.log(pluralNum, threedig, singular);

//Integer6. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.
//Input: 98123
//Output: 8
// let num = +prompt("5 xonali son kiriting");

// let abcde = num % 10000;
// let bcde = abcde % 1000;
// let findnum = (abcde - bcde) / 1000;
// console.log(findnum);

//Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.
// let second = 12333;
// let minute = second / 60;
// console.log(minute);
//Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.
// let second = 12333;
// let hour = second / 3600;
// console.log(hour);
//Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
// let second = 12333;
// let minute = second / 60;
// console.log(minute);
//Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.
// let second = 12333;
// let hour = second / 60;
// console.log(hour);
