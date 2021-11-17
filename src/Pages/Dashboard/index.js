import { Link } from "react-router-dom";
import { AchievmentCard } from "../../Components/Achievments";
import { useAuthToken } from "../../Providers/AuthToken";
import { Flex, Heading } from "@chakra-ui/react";

export const Dashboard = () => {
  const UserAge = (birthUser) => {
    const birthArray = birthUser.split("/").map((str) => Number(str));
    const birthDate = new Date(birthArray[2], birthArray[0], birthUser[1]);
    const date_ms = Date.now() - birthDate.getTime();
    const age_ms = new Date(date_ms);

    return Math.abs(age_ms.getUTCFullYear() - 1970);
  };

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
      { userProfile && <Flex>
        <div style={{marginRight:"50px"}}>
        <Heading as="h3" size="lg" color="#1B2357" p="15px 0 5px">
          {userProfile.name}
  </Heading>
          <Heading as="h4" size="md" color="#1B2357">{UserAge(userProfile.birth)} anos</Heading>
          <Heading as="h4" size="md" color="#1B2357">Fora desde {OutSince(userProfile.outSince)}</Heading>
          <Heading as="h4" size="md" color="#1B2357">Bio: {userProfile.bio}</Heading>

        </div>
        <div>
          <Heading as="h2" size="4xl" h="100%" lineHeight="" color="#FEA800">
            {userProfile.level}
          </Heading>
        </div>
      </Flex>}
      <br />
      <div>{/* <Link to="/routines">Minha rotina</Link> */}</div>
      <br />
      <div>
      <Heading as="h3" size="md" color="#1B2357" p="15px 0">
    Minhas conquistas
  </Heading>
        <Flex overflowX="scroll" w="100%" bg="#E0DFFD" borderRadius="10px" p="20px 0 0 20px">
          {userProfile?.achievments ? (
            userProfile.achievments.map((item) => (              
                <AchievmentCard key={item.id} category={item.category} title={item.title} />          

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

      <br />
      <br />
      <br />

      <div>
        <h3>Meus anúncios</h3>
        <ul>{}</ul>
      </div>
    </div>
  );
};
