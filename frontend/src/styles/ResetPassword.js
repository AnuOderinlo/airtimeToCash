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

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        h3{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #DE3D6D;
        }
        span{
            color: #F5844C;
        }
    }

    .l-form{
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 0px;

        .l-header{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #21334F;
        }

        label{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #21334F;
        }

        input{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 16px;
            gap: 10px;

            width: 320px;
            height: 38px;

            background: #FFFFFF;
            border: 1px solid #D9D9D9;
            margin-top: 8px;
        }

        .cp-login{
            margin-top: 16px
        }

        .cp-btn{
            margin-bottom: 24px;
        }

        Button{
            width: 100%;
            background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);
        }

    }


`