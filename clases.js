


class Pelicula{
  constructor(nombre ,id){

    this.nombre=nombre;
    this.id=id;
  }

  reproducir(){

    return `Reproduciendo pelicula ${this.nombre}`;

    }
}

class Serie extends Pelicula{

  constructor(nombre,id,cap){
    super(nombre,id);
    this.cap=cap;
  }

  reproducirserie(){

    return `Reproduciendo capitulo...${this.cap},${this.nombre}`;
  }
}

const ins1=new Pelicula("juan",1);
const ins2=new Pelicula("angel",2);

const ins3=new Serie("dexter",3,55);

console.log(ins1);
console.log(ins2);
console.log(ins2.reproducir());
console.log(ins3.reproducirserie());
