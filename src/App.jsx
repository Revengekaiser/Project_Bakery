import { useState } from 'react'
import './App.css'
import './index.css'

function App() {

  // =========================
  // PRODUTOS
  // =========================

  const products = [
    {
      id: 1,
      name: "Pão Artesanal",
      category: "pães",
      description: "Pão fresquinho preparado todos os dias.",
      price: 8.90,
      image: "src/assets/Pão-Artesanal.jpg"
    },

    {
      id: 2,
      name: "Croissant",
      category: "doces",
      description: "Croissant crocante e amanteigado.",
      price: 8.90,
      image: "src/assets/cafe-croissant.jpg"
    },

    {
      id: 3,
      name: "Bolo de Chocolate",
      category: "doces",
      description: "Bolo macio com cobertura de chocolate.",
      price: 12.90,
      image: "src/assets/bolo.jpg"
    },

    {
      id: 4,
      name: "Café Especial",
      category: "bebidas",
      description: "Café preparado com grãos selecionados.",
      price: 6.90,
      image: "src/assets/café-especial.jpg"
    }
  ];


  // =========================
  // ESTADOS
  // =========================

  const [category, setCategory] = useState("todos");

  const [cart, setCart] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);


  // =========================
  // FILTRO
  // =========================

  const filteredProducts =
    category === "todos"
      ? products
      : products.filter(
          product => product.category === category
        );


  // =========================
  // ADICIONAR AO CARRINHO
  // =========================

  function addToCart(product) {

    setCart([
      ...cart,
      product
    ]);

  }


  // =========================
  // REMOVER DO CARRINHO
  // =========================

  function removeFromCart(index) {

    const newCart = [...cart];

    newCart.splice(index, 1);

    setCart(newCart);

  }


  // =========================
  // TOTAL
  // =========================

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );


  // =========================
  // FORMULÁRIO
  // =========================

  function sendMessage(event) {

    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

  }


  return (

    <>

      {/* ================= HEADER ================= */}

      <header>

        <div className="logo">
          🥐 Sweet Bread
        </div>

        <nav>

          <a href="#inicio">
            Inicio
          </a>

          <a href="#cardapio">
            Cardápio
          </a>

          <a href="#sobre">
            Sobre
          </a>

          <a href="#contato">
            Contato
          </a>

        </nav>

        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
        >

          🛒 Carrinho

          <span>
            {cart.length}
          </span>

        </button>

      </header>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="inicio"
      >

        <div className="hero-content">

          <p className="substitle">
            PADARIA ARTESANAL
          </p>

          <h1>
            O sabor que começa
            <span>
              com carinho.
            </span>
          </h1>

          <p>
            Pães fresquinhos, doces artesanais
            e cafés preparados especialmente
            para você.
          </p>

          <div className="hero-buttons">

            <a
              href="#cardapio"
              className="btn"
            >
              Ver Cardápio
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img src="/src/assets/Pães-Frescos.jpg" alt="Pães frescos" />

        </div>

      </section>


      {/* ================= PRODUTOS ================= */}

      <section
        className="products"
        id="cardapio"
      >

        <div className="section-title">

          <p>
            FEITO FRESQUINHO
          </p>

          <h2>
            Nossos favoritos
          </h2>

          <span>
            Alguns dos produtos favoritos
            dos nossos clientes.
          </span>

        </div>


        {/* FILTROS */}

        <div className="filters">

          <button
            onClick={() => setCategory("todos")}
          >
            Todos
          </button>

          <button
            onClick={() => setCategory("pães")}
          >
            Pães
          </button>

          <button
            onClick={() => setCategory("doces")}
          >
            Doces
          </button>

          <button
            onClick={() => setCategory("bebidas")}
          >
            Bebidas
          </button>

        </div>


        {/* PRODUTOS */}

        <div className="product-grid">

          {filteredProducts.map(product => (

            <article
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>

                <div className="product-bottom">

                  <strong>
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </strong>

                  <button
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= PROMOÇÃO ================= */}

      <section className="promotion">

        <div>

          <p>
            OFERTA ESPECIAL
          </p>

          <h2>
            Combo Café da Manhã
          </h2>

          <span>
            Café + Croissant por apenas
          </span>

          <strong>
            R$ 14,90
          </strong>

          <br />

          <button
            className="btn"
            onClick={() => {

              setCart([
                ...cart,
                {
                  id: 100,
                  name: "Combo Café da Manhã",
                  price: 14.90
                }
              ]);

            }}
          >
            Aproveitar Oferta
          </button>

        </div>

      </section>


      {/* ================= SOBRE ================= */}

      <section
        className="about"
        id="sobre"
      >

        <div className="about-image">

          <img src="/src/assets/Interior.jpg" alt="Interior da padaria" />

        </div>

        <div className="about-content">

          <p>
            DESDE 1998
          </p>

          <h2>
            Feito com carinho, todos os dias.
          </h2>

          <p>
            Na Sweet Bread, acreditamos que
            uma boa padaria deve fazer parte
            dos momentos especiais do dia.
          </p>

          <p>
            Trabalhamos com ingredientes
            selecionados e receitas artesanais
            para oferecer produtos fresquinhos
            todos os dias.
          </p>

          <a
            href="#contato"
            className="btn"
          >
            Venha nos visitar
          </a>

        </div>

      </section>


      {/* ================= CONTATO ================= */}

      <section
        className="contact"
        id="contato"
      >

        <div className="section-title">

          <p>
            FALE CONOSCO
          </p>

          <h2>
            Venha nos visitar
          </h2>

        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>
              Sweet Bread Bakery
            </h3>

            <p>
              📍 Rua das Flores, 120
            </p>

            <p>
              📞 (81) 99999-9999
            </p>

            <p>
              ✉ contato@sweetbread.com
            </p>

            <br />

            <h3>
              Horário
            </h3>

            <p>
              Segunda - Sexta: 06:00 - 20:00
            </p>

            <p>
              Sábado: 06:00 - 18:00
            </p>

            <p>
              Domingo: 07:00 - 13:00
            </p>

          </div>


          <form onSubmit={sendMessage}>

            <input
              type="text"
              placeholder="Seu nome"
              required
            />

            <input
              type="email"
              placeholder="Seu e-mail"
              required
            />

            <textarea
              placeholder="Sua mensagem"
              required
            />

            <button
              className="btn"
              type="submit"
            >
              Enviar mensagem
            </button>

          </form>

        </div>

      </section>


      {/* ================= CARRINHO ================= */}

      {cartOpen && (

        <div className="cart-overlay">

          <div className="cart">

            <button
              className="close-cart"
              onClick={() => setCartOpen(false)}
            >
              ✕
            </button>

            <h2>
              Seu pedido
            </h2>


            {cart.length === 0 ? (

              <p>
                Seu carrinho está vazio.
              </p>

            ) : (

              <div>

                {cart.map((product, index) => (

                  <div
                    className="cart-item"
                    key={index}
                  >

                    <span>
                      {product.name}
                    </span>

                    <strong>
                      R$ {product.price
                        .toFixed(2)
                        .replace(".", ",")}
                    </strong>

                    <button
                      onClick={() =>
                        removeFromCart(index)
                      }
                    >
                      Remover
                    </button>

                  </div>

                ))}

              </div>

            )}


            <div className="cart-total">

              <span>
                Total:
              </span>

              <strong>
                R$ {total.toFixed(2).replace(".", ",")}
              </strong>

            </div>

            <button
              className="btn checkout"
              onClick={() => {

                if (cart.length === 0) {

                  alert("Seu carrinho está vazio!");

                  return;

                }

                alert("Pedido finalizado!");

                setCart([]);

                setCartOpen(false);

              }}
            >
              Finalizar Pedido
            </button>

          </div>

        </div>

      )}


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="logo">
          🥐 Sweet Bread
        </div>

        <p>
          A padaria que transforma momentos
          simples em momentos especiais.
        </p>

        <div className="social">
          Instagram · Facebook · WhatsApp
        </div>

        <small>
          © 2026 Sweet Bread Bakery
        </small>

      </footer>

    </>

  );

}

export default App;