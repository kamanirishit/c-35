class Form{
    constructor(){}
    display(){
        var title=createElement("h2");
        title.html("Multiplayer Car Racing Game");
        title.position(130,0);
        var inp=createInput("Name");
        var button=createButton("Play");
        var greeting=createElement("h3");
        inp.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            inp.hide();
            button.hide();
            var name=inp.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(130,160);
        })
    }
}