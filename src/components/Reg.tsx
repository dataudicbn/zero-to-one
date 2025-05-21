import React from "react";
import SignIn from "./SignIn";

export default function Register() {
    return (
        <div>
            <SignIn
                SignInSignUp={"Sign up"}
                Logo={"./images/logos/SneakerLogo/svg"}
                Title={"Create an account"}
                Subtitle={"Register for faster checkout, track your order's status, and more"}
                Email={"First Name"}
                EmailReg={"LastName"}
                ConfirmEmail={""}
                Pass={"Password"}
                PassReg={""}
                ConfirmPass={""}
                Remember={""}
                ForgetP={""}
                ButtonSign={"Sign up"}
                LogoG={"./images/logos.Google.svg"}
                NameG={"Google"}
                Change={"Already have account yet?"}
                Sign={"Sign-in here"}
            />
        </div>
    );
}
