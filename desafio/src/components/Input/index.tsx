import {
    Label,
    Input,
} from "./styles";

type InputProps = {
    labelValue: string;
    typeValue: string;
    nameValue: string;
    placeholderValue: string;
}


export const InputComponent: React.ElementType = ({labelValue, typeValue, nameValue, placeholderValue}: InputProps) => {
    return (
        <>
            <Label>{labelValue}</Label>
            <Input type={typeValue} name={nameValue} placeholder={placeholderValue} />
        </>
    );
}