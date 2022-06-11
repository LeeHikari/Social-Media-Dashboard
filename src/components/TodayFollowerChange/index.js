import { data } from "../../common/data.js";

export function TodayFollowerChange() {
  return (
    <div>
      {data.map((stat) => (
        <div>
          {stat.todayFollowerChange === 0 ? (
            0
          ) : Math.sign(stat.todayFollowerChange) === 1 ? (
            <span style={{ color: "green" }}>{stat.todayFollowerChange}</span>
          ) : (
            <span style={{ color: "red" }}>
              {Math.abs(stat.todayFollowerChange)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
