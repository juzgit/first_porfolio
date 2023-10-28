import React from "react";
import Link from "next/link";

const Header = () => {
    return(
        <nav>
            <ul>
            <li>
                <Link href='/'><p>Home</p></Link>
            </li>

                <li>
                    <Link href='/about'><p>About Me</p></Link>
                </li>

                <li>
                    <Link href='/projects'><p>Projects</p></Link>
                </li>

                <li>
                    <Link href='/contact'><p>Contact Me</p></Link>
                </li>
            </ul>

            <style jsx>{`
        nav {
          background-color: #333; /* Set the background color of the navigation bar */
          padding: 10px 0; /* Add some padding around the navigation items */
          margin-top: 0; 
        }

        ul {
          list-style: none; /* Remove default list styles (bullet points) */
          display: flex; /* Use flexbox layout */
          justify-content: space-around; /* Distribute items evenly along the main axis */
        }

        li {
          margin: 0 15px; /* Add some margin between list items for spacing */
        }

        p {
          color: white; /* Set the color of the links */
          text-decoration: none; /* Remove underline from links */
        }

        p:hover {
          text-decoration: underline; /* Add underline on hover */
        }
      `}</style>
        </nav>
    );
};

export default Header;