import { Container, Redirect } from './styles'
import { Link } from "react-router-dom";


export function Nav(){
    return(
        <Container>
            <Link to="/users">
                <Redirect>
                    Usuários
                </Redirect>
            </Link>
            <Link to="/lines">
                <Redirect>
                    Linhas
                </Redirect>
            </Link>
        </Container>
    )
}