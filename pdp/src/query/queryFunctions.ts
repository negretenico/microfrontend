import axios from 'axios'
const getAllProducts = async ()=>{
    const url = new URL('http://localhost:5000/api/products/')
    return (await axios.get(url.href)).data
}
const getSingleProductGroup = async (id:string)=>{
    const url = new URL(`http://localhost:5000/api/products/${id}`)
    return await axios.get(url.href)
} 

export const QUERY_FUNCTIONS = {
    getAll : getAllProducts,
    getSingleProductGroup: (id: string) => getSingleProductGroup(id)
}