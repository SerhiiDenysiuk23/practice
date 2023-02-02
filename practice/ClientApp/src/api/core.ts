
export const getCategoryList = async () => {
    const response = await fetch("/api/Categories", {
        method: "GET"
    })
    return response.json()
}
export const getCategoryById = async (id: number) => {
    const response = await fetch("/api/Categories/"+id, {
        method: "GET"
    })
    return response.json()
}
export const postCategory = async (name: string) => {
    const response = await fetch("/api/Categories", {
        method: "GET",
        body: name
    })
    return response.json()
}