import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

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
  const username = 'SergioRSanchez';

  return (
    <>
      <GlobalStyle />
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
                mainColorStrong: appConfig.theme.colors.primary[600],
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