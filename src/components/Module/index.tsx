import { Container, Content } from "./styles";

const Module: React.FC = ({children}) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Module;