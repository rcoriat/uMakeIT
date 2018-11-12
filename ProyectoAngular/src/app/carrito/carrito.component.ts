import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { FireService } from '../services/fire.service';
import { Plato } from '../models/plato';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { Extra } from '../models/extra';
import { Pedido } from '../models/pedido';
import { Observable, Subscription } from 'rxjs';
import { Contador } from '../models/contador';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, DoCheck {

  usuario: Usuario;
  platos = [];
  extras = [];
  public platoeliminar = {} as Plato;
  nuevoPedido = {} as Pedido;
  armarPedido = true;
  contador = {} as Contador;
  platosPedido = [];
  subscriptionPlatosPedidos: Subscription;

  constructor(public platoService: FireService) { }

  ngOnInit() {
    this.armarPedido = true;
    // tslint:disable-next-line:max-line-length
    this.platoService.db.collection('usuarios', ref => ref.where('correo', '==' , 'cguillen@unimet.edu.ve')).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    })).subscribe(usuarios => {
      this.usuario = usuarios[0];
      // tslint:disable-next-line:max-line-length
      this.platoService.db.collection('platoscarritos', ref => ref.where('cliente', '==' , this.usuario.id)).snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Plato;
          data.id = a.payload.doc.id;
          return data;
        });
      })).subscribe(platosC => {
        this.platos = [];
        // tslint:disable-next-line:max-line-length
        for (let i = 0; i < platosC.length; i++) {
          // tslint:disable-next-line:max-line-length
          this.platoService.db.collection('platos', ref => ref.where('id', '==' , platosC[i].idMenu)).snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as Plato;
              data.id = a.payload.doc.id;
              return data;
            });
          })).subscribe(plts => {
            platosC[i].disponibilidad = plts[0].disponibilidad;
            if (!platosC[i].disponibilidad) {
              this.platoService.borrarPlatoCarrito(platosC[i]);
            } else {
              platosC[i].personalizable = plts[0].personalizable;
              if (!platosC[i].personalizable) {
                platosC[i].extras = [];
                platosC[i].descripcion = plts[0].descripcion;
                platosC[i].nombre = plts[0].nombre;
                platosC[i].imagen = plts[0].imagen;
                platosC[i].tipo = plts[0].tipo;
                platosC[i].precio = plts[0].precio;
                if (this.armarPedido) {
                  this.platos[i] = (platosC[i]);
                }
                console.log(this.platos);
              } else {
                // tslint:disable-next-line:max-line-length
                this.platoService.db.collection('extras', ref => ref.where('disponible', '==' , true)).snapshotChanges().pipe(map(actions => {
                  return actions.map(a => {
                    const data = a.payload.doc.data() as Extra;
                    data.id = a.payload.doc.id;
                    return data;
                  });
                })).subscribe(extrasDisp => {
                  this.extras = extrasDisp;
                  for (let j = 0; j < platosC[i].extras.length; j++) {
                    let extraDisponible = false;
                    for (let k = 0; k < extrasDisp.length; k++) {
                      if (platosC[i].extras[j] === extrasDisp[k].id) {
                        extraDisponible = true;
                        break;
                      }
                    }
                    if (!extraDisponible) {
                      platosC[i].extras.splice(j, 1); // Eliminar extra del plato
                      this.platoService.actualizarPlatoCarrito(platosC[i]); // Actualizar DB
                    }
                  }
                  platosC[i].descripcion = plts[0].descripcion;
                  platosC[i].nombre = plts[0].nombre;
                  platosC[i].imagen = plts[0].imagen;
                  platosC[i].tipo = plts[0].tipo;
                  platosC[i].precio = plts[0].precio;
                  if (this.armarPedido) {
                    this.platos[i] = (platosC[i]);
                  }
                  console.log(this.platos);
                });
              }
            }
          });
        }
      });
    });

    this.platoService.db.collection('contadorpedidos').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Contador;
        data.id = a.payload.doc.id;
        console.log(data);
        return data;
      });
    })).subscribe(params => {
      this.contador = params[0];
    });
  }

  ngDoCheck() {
    /*if (this.armarPedido) {
      this.crearPedido();
      //this.armarPedido = false;
      console.log(this.armarPedido);
    }*/
    if (this.nuevoPedido !== undefined && this.nuevoPedido.numorden != null && this.armarPedido) {
      // tslint:disable-next-line:max-line-length
      this.subscriptionPlatosPedidos = this.platoService.db.collection('platospedidos', ref => ref.where('numorden', '==' , this.nuevoPedido.numorden)).snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Plato;
          data.id = a.payload.doc.id;
          return data;
        });
      })).subscribe(platosPedido => {
        this.nuevoPedido.platos = [];
        for (let i = 0; i < platosPedido.length; i++) {
          this.nuevoPedido.platos[i] = platosPedido[i].id;
        }
      });
      if (!this.armarPedido) {
        this.subscriptionPlatosPedidos.unsubscribe();
        console.log('hizo unsubscribe');

      }
    } else if (this.subscriptionPlatosPedidos !== undefined) {
      this.subscriptionPlatosPedidos.unsubscribe();
      console.log('hizo unsubscribe');
    }
  }

  strExtrasEnPlato(plato: Plato) {
    let strExtras = ' ';
    for (const extraPlato of plato.extras) {
      for (const extra of this.extras) {
        if (extraPlato === extra.id) {
          strExtras = strExtras.concat(extra.nombre + ' ');
          break;
        }
      }
    }
    return strExtras;
  }

  subtotalPlato(plato: Plato) {
    let precio = plato.precio;
    for (const extraPlato of plato.extras) {
      for (const extra of this.extras) {
        if (extraPlato === extra.id) {
          precio += extra.precio;
          break;
        }
      }
    }
    precio = precio * plato.cantidad;
    return precio;
  }

  subtotalCarrito(): number {
    let precio = 0;
    for (const plato of this.platos) {
      precio += this.subtotalPlato(plato);
    }
    return precio;
  }

  iva(): number {
    return +(this.subtotalCarrito() * 0.16).toFixed(2);
  }

  precioTotalCarrito(): number {
    return +(this.subtotalCarrito() + this.iva()).toFixed(2);
  }

  mandaPlatoAEliminar(plato: Plato) {
    this.platoeliminar = plato;
  }

  borrarDelCarrito(event, plato) {
    this.platoService.borrarPlatoCarrito(plato);
  }

  vaciarCarrito() {
    for (const plato of this.platos) {
      this.platoService.borrarPlatoCarrito(plato);
    }
  }

  crearPedido() {
      //this.nuevoPedido = {};
      this.nuevoPedido.estado = 'Pendiente';
      this.nuevoPedido.fecha = new Date();
      this.nuevoPedido.subtotal = this.subtotalCarrito();
      this.nuevoPedido.ivatotal = this.iva();
      this.nuevoPedido.preciototal = this.precioTotalCarrito();/*
      this.platoService.db.collection('contadorpedidos').snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Contador;
          data.id = a.payload.doc.id;
          console.log(data);
          return data;
        });
      })).subscribe(params => {
        params[0].valor++;
        this.nuevoPedido.numorden = +(params[0].valor);
        console.log(this.nuevoPedido.numorden);
        console.log(params[0].valor);
        this.platoService.actualizarContadorPedidos(params[0]);
        for (const plato of this.platos) {
          plato.numorden = this.nuevoPedido.numorden;
          this.platoService.agregarPlatoPedido(plato);
          console.log(plato);
        }
      // tslint:disable-next-line:max-line-length
        this.platoService.db.collection('platospedidos', ref => ref.where('numorden', '==' , this.nuevoPedido.numorden)).snapshotChanges().pipe(map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Plato;
            data.id = a.payload.doc.id;
            return data;
          });
        })).subscribe(platosPedido => {
          this.nuevoPedido.platos = [];
          for (let i = 0; i < platosPedido.length; i++) {
            this.nuevoPedido.platos[i] = platosPedido[i].id;
          }
          this.platoService.agregarPedido(this.nuevoPedido);
          console.log(this.nuevoPedido);
          this.vaciarCarrito();
        });
      });*/
      this.contador.valor++;
      console.log(this.contador.valor);
      this.platoService.actualizarContadorPedidos(this.contador);
      this.nuevoPedido.numorden = this.contador.valor;
      for (let i = 0; i < this.platos.length; i++) {
        this.platosPedido[i] = this.platos[i];
        this.platosPedido[i].numorden = this.nuevoPedido.numorden;
        this.platoService.agregarPlatoPedido(this.platosPedido[i]);
      }
      this.nuevoPedido.platos = this.platosPedido;
      this.platoService.agregarPedido(this.nuevoPedido);
      console.log(this.nuevoPedido);
      this.vaciarCarrito();
      this.platosPedido = [];
      this.platos = [];
      this.armarPedido = false;

  }
}
