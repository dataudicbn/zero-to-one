"use client"
import Image from "next/image";
import React from "react";
import DropDown from "../DropDown";
import Sign from "../SignIn";
import { useState } from "react";
import Register from "../Register";

export default function Navi() {
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);

    const openSignIn = () => {
        setShowSignIn(true);
        setShowSignUp(false);
    };

    const openSignUp = () => {
        setShowSignIn(false);
        setShowSignUp(true);
    };

    const closeAll = () => {
        setShowSignIn(false);
        setShowSignUp(false);
    };

    return (
        <div>
            <div className="bg-[#5E59FF] justify-center w-full flex h-7">
                <div className="justify-center flex text-center items-center text-white font-bold text-sm">
                    <div className="h-full pt-1 text-center w-full flex justify-center">
                        September Big Sale Up to 50% off
                    </div>
                </div>
            </div>
            <div className="bg-[#1b1b1b] w-full h-20 flex items-center">
                <div className="flex items-center w-full justify-between px-4">
                    <div className="flex items-center space-x-3">
                        <div>
                            <Image
                                src="./images/logos/SneakerLogo.svg"
                                alt=""
                                width={50}
                                height={57}
                            />
                        </div>
                        <div>
                            <p className="text-white"> | </p>
                        </div>
                        <div
                            className="flex  justify-center 
                         "
                        >
                            <div className="">
                                <DropDown
                                    label={"New Arrived"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                    className={""}
                                />
                            </div>
                            <div className="w-18">
                                <DropDown
                                    label={"Men"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                    className={""}
                                />
                            </div>
                            <div className="w-22">
                                <DropDown
                                    label={"Woman"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                    className={""}
                                />
                            </div>
                            <div className="w-18">
                                <DropDown
                                    label={"Kid"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                    className={""}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                        <div className="cursor-pointer">
                            <Image
                                src="./images/icons/heart.svg"
                                alt={""}
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className=" cursor-pointer">
                            <Image
                                src="./images/logos/ShoppingCart.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        </div>
                            {( showSignIn && <Sign
                                SignInSignUp="Sign In"
                                Logo="/images/logo.png"
                                Title="Đăng nhập"
                                Subtitle="Xin vui lòng đăng nhập để tiếp tục"
                                Remember="Remember me"
                                ForgetP="Quên mật khẩu?"
                                ButtonSign="Đăng nhập"
                                LogoG="/images/google-logo.png"
                                NameG="Đăng nhập bằng Google"
                                Change="Bạn chưa có tài khoản?"
                                Sign="Sign In"
                                ClassName=""
                                onRegisterClick={openSignUp}
                                onClose={closeAll}
                                Email={""}
                                Pass={""}
                            /> )}
                        {showSignUp && (
                            <Register
                                onClose={closeAll}
                                onSignInClick={openSignIn}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
