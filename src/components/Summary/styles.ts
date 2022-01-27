import styled from 'styled-components';

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 colunas com 1 tamalho flexivel
    gap: 2rem; // espaçamento entre eles
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding:1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight:500;
        line-height: 3rem;
    }

    &.hightlight-backgroud {
        background: var(--green);
        color: #fff;
    }
}
     
`;