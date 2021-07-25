
import './App.css';
import Button from './lib/components/button';
import Card from './lib/components/card';

function App() {
  return (
    <div className="App">
     <Button type="grad" bcolor="linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)">CLICK</Button>
      <Button type="grad" bcolor="linear-gradient(to right, #F2994A 0%, #F2C94C  51%, #F2994A  100%)">CLICK</Button>
      <Button type="grad" bcolor="linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645)"
       onClick= {() => console.log('I just got cliked')}
       >CLICK</Button>


       <div className="glassmorphism">
         <div className="inner">
      <Button type="glass"
      color="yellow"
       >CLICK</Button>
       </div>
  </div>
  <div className = "cardsection">
      <Card 
       variant = "short">
           <div className = "card-img-1">
           <img className = "card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card" />
          </div>
          <div className = "card-content">
          <h4 className="heading">CLINARY</h4>
          <p className = "card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam. </p>
          </div>
          <div className = "card-footer">
            <button>BUTTON</button>
          </div>
       </Card>
       <Card 
       variant = "short"
       color = "#880e4f">
           <div className = "card-img">
           <img className = "card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card" />
          </div>
          <div className = "card-content">
          <h4 className="heading">CLINARY</h4>
          <p className = "card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam. </p>
          </div>
          <div className = "card-footer">
            <button>BUTTON</button>
          </div>
       </Card>
       </div>
       {/*HOVER EFFECT */}
       <div className="hovercard">
       <Card 
       variant = "short">    
     <div class="pro-pic" style={{backgroundImage: 'url("https://i.pinimg.com/originals/0a/78/58/0a7858d898165f8d7c8d035f6cba260e.png")'}}></div> 
    <div class="description-wrap">
    <div class="description">
      <h3>Natural Beauty</h3>
      <h5>Front end developer</h5>
      <p>Sed ut perspiciatis unde omnis iste natus sit totam rem aperiam.</p>
       <ul>
         <li><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a></li>
         <li><a href="#"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" /></a></li>
         <li><a href="#"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" /></a></li>
       </ul>       
    </div>
     </div>
       </Card>
       </div>
    </div>
  );
}

export default App;
