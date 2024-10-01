function atualizarAssinatura() {
  const nome = document.getElementById("inputNome").value;
  const cargo = document.getElementById("inputCargo").value;
  const telefone = document.getElementById("inputTelefone").value;
  const email = document.getElementById("inputEmail").value;
  const inputImagem = document.getElementById("inputImagem").files[0];

  // Atualiza o nome, cargo, telefone e e-mail
  document.getElementById("nome").innerText = nome || "Nome Sobrenome";
  document.getElementById("cargo").innerText = cargo || "Cargo";
  document.getElementById("telefone").innerText =
    telefone || "+55 11 3177-7800";
  document.getElementById("email").innerText =
    email || "nome.sobrenome@dsop.com.br";

  // Atualiza a imagem de perfil se uma nova imagem for carregada
  if (inputImagem) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector(".profile-image").src = e.target.result;
    };
    reader.readAsDataURL(inputImagem);
  }

  // Atualiza a largura do <hr /> para se ajustar ao texto do cargo
  const hiddenSpan = document.getElementById("hiddenSpan");
  hiddenSpan.innerText = cargo || "Cargo"; // Define o texto no span oculto
  const width = hiddenSpan.offsetWidth; // Obtém a largura do texto
  const dynamicLine = document.getElementById("dynamicLine");
  dynamicLine.style.width = `${width}px`; // Ajusta a largura do <hr />
}

// Ajustar a largura do <hr /> na carga inicial
window.onload = function () {
  const cargoElement = document.getElementById("cargo");
  const hiddenSpan = document.getElementById("hiddenSpan");
  hiddenSpan.innerText = cargoElement.innerText; // Define o texto no span oculto
  const width = hiddenSpan.offsetWidth; // Obtém a largura do texto
  const dynamicLine = document.getElementById("dynamicLine");
  dynamicLine.style.width = `${width}px`; // Ajusta a largura do <hr />
};
