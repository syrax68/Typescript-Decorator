/*
RAKOTONARIVO MIANDRISOA SANDRATRA ESIIA 5 N°12
ANDRIANJAFIMAHEFARINJO Manoa Fitiavana N°8
HARIVELO Tantely Lalaina N°6
*/
abstract class Drink {
    private description!: string;

    abstract cost(): number

    getDescription():string{
        return this.description
    }
};

class MilkShake extends Drink{
    cost(): number {
        return 1500
    }
};

class Hotchocolate extends Drink{
    cost(): number {
        return 2500
    }
}

class Coffee extends Drink{
    cost(): number {
        return 1000
    }
}

abstract class AbstractDecorator extends Drink {
    drink: Drink

    constructor(drink: Drink) {
        super()
        this.drink = drink
    }

    abstract getDescription():string
}

class Chocolate extends AbstractDecorator{
    constructor(drink: Drink) {
        super(drink)
    }
    getDescription(): string{
        return this.drink.getDescription()+"Au chocollat"
    }
    cost(): number {
        return 500+this.drink.cost()
    }
}
class Milk extends AbstractDecorator{
    constructor(drink: Drink) {
        super(drink)
    }
    getDescription(): string{
        return this.drink.getDescription()+"Au lait"
    }
    cost(): number {
        return 600+this.drink.cost()
    }
}

class SweetWhippedCream extends AbstractDecorator{
    constructor(drink: Drink) {
        super(drink)
    }
    getDescription(): string{
        return this.drink.getDescription()+"Au lait"
    }
    cost(): number {
        return 1000+this.drink.cost()
    }
}

let milk = new  MilkShake()
console.log(milk.cost())
milk = new Chocolate(milk)
console.log(milk.cost())
milk = new Milk(milk)
console.log(milk.cost())