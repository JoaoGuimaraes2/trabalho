import styled from 'styled-components'

export const Container = styled.nav`
    background: black;
    width: 100%;
    height: 5rem;
    margin: 0 auto;
    padding: 0 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Redirect = styled.a`
    padding: 0 1.5rem;
    /* height: 2rem; */
    /* background: var(--green); */
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;

    &:hover{
        filter: brightness(0.9);
    }
`