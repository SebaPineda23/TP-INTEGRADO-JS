import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { handleGetProductsToStore } from "./src/Views/store";
import "./style.css";

//==APLICACION==//
export let categoriaActiva = null;
export const setCategoriaActiva=(categoriaIn)=>{
    categoriaActiva=categoriaIn;
};
export let productoActivo = null;

export const setProductoActivo=(productIn)=>{
    productoActivo=productIn;
};

handleGetProductsToStore();
renderCategories(); 

//==PRODUCTOS==//

//==POPUP==//

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click",()=>{
    handleCancelButton();
});
const handleCancelButton =()=>{
    closeModal();
};
//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click",()=>{
    handleSearchProductByName();
});