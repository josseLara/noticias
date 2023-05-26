import { styled } from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai';
import { useState } from "react";

function Search({onSearchHandler}) {
    let [search,setSearch] = useState('');

    return (
        <SearchContent>
            <input type="text" name="search" id="search" placeholder="Search.." onChange={(event)=>setSearch(event.currentTarget.value)}/>
            <label htmlFor="search" onClick={()=> onSearchHandler(search)}><AiOutlineSearch/></label>
        </SearchContent>
    );
}

const SearchContent = styled.div`
    grid-row: 1/2;
    width: 90%;
    max-width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ffffff7c;
    border-radius: 10px;
    padding: 0px 10px;

    label{
        font-size: 1.4rem;
        color: #ffffff7c;

        &:hover{
            color: #062ac0;
            cursor: pointer;
        }
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