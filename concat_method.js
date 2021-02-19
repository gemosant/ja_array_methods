// concat() metodu, eklendiği dizi ile parametre olarak aldığı dizi(leri)
// birleştirerek yeni dizi döndürür.

/*
        kullanımı:
    var yeni_dizi = eski_dizi.concat(paramtre)

    parametre: diziye eklenecek yeni dizi ve/veya değerler 
*/

var dizi1 = ["kodluyoruz", "react", "bootcamp"]

var dizi2 = ["javascript", "array", "metodları"]

var yeni_dizi = dizi1.concat(dizi2)

console.log(yeni_dizi)
//concat() metodu ile eklenen dizi ve/veya değerler diziye sondan eklenir.
// ayrıca concat() metodu eski dizileri değiştirmez, sadece yeni dizi üzerinde işlem uygular.
console.log("dizi-1: ", dizi1, "\ndizi-2: ", dizi2)

//fakat dizinin kendisini kendi üzerinde concat() metodu kullanarak değiştirebiliriz.
dizi2 = dizi2.concat(dizi1)
console.log("yeni dizi-2: ", dizi2)