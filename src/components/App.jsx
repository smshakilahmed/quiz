import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './Quiz/QuestionList.jsx';
import Scorebox from './Quiz/Scorebox.jsx';
import Results from './Quiz/results.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                id:1,
                text: 'what is your name?',
                choices:[
                    {
                        id:'a',
                        text: 'michel'
                    },
                    {
                        id:'b',
                        text: 'shakil'
                    },
                    {
                        id:'c',
                        text: 'ahmed'
                    }
                ],
                correct: 'a'

                },


                {
                    id:2,
                        text: ' b what is y3our name?',
                    choices:[
                    {
                        id:'a',
                        text: 'michel'
                    },
                    {
                        id:'b',
                        text: 'shakil'
                    },
                    {
                        id:'c',
                        text: 'ahmed'
                    }
                    ],
                    correct: 'b'

                },


                {
                    id:3,
                        text: ' c what is your name?',
                    choices:[
                    {
                        id:'a',
                        text: 'michel'
                    },
                    {
                        id:'b',
                        text: 'shakil'
                    },
                    {
                        id:'c',
                        text: 'ahmed'
                    }
                    ],
                    correct: 'c'

                }
            ],
            score: 0,
            current:1
        }
    }
    setCurrent(current){
        this.setState({current})
    }
    setScore(score){
        this.setState({score})
    }

    render(){
        if (this.state.current > this.state.questions.length){
            var scorebox ='';
            var results = <Results {...this.state}/>;
        }else{
            var scorebox = <Scorebox {...this.state}/>;
            var results = '';
        }
        return(
            <div>
                {scorebox}
               <QuestionList {...this.state}
                   setCurrent={this.setCurrent.bind(this)}
                   setScore={this.setScore.bind(this)}
               />
                {results}
            </div>
        )
    }
}
export default App

