import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, SharedModule],
  exports: [CommonModule, TableComponent],
})
export class ComponentsModule {}
