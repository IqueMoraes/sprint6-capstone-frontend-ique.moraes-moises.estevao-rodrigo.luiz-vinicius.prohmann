import { Box, Heading, Input, Flex, Spacer } from "@chakra-ui/react"
import { CardTopics } from "../../Components/FormForum/CardTopics"
import { ModalCreateTopic } from "../../Components/FormForum/ModalCreateTopic"
import { useForum } from "../../Providers/Forum"

export const Forum = () => {

    const { setSearchTopic }= useForum()
    return (
        <>
           <Flex>
                <Box p="2">
                    <Heading as="h1"> Forum </Heading>
                </Box>
                <Spacer />
                <Box>
                    <ModalCreateTopic />
                    <Input onChange={e => setSearchTopic(e.target.value)} />
                </Box>
            </Flex>
            
            <Box>
                <CardTopics />
            </Box>
        </>
    )
}  