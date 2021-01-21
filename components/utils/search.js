import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';


const SearchBarView = () => {
    return (
        <Search>
            <BsSearch color="#ffa69e" style={{ fontSize: 20 }} />
            <SearchBar
                id="search-bar"
                type="text"
                placeholder="Search">
            </SearchBar>
        </Search>
    )
}

const Search = styled.div`
  background: var(--main-bg);
  padding: 5px 10px;
  position: relative;
  display: flex;  
	align-items: center;
  border-radius: 15px;
  width: 200px;
  color: var(--accent);
  border: 1px solid var(--accent)
`

const SearchBar = styled.input`
  background: var(--main-bg);
  margin-left: 10px;
  border:none;
  width: 100%;
  font-size: 14px;
  color: var(--accent);
  font-family: 'Montserrat';
	&:focus {
				outline: none;
				border:none;
    }
    &::placeholder {
            color: var(--accent);
            opacity: 1;
    }
`

export default SearchBarView;