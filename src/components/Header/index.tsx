import logoImg from "../../assets/logo.svg"

import { Link } from 'react-router-dom';
import { Container, Content } from "./styles"

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logoImg} alt="e learning"/>
        </Link>
      </Content>
    </Container>
  )
}