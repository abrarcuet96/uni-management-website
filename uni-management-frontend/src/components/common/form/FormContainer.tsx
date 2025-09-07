import type {FieldValues, UseFormReturn} from "react-hook-form";
import type {ReactNode} from "react";
import {Form} from "@/components/ui/form.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

interface FORM_CONTAINER<T extends FieldValues> {
    form: UseFormReturn<T>;
    children: ReactNode,
    title?: string;
    description?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeClasses: Record<NonNullable<FORM_CONTAINER<any>["size"]>, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
};

const FormContainer = <T extends FieldValues>({
                                                  form,
                                                  children,
                                                  title,
                                                  description,
                                                  size = "sm",
                                              }: FORM_CONTAINER<T>) => {

    const onSubmit = (data: T) => {
        console.log(data)
    }

    return (
        <Card className={`${sizeClasses[size]}`}>
            {(title || description) &&
                <CardHeader>
                    {title &&
                        <CardTitle>
                            {title}
                        </CardTitle>}
                    {description && <CardDescription>{description}</CardDescription>}
                </CardHeader>}
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        {children}
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default FormContainer;