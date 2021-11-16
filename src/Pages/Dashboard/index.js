import { Link } from "react-router-dom";
import { AchievmentCard } from "../../Components/Achievments";
import { useAuthToken } from "../../Providers/AuthToken";

const exampleUser = {
  email: "kenzinho@mail.com",
  password: "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
  name: "Kenzinho",
  birth: "05/16/1983",
  urlSocialMedia: "instagram.com/ffafelipe/",
  outSince: "10/10/2021",
  bio: "generic Description",
  id: 1,
  points: 325,
  level: 2,
  achievments: [
    {
      title: "Limpar espelho",
      category: "cleaning",
      id: 1
    },
    {
      title: "Limpar vidro",
      category: "cleaning",
      id: 2

    },
    {
      title: "Descongelar carne",
      category: "cooking",
      id: 3

    },
    {
      title: "Passar roupa",
      category: "maintenance",
      id: 4

    },
    {
      title: "Furar parede",
      category: "maintenance",
      id: 5

    },
    {
      title: "Trocar resistência do chuveiro",
      category: "eletricity",
      id: 6

    },
  ],
};

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
   

  // const { userInfoProfile, ShowProfile } = useUserProfile()
  // console.log(ShowProfile);

  return (
    <div>
      <div>
        {/* div de informações do usuário */}
        <div>
          <h2>{userProfile.name}</h2>
          <h4>{UserAge(userProfile.birth)} anos</h4>
          <h4>Fora desde {OutSince(userProfile.outSince)}</h4>
          <h4>Bio: {userProfile.bio}</h4>
        </div>
        <div>
          <h2>Nível {userProfile.level}</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link to="/routines">Minha rotina</Link>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h3>Conquistas</h3>
        <ul style={{ display: "flex", overflowX: "scroll", overflowY:"hidden" }}>
          {userProfile.achievments ? (
            exampleUser.achievments.map((item) => (
              <li key={item.id}
                style={{
                  width: "fit-content",
                  margin: "20px",
                  padding: "15px",
                  boxSizing:"border-box"
                }}
              >
                <AchievmentCard category={item.category} title={item.title} />
              </li>
            ))
          ) : (
            <>
              <h5>
                Busque novas conquistas e ganhe pontos para subir de nível
              </h5>
              <Link to="/achievments">Ver conquistas </Link>
            </>
          )}
        </ul>
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
