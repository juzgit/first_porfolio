import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
//imported the Github and Render icon to show where I my projects are deployed
import {BsGithub} from 'react-icons/bs';
import {SiRender} from 'react-icons/si';

const Project = () => {

    //my links for the projects.
    const cdm = 'https://github.com/juzgit/car-database-management'
    const wcUrl = 'https://github.com/juzgit/weight-converter';
    const sflUrl = 'https://github.com/juzgit/Save-Posts-For-Later';
    const dashboard = 'https://github.com/juzgit/Dashboard_odin';
    const hangmanUrl = 'https://github.com/juzgit/hangman';
    const madlib = 'https://github.com/juzgit/madlib';
    const iTunesPro = 'https://itunes-search-ui.onrender.com';
    const swfUrl = 'https://github.com/juzgit/Starwars-Films';

    return(
        <div className="container">
            <Layout>
                <h1>Projects</h1>

                <p>For my projects I have used</p>
            

            <div className="projects">
                
                {/**project 1 */}
                <div className="project">
                    <Link href={dashboard} target="_blank">
                    <BsGithub color="black" size={30}></BsGithub>
                    </Link>
                    <h2 className="headings">Dashboard</h2>
                    <span className="project1"><img className="img1" src="/static/images/Dashboard.png" /></span>
                    <p className="details">
                    This project primarily contains HTML and CSS. I learned how use Grid and Flex layout at the same time. 
                    I planned that all the components should be placed in a big container and in the big container I used the grid layout to place each component.
                    The navbar uses the flex layout and the. The projects component uses grid to display the different projects in 2 columns and rows.
                    </p>
                </div>

                {/**project 2 */}
                <div className="project">
                    <Link href={madlib} target="_blank">
                    <BsGithub color="black" size={30}></BsGithub>
                    </Link>
                    <h2 className="headings">Madlib</h2>
                    <span className="project2"><img className="img2" src="/static/images/madlibs.png"/></span>
                    <p className="details">
                    For this project I used HTML, CSS and Javascript. I learned how to manipulate the DOM and the input elements.
                    I learned how to build and display a div containing the madlibs in Javascript.  
                    </p>
                </div>

                {/**project 3 */}
                <div className="project">
                    <Link href={wcUrl} target="_blank">
                    <BsGithub color="black" size={30}></BsGithub>
                    </Link>
                    <h2 className="headings">Weight Converter</h2>
                    <span className="project3"><img className="img3" src="/static/images/wc.png"/></span>
                    <p className="details">
                    For this project I used HTML, CSS and Javascript. I wanted to focus on the mathmatical side, the weight converter gave me that. 
                    It also uses DOM manipulation.
                    </p>                
                </div>

                {/**project 4 */}
                <div className="project">
                    <Link href={sflUrl} target="_blank">
                    <BsGithub color="black" size={30}></BsGithub>
                    </Link>
                    <h2 className="headings">Save for later</h2>
                    <span className="project4"><img className="img4" src="/static/images/sfl.png"/></span>
                    <p className="details">
                    In this project I used HTML, CSS, and Javascript. I streched my Javascript skills, I learned how to use localStorage and expand my DOM manipulation skills.
                    I primarily targeted the images, I placed a save button under each image and created container or a localStorage variable to hold the images that are saved by the user.
                    The application tells the user how many images they have saved and alerts them if they have reached the limit.
                    </p>                
                </div>
                
                {/**Project 5 */}
                <div className="project">
                    <Link href={hangmanUrl} target="_blank">
                    <BsGithub color="black" size={30}></BsGithub>
                    </Link>
                    <h2 className="headings">Hangman React</h2>
                    <span className="project5"><img className="img5" src="/static/images/Hangman.png" /></span>
                    <p className="details">
                    In this project I used React JS and CSS. I divided the game into smaller components, so I can easily debug the issues.
                    I set up the game logic, random word selection, the UI of the project, state management and messages including the help. 
                    I primarily focussed on the User Experience, make it easy for them to use by including the keyboard and showing them the state of the hangman. 
                    It also displays them what letters they have used and they click on the help to understand the rules.
                    </p>                
                </div>

                {/**project 6*/}
                <div className="project">
                    <Link href={iTunesPro} target="_blank">
                    <SiRender color="#00ff83" size={30}></SiRender>
                    </Link>
                    <h2 className="headings">iTunes-Search-Api</h2>
                    <span className="project6"><img className="img6" src="/static/images/iTunesSearch.png/" /> </span>
                    <p className="details">
                    I used React JS and CSS for the frontend, and Express JS for the backend. 
                    I learned how to handle the data received from the external API and display it to the frontend, including the images. 
                    Designed a clean and easy-to-use UI. For the backend I used the CRUD to interact with API and test it with Postman.
                    </p>                
                </div>

                {/**project 7 */}
                <div className="project">
                    <Link href={cdm} target="_blank">
                        <BsGithub color="black" size={30}></BsGithub>
                    </Link>
                    <h2 className="headings">Car Database Management</h2>
                    <span className="project7"><img className="img7" src="/static/images/cardatabase.png" /> </span>
                    <p className="details">
                    The frontend I used React JS and CSS, and for the backend (NodeJS) I used Express JS, MongoDB Atlas/Shell.
                    I broke the project into smalller components: models folder, controllers folder, and the RESTful Api file. 
                    For the frontend I did the same as well: Carlist file, Carform file and Bulkupdate file. 
                    I added error handling to the backend to gracefully handle unexpected scenarios and using the CRUD. 
                    I made the database intergrate with the application by setting up the SCHEMA and performing CRUD operations on the data.
                    </p>                
                </div>

                <div className="project">
                    <Link href={swfUrl} target="_blank">
                        <BsGithub color="black" size={30}></BsGithub>
                    </Link>
                    <h2 className="headings">Starwars Films API</h2>
                    <span className="project8"><img className="img8" src="/static/images/swf.png"/></span>
                    <p className="details">
                    For this project I used React and Next.js. I used them to create the components and primarily used Next.js for dynamic routing.
                    I used a asynchronous function to handle API calls. 
                    I implemented error handling mechanisms, such as checking for API response validity and displaying loading when the data is being fetched. 
                    I used styled-jsx for styling the application.
                    </p>                    
                </div>
            </div>
            </Layout>

            <style jsx>
                {`

                .headings{
                    font-size: 35px;
                }

                .details{
                    font-size: 18px;
                    color: white;
                }

                .container{
                    padding: 25px;
                    background-color: grey;
                    margin:0;
                }

                .project{
                    display: flex;
                    flex-direction: column;
                    margin-top: 8px;
                    margin-bottom: 14px;
                }
                .img1{
                    width:60%;
                    height:25%;
                }

                .img2{
                    width:60%;
                    height:25%;
                }

                .img3{
                    width:60%;
                    height:25%;
                }

                .img4{
                    width:60%;
                    height:25%;
                }

                .img5{
                    width:60%;
                    height:25%;
                }
                
                .img6{
                    width:60%;
                    height: 25%;
                }
            
                .img7{
                    width:60%;
                    height:25%;
                }

                .img8{
                    width:60%;
                    height:25%;
                }
                
                
                
                `}
            </style>
        </div>
    );
};

export default Project;