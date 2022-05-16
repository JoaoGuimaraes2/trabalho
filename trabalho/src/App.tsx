import  Main  from "./pages/Main"
import { Nav } from './components/Nav'
import { Link } from 'react-router-dom';
import { GlobalStyle } from "./styles/global";

export function App(){
  return(
    <>
      <Nav />
      <Main />
      
      <GlobalStyle />
    </>
  )
}