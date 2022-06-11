//import logo from "../../common/images/";
import styled from "styled-components";
import { TodayFollowerChange } from "../TodayFollowerChange";
import { data } from "../../common/data.js";

export function DisplaySocialMediaView() {
  return (
    <Grid>
      {data.map((stat) => (
        <div key={stat.handle + stat.socialMediaPlatform}>
          <div style={{ alignItems: "center", display: "flex", gap: "6px" }}>
            <img
              src={`/images/icon-${stat.socialMediaPlatform}.svg`}
              alt={stat.socialMediaPlatform}
            />
            <span>@{stat.handle}</span>
          </div>
          <div>
            {stat.followers}
            <div>Followers</div>
            <TodayFollowerChange />
          </div>
        </div>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  gap: 16px;
  background-color: hsl(227, 47%, 96%);

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;
