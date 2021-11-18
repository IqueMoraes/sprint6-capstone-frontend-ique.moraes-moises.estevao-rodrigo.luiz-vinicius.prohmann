import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text  } from "@chakra-ui/react"
import { useForum } from "../../Providers/Forum"
import { AiFillLike, AiFillStar } from "react-icons/ai"
import { ModalComents } from "./ModalComents"

export const CardTopics = () => {

    const { topics, searchTopic } = useForum()


    return (
        <>
            {
                topics
                    .filter(value => {
                        if(searchTopic === "") {
                            return value
                        } else if(value.category.toLowerCase().includes(searchTopic.toLowerCase())) {
                            return value
                        }
                    })
                    .map(item => {
                        return <Box key={item.id} margin="20px  ">
                            <Accordion allowMultiple>
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton bg="#1B2357">
                                        <Box flex="1" textAlign="left" color="#FEA800" fontSize="20px">
                                            <Text>{item.subject}</Text>
                                        </Box>
                                        <Box display="flex" alignItems="center" fontSize="20px" mr="150px">
                                                <AiFillLike color="white" />
                                                <Text color="white" mr="50px" ml="5px">{item.likes}</Text>
                                                <AiFillStar color="white" mr="5px" />
                                                <Text color="white" ml="5px" >{item.important}</Text>
                                        </Box>
                                        <Box borderRadius="47px" bg="white" w="150px" padding="5px" mr="200px"> {item.category} </Box>
                                        <AccordionIcon color="#FEA800" />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} bg="#D2D1FF">
                                        <Box display="flex" justifyContent="space-between">
                                            <Text padding="30px"> {item.text} </Text>
                                            <Text> {item.date} </Text>
                                        </Box>
                                        <Box>
                                            <Text> Publicado por: <br /> 
                                                {item.author}
                                            </Text>
                                
                                        </Box>
                                        <Box>
                                            {
                                                item.assistantSites && (
                                                    item.assistantSites.map((item, index) => <Text key={index}> {item.assistantSites} </Text>)
                                                )

                                            }
                                        </Box>


                                        <Accordion allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton bg="#30467D" mt="10">
                                                <Box flex="1" textAlign="left" color="white">
                                                    Comentários
                                                </Box>
                                                <AccordionIcon color="white" />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4} bg="#E0DFFD" border="2px solid black">
                                                <Box>
                                                    {
                                                        item.comments && (
                                                            item.comments.map((item, index) => {
                                                                return (
                                                                    <Box key={index}>
                                                                        <Text> {item.message} </Text>
                                                                        <Text> {item.author} </Text>  
                                                                    </Box>
                                                                    
                                                                    )
                                                                })
                                                                )
                                                    } 
                                                </Box>

                                                <ModalComents />

                                            </AccordionPanel>
                                        </AccordionItem>
                                        </Accordion>
        

                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    })
                }
        </>
    )
}