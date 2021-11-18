import { BarNavigation, BoxBody, FullScreen } from "./styled";
import { Button } from "@chakra-ui/button";
import CardDevs from "../../Components/CardDevs";
import { HStack } from "@chakra-ui/layout";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handlerAccess = (local) => {
    history.push(`/${local}`);
  };

  return (
    <FullScreen>
      <section className="top_section">
        <figure>
          <img src="#" />
        </figure>

        <div className="text_open">
          <h1>Tchau Mamãe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tempore voluptatibus error iste debitis tenetur omnis veniam saepe
            odio a velit est reiciendis illo facilis distinctio nesciunt
            molestias unde laboriosam!
          </p>
        </div>
      </section>

      <BoxBody>
        <BarNavigation>
          <ul>
            <li> Introdução</li>
            <li> Creditos</li>
            <li> Começar</li>
          </ul>
        </BarNavigation>

        <section className="section_about">
          <div>
            <figure>
              <img src="#" />
              <figcaption>#</figcaption>
            </figure>
          </div>

          <div>
            <h3>Sobre o aplicativo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem obcaecati eveniet quae excepturi provident
              consectetur quis, quidem cum ea, magnam deleniti quisquam expedita
              voluptatibus ad amet recusandae, veritatis unde nam.
            </p>
          </div>
        </section>

        <section className="section_min_cards">
          <div className="section_min_cards_box">
            <figure>
              <img src="#" />
              <figcaption>#</figcaption>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto culpa, ad sed expedita a sit atque temporibus excepturi
              vel fugiat quae ipsa, deserunt nam perspiciatis quam possimus
              quibusdam eaque ea.
            </p>
          </div>

          <div className="section_min_cards_box">
            <figure>
              <img src="#" />
              <figcaption>#</figcaption>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto culpa, ad sed expedita a sit atque temporibus excepturi
              vel fugiat quae ipsa, deserunt nam perspiciatis quam possimus
              quibusdam eaque ea.
            </p>
          </div>

          <div className="section_min_cards_box">
            <figure>
              <img src="#" />
              <figcaption>#</figcaption>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto culpa, ad sed expedita a sit atque temporibus excepturi
              vel fugiat quae ipsa, deserunt nam perspiciatis quam possimus
              quibusdam eaque ea.
            </p>
          </div>
        </section>

        <section className="section_tean">
          <h2>Quem Somos</h2>

          <section className="section_tean_devs">
            <CardDevs
              name="Ique Moraes"
              devOffice="QA"
              devGithub="https://github.com/IqueMoraes"
              devLinkedin="https://www.linkedin.com/in/ique-moraes-814129212/"
            />

            <CardDevs
              name="Rodrigo Luiz"
              devOffice="Q.A"
              devGithub="https://github.com/rodrigorugal"
              devLinkedin="https://www.linkedin.com/in/rodrigo-andrade-a02898197"
            />

            <CardDevs
              name="Moisés Gaioli"
              devOffice="Q.A"
              devGithub="https://github.com/moisesgaioli"
              devLinkedin="https://www.linkedin.com/in/moises-gaioli-estevao"
            />

            <CardDevs
              name="Vinicius Prohmann"
              devOffice="Q.A"
              devGithub="https://github.com/vinapro91"
              devLinkedin="https://www.linkedin.com/in/viniciusprohmann/"
            />
          </section>
        </section>

        <section className="section_start">
          <h2>Começe Agora</h2>
          <p>Faça login ou cadastre-se para começar agora</p>

          <HStack spacing="24px" mt="20px">
            <Button
              type="submit"
              bgGradient="linear(to-b, bg.200, pink.500)"
              color="white"
              _hover={{ bgGradient: "linear(to-b,  pink.500, bg.200)" }}
              onClick={() => {
                handlerAccess("login");
              }}
            >
              Login
            </Button>

            <Button
              type="submit"
              bgGradient="linear(to-b, bg.200, #e05a70)"
              color="white"
              _hover={{ bgGradient: "linear(to-b,  #b12139, bg.200)" }}
              onClick={() => {
                handlerAccess("register");
              }}
            >
              Cadastro
            </Button>
          </HStack>
        </section>
      </BoxBody>
    </FullScreen>
  );
};

export default Home;
