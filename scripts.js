const Motorbike = function () {
    

    this.model = function (model) {
        let lineup = [`Honda`, `Suzuki`, `Yamaha`]
        if (typeof model != 'string' || lineup.includes(model.toLocaleUpperCase()) != true) return;
        this.model = model.toLocaleUpperCase();
       
    };

    let petrol = 0;
    let statusPetrol;

    this.fullTank = function () {
        if(petrol > 0) {
            statusPetrol = true;
            console.log(`Бак полон`);
        } else {
            console.log(`Бак пуст`);
        }
    };

    this.startEngin = function () {
        if (statusPetrol = true && petrol > 0) {
            console.log(`Двигатель работает`);
        } else {
            console.log(`Двигатель не работает`);
        }
    };


    let status = false;

    this.lightOn = function () {
        status = true;
    };

    this.lightOff = function () {
        status = false;
    };

    this.info = function () {
        console.log(`
            Status: ${status}
        `);
    };

};

let motorbike = new Motorbike ();
console.log(motorbike); 
 