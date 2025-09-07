import FormContainer from "@/components/common/form/FormContainer.tsx";
import FormInput from "@/components/common/form/FormInput.tsx";
import {useForm} from "react-hook-form";
import IconButton from "@/components/button/IconButton.tsx";

const SignInPage = () => {
    const form = useForm({
        defaultValues: {
            id: "A-0002",
            password: "admin0009"
        }
    })
    return (
        <FormContainer
            form={form}
            title="SignIn"
            description=" Enter your Id and Password below to signin to your account">
            <FormInput form={form} name="id" label="Id" placeholder="Enter Id" isRequired/>
            <FormInput form={form} name="password" label="Password" placeholder="Enter Password" isRequired/>
            <div className="flex justify-end"><IconButton>SignIn</IconButton></div>
        </FormContainer>
    );
};

export default SignInPage;