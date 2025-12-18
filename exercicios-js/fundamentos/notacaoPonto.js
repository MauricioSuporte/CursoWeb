const obj1 = {}

obj1.nome = 'Boola'
obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log(this.nome)
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
obj2.exec()
obj3.exec()