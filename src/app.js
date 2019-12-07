import React from "react";
// import data from 'animalData.json'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: ""
    };
    this.getFact = this.getFact.bind(this);
    // this.AnimalData = this.AnimalData.bind(this);
  }

  getFact() {
    console.log("clicked!!");
    fetch("/catfacts")
      .then(res => res.json())
      .then(data => {
        return this.setState({ fact: data.fact });
      })
      .catch(err => {
        res.redirect("/error");
      });
  }

  render() {
    return (
      <div>
        <div id='header'>
            <div><h1 id='title'>Cool Animal Facts</h1></div>
            <div id='button-holder'><button className='button'> Take the Quiz! </button></div>
        </div>
        <div className='flashcards'>
          {/* working on flipping the card */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="bengal-tiger"
                  src="https://www.tigers-world.com/wp-content/uploads/Bengal.jpg"
                />
              </div>

              <div class="flip-card-back">
                <h4>Animal Name</h4>
                <h5>Where Do they Live</h5>
                <p>words......</p>
                <h5>What do they eat</h5>
                <p>words......</p>
               <h5>Endangered?</h5>
                <p>words......</p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="mantis-shrimp"
                  src="https://assets.answersingenesis.org/img/articles/am/v13/n6/mantis-shrimp2.jpg"
                />
              </div>

              <div class="flip-card-back">
                <h4>Animal Name</h4>
                <h5>Where Do they Live</h5>
                <p>words......</p>
                <h5>What do they eat</h5>
                <p>words......</p>
               <h5>Endangered?</h5>
                <p>words......</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="ayeaye"
                  src="http://cdn.sci-news.com/images/enlarge3/image_4041_2e-Slow-Loris.jpg"
                />
              </div>

              <div class="flip-card-back">
                <h4>Animal Name</h4>
                <h5>Where Do they Live</h5>
                <p>words......</p>
                <h5>What do they eat</h5>
                <p>words......</p>
               <h5>Endangered?</h5>
                <p>words......</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="ogre-spider"
                  src="https://i.redd.it/89jvxfdwn1iz.jpg"
                />
              </div>

              <div class="flip-card-back">
                <h4>Animal Name</h4>
                <h5>Where Do they Live</h5>
                <p>words......</p>
                <h5>What do they eat</h5>
                <p>words......</p>
               <h5>Endangered?</h5>
                <p>words......</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flashcards'>
          {/* working on flipping the card */}
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="bengal-tiger"
                  src="https://www.tigers-world.com/wp-content/uploads/Bengal.jpg"
                />
              </div>

              <div class="flip-card-back">
                <div>
                    <h4>Animal Name</h4>
                    <h5>Where Do they Live</h5>
                    <p>words......</p>
                    <h5>What do they eat</h5>
                    <p>words......</p>
                    <h5>Endangered?</h5>
                    <p>words......</p>
                </div> 
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="mantis-shrimp"
                  src="https://assets.answersingenesis.org/img/articles/am/v13/n6/mantis-shrimp2.jpg"
                />
              </div>

              <div class="flip-card-back">
                <h4>Animal Name</h4>
                <h5>Where Do they Live</h5>
                <p>words......</p>
                <h5>What do they eat</h5>
                <p>words......</p>
               <h5>Endangered?</h5>
                <p>words......</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="ayeaye"
                  src="http://cdn.sci-news.com/images/enlarge3/image_4041_2e-Slow-Loris.jpg"
                />
              </div>

              <div class="flip-card-back">
                <h4>Animal Name</h4>
                <h5>Where Do they Live</h5>
                <p>words......</p>
                <h5>What do they eat</h5>
                <p>words......</p>
               <h5>Endangered?</h5>
                <p>words......</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  id="ogre-spider"
                  src="https://i.redd.it/89jvxfdwn1iz.jpg"
                />
              </div>

              <div class="flip-card-back">
                <h4>Animal Name</h4>
                <h5>Where Do they Live</h5>
                <p>words......</p>
                <h5>What do they eat</h5>
                <p>words......</p>
               <h5>Endangered?</h5>
                <p>words......</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
