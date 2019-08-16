
export class Paquete {


    constructor(
      public  codigo:  string, 
      public  servicio:  string, 
      public  tienda:  string,
      public  numeroOrden:  string,
      public  cantidad:  string,
      public usuario?:  object,
      public  empresa?:  string, 
      public  tracking?:  string,
      public  compra?: boolean, 
      public  tipoProducto?:  string,
      public  factura?:  string,
      public  entrega?: string,
      public  valorArticulo?:  string,
      public  totalEnvios?:  string,
      public  nota?:  string, 
      public  status?:string,
      public  _id?: string

    ){}




}

