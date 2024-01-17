// form dan results container untuk Luas Persegi
const luasForm = document.getElementById("luas-form");
const luasResultContainer = document.getElementById("luas-result");

// form dan results container untuk Keliling Persegi
const kelilingForm = document.getElementById("keliling-form");
const kelilingResultContainer = document.getElementById("keliling-result");

// Menghitung Luas Persegi
function calculateLuas() {
    const sideLength = parseFloat(document.getElementById("luas-sideLength").value);

    // notifikasi jika blm me input pada luas persegi
    if (isNaN(sideLength)) {
        alert("Tolong isi Nilai Sisi Terlebih Dahulu!");
        return;
    }

    const luas = sideLength * sideLength;

    // cara pengerjaan luas
    const steps = `<p>L = S x S</p>
                    <p>L = ${sideLength} x ${sideLength}</p>
                    <p>L = ${luas}</p>`;
    luasResultContainer.innerHTML = steps;
}

// Menghitung Keliling Persegi
function calculateKeliling() {
    const sideLength = parseFloat(document.getElementById("keliling-sideLength").value);

    // notifikasi jika blm me input pada keliling persegi
    if (isNaN(sideLength)) {
        alert("Tolong isi Nilai Sisi Terlebih Dahulu!");
        return;
    }

    const keliling = 4 * sideLength;

    // cara pengerjaan keliling
    const steps = `<p>K = 4 x S</p>
                    <p>K = 4 x ${sideLength}</p>
                    <p>K = ${keliling}</p>`;
    kelilingResultContainer.innerHTML = steps;
}

// button reset
function resetForm() {
    luasForm.reset();
    kelilingForm.reset();
    luasResultContainer.innerHTML = "";
    kelilingResultContainer.innerHTML = "";
}

document.getElementById("luas-calculateBtn").addEventListener("click", calculateLuas);
document.getElementById("keliling-calculateBtn").addEventListener("click", calculateKeliling);
document.getElementById("resetBtn").addEventListener("click", resetForm);
