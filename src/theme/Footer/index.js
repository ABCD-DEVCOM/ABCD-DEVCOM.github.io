import React from 'react';
import Footer from '@theme-original/Footer';
import Head from '@docusaurus/Head';
import clsx from 'clsx'; // Garanta que esta linha existe se você usou o swizzle sem --shadow

// (O restante das importações, se houver, fica aqui)

export default function FooterWrapper(props) {
  // Se você usou o swizzle antigo (sem --shadow), você terá todo o código do Footer aqui.
  // A lógica abaixo se aplica a ambos os casos.
  // O importante é como o GTranslate é adicionado.

  return (
    <>
      {/* O rodapé original do Docusaurus será renderizado aqui */}
      <Footer {...props} />

      {/* Componente Head para adicionar scripts à página */}
      <Head>
        {/* O div para o tradutor é inserido pelo script, mas pode ser colocado manualmente se necessário */}

        {/* Script de configuração do GTranslate (COM A SINTAXE CORRIGIDA) */}
        <script>
          {`
            window.gtranslateSettings = {
              "default_language": "en",
              "detect_browser_language": true,
              "languages": ["pt", "en", "es", "fr"],
              "wrapper_selector": ".gtranslate_wrapper" 
            };
          `}
        </script>

        {/* Script principal do GTranslate */}
        <script
          src="https://cdn.gtranslate.net/widgets/latest/dropdown.js"
          defer
        ></script>
      </Head>

      {/* Este div é onde o GTranslate irá inserir o seletor de idiomas.
          Vamos colocá-lo em uma seção separada para controle. */}
      <div
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          zIndex: 999
        }}
        className="gtranslate_wrapper"
      >
        {/* O script irá popular este div */}
      </div>
    </>
  );
}