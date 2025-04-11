// bagian fungsi hitung
function hitung() {
    // deklarasi variabel
    let angka1 = parseFloat(document.getElementById("angka1").value); 
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let operator = document.getElementById("operator").value;
    let hasil;

    // cek kesalahan
    if (isNaN(angka1) || isNaN(angka2)) {
        hasil = " Masukkan angka yang (valid) " ;
    } else {
        if (operator == "+") {
            hasil = angka1 + angka2;
        } else if (operator == "-") {
            hasil = angka1 - angka2;
        }
        else if (operator == "*") {
            hasil = angka1 * angka2;
        } else if (operator == "/") {
            if (angka2 === 0) {
                hasil = " Pembagian dengan nol tidak valid ";
            } else {
                hasil = angka1 / angka2;
            }
        } else {
            hasil = " Operator tidak valid ";
        }
        
    }
    document.getElementById("hasil").textContent = hasil;
}
//bagian fungsi tombol bersih
function reset() {
    document.getElementById("fkalkulator").reset();

}