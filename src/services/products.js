import { closeModal, productoActivo } from "../../main";
import { handleGetProductsToStore, handleRenderList } from "../Views/store";
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistence/localstorage";

const buttonAdd= document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click",()=>{
openModal();
});

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", ()=>{
    handleSaveOrModifyElements();
});
const handleSaveOrModifyElements=()=>{
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categories = document.getElementById("categoria").value;
    let object = null;
    if(productoActivo){
        object= {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        }
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guradado correctamente!",
        icon: "success"
    });
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};
export const handleDeleteProduct=()=>{
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo eliminas sera permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=>el.id!=productoActivo.id)
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
    });
}