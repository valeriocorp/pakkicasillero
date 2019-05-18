export class Usuario {


    constructor(
      public  nombre:  string, 
      public  apellido:  string, 
      public  telefono:  string,
      public  email:  string,
      public  password:  string,

      public  casillero?:  string, 
      public  direccion?:  string,
      public  genero?: string, 
      public  img?:  string,
      public  documento?:  string,
      public  tipoDocumento?: string,
      public  fechaNacimiento?:  string,
      public  intereses?:  string,
      public  role?:  string, 
      public  google?:boolean,
      public  _id?: string

    ){}




}