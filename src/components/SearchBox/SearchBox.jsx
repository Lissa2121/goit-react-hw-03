import './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={onChange}
      className="search-box"
    />
  );
};

export default SearchBox;