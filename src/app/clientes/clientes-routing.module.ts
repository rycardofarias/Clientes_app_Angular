import { LayoutComponent } from './../layout/layout.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'clientes', component: LayoutComponent, children:[
    
    {path: 'form', component: ClientesFormComponent},
    {path: 'form/:id', component: ClientesFormComponent},
    {path: 'lista', component: ClientesListaComponent}
    
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
