//import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
import { Header } from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Layout></Layout>
    </div>
  );
}

export default App;

const Layout = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;
