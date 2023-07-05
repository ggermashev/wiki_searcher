import axios from "axios"
import {WIKI_URL} from "./settings";

export async function getPages(query: string, limit = 10) {
    const response = await axios.get(WIKI_URL + `&search=${query}&limit=${limit}`)
    return response.data
}