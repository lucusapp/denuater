

export class interproductos {
    'id': string;
    'accion': string;
    'titulo': string;
    'marca': string;
    'precio': number;
    'preciocom':number;
    'categoria': string;
    'caracteristicas': string;
    'imagenes': [""];
    'Imagenes': string;
    'fecha':Date;
    'comiEbay': number;
    'comiPay': number ;
    'preCompra':number;
    'margen':number;
    'portes': number;
    'tallas': string;
    'cantidad': number;
  
  payload: any;

  constructor(){
      this.fecha = new Date();

}

}


export class pedidos{
   'nombre': string;
   'direccion': string;
   'telefono': string;
   'cp':string;
   'provincia': string;
   'numero':string;
   'mensajera': string  
}