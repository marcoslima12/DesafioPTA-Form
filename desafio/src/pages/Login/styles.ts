import styled from "styled-components";

export const Pagina = styled.div`
    background: #FFFFFF;
    width: 100%;
    height: 100vh;
`;

export const Navbar = styled.nav`
        
    box-sizing: border-box;
    padding: 31px 1298px 0 42px;

    width: 100%;
       
    display: flex;
    justify-content: flex-start;
`;

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding: 28px 15px 54px 111px;
`;

export const FormContainer = styled.div`
    
    box-sizing: border-box;
    padding: 14px 47px 25px 35px;

    width: 505px;
    height: 80%;

    background: #FFFFFF;
    border: 0.5px solid #878787;
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const Button = styled.button`
    width: 423px;
    height: 57px;

    background: #000000;
    border-radius: 6px;

    color: #FFFFFF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    &:hover{
        cursor: pointer;
    }

    margin-top: 15px;
`;

export const ParagrafoRegister = styled.div`

    width: 100%;
    height: 24px;
    

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #7D7D7D;

    align-self: center;
    justify-self: center;

    display: flex;
    justify-content:center;
    align-items: center;
    gap: 5px;
    
    padding-top: 20px;
`;



export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 26px;
`;

export const Welcome = styled.p`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 38px;
    color: #000000;
    margin: 0 0 10px 0;

`;
export const Sign = styled.p`
   
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 31px;
    line-height: 46px;

    margin: 0;
    color: #000000;

`;

export const SubmitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ParagrafoSignUp = styled.p`

    width: 100%;
    

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;



    color: #000000;

`;

export const RegisterWord = styled.p`
    color: black;
    font-weight: 600;
`;

export const Image = styled.img`
`;