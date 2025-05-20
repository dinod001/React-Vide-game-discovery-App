import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import useData from "./useData"
import type { Genre } from "./useGenre"


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

const useGames=(selectedGenre:Genre | null)=>useData<Game>("/games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id])

export default useGames