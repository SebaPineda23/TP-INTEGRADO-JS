//==STORE==//
import { openModal, setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../services/persistence/localstorage"
export const handleGetProductsToStore =()=>{
    const products = handleGetProductLocalStorage()
    handleRenderList(products);

};

export const handleRenderList=(productIn)=>{
const hamburgesas = productIn.filter((el)=>el.categorias==="Hamburguesas")
const papas = productIn.filter((el)=>el.categorias==="papas")
const gaseosas = productIn.filter((el)=>el.categorias==="Gaseosas")
const renderProductGroup = (products, title)=>{
    if(products.length > 0) {
            const productsHTML = products.map((product, index)=>{
                return `<div class='containerTargetItem' id='product-${product.categorias}-${index}'>
                    <div>
                    <img src='${product.imagen}'> </img>
                    <div>
                    <h2>${product.nombre}</h2>
                    </div>   
                    </div>
                    <div class='targetProps'>
                    <p><b>Precio:</b>${product.precio}</p>
                    <p><b>Precio:</b>${product.categorias}</p>
                    </div>

                </div>`;
            });
            return `
            <section class='sectionStore'>
            <div class='containerTitleSection'>
            <h3>${title}</h3>
            </div>
            <div class='containerProductStore'>
            ${productsHTML.join("")}
            </div>


            </section>

            `;
        }else{
            return ""
        }
};

const appContainer = document.getElementById("storeContainers");
appContainer.innerHTML = `
${renderProductGroup(hamburgesas,"Hamburguesas")}
${renderProductGroup(papas,"papas")}
${renderProductGroup(gaseosas,"Gaseosas")}
`;
const addEvents =(productIn)=>{
if(productIn){
productIn.forEach((element, index) => {
    const productContainer = document.getElementById(`product-${element.categorias}-${index}`);
    
        productContainer.addEventListener("click",()=> {
        setProductoActivo(element);
        openModal();
});
    
});
}
};
addEvents(hamburgesas);
addEvents(papas);
addEvents(gaseosas);
};