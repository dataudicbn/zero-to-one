"use client";
import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
    Input,
} from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

type SignInProps = {
    SignInSignUp: string;
    Logo: string;
    Title: string;
    Subtitle: string;
    Email: string;
    EmailReg: string;
    ConfirmEmail: string;
    Pass: string;
    PassReg: string;
    ConfirmPass: string;
    Remember: string;
    ForgetP: string;
    ButtonSign: string;
    LogoG: string;
    NameG: string;
    Change: string;
    Sign: string;
    ClassName?: string;
};
export default function Sign({
    Logo,
    Title,
    Subtitle,
    // Email,
    EmailReg,
    ConfirmEmail,
    PassReg,
    ConfirmPass,
    Remember,
    ForgetP,
    ButtonSign,
    LogoG,
    NameG,
    Change,
    Sign,
    SignInSignUp,
    ClassName = "",
}: SignInProps) {
    const [isOpen, setIsOpen] = useState(true);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <>
            <Button
                onClick={open}
                className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
            >
                {SignInSignUp}
            </Button>

            <Dialog
                open={isOpen}
                as="div"
                className="relative w-[355px] z-10 focus:outline-none"
                onClose={close}
                __demoMode
            >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <div className="flex justify-center py-4">
                                <Image
                                    src={Logo}
                                    alt=""
                                    width={73}
                                    height={64}
                                />
                            </div>
                            <DialogTitle
                                as="h3"
                                className="text-base/7 text-[16px]  font-semibold text-[#1b1b1b]"
                            >
                                {Title}
                            </DialogTitle>
                            <p className="text-sm/6 text-[12px] text-white/50">
                                {Subtitle}
                            </p>
                            <div>
                                <div>
                                    <p className="py-1 text-[#1b1b1b] text-[14px]">Email</p>
                                    <Input type="email" placeholder="Email Address"
                                     className={`placeholder:text-[#A0a8b0] w-full py-1 rounded px-1 ${ClassName}`} />
                                </div>
                            </div>
                            <div>
                                <p>{EmailReg}</p>
                                <Input
                                    type={ConfirmEmail}
                                    className={` w-full py-1 rounded px-1 ${ClassName}`}  
                                />
                            </div>
                            <div className="py-1 text-[#1b1b1b] text-[14px]">
                                <div>
                                    <p className="py-1">Password</p>
                                    <Input type={"password"} placeholder="Password"
                                    className={` placeholder:text-[#A0a8b0] w-full py-1 rounded px-1 ${ClassName}`}  />
                                </div>
                                <div>
                                    <p>{PassReg}</p>
                                    <Input
                                        type={ConfirmPass}
                                        className={` ${ClassName}`} 
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-2">
                                <div className="flex">
                                    <Input type="checkbox" className={`mr-1 ${ClassName}`} />
                                 <p className="text-[#5f5f5f] text-[14px]" >{Remember}</p>  
                                </div>
                                <div>
                                    <a href="" className={` text-[#1b1b1b] text-[14px] ${ClassName}`}>{ForgetP}</a>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button
                                    className="inline-flex text-center justify-center py-4 items-center gap-2  bg-[#5E59FF] px-3  text-sm/6 font-semibold text-white rounded-md w-full shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                                    onClick={close}
                                >
                                    {ButtonSign}
                                </Button>
                            </div>
                            <div>
                                {LogoG}
                                <p>{NameG}</p>
                            </div>
                            <p>
                                {Change}
                                {Sign}
                            </p>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
