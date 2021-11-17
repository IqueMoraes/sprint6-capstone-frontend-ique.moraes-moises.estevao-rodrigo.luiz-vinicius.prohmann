import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text  } from "@chakra-ui/react"
import { useForum } from "../../Providers/Forum"

export const CardTopics = () => {

    const { topics } = useForum()

    return (
        <>
            {
                topics.map(item => {
                    return <Box key={item.id}>
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {item.subject}
                                    </Box>
                                    <Box> {item.category} </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Box>
                                        <Text> {item.text} </Text>
                                    </Box>

                                    <Accordion>
                                    <AccordionItem>
                                        <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Comentários
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Box> 
                                                <Text> {item.comments.author} </Text>
                                                <Text> {item.comments.text} </Text>  
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