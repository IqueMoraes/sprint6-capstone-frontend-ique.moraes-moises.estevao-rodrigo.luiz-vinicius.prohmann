import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services";
import { useAuthToken } from "../AuthToken";

const ForumContext = createContext({});

export const ForumProvider = ({ children }) => {

    const [topics, setTopics] = useState([])

    const [searchTopic, setSearchTopic] = useState("")

    // const [comments, setComments] = useState({})
    const [allComments, setAllComments] = useState({})

    const [inputField, setInputField] = useState([{
        assistantSites: ""
    }])

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

        const date = new Date()
        
        const newData = {
            ...data,
            author: userProfile.name,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            likes: 0,
            important: 0,
            assistantSites: inputField,
            comments: []
        }

        api
            .post("/forum", newData,  {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then(res => {
                setTopics([...topics, res.data])
            })
            .catch(_ => console.log("não criou tópicos"))
    }

    const createComment = (data) => {

        api
            .patch(`/forum/2`, data , {
                headers: { Authorization: "Bearer " + authToken },
            })
            .catch(err => console.log(err))    
    }


    return (
        <ForumContext.Provider value={{ 
            topics, 
            createTopic, 
            setSearchTopic, 
            searchTopic,
            inputField,
            setInputField,
            createComment,
            // setComments,
            // comments
        }}>
            {children}
        </ForumContext.Provider>
    )
}

export const useForum = () => useContext(ForumContext)
