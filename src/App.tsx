import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footor";
import Axios from "axios";

const Appfield: React.FC = () => {
    const [ques, setques] = useState();
    const [ans, setans] = useState();
    const [user, setuser] = useState("");
    const [result, setresult] = useState("");
    const [block, setblock] = useState(false);


    useEffect(() => {
        Axios.get("https://jservice.io/api/random").then(res => {
            setans(res.data[0].answer);
            setques(res.data[0].question);
        }).catch(err => console.log(err))

    }, []);

    function handleClick() {
        if (ans === user) {
            alert("The Answer is Correct");
            setresult("The Player Wins");
        }
        else {
            alert("The Given answer is incorrect");
            setresult("OOPS Try it again");
        }
        setblock(true)
    }

    return (
        <div>
            <Header />
            <h1 style={{ fontFamily: "'Nunito', sans-serif", color: "whitesmoke" }}>{result}</h1>
            <br />
            <p className="ques">{ques}</p>
            <div>
                <input
                    onChange={(event) => {
                        const input = event.target.value;
                        setuser(input)
                    }}
                    placeholder="Type Your Answer"
                /></div>
            <div><button className="button_slide slide_diagonal" onClick={handleClick}>Submit</button></div>
            {block ? <div className="result"><p>The Answer is: {ans}</p>
                <p>Your Submitted Answer is: {user}</p></div> : null}
            <Footer />
        </div>
    );

}

export default Appfield;
