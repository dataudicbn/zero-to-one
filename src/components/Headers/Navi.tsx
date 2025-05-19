import Image from "next/image";
import React from "react";
import DropDown from "../DropDown";

export default function Navi() {
    return (
        <div>
            <div className="bg-[#5E59FF] justify-center w-full flex h-7">
                <div className="justify-center flex text-center items-center text-white font-bold text-sm">
                    <div className="h-full pt-1 text-center w-full flex justify-center">
                        September Big Sale Up to 50% off
                    </div>
                </div>
            </div>
            <div className="bg-[#1b1b1b] h-20 flex items-center">
                <div className="flex items-center">
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
                        <div className="flex justify-center">
                            <div>
                                <DropDown
                                    label={"New Arrived"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                />
                            </div>
                            <div>
                                <DropDown
                                    label={"Men"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                />
                            </div>
                            <div>
                                <DropDown
                                    label={"Woman"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                />
                            </div>
                            <div>
                                <DropDown
                                    label={"Kid"}
                                    subTitle1={""}
                                    subTitle2={""}
                                    subTitle3={""}
                                />
                            </div>
                        </div>
                    </div>
                    <div>sign in</div>
                </div>
            </div>
        </div>
    );
}
