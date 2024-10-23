
import { handleRenderList } from "../Views/store";

//==CATEGORIES==/
switch (categoryIn) {
    case "Todo":
        handleRenderList(products);
        break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
        const result = products.filter((el) => el.categories === categoryIn);
        handleRenderList(result);
        break;
    case "MayorPrecio":
        const resultPrecioMenor = products.sort((a, b) => b.precio - a.precio);
        handleRenderList(resultPrecioMenor);
        break;
    case "MenorPrecio":
        const resultPrecioMayor = products.sort((a, b) => a.precio - b.precio);
        handleRenderList(resultPrecioMayor);
        break;
    default:
        break;
}


export const renderCategories =()=> {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo"> Todos los productos</li>
    <li id="Hamburguesas"> Hamburguesas</li>
    <li id="Papas"> Papas</li>
    <li id="Gaseosas"> Gaseosas</li>
    <li id="mayorPrecio"> mayorPrecio</li>
    <li id="menorPrecio"> menorPrecio</li>
    `;
    const liElements =ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click",()=>{
            handleClick(liElement);
        });
        });

        const handleClick = (elemento)=>{
            liElements.forEach((el)=>{
                handleFilterProductsByCategory(elemento.id);
                if(el.classList.contains("liActive")){
                    el.classList.remove("liActive");
                }else {
                    if(elemento === el){
                        el.classList.add("liActive")
                    }
                }
            })
        }
    };
