import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Btn = ({ className, value, icon, style, onClick }) => {
  return (
    <div className="flex justify-center items-center">
      {icon && <FontAwesomeIcon icon={icon} style={style} />}

      <button onClick={onClick} className={className}>
        {value}
      </button>
    </div>
  );
};

export default Btn;
