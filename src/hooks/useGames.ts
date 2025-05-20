import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import useData from "./useData"


//platform interface for icons
export interface Platform{
    id:number,
    name:string,
    slug:string
}
//game interface for array
export interface Game{
    id:number,
    name:String,
    background_image:string,
    platforms:{platform:Platform}[],
    metacritic:number
}

const useGames=()=>useData<Game>("/games")

export default useGames