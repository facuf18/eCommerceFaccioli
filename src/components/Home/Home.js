import "./home.css"

const Home = (props) => {

    const {greeting} = props;

    return (
        <div>
            <h1 className="text-center">{greeting}</h1>
        </div>
    )
}

export default Home
