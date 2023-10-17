 const subtrair = document.querySelector("#subtrair")
 const somar = document.querySelector("#somar")
 const braco = document.querySelector("#braco")

somar.addEventListener("click", (evento) => {
    braco.vale  = parceInt(braco.vale) + 1
})