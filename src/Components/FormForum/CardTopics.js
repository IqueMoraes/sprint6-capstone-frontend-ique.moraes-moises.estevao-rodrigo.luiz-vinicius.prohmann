import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useForum } from "../../Providers/Forum";

export const CardTopics = () => {
  const { topics, searchTopic } = useForum();

  return (
    <>
      {topics
        // eslint-disable-next-line
        .filter((value) => {
          if (searchTopic === "") {
            return value;
          } else if (
            value.category.toLowerCase().includes(searchTopic.toLowerCase())
          ) {
            return value;
          }
        })
        .map((item) => {
          return (
            <Box key={item.id} margin="25px  ">
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      bg="#1B2357"
                      borderRadius="10px 10px 0 0"
                      _hover={{ bg: "#202d85" }}
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        color="#FEA800"
                        fontSize="20px"
                      >
                        <Text w={["90%", "70%"]}>{item.subject}</Text>
                      </Box>
                      <Box
                        borderRadius="47px"
                        bg="white"
                        w={["100px", "150px"]}
                        padding="5px"
                        mr={["10px", "40px", "200px"]}
                      >
                        {" "}
                        {item.category}{" "}
                      </Box>
                      <AccordionIcon color="#FEA800" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    padding={["20px", "30px"]}
                    bg="#D2D1FF"
                    borderRadius="0 0 20px 20px"
                  >
                    <Box
                      display="flex"
                      flexDirection={["column", "row"]}
                      justifyContent="space-between"
                    >
                      <Text
                        w={["100%", "85%"]}
                        mr={["0", "10px"]}
                        lineHeight="1.7"
                      >
                        {item.text}
                      </Text>
                      <Box
                        color="gray"
                        fontStyle="italic"
                        fontSize="15px"
                        display={["flex", "block"]}
                        alignItems="center"
                        justifyContent="space-around"
                        flexDirection="row-reverse"
                      >
                        <Text> {item.date} </Text>
                        <Text mt="4">
                          {" "}
                          Publicado por: <br />
                          {item.author}
                        </Text>
                      </Box>
                    </Box>
                    <Divider
                      orientation="horizontal"
                      borderColor="gray "
                      border="2px"
                      m="10px 0"
                    />
                    <Box>
                      {item.assistantSites &&
                        item.assistantSites.map((item, index) => (
                          <Text key={index} lineHeight="1.7">
                            {" "}
                            {item.assistantSites}{" "}
                          </Text>
                        ))}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          );
        })}
    </>
  );
};
