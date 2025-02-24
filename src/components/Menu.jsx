import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

// Основной контейнер для меню
const NavBar = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #1c1c1c; // Тёмный фон, как у Кинопоиска
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Элемент меню
const PointNavBar = styled.li`
    position: relative;
`;

// Стилизованная ссылка
const StyledLink = styled(Link)`
    color: #fff; // Белый текст
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #333; // Изменение фона при наведении
        color: #ffaa00; // Оранжевый цвет при наведении, как у Кинопоиска
    }

    &:active {
        transform: scale(0.95); // Лёгкое уменьшение при клике
    }
`;

// Активная ссылка (если нужно выделить текущую страницу)
const ActiveLink = styled(StyledLink)`
    color: #ffaa00; // Оранжевый цвет для активной ссылки
    font-weight: bold;
`;

export default function Menu() {
    return (
        <NavBar>
            <PointNavBar>
                <StyledLink to="/">Каталог</StyledLink>
            </PointNavBar>
            <PointNavBar>
                <StyledLink to="/fav">Избранное</StyledLink>
            </PointNavBar>
            <PointNavBar>
                <StyledLink to="/history">Моё</StyledLink>
            </PointNavBar>
        </NavBar>
    );
}