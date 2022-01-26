import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import React from "react";
import {skills} from "../data"

export default function Skills(){
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className = "w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
                        Skill &amp; Technologies
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        My skills are mainly focused on Python based automation and website developement. I have a little bit of experience in Android Developement, however that was in late 2017. Since then, I have been focusing on solving data related problems using Python, Machine Learning (including Deep Learning) and Visualization (PowerBI).
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key = {skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}