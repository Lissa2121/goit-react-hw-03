import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Find contact"
      value={value}
      onChange={onChange}
      className={css.searchBox}
    />
  );
};

export default SearchBox;