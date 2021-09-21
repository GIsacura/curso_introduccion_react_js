import React from "react";

//Custom Hook para el manejo del local storage
function useLocalStorage(itemName, initialValue){
const [error, setError] = React.useState(false)
const [loading, setLoading] = React.useState(true)
const [item, setItem] = React.useState(initialValue);

React.useEffect(() => {
    setTimeout(()=> {
    try{
        //.........Aqui se verifica si hay un local storage que tenga elementos, en caso de que no haya, se crea uno..................................
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(localStorageItem); //En caso de que el local storage ya tenga elementos, los guardamos en una variable para renderisarlos
        }
        setItem(parsedItem)
        setLoading(false)
    }
    catch(err){
        setError(err)
    }

    }, 1000)
})
//.......................Aqui creamos el estado de la lista de todos, para poder modificarlo en base a la interaccion del usuario basados en el almacenamiento del local storage...................................

const saveItem = (newItem) => {
    try{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    }
    catch(err){
    setError(err)
    }
};

return {
    item,
    saveItem,
    loading,
    error
};
}

export {useLocalStorage}