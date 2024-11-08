document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    const resultadoDiv = document.querySelector("h2 span#idade-humana");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o recarregamento da página
      calcularIdadeHumana();
    });
  });
  
  function calcularIdadeHumana() {
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const humanAgeSpan = document.getElementById('idade-humana');
  
    const ageConversion = {
      "<9": [36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
      "9-23": [37, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87, 92, 96, 101, 105],
      "23-40": [40, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 99, 105, 109, 115, 120],
      ">40": [42, 49, 56, 64, 71, 78, 86, 93, 101, 108, 115, 123, "-", "-", "-", "-"]
    };
  
    let humanAge = ageConversion[peso][idade - 5] || "Idade não disponível";
    
    humanAgeSpan.innerText = humanAge;
  }
  
  //botoes popups
function abrirPopup() {
  window.open(
      '/contact.html', // Caminho para sua página de contato
      'popupWindow', // Nome da janela
      'width=600,height=700,resizable=no,scrollbars=yes'
  );
}
function abrirPoliticaPrivacidade() {
  window.open(
      '/privacy.html', // Substitua pelo caminho para sua página de política de privacidade
      'popupPolitica', 
      'width=600,height=700,resizable=no,scrollbars=yes'
  );
}