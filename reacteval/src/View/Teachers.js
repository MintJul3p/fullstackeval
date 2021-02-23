import {Link} from "react-router-dom";

const {Component} = require('react');
const {TeachersRequest} = require("../Modules/TeachersRequest");

class Teachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teachers: []
        }
    }

    componentDidMount() {
        TeachersRequest()
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    teachers: result
                })

            })
    }


    render() {
        const {teachers} = this.state
        return (

            <div>
                <h2>Teachers :</h2>
                <ul>
                    {teachers.map((item) => (
                        <li key={item.Id_teacher}>
                            <Link to={"/TeacherDetail/" + item.Id_teacher}>{item.firstname + "e " + item.lastname}</Link> :{" "}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export {Teachers}