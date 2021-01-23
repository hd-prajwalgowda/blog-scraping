const ActionButton = ({
  icon,
  text,
  buttonStyle,
  buttonHoverStyle,
  onClick,
}) => {
  return (
    <button
      className={`
      flex items-center mx-1 px-2 py-1 text-sm rounded font-light text-gray-600 dark:text-gray-200 
      ${buttonStyle}
      ${buttonHoverStyle}
      `}
      onClick={onClick}
    >
      {icon}
      <span className="ml-1">{text}</span>
    </button>
  );
};

export default ActionButton;
