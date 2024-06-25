function cekKhodam() {
    const khodams = [
        "Anda memliki khodam el gasing",
        "Anda memilki khodam raja sigma",
        "Anda memiliki khodam makhluk hitam",
        "Anda memiliki khodam susu tokyo",
        "Anda memliki khodam semangka diah",
        "Anda memiliki khodam google maps",
        "Anda memiliki khodam kepala charger",
        "Anda memiliki khodam raja naga",
        "Anda memiliki khodam tahu goreng",
        "Anda memiliki khodam ilham penyu",
        "Anda memiliki khodam pohon bijak",
        "Anda memiliki khodam kumar",
        "Anda memiliki khodam petarunx sangar",
        "Anda memiliki khodam el dear god"
    ];
 
    const name = document.getElementById('name').value;
    const resultElement = document.getElementById('result');
    
    if (name.trim() === "") {
        resultElement.textContent = "Masukkan nama Anda terlebih dahulu.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * khodams.length);
    resultElement.textContent = `${khodams[randomIndex]}`;
}