import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    height: 50px;
    width: 400px;
`

export const CardQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const IncrementButton = styled.button`
    border: none;
    border-radius: 5px;
    border: 0.5px solid #FFF;
    background: linear-gradient(151deg, #34C8E8 1.78%, #4E4AF2 95.56%);
`

export const DecrementButton = styled.button`
    border: none;
    border-radius: 5px;
    border: 0.5px solid #FFF;
    background: #353F54;
`