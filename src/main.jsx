import React from 'react'
import ReactDOM from 'react-dom/client'
import Beneficio from './componentes/Beneficio'
import "./CSS/index.css"
import "./CSS/indexResponsivo.css"
import MokupSite from './componentes/MokupSite'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className="grid-container">
      <img className="logo" src="/src/Imagens/logo-involusite.png" alt="Logo Involusite" width={70} />
      <a href="https://wa.me/5581986437864" target="_blank" rel="noreferrer"><button className="botaoSecundario cabecalho">Entre em contato direto comigo</button></a>
    </header>
    <main>
      <section className='CTA-main grid-container'>
        <div className='CTA'>
          <h1>Lucre online</h1>
          <h2>Desenvolva sua autoridade digital</h2>
          <div className="botoes">
            <a href="https://wa.me/5581986437864?text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+o+desenvolvimento+de+um+site" target="_blank" rel="noreferrer"><button className="botaoPrimario">Crie seu site</button></a>
            <a href="#sites"><button className="botaoSecundario">Ver Modelos</button></a>
          </div>
        </div>
        <img class='desenhoSite' width={569} src="/src/Imagens/Desenho-site.svg" alt="desenho de exemplar de site em svg" />
      </section>
      <section className='beneficios'>
        <div className="conteiner">
          <Beneficio caminhoIMG="/src/Imagens/Desenho-site-seguro.svg" altIMG="Desenho de página segura svg" titulo='Segurança' desc='Seu site estará sendo construído com segurança de ponta a ponta SSL.' />
          <Beneficio caminhoIMG="/src/Imagens/Desenho-site-analise.svg" altIMG="Desenho de página segura svg" titulo='Analises' desc='Seu site terá analise 24h por dia, cada cliente estará sendo monitorado e você poderá ter insighht pelo Google analytcs ' />
          <Beneficio caminhoIMG="/src/Imagens/Desenho-site-suporte.svg" altIMG="Desenho de página segura svg" titulo='Suporte ativo' desc='Você terá acesso aos nossos desenvolvedores e poderá sugerir melhorias ou tirar duvidas e resolver problemas que venha surgir' />
          <Beneficio caminhoIMG="/src/Imagens/Desenho-site-SEO.svg" altIMG="Desenho de página segura svg" titulo='SEO' desc='Seu site será otimizado para motores de buscas, tendo grandes chances de ficar bem posisionado no Google e  outros buscadores ' />
          <Beneficio caminhoIMG="/src/Imagens/Desenho-site-rede-social.svg" altIMG="Desenho de página segura svg" titulo='Integração' desc='Seu site será integrado com todas suas redes socias para que seu cliente tenha facilidade em le encontrar em qualquer plataforma' />
        </div>
      </section>
      <section id='sites' className='sites grid-container'>
        <div className="cabeca">
          <h2>Modelos de sites</h2>
          <form>
            <input type="text" aria-label="caixa de pesquisa"/>
            <button aria-label="botão de pesquisa"><img src="/src/Imagens/icone-lupa.svg" alt="lupa svg" /></button>
            <div>
              <img src="/src/Imagens/icone-filtro.svg" alt="" />
              <select name="Sites" id="Sites">
                <option value="E-commerce">E-commerce</option>
                <option value="WebCardapio">Web Cardapio</option>
              </select>
            </div>
          </form>
        </div>
        <div className="containerSites">
          <MokupSite siteMobile='/src/Imagens/site-ilimitanet-mobile.jpg' sitePc='/src/Imagens/testeaaa.jpg' altIMG="Desenho de página segura svg" titulo='Integração' desc='Seu site será integrado com todas suas redes socias para que seu cliente tenha facilidade em le encontrar em qualquer plataforma' />
          <MokupSite siteMobile='/src/Imagens/site-ilimitanet-mobile.jpg' sitePc='/src/Imagens/testeaaa.jpg' altIMG="Desenho de página segura svg" titulo='Integração' desc='Seu site será integrado com todas suas redes socias para que seu cliente tenha facilidade em le encontrar em qualquer plataforma' />
          <MokupSite siteMobile='/src/Imagens/site-ilimitanet-mobile.jpg' sitePc='/src/Imagens/testeaaa.jpg' altIMG="Desenho de página segura svg" titulo='Integração' desc='Seu site será integrado com todas suas redes socias para que seu cliente tenha facilidade em le encontrar em qualquer plataforma' />
          
        </div>
      </section>
      <section className='blog grid-container'>
        <h2>Descubra mais um sobre sites</h2>
        <ol className="containerInfo">
          <li><a href="">
            <h3>Um site é muito caro e difícil de cuidar?</h3>
          </a></li>
          <li> <a href="">
            <h3>Pontos positivos e negativos de se ter um site</h3>
          </a></li>
          <li><a href="">
            <h3>Como saber se realmente preciso de um site</h3>
          </a></li>
          <li><a href="">
            <h3>Como saber se o site será lucrativo</h3>
          </a></li>
          <li><a href="">
            <h3>Qual tipo de site eu devo criar</h3>
          </a></li>
          <li><a href="">
            <h3>Como um site atrairá mais clientes</h3>
          </a></li>
          <li><a href="">
            <h3>Como melhorar o posicionamento no Google</h3>
          </a></li>
          <li><a href="">
            <h3>Como um site ajudará seu negócio</h3>
          </a></li>
        </ol>
      </section>
      <section className='depoimento grid-container'>
        <p className='desc'>Olá, Você esta no caminho certo para mudar a historia da sua empresa, muitos empresarios nem sabe o quão importante é ter um site, e desconhecem o poder de um, e isso é proposital, as grandes empresas não querem concorrer com novas que venha a surgir no mercado, por sorte você chegou até aqui, sintas se honrado e continue nesse caminho que vai dar tudo certo </p>
        <div className="pessoa">
          <img width={70} height={70} src="/src/Imagens/EU.jpg" alt="Imagem de Mateus Duarte fundador do involusite" />
          <div>
            <p className='Nome'>Mateus Duarte</p>
            <p className='profissão'>Fundador Involusite</p>
          </div>
        </div>
        <div className="slide">
          <div className="bola ativado"></div>
        </div>
        <svg className='seta esquerda' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 27.383L51 51L26.082 27.2553L51 3L3 27.383Z" fill="#FFD774" stroke="#FFD774" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg className='seta direita' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 27.383L51 51L26.082 27.2553L51 3L3 27.383Z" fill="#FFD774" stroke="#FFD774" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      </section>
    </main>
  </React.StrictMode>,
)
