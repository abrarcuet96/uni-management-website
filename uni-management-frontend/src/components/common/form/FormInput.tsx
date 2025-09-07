import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";

type FORM_INPUT = {
    form: any;
    label?: string;
    description?: string;
    name: string;
    type?: "text" | "email";
    disabled?: boolean;
    isRequired?: boolean;
    placeholder?: string;
    className?: string;
}

const FormInput = ({
                       form,
                       label,
                       description,
                       name,
                       type,
                       disabled,
                       isRequired,
                       placeholder,
                       className
                   }: FORM_INPUT) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({field: {name, value, ref, ...rest}}) => (
                <FormItem>
                    {label &&
                        <FormLabel>
                            <span>{label}</span>
                            {isRequired && <span className="text-destructive font-semibold">*</span>}
                        </FormLabel>}
                    <FormControl>
                        <Input
                            name={name}
                            value={value}
                            type={type}
                            ref={ref}
                            disabled={disabled}
                            placeholder={placeholder}
                            className={`${className}`}
                            {...rest}
                        />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage/>
                </FormItem>
            )}
        />
    );
};

export default FormInput;