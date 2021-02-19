// find() metodu parametre olarak verilen, true/false değer döndüren
// test fonksiyonunu karşılayan dizi içerisindeki ilk elemanı döndürür.

//bir dizi oluşturalım
var sehirler = [
    {
        isim: "bursa",
        plaka: 16
    },
    {
        isim: "eskişehir",
        plaka: 26
    },
    {
        isim: "bilecik",
        plaka: 11
    },
    {
        isim: "palo alto",
        plaka: 16
    },
]

//bir test fonksiyonu yazalım
function testFonksiyonu(sehir){
    return sehir.plaka === 16
}

console.log(sehirler.find(testFonksiyonu)) //plakası 16 olan ilk değeri döndürecek