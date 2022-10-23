function func() {
    const doc_input = document.getElementById("height").value;
    if (doc_input === "") {
        alert(`Ваш рост: 15 сантиметров`);
    }
    else {alert(`Ваш рост: ${doc_input}`)}
}