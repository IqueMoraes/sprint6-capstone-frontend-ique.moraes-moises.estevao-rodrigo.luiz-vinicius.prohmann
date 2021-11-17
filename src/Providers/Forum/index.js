import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../../Services"
import { useAuthToken } from "../AuthToken";


const ForumContext = createContext({})

export const ForumProvider = ({ children }) => {

    const [topics, setTopics] = useState([])
    const [searchTopic, setSearchTopic] = useState("")

    const { authToken, userProfile } = useAuthToken()


    useEffect(() => {
        api
            .get(`/forum`)
            .then(res => {
                setTopics([...res.data])
            })
            .catch(_ => console.log("não pegou os tópicos"))
    }, [])

    const createTopic = (data) => { 

        api
            .post("/forum", data,  {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then(res => {
                setTopics([...topics, res.data])
                console.log(res.data)
            })
            .catch(_ => console.log("não criou tópicos"))
    }


    return (
        <ForumContext.Provider value={{ topics, createTopic, setSearchTopic, searchTopic }}>
            {children}
        </ForumContext.Provider>
    )
}

export const useForum = () => useContext(ForumContext)