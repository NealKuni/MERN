class Ninja{
  constructor(name, health){
    this.name = name;
    this.name = health;
    this.speed = 3;
    this.health = 3;
  
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