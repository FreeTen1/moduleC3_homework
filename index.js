class Device {
    constructor(name, power, isPlugged = false) {
        this.name = name
        this.power = power
        this.isPlugged = isPlugged
    }

    switching() {
        this.isPlugged = !this.isPlugged
        let text = this.isPlugged ? 'plugged' : 'un plugged'
        console.log(this.name + ' is ' + text)
    }
}

class Monitor extends Device {
    constructor(name, brand, power, matrix) {
        super(name)
        this.brand = brand
        this.power = power
        this.matrix = matrix
        this.isPlugged = true
    }
}

class Mouse extends Device {
    constructor(name, brand, power, iso) {
        super(name)
        this.brand = brand
        this.power = power
        this.iso = iso
        this.isPlugged = false
    }
}

const myMonitor = new Monitor('FLATRON', 'LG', 75, 'ips')
const myMouse = new Mouse('Naga', 'Razer', 15, 8700)

myMonitor.switching()
myMouse.switching()

console.log(myMonitor)
console.log(myMouse)

