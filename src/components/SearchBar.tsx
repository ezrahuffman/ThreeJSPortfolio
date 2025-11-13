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
    <div 
      className={`w-full max-w-md px-4 py-3 rounded-full border inline-flex justify-start items-center gap-2 overflow-hidden ${className}`}
      style={{
        background: 'var(--bg-elevated)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <input 
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 text-base font-normal bg-transparent outline-none placeholder:opacity-60"
        style={{
          color: 'var(--text-main)'
        }}
      />
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-soft)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

export default SearchBar;