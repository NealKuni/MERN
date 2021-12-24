class Ninja{
  constructor(name, health, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    
    
  }

  sayName(){
    console.log(this.name)
    return this;
  }
  showStats(){
  console.log(
    `${this.name} has ${this.speed} speed and ${this.health} health.`
  )
  return this;
  }
  drinkSake(){
    this.health + 10;
    `${this.name} increased their health.`
    return this;
  }

}

class Sensei extends Ninja{
  constructor(name, wisdom = 10){
    super(name, 200, 10, 10);
    this.wisdom = wisdom;
    }

    speakWisdom(){
      super.drinkSake();
      console.log('There is no try, there is only do or do not...Hmmm sake!')
    }
}


const sensei = new Sensei('master yoda');
sensei.speakWisdom();

