import{
    FormContainer,
    Image, 
    Pagina, 
    Welcome, 
    Sign, 
    ParagrafoSignUp,
    Navbar,
    Section,
    Form,
    InformationContainer,
    Button,
    ParagrafoRegister,
    RegisterWord,
    SubmitContainer,
} from "./styles";

import {
    PeopleImage,
    Logo
} from "../../assets";

import { InputComponent } from "../../components";

export const Login: React.ElementType = () => {
    return (
        <Pagina>
            <Navbar>
                <Image src={Logo} id="Logo" />
            </Navbar>
            <Section>
                <FormContainer>

                    <InformationContainer>
                        <Welcome>Welcome !</Welcome>
                        <Sign>Sign up to</Sign>
                        <ParagrafoSignUp>Lorem Ipsum is simply</ParagrafoSignUp>
                    </InformationContainer>
                    <Form autoComplete="on">
                       <InputComponent
                            labelValue="Email"
                            typeValue="text"
                            nameValue="email"
                            placeholderValue="Enter your email">
                       </InputComponent>
                       <InputComponent
                            labelValue="User name"
                            typeValue="text"
                            nameValue="username"
                            placeholderValue="Enter your user name">
                       </InputComponent>
                       <InputComponent
                            labelValue="Password"
                            typeValue="text"
                            nameValue="password"
                            placeholderValue="Enter your password">
                       </InputComponent>
                       <InputComponent
                            labelValue="Confirm password"
                            typeValue="text"
                            nameValue="confirmpassword"
                            placeholderValue="Confirm your password">
                       </InputComponent>
                    </Form>
                    <SubmitContainer>
                        <Button>Register</Button>
                        <ParagrafoRegister>Already have an Account ?  <RegisterWord>Register</RegisterWord></ParagrafoRegister>
                    </SubmitContainer>

                </FormContainer>
                <Image src={PeopleImage} alt="Pessoas" />
            </Section>
        </Pagina>
    );
}