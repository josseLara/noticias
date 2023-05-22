import { styled } from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai';

function Search() {
    return (
        <SearchContent>
            <input type="text" name="search" id="search" placeholder="Search.." />
            <label htmlFor="search"><AiOutlineSearch/></label>
        </SearchContent>
    );
}

const SearchContent = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ffffff7c;
    border-radius: 10px;
    padding: 0px 10px;

    label{
        font-size: 1.4rem;
        color: #ffffff7c;
    }

    input{
        font-size: 1.1rem;
        color: #fff;
        background: transparent;
        border: none;
        outline: none;
    }
`;

export default Search;