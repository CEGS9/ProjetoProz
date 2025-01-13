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
        <button class="carousel-button prev">&#8249;</button>
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
        <button class="carousel-button next">&#8250;</button>
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
