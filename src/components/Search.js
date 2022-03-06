const search = ({ onSearch }) => {
  const changeHandler = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={changeHandler}
        className="py-2 px-3 rounded-lg bg-slate-100 shadow-md w-1/2 outline-none"
        placeholder="search card..."
      ></input>
    </>
  );
};

export default search;
