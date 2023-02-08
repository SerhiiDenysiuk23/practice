import {Category} from "../types/Category";

export const categoryQueries = {
    getCategoryList: async () => {
        try {
            const response = await fetch("/api/Categories", {
                method: "GET"
            })
            return response.json()
        }
        catch (e){
            console.error(e)
        }
    },
    postCategory: async (category: Category) => {
        try {
            console.warn(category)
            const response = await fetch("/api/Categories", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            })
            return response.json()
        }catch (e){
            console.error(e)
        }
    },
    deleteCategory: async (id: number) => {
        try {
            const response = await fetch(`/api/Categories/${id}`, {
                method: "DELETE"
            })
            return response.ok
        }catch (e){
            console.error(e)
        }
    }
}