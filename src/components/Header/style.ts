import styled from "styled-components";

export const Container = styled.div`
    background-color: #1f1f1f;
    height: 65px;
    border: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const  InternalContainer = styled.div`
    height: 50px;
    width: 90vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .pageTitle {
        color: #fff;
        font-family: sans-serif;

        @media(max-width:530px) {
            font-size: 20px;
        }
    }
    
`;

export const  SearchContainer = styled.div`
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8px;

    width: 290px;
    height: 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    input {
        margin-left: 6px;
        border-radius: 8px;
        background: transparent;
        border: none;
        height: 35px;
        width: 230px;
        outline: none;

        font-family: sans-serif;
        color: #fff;
        font-weight: 700;
        font-size: 15px;
    }

    div {
        cursor: pointer;
        color: #fff;
        height: 35px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 8px 8px 0;

        :hover {
            background: rgba(196, 196, 196, 0.1);
        }
    }

    @media(max-width:530px) {
        width: 170px;
        @media(max-width:425px) {
            width: 160px;
        }

        input {
            margin-left: 6px;
            border-radius: 8px;
            background: transparent;
            border: none;
            height: 35px;
            width: 140px;
            outline: none;
            font-family: sans-serif;
            color: #fff;
            font-weight: 700;
            font-size: 15px;

            @media(max-width:425px) {
              width: 120px;
            }

        }

        div {
            cursor: pointer;
            height: 35px;
            color: #fff;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 8px 8px 0;

            :hover {
                background: rgba(196, 196, 196, 0.1);
            }
        }
    }
`;