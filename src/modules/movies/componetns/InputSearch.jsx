import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    max-width: 600px;
    margin: 20px auto;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #ffaa00;
    }
`;

const SearchSelect = styled.select`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    background-color: white;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #ffaa00;
    }
`;

const SearchButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #ffaa00;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e69500;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export default function InputSearch({ movieTitle, movieType }) {
    const [titleM, setTitleM] = useState('');
    const [typeM, setTypeM] = useState('all'); // По умолчанию "all"

    const handleSearch = () => {
        movieTitle(titleM);
        movieType(typeM);
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                placeholder="Введите название кино"
                value={titleM}
                onChange={(e) => setTitleM(e.target.value)}
            />
            <SearchSelect
                value={typeM}
                onChange={(e) => setTypeM(e.target.value)}
            >
                <option value="all">Все</option>
                <option value="movie">Фильмы</option>
                <option value="series">Сериалы</option>
                <option value="episode">Эпизоды</option>
            </SearchSelect>
            <SearchButton onClick={handleSearch}>Поиск</SearchButton>
        </SearchContainer>
    );
}