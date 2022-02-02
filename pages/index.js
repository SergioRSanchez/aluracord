import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from "../config.json";

function Titulo(props) {
  console.log(props.children);
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

//  Componente React
// function HomePage() {
//   //JSX
//   return (
//   <div>
//     <GlobalStyle />
//     <Titulo tag="h2">Boas Vindas de Volta!</Titulo>
//     <h2>Discord - Alura Matrix</h2>
//   </div>)
// }
// export default HomePage

export default function PaginaInicial() {
  //const username = 'SergioRSanchez'; //Não pode ser só uma variável, ela tem que ser variável e mudar o valor dela pro React, muda o estado do React
  const [username, setUsername] = React.useState('');  // observe o uso do 'use..' igual no import do Router, é padrão do React para dar um hook(gancho) em alguma coisa
  //  Box tem a parte estrutural e Component a parte visual.
  const roteamento = useRouter();
  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[999],
          backgroundImage: 'url(https://wallpaperbat.com/img/335199-wallpaper-macbook-pro-retina-gallery-pic-wpw202813-neon-4k.jpg)',
          // https://cutewallpaper.org/23/wallpaper-macbook-4k/1097627873.jpg
          // https://wallpaperbat.com/img/231902-macbook-wallpaper-top-free-macbook-background.jpg
          // https://www.wallpapertip.com/wmimgs/81-810417_minimalist-hd-wallpaper-macbook-pro.jpg
          // https://images.pling.com/img/00/00/58/95/21/1546464/6775da853edf540d588e409a1c7b50e409a4c7df0abd45028fba8d020b4893cdbda1.png
          // https://wallpaperaccess.com/full/350125.png
          // https://wallpaperbat.com/img/335199-wallpaper-macbook-pro-retina-gallery-pic-wpw202813-neon-4k.jpg
          // https://www.ubackground.com/_ph/86/315838258.jpg
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '600px',
            borderRadius: '25px',
            padding: '22px',
            margin: '16px',
            //boxShadow: '0 10px 20px rgba(0 0 0 / 50%)',
            //backgroundColor: appConfig.theme.colors.neutrals[700],
            background: "rgba(159, 90, 200, 0.6)",
            boxshadow: "0 4px 30px rgba(0, 0, 0, 0)",
            backdropfilter: "blur(3.3px)",
            border: "1px solid rgba(255, 255, 255,1)",

            borderRadius: "10px",
            flex: 1,
            minHeight: "240px",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguém submeteu o form.');
              roteamento.push('/chat');
              //window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: {
                xs: '100%',
                sm: '50%'
              },
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Bem vindo!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[300]
              }}>
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={function handler(event) {
                console.log("usuário digitou", event.target.value);
                // Onde tá o valor?
                const valor = event.target.value;
                // Trocar o valor da variável através do React e avise quem precisa
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Conectar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[500],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              // backgroundColor: appConfig.theme.colors.neutrals[800],
              // border: '1px solid',
              // borderColor: appConfig.theme.colors.neutrals[999],
              // borderRadius: '10px',
              // flex: 1,
              // minHeight: '240px',
              background: "rgba(230, 199, 255, 0.5)",  //Último é a quantia do blur
              boxshadow: "0 4px 30px rgba(0, 0, 0, 0)",
              backdropfilter: "blur(3.3px)",
              border: "1px solid rgba(255, 255, 255,1)",

              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[800],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}