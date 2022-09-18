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

    .content {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 432px;
        height: 365px;
    }

    .f-password{
        margin: 0px;
        color: #21334F;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
    }

    .f-header{
        margin-top: 24px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #C4C4C4;
    }

    .f-form{
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 0px;

        .f-label{
            text-align: left;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #03435F;
        }

        input{
            margin-top: 4px;
            padding: 9px 16px 8px 16px;
            width: 100%;
            box-sizing: border-box;
            height: 48px;
            background: #FFFFFF;
            opacity: 0.8;
            border: 1px solid #03435F;
            border-radius: 6px;
            font-size: 14px;
        }

        input::placeholder{
            font-family: 'Helvetica Neue';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            color: #C4C4C4;
        }
    }


`

// @media only screen and (min-width: 375px) { 
//     width: 100vw;
//     height: 100vh;
//     margin: 0; 
//     overflow: hidden;
//     /* background: rebeccapurple; */

//     .f-header{
//         width: 350px;
//         margin-left: -55px;
//     }

//    .f-form, .f-password, .backtologin{
//        /* border: 1px solid red; */
//         margin-left: -55px;
//     }
// }

// @media only screen and (min-width: 414px) {

//     .f-header{
//         width: 350px;
//         margin-left: -10px;
//     }

//     .f-form, .f-password, .backtologin{
//         margin-left: -10px;
//     }
// }

// @media only screen and (min-width: 393px) {
//     .f-header{
//         width: 350px;
//         margin-left: -40px;
//     }

//     .f-form, .f-password, .backtologin{
//         margin-left: -40px;
//     }
// }

// @media only screen and (min-width: 360px) {
//     .f-header{
//         width: 350px;
//         margin-left: 50%;
//     }

//     .f-form, .f-password, .backtologin{
//         margin-left: 50%;
//     }

//     .f-password{
//         width: 300px;
//     }
// }

// @media only screen and (min-width: 412px) {
//     .f-header{
//         width: 350px;
//         margin-left: -10px;
//     }

//     .f-form, .f-password, .backtologin{
//         margin-left: -10px;
//     }
// }

// @media only screen and (min-width: 768px) {
//     .f-header{
//         width: 650px;
//         margin-bottom: 30px;
//     }
// }