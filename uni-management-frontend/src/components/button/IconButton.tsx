import {Button} from "@/components/ui/button.tsx";
import {LoadingSpinner} from "@/components/loader/LoadingSpinner.tsx";

interface ICON_BUTTON {
    onClick?: () => void;
    variant?:
        | "default"
        | "destructive"
        | "ghost"
        | "link"
        | "outline"
        | "secondary";
    type?: "button" | "reset" | "submit";
    size?: "default" | "lg" | "sm" | "icon";
    disabled?: boolean;
    isPending?: boolean;
    isReversed?: boolean;
    className?: string;
    children: string;
}

const IconButton = ({
                        onClick,
                        variant,
                        type = "submit",
                        size = "default",
                        disabled,
                        isPending = true,
                        isReversed,
                        className,
                        children,
                    }: ICON_BUTTON) => {
    return (
        <Button
            onClick={onClick}
            variant={variant}
            type={type}
            size={size}
            disabled={isPending || disabled}
            className={`flex ${
                isReversed ? "flex-row-reverse" : " flex-row"
            } items-center cursor-pointer gap-2 ${className}`}
        >
            {isPending && <LoadingSpinner size="md"/>}
            <span>{isPending ? "Loading..." : children}</span>
        </Button>
    );
};

export default IconButton;