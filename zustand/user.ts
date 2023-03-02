import {create} from "zustand"
import useFetch from "../utils/useFetch"

const {} = useFetch('http://localhost:1339')

const userStore = create((set)=>({
    user:[]
}))