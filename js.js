function numara(event) { // sadece numara

    if ((event.keyCode < 47 || event.keyCode > 58))

        return false;

    var frm = document.getElementById("numara");

    form.setAttribute("onsubmit", true);

    return true;

}

function validateemail() //eposta
{
    var x = document.forum.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("eposta adresini kontrol ediniz.");
        return false;
    }
}

function kontrol() // türkçe karakter
{
    var reg = new RegExp("\[ÜĞŞÇÖğıüşöç]");
    if (reg.test(document.getElementById("turkce").value, reg)) {
        alert('türkçe karakter girilmez');
        document.getElementById("turkce").value = "";
    }
}

function karakterkontrol1() { // karakter uzunluğu
    var mesaj = document.getElementById("mesaj").value.length;

    if (mesaj > 0 && mesaj < 500) {
        alert("Başarılı");
    } else {
        alert("Başarısız");
        return false;
    }

}