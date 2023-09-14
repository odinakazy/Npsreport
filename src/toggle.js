import React, { useState } from "react";
import Switch from "react-switch";
function toggle() {
  const [checked, setChecked] = useState(false);

  const handleChange = (newChecked) => {
    setChecked(newChecked);
  };
  return (
    <label>
      <Switch onChange={handleChange} checked={checked} />
    </label>
  );
}

export default toggle;
