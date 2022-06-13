import styled from "styled-components";
import { data } from "../../common/data.js";

export function DisplaySocialMediaView() {
  function TodayFollowerChange({ todayFollowerChange }) {
    if (todayFollowerChange === 0) {
      return;
    }

    if (Math.sign(todayFollowerChange) === 1) {
      return <span style={{ color: "green" }}>{todayFollowerChange}</span>;
    }

    return (
      <span style={{ color: "red" }}>{Math.abs(todayFollowerChange)}</span>
    );
  }

  return (
    <Grid>
      {data.map((stat) => {
        //Destructuring props
        const { socialMediaPlatform, handle, todayFollowerChange, followers } =
          stat;

        return (
          <div key={handle + socialMediaPlatform}>
            <div style={{ alignItems: "center", display: "flex", gap: "6px" }}>
              <img
                src={`/images/icon-${socialMediaPlatform}.svg`}
                alt={socialMediaPlatform}
              />
              <span>@{handle}</span>
            </div>
            <div>
              {followers}
              <div>Followers</div>
              <TodayFollowerChange todayFollowerChange={todayFollowerChange} />
            </div>
          </div>
        );
      })}
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
