import Countdown from "react-countdown";

const Timer = ({ date, stl, onComplete }) => {
  return (
    <Countdown
      date={date}
      renderer={({ hours, minutes, seconds, days }) => (
        <div className={stl.countWrapper}>
          <h2>Time To Start</h2>
          <div className={stl.timeWrapper}>
            {days ? (
              <strong>
                <span style={{ color: "#00b362" }}>{days}</span>{" "}
                {days == 1 ? "day" : "days"} and
              </strong>
            ) : null}
            <strong style={{ color: "#00b362" }}>
              {hours}:{minutes}:{seconds}
            </strong>
          </div>
        </div>
      )}
      onComplete={onComplete}
    />
  );
};

export default Timer;
