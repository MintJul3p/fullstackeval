import {Component} from "react";
import {Link, withRouter} from "react-router-dom";

const {SectionDetailRequest, SectionByIdRequest} = require('../Modules/SectionsRequest.js');

class SectionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            name:"",
            level:""
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
        SectionDetailRequest(id)
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    students: result
                })

            });
        SectionByIdRequest(id)
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    name: result[0].name,
                    level : result[0].level
                })
        console.log(this.state)
            })
    }

    render() {

        const {students, name, level} = this.state
        console.log(students)
        return (
            <div>
                {level + "e "+ name + " :"}
                <ul>
                    {students.map((item) => (
                        <li key={item.Id_student}>
                            {"Nom : " + item.lastname +", Prénom : " + item.firstname}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


// return(
//     <p>pouet</p>
// )


}

export default withRouter(SectionDetail);