import React, { Component } from "react";

class About extends Component {
    render() {
        const skills = ["HTML", "CSS", "Javascript", "Jest", "HOF's", "JS Assincrono", "React"];
        const jsxSkills = skills.map((skill) => <li> {skill} </li>);
        return (
            <div>
                <h1>Rafael Brandão</h1>
                <p>29 anos, moro em Itajubá-MG</p>
                <h2>Minhas Habilidades</h2>
                <ul>{ jsxSkills }</ul>
            </div>
        );
    }
}

export default About;