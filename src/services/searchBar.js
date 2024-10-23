import { handleRenderList } from "../Views/store";
import { handleGetProductLocalStorage } from "./persistence/localstorage";

export const handleSearchProductByName = ()=>{
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage();
    const result = prodcuts.filter((el)=>
        el.nombre.toLowerCase().includes(inputHeader.value)
    );
    handleRenderList(result);
}