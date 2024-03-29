import { Container } from "react-bootstrap";
import Overview from "../components/overview";
import "../components/navigation.css";
import NavigationBar from "../components/navigationBar";

function Home() {
  return (
    <Container>
      <NavigationBar />
      <Overview />
    </Container>
  );
}

export default Home;
