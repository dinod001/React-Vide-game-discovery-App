import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

//game interface for array
export interface Game{
    id:number,
    name:String,
    background_image:string
}

//fetch game response interface for fetching data
interface FetchGameResponse{
    count:number,
    results:Game[]
}

const useGames=()=>{
    const [games,setGames]=useState<Game[]>([])
    const [error,setErrors]=useState("")

    //fetching games
    useEffect(()=>{
        const controller=new AbortController();
        apiClient.get<FetchGameResponse>("/games",{signal:controller.signal})
        .then(response=>setGames(response.data.results))
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setErrors(error.message)
        })
        return ()=>controller.abort()
    },[])

    return {games,error}
}

export default useGames