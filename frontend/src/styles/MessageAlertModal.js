import styled from "styled-components";

export const Bg = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: "Inter";
  font-style: normal;
  background: rgba(0, 0, 0, 0.65);
  /* margin-top: -950px; */
  margin-top: 0;
  overflow-y: hidden;
`

export const Container = styled.div`
  background: #ffffff;
  width: 509px;
  height: 408px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px -7px rgba(0, 0, 0, 0.75);

  h4 {
    color: #21334f;
    font-weight: 600;
    font-size: 24px;
    margin-top: 40px;
  }

  h5 {
    width: 230px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #21334f;
    margin-top: -2px;
    margin-bottom: 30px;
  }

  button {
    width: 343px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 0 15px 0;
    background: rgba(226, 0, 16, 0.05);
    font-weight: 600;
    font-size: 14px;
    color: #de3d6d;
    border-style: none;
  }

  button:hover {
    cursor: pointer;
    background: rgba(226, 0, 16, 0.15);
  }


  /* @media (max-width: 559px){
        margin: auto;
        margin-bottom: 8px;
        width: 490px;

        h5{
            font-size: 12px;
        }

        button{
            font-size: 12px;
        }
    }

    @media (max-width: 490px){
        width: 359px;
    }

    @media (max-width: 359px){
        width: 259px;
        

        .acount-headers h3{
            font-size: 14px;
            font-weight: 600;
        }

        .acount-headers h4{
            font-size: 12px;
            font-weight: 400;
        }
       
    }

    @media (max-width: 300px){
        width: 200px;
        text-align: center;

        .account-record{
            display: block;
        }

        .account-record h5{
            margin: auto;
            width: 100px;
        }

        .acount-headers h3{
            font-size: 8px;
            font-weight: 600;
        }

        .acount-headers h4{
            font-size: 8px;
            font-weight: 400;
        }

        button{
            margin-top: 5px;
            border-radius: 10px;
        }
    }

    @media (max-width: 259px){
        width: 159px;
        
    } */
`
