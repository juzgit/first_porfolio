import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
//imported the Github, LinkedIn and Gmail icons
import { BsLinkedin } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const Contact = () => {

    {/** my contact links */}
    const email = "gadzisorameckjunior7@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/rameckjrgadzsio";
    const gitUrl = 'https://github.com/juzgit';

    return(
        <div>
            <Layout>
            <h1>Contact Me</h1>
            <p>You can speak directly to me here</p>
            
            {/** Email icon and Linkedin icon */}

            <div className="profiles">

                <Link href={gitUrl} target="_blank">
                    <p className="github">
                    <BsGithub style={{ color: 'black', marginInline:"8px" }} size={35} />
                    My Github
                    </p>
                </Link>

                <Link href={`mailto:${email}`} target="_blank">
                    <p className="email">
                    <BiLogoGmail style={{ color: "#D44638", fontSize: "2rem", marginInline: "8px" }} size={35} />
                    My Email
                    </p>
                </Link>

                <Link href={linkedinUrl} target="_blank">
                    <p className="linkedin">
                    <BsLinkedin style={{ color: 'blue', marginInline:"8px" }} size={35} />
                    My Linkedin
                    </p>
                </Link>
        
            </div>

        <style jsx>
            {`
            Link{
                text-decoration: none;
            }
            .profiles{
                display:flex;
                flex-direction: column;
                padding: 15px;
            }

            .github{
                display: flex;
                flex-direction;
                align-items: center;
                margin-inline: 6px;
                color: black;
                text-decoration: none;
                margin-bottom: 9px;
                border: 1px solid black;
                border-radius: 9px;
                width: 180px;
                padding: 15px;
                cursor: pointer;
            }

            .github:hover{
                border: 4px solid black;
            }

            .email{
                display: flex;
                flex-direction;
                align-items: center;
                margin-inline: 6px;
                color: black;
                text-decoration: none;
                margin-bottom: 9px;
                border: 1px solid black;
                border-radius: 9px;
                width: 180px;
                padding: 15px;
                cursor: pointer;
            }

            .email:hover{
                border: 4px solid #D44638;
            }

            .linkedin{
                display: flex;
                flex-direction;
                align-items: center;
                margin-inline: 6px;
                color: black;
                text-decoration: none;
                margin-bottom: 9px;
                border: 1px solid black;
                border-radius: 9px;
                width: 180px;
                padding: 15px;
                cursor: pointer;
                display: flex;
                flex-direction: row;
            }
            
            p{
             color: black;
             text-decoration: none;
             font-size: 20px;
            }

            .linkedin:hover{
                border: 4px solid blue;
            }
            
            `}
        </style>

            </Layout>
        </div>
    );
};

export default Contact;