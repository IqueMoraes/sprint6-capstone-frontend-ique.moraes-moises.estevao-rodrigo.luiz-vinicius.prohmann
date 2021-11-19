import { Link } from "react-router-dom";
import { AchievmentCard } from "../../Components/Achievments";
import { useAuthToken } from "../../Providers/AuthToken";
import { Flex, Heading } from "@chakra-ui/react";

import ProgressBar from "@ramonak/react-progress-bar";

import { useAdverts } from "../../Providers/Adverts";
import { useEffect } from "react";
import { AdvertsProfile } from "../../Components/AdvertsProfile";

import { Box } from "@chakra-ui/layout";
// import ProgressBar from "@ramonak/react-progress-bar";

export const Dashboard = () => {
  const { myAdverts, deletAdverts, getMyAdverts } = useAdverts();
  const { userProfile, userId, userLevel, progressPoints } = useAuthToken();
  const UserAge = (birthUser) => {
    const birthArray = birthUser.split("/").map((str) => Number(str));
    const birthDate = new Date(birthArray[2], birthArray[0], birthUser[1]);
    const date_ms = Date.now() - birthDate.getTime();
    const age_ms = new Date(date_ms);

    return Math.abs(age_ms.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    getMyAdverts();
    // eslint-disable-next-line
  }, [userId]);

  const OutSince = (leavingDate) => {
    const monthArray = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const leavingDateArray = leavingDate.split("/").map((str) => Number(str));

    return monthArray[leavingDateArray[0]] + " de " + leavingDateArray[2];
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="flex-end"
      p="0 10px 0 0"
    >
      <Box
        w="100%"
        maxWidth="950px"
        h="90%"
        bg="#ffffff"
        borderRadius="20px"
        p="10px"
      >
        <Box w="100%" h="100%" overflow="auto">
          {userProfile && (
            <Flex
              w="100%"
              p="10px 20px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <Box w="80%" maxWidth="700px">
                  <ProgressBar
                    completed={progressPoints}
                    bgColor="#e3e6"
                    height="20px"
                    width="100%"
                    labelAlignment="left"
                    baseBgColor="#1B235780"
                    labelColor="#fcfbfb"
                    margin="10px 0"
                    borderRadius="5px"
                  />
                  <Heading as="h3" size="lg" color="#1B2357" pb="5px">
                    {userProfile.name}
                  </Heading>
                  <Heading as="h4" size="md" color="#1B2357">
                    {UserAge(userProfile.birth)} anos
                  </Heading>
                  <Heading as="h4" size="md" color="#1B2357">
                    Fora desde {OutSince(userProfile.outSince)}
                  </Heading>
                  <Heading as="h4" size="md" color="#1B2357">
                    Bio: {userProfile.bio}
                  </Heading>
                </Box>

                <Box>
                  <Heading as="h2" size="4xl" h="100%" color="#FEA800">
                    {userLevel}
                  </Heading>
                </Box>
              </Flex>
            </Flex>
          )}
          <Box p="0 15px" minWidth="100%">
            <Heading as="h3" size="md" color="#1B2357" p="15px 0">
              Minhas conquistas
            </Heading>
            <Flex
              overflowX="scroll"
              minWidth="100%"
              overflou="auto"
              bg="#E0DFFD"
              borderRadius="10px"
              p="5px 20px"
            >
              {userProfile?.achievments ? (
                userProfile.achievments.map((item) => (
                  <AchievmentCard
                    key={item.id}
                    category={item.category}
                    title={item.title}
                  />
                ))
              ) : (
                <>
                  <h5>
                    Busque novas conquistas e ganhe pontos para subir de nível
                  </h5>
                  <Link to="/achievments">Ver conquistas </Link>
                </>
              )}
            </Flex>
          </Box>

          <Box p="0 15px" mb="20px">
            <Heading as="h3" size="md" color="#1B2357" p="15px 0">
              Meus anúncios
            </Heading>
            <Flex
              flexDirection="column"
              bg="white"
              p="5px"
              borderRadius="8px"
              mb="20px"
              minWidth="100%"
              overflow="auto"
            >
              <Box
                display="flex"
                flexDirection="column"
                minWidth="635px"
                w="100%"
              >
                <Box
                  bg="#573353"
                  color="aliceblue"
                  fontSize="16px"
                  fontWeight="600"
                  p="0 10px"
                  borderRadius="10px"
                  w="100%"
                  h="30px"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Box
                    minWidth="200px"
                    m="0 10px"
                    paddingLeft="25px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box as="h3">Categoria</Box>
                  </Box>
                  <Box minWidth="100px" m="0 10px">
                    Titulo
                  </Box>
                  <Box minWidth="100px" m="0 10px">
                    Local
                  </Box>
                  <Box minWidth="100px" m="0 10px">
                    Criado em
                  </Box>
                  <Box minWidth="100px" m="0 10px">
                    Excluir
                  </Box>
                </Box>
                {myAdverts.map((item, index) => (
                  <AdvertsProfile
                    key={index}
                    index={index}
                    name={item.name}
                    date={item.date}
                    localization={item.localization}
                    category={item.category}
                    id={item.id}
                    userId={item.userId}
                    description={item.description}
                    delet={deletAdverts}
                  />
                ))}
              </Box>
            </Flex>
          </Box>
          <Box h="10px" w="100%"></Box>
        </Box>
      </Box>
    </Flex>
  );
};
