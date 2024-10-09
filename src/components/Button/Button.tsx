import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="btn btn-success w-50" onClick={onClick}>
      Получить новую шутку
    </button>
  );
};

export default Button;
