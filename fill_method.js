// fill() metodu bir dizideki başlangıçtan (default: 0) 
// bitişe kadar (default: array.length) elemanları statik değişkene dönüştürür.


const dizi1 = [true, 3.14, 42, "kodluyoruz.org", 7, "java"]
console.log("dizi-1: ", dizi1)

dizi1.fill("false", 2, 4) // 2-4 aralığındaki indexleri false ile değiştrdik (2 dahil, 4 dahil değil)

console.log("yeni dizi-1: ", dizi1)

const dizi2 = [["java", "script"], "einstein", "edison", ["react"], "stackoverflow"]
console.log("eski dizi-2", dizi2)

dizi2.fill("javascript", 0, 1)

console.log("yeni dizi-2", dizi2)

//dizi içindeki diziyi değiştirmek için
dizi2.fill([true], 3, 4)
console.log("yepyeni dizi-2", dizi2)