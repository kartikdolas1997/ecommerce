import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const components = [CommonModule, MatMenuModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...components],
  exports: [...components],
})
export class MaterialModule {}
