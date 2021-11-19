import { BarNavigation, BoxBody, FullScreen } from "./styled";
import { Button } from "@chakra-ui/button";
import CardDevs from "../../Components/CardDevs";
import { HStack } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import imageDevVinicius from "../../assets/images/vinicius.jpeg";
import imageDevRodrigo from "../../assets/images/rodrigo.jpeg";
import imageDevIque from "../../assets/images/Ique.jpeg";
import imageDevMoizes from "../../assets/images/moizes.jpeg";
import imageSectionTop from "../../assets/images/UnDrawFollow.png";
import imageSectionAbout1 from "../../assets/images/achievmentFront1.png";
import imageSectionAbout2 from "../../assets/images/undraw_Collaborators_re_hont.png";
import imageSectionAbout3 from "../../assets/images/undraw_web_shopping_re_owap.png";
import { Heading } from '@chakra-ui/react';

const Home = () => {
  const history = useHistory();

  const handlerAccess = (local) => {
    history.push(`/${local}`);
  };

  return (
    <FullScreen>
      <section className="top_section">
      <Heading as="h3" color="white" fontSize="36px" mb="30px" border="3px solid #FEA800"  borderRadius="40px" padding="15px 30px" fontFamily="Comfortaa">Tchau, mamãe</Heading>
        
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
              <img src={imageSectionTop} alt="imgSectionTop" />
            </figure>
          </div>

          <div>
            <h3>Sobre o aplicativo</h3>
            <p>
              O Tchau Mamãe é um espaço coletivo de debates e compartilhamento
              de experiencias. Aqui você vai poder conhecer vários segredos da
              vida de morar sozinho que podem ajudar você a se organizar nesse
              novo momento.
            </p>
          </div>
        </section>

        <section className="section_min_cards">
          <div className="section_min_cards_box">
            <figure>
              <img src={imageSectionAbout1} alt="img1" />
            </figure>

            <p>
              Aqui no Tchau Mamãe você vai poder gerenciar suas rotina de forma
              divertida.
            </p>
          </div>

          <div className="section_min_cards_box">
            <figure>
              <img src={imageSectionAbout2} alt="img2" />
            </figure>

            <p>Compartilhe e adquira novos "Life Hacks" na nosso Forum.</p>
          </div>

          <div className="section_min_cards_box">
            <figure>
              <img src={imageSectionAbout3} alt="img3" />
            </figure>

            <p>
              Crie e visualize os anúncios que podem facilitar sua vida
              doméstica.
            </p>
          </div>
        </section>

        <section className="section_tean">
          <h2>Quem Somos</h2>

          <section className="section_tean_devs">
            <CardDevs
              name="Ique Moraes"
              devOffice="Tech leader"
              image={imageDevIque}
              devGithub="https://github.com/IqueMoraes"
              devLinkedin="https://www.linkedin.com/in/ique-moraes-814129212/"
            />

            <CardDevs
              name="Rodrigo Luiz"
              image={imageDevRodrigo}
              devOffice="Product Owner"
              devGithub="https://github.com/rodrigorugal"
              devLinkedin="https://www.linkedin.com/in/rodrigo-andrade-a02898197"
            />

            <CardDevs
              name="Moisés Gaioli"
              image={imageDevMoizes}
              devOffice="Quality Assurance"
              devGithub="https://github.com/moisesgaioli"
              devLinkedin="https://www.linkedin.com/in/moises-gaioli-estevao"
            />

            <CardDevs
              name="Vinicius Prohmann"
              image={imageDevVinicius}
              devOffice="Scrum Master"
              devGithub="https://github.com/vinapro91"
              devLinkedin="https://www.linkedin.com/in/viniciusprohmann/"
            />
          </section>
        </section>

        <section className="section_start">
          <h2>Começe Agora</h2>
          <p>
            Faça <span>login</span> ou <span> cadastre-se</span> para começar
            agora
          </p>

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
