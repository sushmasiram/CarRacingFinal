class Form{
    constructor(){
      this.textBox =  createInput("").attribute("placeholder", "Name");
      this.button = createButton("START")
      this.greetings = createElement('h2');
      this.reset = createButton('RESET');
      
    }

    hideElements(){
      this.textBox.hide()
      this.button.hide()
      this.greetings.hide()
    }
      
    display(){
      
      //this.textBox.position(300,150)
      
       //this.greetings.position(400,200)
      
       //this.button.position(300,300)

       //this.title = createElement("h1")
       //this.title.html("Car Racing Game");
       //this.title.position(
       //  displayWidth / 2.25,
       //  70
       //);

    this.textBox.position(displayWidth / 2.25, displayHeight / 2.5-40);
    this.textBox.style('font-size', '24px', 'color', '#ffffff');
    this.button.position(
      displayWidth / 2.1,
      displayHeight / 2.5 + displayHeight / 20
    );
    this.button.style('font-size', '30px');
    this.button.style('background-color', color(200,200,255));
    this.reset.position(10, 10);      

      this.reset.mousePressed(()=>{
        var ref = database.ref('/')
        ref.set({
          gameState:0,
          playerCount:0,
          CarsAtEnd: 0
        })
        location.reload()
        //player.updateCount(0);
        //game.update(0)
      
      })
      this.button.mousePressed(() =>{
         this.textBox.hide()
         this.button.hide()
     
          
          //this.reset.position(50,200);
          playerCount = playerCount + 1
          player.name = this.textBox.value()
          this.greetings.position(
            displayWidth / 2.1 - player.name.length * (displayWidth / 110),
            325);
          player.index = playerCount
        //  console.log(player.index)
          player.update()

          player.updateCount(playerCount)

          this.greetings.html("Hi " + player.name + ", waiting for more racers...")
               
      });
    }
}