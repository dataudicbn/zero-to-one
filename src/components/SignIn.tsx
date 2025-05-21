"use client";
import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
    Input,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
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
    const [isOpen, setIsOpen] = useState(false);

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
                className="rounded-md cursor-pointer text-sm font-bold text-[14px] text-white"
            >
                {SignInSignUp}
            </Button>

            <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
                __demoMode
            >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-10">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <div className="flex justify-end">
                                <Button
                                    className=" p-2 cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Image
                                        src="./images/icons/Close.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </Button>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-center pt-4">
                                    <Image
                                        src={Logo}
                                        alt=""
                                        width={110}
                                        height={96}
                                    />
                                </div>
                                <div className="py-6">
                                    <DialogTitle
                                        as="h3"
                                        className=" text-[20px]  font-semibold text-[#1b1b1b]"
                                    >
                                        {Title}
                                    </DialogTitle>
                                    <p className="text-[14px] text-[#1b1b1b]">
                                        {Subtitle}
                                    </p>
                                </div>
                                <div className="pb-4">
                                    <div>
                                        <p className="py-1 text-[#1b1b1b] font-semibold text-[14px]">
                                            Email
                                        </p>
                                        <Input
                                            type="email"
                                            placeholder="Email Address"
                                            className={`placeholder:text-[#A0a8b0] placeholder:text-[16px] w-full py-3 rounded px-1 ${ClassName}`}
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <p>{EmailReg}</p>
                                    <Input
                                        type={ConfirmEmail}
                                        className={` w-full py-1 rounded px-1 ${ClassName}`}
                                    />
                                </div>
                                <div className="py-1 text-[#1b1b1b] text-[14px]">
                                    <div>
                                        <p className="py-1 text-[14px] font-semibold">
                                            Password
                                        </p>
                                        <Input
                                            type={"password"}
                                            placeholder="Password"
                                            className={` placeholder:text-[#A0a8b0] placeholder:text-[14px] py-3 w-full rounded px-1 ${ClassName}`}
                                        />
                                    </div>
                                    <div>
                                        <p>{PassReg}</p>
                                        <Input
                                            type={ConfirmPass}
                                            className={` ${ClassName}`}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between  pt-2">
                                    <div className="flex justify-center">
                                        <Input
                                            type="checkbox"
                                            className={`mr-1 ${ClassName}`}
                                        />
                                        <p className="text-[#5f5f5f] pt-[2px] text-[14px]">
                                            {Remember}
                                        </p>
                                    </div>
                                    <div>
                                        <a
                                            href=""
                                            className={` text-[#1b1b1b] text-[14px] ${ClassName}`}
                                        >
                                            {ForgetP}
                                        </a>
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
                                <div className="pt-5">
                                    <div className="flex py-3 bg-[#fafafa] justify-center items-center">
                                        <Image
                                            src={LogoG}
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                        <p>{NameG}</p>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <div className="flex space-x-1 items-center w-full justify-center ">
                                        <div className="text-[#5f5f5f] text-[14px]">
                                            {Change}
                                        </div>
                                        <Link href={Sign} className="text-[#5e59ff] font-semibold text-[14px] underline">
                                        Register here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
