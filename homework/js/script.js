let myName;
myName = prompt("Lütfen isminizi giriniz: ");
element = document.getElementById("myNameecem");
                                
if (element !== null) {
    // Element bulunduğunda içeriği değiştir
    element.innerHTML = myName;
} else {
    console.error("Belirtilen ID'ye sahip element bulunamadı.");
}

function anlikSaatiGuncelle() {
    var simdi = new Date();
    var saat = simdi.getHours();
    var dakika = simdi.getMinutes();
    var saniye = simdi.getSeconds();

    // Saat, dakika ve saniyeyi iki haneli olarak formatla
    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    // Saati HTML içeriğine yerleştir
    document.getElementById("myClock").innerHTML = saat + ":" + dakika + ":" + saniye;
}

// Sayfa yüklendiğinde ve her saniyede bir saat güncellenir
setInterval(anlikSaatiGuncelle, 1000);

// İlk kez çalıştır
anlikSaatiGuncelle();