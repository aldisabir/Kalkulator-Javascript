const inputPertama = document.getElementById('pertama');
const inputKedua = document.getElementById('kedua');
const hasil = document.getElementById('hasil');



tambah.addEventListener('click', function() {

    const angkaPertama = parseInt(inputPertama.value)
    const angkaKedua = parseInt(inputKedua.value)
    const hasilPerhitungan = angkaPertama + angkaKedua ;

    hasil.innerHTML = hasilPerhitungan;
});

kurang.addEventListener('click', function() {

    const angkaPertama = parseInt(inputPertama.value)
    const angkaKedua = parseInt(inputKedua.value)
    const hasilPerhitungan = angkaPertama - angkaKedua ;

    hasil.innerHTML = hasilPerhitungan
})

kali.addEventListener('click', function() {

    const angkaPertama = parseInt(inputPertama.value)
    const angkaKedua = parseInt(inputKedua.value)
    const hasilPerhitungan = angkaPertama * angkaKedua ;

    hasil.innerHTML = hasilPerhitungan
})

bagi.addEventListener('click', function() {

    const angkaPertama = parseInt(inputPertama.value)
    const angkaKedua = parseInt(inputKedua.value)
    const hasilPerhitungan = angkaPertama / angkaKedua ;

    hasil.innerHTML = hasilPerhitungan
})

hapus.addEventListener('click', function() {

    inputPertama.value =""    
    inputKedua.value =""    
    hasil.innerHTML = 0
})