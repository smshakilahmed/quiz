import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Results extends Component{
    render(){
        var percent = (this.props.score/this.props.questions.length *100);
        if (percent>80){
            var message = 'Awesome job!';
        }else if (percent<80 && percent>60){
            var message = 'Good job !'
        }else {
            var message = 'you did horrible'
        }
        return(
            <div className="well">
            <h4>you got {this.props.score} out of {this.props.questions.length}</h4>
                {percent}%- {message}
                <hr/>
                <a href="/app">Take the test again</a>
            </div>
        )
    }
}
export default Results