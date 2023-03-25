import { useState } from "react";
import Selector from "../../components/selector";

const Me = () => {
  const [arr, setArr] = useState([1]);
  return (
    <>
      <Selector
        label={"时间筛选"}
        multiple={true}
        defaultValue={[1]}
        value={arr}
        options={[
          { label: "本日", value: 1 },
          { label: "本周", value: 2 },
          { label: "本月", value: 3 },
          { label: "本季", value: 4 },
        ]}
        onChange={(value) => {
          setArr(value);
        }}
      />
      <div>
        {arr.map((n) => (
          <div>{n}</div>
        ))}
      </div>
    </>
  );
};

export default Me;
