import React from "react";
import Layout from "../components/Layout";

const About = () => {
    return(
        <div className="container">
            <Layout>
            <h1>About Me</h1>

            {/** my educational hsitory */}
            <p className="fp">
                I completed my high school in 2021. I went to Paul Roos Gymnasium from 2017 until 2021. After I completed my 
                matric, I took a gap year and worked two jobs before I joined Hyperion Dev. From those two jobs, I learned that technology is important 
                in civilization, whether I am at home in public, or at work, and I want to play a part in building something that will make it easier for us humans.
                I am a guy who can't get away from technology. I have been fascinated with technology since I was 6 years old when I used our family computer Other than playing video games and playing football, working with technology is something I have had good results with. I knew
                how to navigate through a mobile phone since I was 7 years old; now it is not special. I decided to expand my technological knowledge
                of how websites work, how they store the data of the user, and so on. I discovered some technological features by accident, and that makes me curious.
            </p>

            {/**my passion */}
            <p className="sp">
                I am passionate about football. Football is life, and I can use football analogies to understand something new. 
                My football IQ is not 100% yet, or maybe there is no such thing as 100% football IQ, but that will come as I watch more football matches, 
                the same with the field I am in. One thing I love about football is the problem-solving and the synergy of the successful and the not-so-successful football teams.
            </p>

            </Layout>

            <style jsx>
                {`
                .fp, .sp{
                    font-size: 18px;
                    color: white;
                }

                .container{
                    background-color: grey;
                    padding: 25px;
                    height: 100vh;
                    margin: 0;
                }
                `}
            </style>
        </div>
    );
}; 

export default About;