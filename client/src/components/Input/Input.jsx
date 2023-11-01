import './Input.scss';

export const Input = ({ inputValue, changeHeandler, placeholder }) => {
  return (
    <div className="Input">
      <input
        data-testid="input"
        className="Input__field"
        placeholder={placeholder}
        type="text"
        value={inputValue}
        onChange={e => changeHeandler(e.target.value)}
      />
      <button
        data-testid="input-reset-btn"
        className="Input__reset-btn"
        type="button"
        onClick={() => changeHeandler('')}
      />
    </div>
  );
};