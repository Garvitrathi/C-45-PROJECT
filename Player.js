class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.rank = null;
    }
     
    getRank(){
      var rank = database.ref('rank');
      rank.on("value",(data)=>{
       this.rank = data.val();
      })
    }
  
    static updateRank(rank){
      database.ref('/').update({
        rank:rank
      })
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,

      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  