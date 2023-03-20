import {Color} from "../types/Color";
import {Category} from "../types/Category";

export type Controller = "Categories" | "Colors" | "Sizes"
type dataType = Category | Color

export const getListQuery = async (controller: Controller) => {
    try {
        const response = await fetch(`/api/${controller}`, {
            method: "GET"
        })
        return response.json()
    }
    catch (e){
        console.error(e)
    }
}

export const postQuery = async (controller: Controller, data: dataType) => {
    try {
        console.warn(data)
        const response = await fetch(`/api/${controller}`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }catch (e){
        console.error(e)
    }
}

export const deleteQuery = async (controller: Controller, id: number) => {
    try {
        const response = await fetch(`/api/${controller}/${id}`, {
            method: "DELETE"
        })
        return response.ok
    }catch (e){
        console.error(e)
    }
}