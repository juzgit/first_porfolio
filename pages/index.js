import Layout from "../components/Layout";

//My home page
const Home = () => {
    return(
        <div className="container">
        <Layout>
        <h1>Welcome to my portfolio</h1>
        <p className="intro">  
            <span className="s-name">Hi! My name is Rameck-Junior Gadziso</span>, I am a full-stack developer based in Cape Town, South Africa.
            I am comfortable working with HTML, CSS, Javascript, React JS, Node JS, Express and Next JS.
        </p>
        </Layout>

        <style jsx>
            {`
             .s-name{
                font-size: 35px;
                font-style: italic;
             }

             .intro{
                font-size: 25px;
                display: block;
             }

             .container{
                background-color: grey;
                height: 100vh;
             }
            `}
        </style>
        </div>

    );
};

export default Home;