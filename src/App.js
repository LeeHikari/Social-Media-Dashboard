//import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
import { Header } from "./components/header";
import { DisplaySocialMediaView } from "./components/SocialMediaDashboard/index";
import { data } from "./common/data";

function App() {
  let totalFollowers = 0;
  for (let i = 0; i < data.length; i++) {
    totalFollowers += data[i].followers;
  }

  return (
    <div>
      <Header totalFollowers={totalFollowers} />
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
