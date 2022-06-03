import { ModuleWithProviders, NgModule, Type } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

const materialModules: any[] = [MatButtonModule, MatToolbarModule, MatIconModule]

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
