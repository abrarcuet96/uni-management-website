import type {AxiosError} from "axios";
import type {NavigateFunction} from "react-router-dom";
import type {ERROR_401} from "@/types";
import {toast} from "sonner";

export const catch401Error = ({detail, navigate}: ERROR_401) => {

    if (detail?.length) {
        toast.error(detail);
        if (typeof navigate === "function") {
            navigate("/auth/signin")
        }
    }

}

export const catchError = ({error, navigate}: { error: AxiosError<any>; navigate?: NavigateFunction }) => {

    const status = error?.response?.status;
    console.log("Error Status: ", status);

    switch (status) {
        case 401:
            catch401Error({
                detail: error?.response?.data?.detail,
                navigate: navigate as NavigateFunction
            })
            return;
        default:
            console.error("An unexpected error occurred:", error);
            toast.error("An unexpected error occurred");
            return;
    }

}