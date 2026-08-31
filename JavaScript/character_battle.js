/*
  Character Battle

Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

    Characters a-z have a strength of 1-26, respectively.
    Characters A-Z have a strength of 27-52, respectively.
    Digits 0-9 have a strength of their face value.
    All other characters have a value of zero.
    Each character can only fight one battle.

For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

    "Opponent retreated" if your army has more characters than the opposing army.
    "We retreated" if the opposing army has more characters than yours.
    "We won" if your army won more battles.
    "We lost" if the opposing army won more battles.
    "It was a tie" if both armies won the same number of battles. 
 */
function battle(myArmy, opposingArmy) {  
  if(typeof myArmy !== "string" || typeof opposingArmy !== "string"){
    throw new TypeError("Both inputs must be a string")
  }

  if (myArmy.length > opposingArmy.length){
    return "Opponent retreated";
  }
  else if(myArmy.length < opposingArmy.length){
    return "We retreated";
  }else{      
    const getStrength = (letter) =>{
      let strength = letter.charCodeAt(0);
      if(strength >= 48 && strength <=57){
        return strength - 48;
      }else if(strength >= 65 && strength <=90){      
        return strength - 38;
      }else if (strength >= 97 && strength <=122){
        return strength - 96;
      }else{
        return 0;
      };
    }    
    let myArmyCounter = 0;
    let opponentArmyCounter = 0;
    for(let i=0; i<myArmy.length;i++){
      const myArmyStr = getStrength(myArmy[i])
      const myOpposingArmyStr = getStrength(opposingArmy[i])
      if (myArmyStr === myOpposingArmyStr) continue
      if (myOpposingArmyStr > myArmyStr) opponentArmyCounter++
      if (myOpposingArmyStr < myArmyStr) myArmyCounter++
    };  
    return myArmyCounter == opponentArmyCounter ? "It was a tie" : myArmyCounter > opponentArmyCounter ? "We won" : "We lost" ;
  };  
};
export default battle;