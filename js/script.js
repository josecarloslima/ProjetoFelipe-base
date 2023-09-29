function toggleFAB() {
    var modal = document.getElementById('janelaModal');
    var modalImg = document.getElementById("imgModal");
    var captionTexto = document.getElementById("txtImg");
    var btFechar = document.getElementsByClassName("fechar")[0];

    modal.style.display = "block";
    modalImg.src = "img/ficha_Tomas.svg";
    modalImg.alt = "Ficha de Tomás Oliveira";
    captionTexto.innerHTML = "Ficha do Estudante <a href='img/ficha_Tomas.png' class='classe1' target='blank'>Tomás de Oliveira para o OPERA RPG</a>";

    btFechar.onclick = function () {
        modal.style.display = "none";
    }
}