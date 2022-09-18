import styled from 'styled-components'
import { Device } from './Device';

export const Container = styled.div`
    background: #FFFFFF;
    width: 860px;
    height: 527px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .v-header{
        margin-top: 32px 0 21px 0;
        color: #03435F;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
    }

    .v-message{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        width: 319px;
        margin: 0;
        color: #21334F;
    }

    .v-link{
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        margin: 16px 0 0 0;
        color: #012A4A;

        span{
            color: #DF3E6E;
        }
        span:hover{
            cursor: pointer;
            user-select: none;
        }
    }
`