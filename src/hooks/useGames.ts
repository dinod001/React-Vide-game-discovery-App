import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"


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

//fetch game response interface for fetching data
interface FetchGameResponse{
    count:number,
    results:Game[]
}

const useGames=()=>{
    const [games,setGames]=useState<Game[]>([])
    const [error,setErrors]=useState("")
    const [loading,setLoading]=useState(false)

    //fetching games
    useEffect(()=>{
        const controller=new AbortController();

        setLoading(true)

        apiClient.get<FetchGameResponse>("/games",{signal:controller.signal})
        .then(response=>{
            setGames(response.data.results)
            setLoading(false)
        })
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setErrors(error.message)
            setLoading(false)
        })
        return ()=>controller.abort()
    },[])

    return {games,error,loading}
}

export default useGames