import Link from "next/link";
import React from "react";

function Relationship() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-10 pt-10 space-y-5">
                <h1 className="text-bold text-4xl text-black">
                    How the realationship begins?
                </h1>
                <p>
                    We use the{" "}
                    <Link className="text-blue-400" href={"contact"}>
                        Quick Start model
                    </Link>{" "}
                    for onboarding new projects.<br></br>
                    In order to gain a holistic understanding, we conduct a <br></br>
                    thorough analysis of your business’s IT infrastructure.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 space-y-8 sm:flex sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="flex flex-col items-start p-6 justify-center sm:w-[450px] sm:h-[300px] space-y-7 rounded-3xl shadow-custom-blue">
                    <h1 className="flex items-start font-bold text-3xl">
                        Step 1: Fact check, test
                        <br /> assumptions
                    </h1>
                    <p className="text-lg">
                        Plan the work, work the plan. Proper<br></br> formulation and
                        planning of the project<br></br> ensures success.
                    </p>
                </div>

                <div className="flex flex-col items-start p-6 justify-center sm:w-[450px] sm:h-[300px] space-y-7 rounded-3xl shadow-custom-blue">
                    <h1 className="flex items-start font-bold text-3xl">
                        Step 1: Fact check, test
                        <br /> assumptions
                    </h1>
                    <p className="text-lg">
                        Plan the work, work the plan. Proper<br></br> formulation and
                        planning of the project<br></br> ensures success.
                    </p>
                </div>

                <div className="flex flex-col items-start p-6 justify-center sm:w-[450px] sm:h-[300px] space-y-7 rounded-3xl shadow-custom-blue">
                    <h1 className="flex items-start font-bold text-3xl">
                        Step 1: Fact check, test
                        <br /> assumptions
                    </h1>
                    <p className="text-lg">
                        Plan the work, work the plan. Proper<br></br> formulation and
                        planning of the project<br></br> ensures success.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Relationship;
