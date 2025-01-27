// **testando conexão com o arquvo index.html:**
// console.log("hello world");

//---------------------------------------------------------------------------

//**selecionando elementos do html, através do JS:**
const logotipo = document.getElementsByClassName('logo')
// console.log(logotipo)

const carouselTitle = document.querySelector('section .title-carousel')
// console.log(carouselTitle)

let carouselImgs = document.querySelector('div .carousel-item')
// console.log(carouselImgs)
// não há seleção com Id, pois não foi usado Id no html

//---------------------------------------------------------------------------

//**Criando elemento na DOM com JS:**

//A estrutura do carousel dos gatos, foi removida do html e criada com JS

//criar elemento
const carouseldiv = document.createElement('div')

//popular elemento
carouseldiv.innerHTML = `
<section class="carousel">
    <h2 class="title-carousel">Tudo para seu gato</h2>
    <div class="carousel-container">
        <button class="carousel-button prev"><img src="../images/arrow_back.svg"></button>
        <div class="carousel-items">
            <div class="carousel-item">
                <img src="../images/areiaGato.png" alt="Areia de gato BIO">
                <p>Areia de gato BIO</p>
            </div>
            <div class="carousel-item">
                <img src="../images/sacheWiskas.png" alt="Sache Whiskas">
                <p>Sache Whiskas</p>
            </div>
            <div class="carousel-item">
                <img src="../images/coleiraPingente.png" alt="Coleira com pingente">
                <p>Coleira com pingente</p>
            </div>
            <div class="carousel-item">
                <img src="../images/catnipBrinquedo.png" alt="Catnip brinquedo">
                <p>Catnip brinquedo</p>
            </div>
            <div class="carousel-item">
                <img src="../images/camaGato.png" alt="Cama para gato">
                <p>Cama para gato</p>
            </div>
                        <div class="carousel-item">
                <img src="../images/areiaGato.png" alt="Areia de gato BIO">
                <p>Areia de gato BIO</p>
            </div>
            <div class="carousel-item">
                <img src="../images/sacheWiskas.png" alt="Sache Whiskas">
                <p>Sache Whiskas</p>
            </div>
            <div class="carousel-item">
                <img src="../images/coleiraPingente.png" alt="Coleira com pingente">
                <p>Coleira com pingente</p>
            </div>
            <div class="carousel-item">
                <img src="../images/catnipBrinquedo.png" alt="Catnip brinquedo">
                <p>Catnip brinquedo</p>
            </div>
            <div class="carousel-item">
                <img src="../images/camaGato.png" alt="Cama para gato">
                <p>Cama para gato</p>
            </div>
        </div>
        <button class="carousel-button next"><img src="../images/arrow_forward.svg"></button>
    </div>
</section>
`

carouseldiv.id = 'carousel'
//adicionar na dom
const main = document.querySelector('main')
main.appendChild(carouseldiv)

//---------------------------------------------------------------------------
//**Renderezição de elementos na DOM com JS:**

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel"); // Seleciona todos os carrosséis
    carousels.forEach((carousel) => {
        const container = carousel.querySelector(".carousel-items");
        const items = carousel.querySelectorAll(".carousel-item");
        const prevButton = carousel.querySelector(".carousel-button.prev");
        const nextButton = carousel.querySelector(".carousel-button.next");

        let currentIndex = 0; // Posição inicial do carrossel
        const itemWidth = items[0].offsetWidth + 20; // Largura + margem de cada item

        // Função para atualizar a posição do carrossel
        const updateCarousel = () => {
            const offset = -currentIndex * itemWidth;
            container.style.transform = `translateX(${offset}px)`;
        };

        // Evento de clique no botão "anterior"
        prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        // Evento de clique no botão "próximo"
        nextButton.addEventListener("click", () => {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    });
});

//---------------------------------------------------------------------------
//**Validação do formulário:**

// Obter os elementos do formulário
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let telefoneInput = document.getElementById("telefone");
let telefoneHelper = document.getElementById("telefone-helper");

let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

let promoCheckbox = document.querySelector('input[name="promocoes"]');
let dicasCheckbox = document.querySelector('input[name="dicas"]');

// Função de validação de nome
usernameInput.addEventListener("change", (event) => {
    const valor = event.target.value.trim();
    if (!valor) {
        usernameInput.classList.remove("correct", "error");
        usernameHelper.innerText = "Campo obrigatório";
        usernameHelper.classList.add("visible");
    } else if (valor.length < 5) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Digite um nome com pelo menos 5 caracteres";
        usernameHelper.classList.add("visible");
    } else {
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameHelper.innerText = "";
        usernameInput.classList.add("correct");
    }
});

// Função de validação de telefone
telefoneInput.addEventListener("change", (event) => {
    const valor = event.target.value.trim();
    const telefonePattern = /^[0-9]{10,11}$/;
    if (!valor) {
        telefoneInput.classList.remove("correct", "error");
        telefoneHelper.innerText = "Campo obrigatório";
        telefoneHelper.classList.add("visible");
    } else if (!telefonePattern.test(valor)) {
        telefoneInput.classList.remove("correct");
        telefoneInput.classList.add("error");
        telefoneHelper.innerText = "Digite um telefone válido";
        telefoneHelper.classList.add("visible");
    } else {
        telefoneInput.classList.remove("error");
        telefoneHelper.classList.remove("visible");
        telefoneHelper.innerText = "";
        telefoneInput.classList.add("correct");
    }
});

// Função de validação de e-mail
emailInput.addEventListener("change", (event) => {
    const valor = event.target.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!valor) {
        emailInput.classList.remove("correct", "error");
        emailHelper.innerText = "Campo obrigatório";
        emailHelper.classList.add("visible");
    } else if (!emailPattern.test(valor)) {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Digite um e-mail válido";
        emailHelper.classList.add("visible");
    } else {
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailHelper.innerText = "";
        emailInput.classList.add("correct");
    }
});

// Função de validação das checkboxes
function validateCheckboxes() {
    if (!promoCheckbox.checked && !dicasCheckbox.checked) {
        alert("Pelo menos uma opção de comunicação deve ser selecionada.");
        return false;
    }
    return true;
}

// Validar formulário antes de enviar
document.getElementById("newsletter-form").addEventListener("submit", (event) => {
    if (!validateCheckboxes()) {
        event.preventDefault(); // Previne o envio se a validação das checkboxes falhar
    }
});
