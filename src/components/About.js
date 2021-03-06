export default function About(){
    return (
        <section id="About">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flox-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md: text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4x1 text-3x1 mb-4 font-medium text-white">
                        Hi, I'm Pushkaraj (or just PJ)
                        <br className="hidden lg:inline-block"/> 
                        I love to solve data problems, and I am actively learning Data Engineering and API developement. 
                        I am currently pursuing my masters in Computer Science from SUNY Buffalo, specializing in Software and 
                        Machine Learning. 
                        
                        <br/><br/>

                        Some non-trivial stuff about me. I love cooking and coming up with weird combinations that taste good. I am learning how to 
                        play Dota 2 and understanding the overall tactics. I found that game really interesting.
                        <br/><br/>

                        If you feel like I can contribute to your organization or team, please let me know, I am actively looking for opportunities
                        in the field of software engineering and data science.
                    </h1>
                    
                    <div className="flex justify-center">
                        <a href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Hire Or Work With Me
                        </a>
                        <a
                        href="#projects"
                        className="m1-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work / Experience
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt = "hero"
                    src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}