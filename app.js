

const options = [".rock",".paper",".sciccors"]
const array = [0,1,2,0,1,2,0,1,2,0,1,2]


let player1Choice = ""
let player2Choice = ""


options.forEach(i => {
    $(i).click(function(){
        switch (i) {
            case ".paper": player1Choice = 0
                break;
            case ".rock": player1Choice = 1 
                break;
            case ".sciccors": player1Choice = 2
                break;
            default:
                break;
        }
        
        player2Choice =  Math.floor(Math.random() * 3)
        gameStart()
    })
});





function gameStart (){
    changeImg(player1Choice,"#player1_img","P1")
    changeImg(player2Choice,"#player2_img","P2")
    winner(player1Choice,player2Choice)

    

}

function changeImg(playerChoice,imageId,p) {
    switch (playerChoice) {
        case 0: $(imageId).attr("src","imgs/Paper_"+p+".png")
            
            break;
        case 1: $(imageId).attr("src","imgs/Rock_"+p+".png")
            
            break;
        case 2: $(imageId).attr("src","imgs/Sciccor_"+p+".png")
            
            break;
    
        default: console.log("error")
            break;
    }
}

function winner(player1, player2){
    if(player1 === player2){
        $(".winner").text("Draw")
    }else if(player2 == 0){
        return(player1 == 2) ? $(".winner").text("Player 1 Wins") : $(".winner").text("Player 2 Wins")
    }else if(player2 == 1){
        return(player1 == 0) ? $(".winner").text("Player 1 Wins") : $(".winner").text("Player 2 Wins")
    }else if(player2 == 2){
        return(player1 == 1) ? $(".winner").text("Player 1 Wins") : $(".winner").text("Player 2 Wins")
    }
    }


    array.forEach((element,i) => {
        
        setTimeout(()=>{
            changeImg(element,"#player2_img","P2")
        
        },i * 100)
        
        
    });