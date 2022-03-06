import Search from "./Search";

const Header = ({ onSearch }) => {
  return (
    <header className="text-black bg-slate-200 pb-6 ">
      <h1 className="font-bold p-14 text-2xl mb-0 pb-6">Reviews Control</h1>
      <Search onSearch={onSearch}></Search>
    </header>
  );
};

export default Header;
