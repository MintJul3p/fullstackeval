import {Link} from "react-router-dom";

const {Component} = require('react');
const {SectionsRequest} = require("../Modules/SectionsRequest");

class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: []
        }
    }

    componentDidMount() {
        SectionsRequest()
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    sections: result
                })

            })
    }


    render() {
        const {sections} = this.state
        return (

            <div>
                <h2>Classes :</h2>
                <ul>
                    {sections.map((item) => (
                        <li key={item.Id_section}>
                            <Link to={"/SectionDetail/" + item.Id_section}>{item.level + "e " + item.name}</Link> :{" "}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export {Sections}