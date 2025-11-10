import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabase-client";
import {
    FormSchemaLogin,
    getErrors,
    getFieldError,
} from "../lib/validationForm";

export default function LoginPage() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        const { error, data } = FormSchemaLogin.safeParse(formState);
        if (error) {
            const errors = getErrors(error);
            setFormErrors(errors);
        } else {
            console.log(data);
            console.log("Logging in with:", data.email, data.password);
            let { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });

            if (error) {
                alert("Signing in error ❗");
            } else {
                alert("Signed in 👍!");
                await new Promise((resolve) => setTimeout(resolve, 2000));
                navigate("/");
            }
        }
    };

    const onBlur = (property) => () => {
        const message = getFieldError(
            FormSchemaLogin,
            property,
            formState[property]
        );
        setFormErrors((prev) => ({ ...prev, [property]: message }));
        setTouchedFields((prev) => ({ ...prev, [property]: true }));
    };

    const isInvalid = (property) => {
        if (formSubmitted || touchedFields[property]) {
            return !!formErrors[property];
        }
        return undefined;
    };

    const setField = (property, valueSelector) => (e) => {
        setFormState((prev) => ({
            ...prev,
            [property]: valueSelector ? valueSelector(e) : e.target.value,
        }));
    };

    return (
        <div className="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5">
                    <h1 className="text-center text-light my-4">Accedi</h1>
            <form onSubmit={onSubmit} noValidate>
                <label className="form-label my-2 text-light" htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={setField("email")}
                    onBlur={onBlur("email")}
                    aria-invalid={isInvalid("email")}
                    required
                    className="form-control"
                />
                {formErrors.email && <small>{formErrors.email}</small>}

                <label className="form-label my-2 text-light" htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={setField("password")}
                    onBlur={onBlur("password")}
                    aria-invalid={isInvalid("password")}
                    required
                    className="form-control"
                />
                {formErrors.password && <small>{formErrors.password}</small>}

                <br />
                <button className="btn btn-dark" type="submit">Accedi</button>
            </form>
                </div>
            </div>
        </div>
    );
}
