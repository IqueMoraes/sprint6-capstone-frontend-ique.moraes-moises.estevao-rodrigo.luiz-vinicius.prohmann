import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text  } from "@chakra-ui/react"
import { useForum } from "../../Providers/Forum"

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
                                            {item.subject}
                                        </Box>
                                        <Box borderRadius="47px" bg="white" w="150px" padding="5px" mr="200px"> {item.category} </Box>
                                        <AccordionIcon color="#FEA800" />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} bg="#D2D1FF">
                                        <Box >
                                            <Text padding="30px"> {item.text} </Text>
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
                                                    {/* <Text> {item.comments.author} </Text>
                                                    <Text> {item.comments.text} </Text>   */}
                                                </Box>
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