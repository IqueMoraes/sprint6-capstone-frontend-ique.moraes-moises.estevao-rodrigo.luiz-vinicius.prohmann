import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../../Services"


const ForumContext = createContext({})

export const ForumProvider = ({ children }) => {

    const [topics, setTopics] = useState([])


    useEffect(() => {
        api
            .get(`/forum`)
            .then(res => {
                setTopics([...res.data])
                console.log(res.data)
            })
            .catch(_ => console.log("não pegou os tópicos"))
    }, [])

    const createTopic = (data) => {
        api
            .post("/forum", data)
            .then(res => setTopics([...topics, res.data]))
            .catch(_ => console.log("não criou tópicos"))
    }

    const getTopics = () => {
        api
            .get("/forum")
            .then(res => setTopics([...topics, res.data]))
            .catch(_ => console.log("não pegou os tópicos"))
    }

    return (
        <ForumContext.Provider value={{ topics }}>
            {children}
        </ForumContext.Provider>
    )
}

export const useForum = () => useContext(ForumContext)