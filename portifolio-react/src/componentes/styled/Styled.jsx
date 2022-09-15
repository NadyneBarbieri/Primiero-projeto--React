import Styled from 'styled-components'

export const Container = Styled.header`
margin: 10px; // ta obvio né
margin-left: 100px; // obvio tbm
margin-right:100px; // ...
margin-top: 10px; // ai se brinca
`
export const Body = Styled(Container)`
display: flex;
align-items: center;
padding: 1em;
`

export const Formulario = Styled(Container)`/*contant filha*/
border: 2px solid ; /*borda e seu tamanho solid ?*/
border-radius: 2em; /*bordas curvadas*/
margin : 0
width: 25em /*tamanho da caixa*/
`
export const Div = Styled.div`
display: flex;
justify-content: center; /centraliza o codigo na tela/
border: 2px solid palevioletred;
padding: 10px;
`
export const Titulo = Styled.h1`
text-align: center; 
`
export const Nav = Styled.nav` 
background-color: #282c34;
justify-content: center;
cursor: pointer;
padding: 20px;
display: flex; /*centraliza os itens */
a{
  text-decoration: none;
}
li{
list-style-type: none;
font-size: 25px;
margin-left: 1em;
color: aliceblue;
&:hover{
  color: #708090;
}
}
`
export const Botao = Styled.button`
background: ${props => props.cor ? "#282c34" : "white"};
color: ${props => props.cor ? "white" : "#282c34"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #282c34;
border-radius: 3px;
`

export const Footer = Styled.footer`
background-color: #282c34;
justify-content: center;
padding: 0.7em;
margin-top: 1px;
text-align: center;

span{
font-weight:bold;
justify-content:center;
align-items:center;
color: black;
&:hover{
  color: #708090; 
}
}
`
export const Icones = Styled.ul`
display: flex;
justify-content: center;
list-style-type: none;
padding: 1px;
a{
margin:3px 1em 3px 10px;
color: black;

&:hover{
  color: #708090; 
}
svg{
  font-size: 2em;
cursor: pointer;
}
}

`

export const CaixaImag = Styled.div`
overflow: hidden;
box-shadow: 1px 1px 18px -2px;
display: flex;
flex-direction: column;
width: 330px;
height: 300px;
align-items: center;
text-align: center;
border-radius: 9%;
&:hover{
  transform:scale(1.1);
  box-shadow: 1px 1px 18px 0px;
}

`

export const Imag = Styled.img`
border-radius: 10%;
padding: 1em;   
max-width: 200px; 

`
export const Texto = Styled.p`
text-align: justify;
padding: 2%; 
`

