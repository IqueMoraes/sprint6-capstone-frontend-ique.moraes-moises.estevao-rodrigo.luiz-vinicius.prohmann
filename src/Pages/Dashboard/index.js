import { Link } from "react-router-dom";
import { AchievmentCard } from "../../Components/Achievments";
import { useAuthToken } from "../../Providers/AuthToken";
import { Flex, Heading } from "@chakra-ui/react";
import { useAdverts } from "../../Providers/Adverts";
import { AdvertsCards } from "../../Components/AdvertsCards";
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
    <div>
      {userProfile && (
        <Flex>
          <div style={{ marginRight: "50px" }}>
            <Heading as="h3" size="lg" color="#1B2357" p="15px 0 5px">
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
      <br />
      <div>{/* <Link to="/routines">Minha rotina</Link> */}</div>
      <br />
      <div>
        <Heading as="h3" size="md" color="#1B2357" p="15px 0">
          Minhas conquistas
        </Heading>
        <Flex
          overflowX="scroll"
          w="100%"
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
      </div>

      <div>
        <h3>Meus anúncios</h3>
        <Flex
          flexDirection="column"
          bg="white"
          p="5px"
          borderRadius="8px"
          mb="20px"
        >
          <Grid
            templateColumns="repeat(6, 1fr)"
            gap={6}
            bg="gray.100"
            borderRadius="10px"
            alignItems="center"
          >
            <Flex alignItems="center" justifyContent="center">
              <Box>Categoria: </Box>
            </Flex>
            <Box fontSize="14px">Titulo</Box>
            <Box fontSize="14px" fontWeight="Bold">
              Local:
            </Box>
            <Box fontSize="14px">Criado em: </Box>
            <Box>Excluir</Box>
          </Grid>
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
        </Flex>
      </div>
    </div>
  );
};
