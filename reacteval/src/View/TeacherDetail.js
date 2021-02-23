import {Component} from "react";
import {Link, withRouter} from "react-router-dom";

const {TeacherDetailRequest} = require('../Modules/TeachersRequest.js');

class TeacherDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: [],
            firstname :"",
            lastname : "",
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
        TeacherDetailRequest(id)
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    subject: result,
                    firstname: result[0].firstname,
                    lastname : result[0].lastname

                })
                console.log(this.state.subject)
            });
    }

    render() {

        const {subject, firstname, lastname} = this.state
        return (
            <div> {"Matière pour " + firstname + " " + lastname +" :"}
                <ul>

                    {subject.map((item) => (

                                <li key={item.subject}>
                            {item.subject}
                        </li>
                    ))}

                </ul>
            </div>
        );
    }


}

export default withRouter(TeacherDetail);