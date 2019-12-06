import React from 'react';
import axios from 'axios';
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fact:''
        }
        this.getFact = this.getFact.bind(this);
    }

    getFact() {
        console.log('clicked!!')
          fetch('/catfacts')
          .then(res => res.json())
          .then(data => {
             return this.setState({fact: data.fact});
          })
          .catch(err => {
             res.redirect('/error');
          });
    }

    render(){
        return(
            <div>
                <h1>Animal Facts</h1>
                <div id='container'>

                    {/* working on flipping the card */}
                    <div class ="flip-card">
                        <div class ='flip-card-inner'>
                            <div class='flip-card-front'>
                            <img id='bengal-tiger' src='https://www.tigers-world.com/wp-content/uploads/Bengal.jpg'/>
                            </div>

                            <div class='flip-card-back'>
                                <h1>Bengal Tiger</h1>
                                <h2>Where they live!</h2>
                                <p>words......</p>
                                <h2>What they eat!</h2>
                                <p>words......</p>
                                <h2>Are they endangered?</h2>
                                <p>words......</p>
                            </div>
                        </div>
                    </div>

                    <div class ="flip-card">
                        <div class ='flip-card-inner'>
                            <div class='flip-card-front'>
                            <img id='mantis-shrimp' src='https://assets.answersingenesis.org/img/articles/am/v13/n6/mantis-shrimp2.jpg'/>
                            </div>

                            <div class='flip-card-back'>
                                <h1>Bengal Tiger</h1>
                                <h2>Where they live!</h2>
                                <p>words......</p>
                                <h2>What they eat!</h2>
                                <p>words......</p>
                                <h2>Are they endangered?</h2>
                                <p>words......</p>
                            </div>
                        </div>
                    </div><div class ="flip-card">
                        <div class ='flip-card-inner'>
                            <div class='flip-card-front'>
                            <img id='ayeaye' src='http://cdn.sci-news.com/images/enlarge3/image_4041_2e-Slow-Loris.jpg'/>
                            </div>

                            <div class='flip-card-back'>
                                <h1>Bengal Tiger</h1>
                                <h2>Where they live!</h2>
                                <p>words......</p>
                                <h2>What they eat!</h2>
                                <p>words......</p>
                                <h2>Are they endangered?</h2>
                                <p>words......</p>
                            </div>
                        </div>
                    </div><div class ="flip-card">
                        <div class ='flip-card-inner'>
                            <div class='flip-card-front'>
                            <img id='ogre-spider' src='https://i.redd.it/89jvxfdwn1iz.jpg'/>
                            </div>

                            <div class='flip-card-back'>
                                <h1>Bengal Tiger</h1>
                                <h2>Where they live!</h2>
                                <p>words......</p>
                                <h2>What they eat!</h2>
                                <p>words......</p>
                                <h2>Are they endangered?</h2>
                                <p>words......</p>
                            </div>
                        </div>
                    </div>
                </div>
            <button onClick={this.getFact}>Click for fact</button>
                <p>{this.state.fact}</p>
            <button> Take the Quiz! </button>
            
            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        )
    }

}