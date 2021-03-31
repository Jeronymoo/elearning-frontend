import { Container, Content, TextArea } from "./styles";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.svg"


const Home: React.FC = () => (
  <Container>
    <img src={LogoImg} alt=""/>
    <Content>
      <TextArea>
        <h1>Aprenda da melhor forma</h1>
        <p>Entre na plataforma e acesse cursos de diversas áreas de conhecimento.</p>
        <Link to="/dashboard">Começar os estudos</Link>
      </TextArea>
    </Content>
  </Container>
);

export default Home;