import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface Genre{
    id:number,
    name:string
}

interface FetchGenreResponse{
    count:number,
    results:Genre[]
}

const useGenre=()=>{
    const [genre,setGenres]=useState<Genre[]>([])
    const [error,setErrors]=useState("")
    const [loading,setLoading]=useState(false)

    //fetching games
    useEffect(()=>{
        const controller=new AbortController();

        setLoading(true)

        apiClient.get<FetchGenreResponse>("/genres",{signal:controller.signal})
        .then(response=>{
            setGenres(response.data.results)
            setLoading(false)
        })
        .catch(error=>{
            if(error instanceof CanceledError) return;
            setErrors(error.message)
            setLoading(false)
        })
        return ()=>controller.abort()
    },[])

    return {genre,error,loading}
}

export default useGenre