import { Box, Heading } from "@chakra-ui/react"
import { CardTopics } from "../../Components/FormForum/CardTopics"
import { ModalCreateTopic } from "../../Components/FormForum/ModalCreateTopic"

export const Forum = () => {
    return (
        <>
            <Box>  
                <Heading as="h1"> Forum </Heading>
                <ModalCreateTopic />
            </Box>

            <Box>
                <CardTopics />
            </Box>
        </>
    )
}  