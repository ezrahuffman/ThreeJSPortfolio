import { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Python", className = "" } : {onSearch : Function, placeholder: string, className: string}) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onSearch) {
      onSearch(newValue);
    }
  };

  return (
    <div className={`w-60 px-4 py-3 bg-background-default rounded-full outline outline-1 outline-offset-[-0.50px] outline-border-default inline-flex justify-start items-center gap-2 overflow-hidden ${className}`}>
      <input 
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 justify-start text-text-secondary text-base font-normal font-['Inter'] leading-none bg-transparent outline-none"
      />
      <div data-size="16" className="size-4 relative overflow-hidden">
        <div className="size-3 left-[2px] top-[2px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-icon-default" />
      </div>
    </div>
  );
};

export default SearchBar;