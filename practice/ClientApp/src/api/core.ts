
export const getCategoryById = async (id: number) => {
    const response = await fetch("/api/Categories/"+id, {
        method: "GET"
    })
    return response.json()
}