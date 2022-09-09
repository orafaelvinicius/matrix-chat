// Aqui você coloca os componentes que serão usados por todas as páginas
// Componente global

function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}


export default function CustomApp ({ Component, pageProps}) {
    console.log("roda em todas as páginas")
    return (
        <>
            
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}