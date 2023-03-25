import { useState } from "react";
import _ from "lodash";
// import { useUpdateEffect } from "ahooks";
import styles from "./selector.module.css";
export default function Selector(props) {
  const { label, multiple, defaultValue, options, value, onChange } = props;
  const initValue = _.isNil(value) ? defaultValue || [1] : value;
  const [selected, setSelected] = useState(initValue);

  //   useUpdateEffect(() => {
  //     setSelected(value);
  //   }, value);

  const handleClick = (value) => {
    return () => {
      if (multiple) {
        const index = selected.indexOf(value);
        if (index > -1) {
          selected.splice(index, 1);
          onChange([...selected]);
          setSelected([...selected]);
        } else {
          onChange([...selected, value]);
          setSelected([...selected, value]);
        }
      } else {
        onChange([value]);
        setSelected([value]);
      }
    };
  };
  return (
    <div>
      <div>{label}</div>
      <div>
        {options.map((option) => (
          <div
            className={selected.includes(option.value) ? styles.active : ""}
            onClick={handleClick(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
