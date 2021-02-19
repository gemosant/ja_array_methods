// every() metodu bir dizideki tüm elemanların verilen fonksiyonun testini geçip geçmediğini kontrol eder.
// true veya false değer döndürür


const isBelowThreshold = (deger) => deger < 42;

const array1 = [17, 10, 29, 5, 11, 37];

console.log(array1.every(isBelowThreshold)); //tüm sayılar 42 den küçük ise true döndürür