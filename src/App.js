//import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
import { Header } from "./components/header";
import { DisplaySocialMediaView } from "./components/SocialMediaDashboard/index";

function App() {
  return (
    <div>
      <Header />
      <Layout>
        <DisplaySocialMediaView />
      </Layout>
    </div>
  );
}

export default App;

const Layout = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;
