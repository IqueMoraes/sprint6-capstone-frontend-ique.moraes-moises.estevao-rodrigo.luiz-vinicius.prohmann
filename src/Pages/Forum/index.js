import { Box, Heading, Divider } from "@chakra-ui/react"
import { CardTopics } from "../../Components/FormForum/CardTopics"
import { ModalCreateTopic } from "../../Components/FormForum/ModalCreateTopic"
import { Input } from "../../Components/input"
import { useForum } from "../../Providers/Forum"
import { FiSearch } from "react-icons/fi"

export const Forum = () => {

    const { setSearchTopic }= useForum()

    return (

            <Box bg="white" maxHeight="90vh" overflow="scroll" margin="4" borderRadius="20px">  
                <Box display="flex" w="100%" p="5" alignItems={["flex-start", "flex-start", "center"]} flexDirection={["column", "column", "row"]} position="relative">
                    <Heading as="h1" color="#FEA800" mr={["0", "0", "30px", "200px"]} ml="20px" fontSize="60px"> Mural </Heading>
                    <ModalCreateTopic />
                    <Box 
                        p="2" 
                        display={["flex"]} 
                        flexDirection={["column", "column", "row"]} 
                        position={["static","absolute","static","absolute"]} 
                        right={["0px"]} 
                        mr="20px"
                    >
                        <Input
                            onChange={e => setSearchTopic(e.target.value)}
                            placeholder="Buscar por categoria"
                            w="250px"
                            icon={FiSearch}
                        />
                    </Box>
                </Box>
                
                <Divider orientation="horizontal" border="5px solid" w="97%" m="0 auto" />
                
                <Box borderRadius="20px">
                    <CardTopics />
                </Box>
            </Box>
 
    )
}  