import { BarNavigation, BoxBody, FullScreen } from "./styled";

const Initial = () => {
  return (
    <FullScreen>
      <section>
        <figure>
          <img src="#" alt="#" />
          <figcaption>#</figcaption>
        </figure>

        <div>
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

        <section>
          <div>
            <h3>Sobre o aplicativo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem obcaecati eveniet quae excepturi provident
              consectetur quis, quidem cum ea, magnam deleniti quisquam expedita
              voluptatibus ad amet recusandae, veritatis unde nam.
            </p>
          </div>

          <div>
            <figure>
              <img src="#" alt="#" />
              <figcaption>#</figcaption>
            </figure>
          </div>
        </section>

        <section>
          <div>
            <figure>
              <img src="#" alt="#" />
              <figcaption>#</figcaption>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto culpa, ad sed expedita a sit atque temporibus excepturi
              vel fugiat quae ipsa, deserunt nam perspiciatis quam possimus
              quibusdam eaque ea.
            </p>
          </div>

          <div>
            <figure>
              <img src="#" alt="#" />
              <figcaption>#</figcaption>
            </figure>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto culpa, ad sed expedita a sit atque temporibus excepturi
              vel fugiat quae ipsa, deserunt nam perspiciatis quam possimus
              quibusdam eaque ea.
            </p>
          </div>

          <div>
            <figure>
              <img src="#" alt="#" />
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

        <section>
          <h2>Quem Somos</h2>

          <section>
            <div>
              <figure>
                <img src="#" alt="#" />
                <figcaption>#</figcaption>
              </figure>
            </div>

            <div>
              <figure>
                <img src="#" alt="#" />
                <figcaption>#</figcaption>
              </figure>
            </div>

            <div>
              <figure>
                <img src="#" alt="#" />
                <figcaption>#</figcaption>
              </figure>
            </div>
          </section>
        </section>

        <section>
          <h2>Começe Agora</h2>
          <p>Faça login ou cadastre-se para começar agora</p>

          <section>
            <button>Login</button>
            <button>Cadastro</button>
          </section>
        </section>
      </BoxBody>
    </FullScreen>
  );
};

export default Initial;
