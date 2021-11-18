import { Link } from "react-router-dom";
import { AchievmentCard } from "../../Components/Achievments";
import { useAuthToken } from "../../Providers/AuthToken";
import { Flex, Heading } from "@chakra-ui/react";
import { useAdverts } from "../../Providers/Adverts";
import { useEffect } from "react";
import { AdvertsProfile } from "../../Components/AdvertsProfile";
import { Box, Grid } from "@chakra-ui/layout";

export const Dashboard = () => {
  const { myAdverts, deletAdverts, getMyAdverts } = useAdverts();
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
  }, []);
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
  const { userProfile } = useAuthToken();

  return (
    <Box w="100vw" h="100vh">
      {userProfile && (
        <Flex
          w="100"
          p="10px 20px"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Heading as="h3" size="lg" color="aliceblue" pb="5px">
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
          </div>

          <div>
            <Heading as="h2" size="4xl" h="100%" lineHeight="" color="#FEA800">
              {userProfile.level}
            </Heading>
          </div>
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
          p="20px 0 0 20px"
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
        <h3>Meus anúncios</h3>
        <Flex
          flexDirection="column"
          bg="white"
          p="5px"
          borderRadius="8px"
          mb="20px"
          minWidth="100%"
          overflow="auto"
        >
          <Box display="flex" flexDirection="column" w="635px">
            <Box
              bg="#e3e"
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
                fontSize="14px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box as="h3">Categoria</Box>
              </Box>
              <Box minWidth="100px" m="0 10px" fontSize="14px">
                Titulo
              </Box>
              <Box
                minWidth="100px"
                m="0 10px"
                fontSize="14px"
                fontWeight="Bold"
              >
                Local:
              </Box>
              <Box minWidth="100px" m="0 10px" fontSize="14px">
                Criado em:
              </Box>
              <Box minWidth="100px" m="0 10px" fontSize="14px">
                Excluir
              </Box>
            </Box>
            {myAdverts.map((item, index) => (
              <AdvertsProfile
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
  );
};
