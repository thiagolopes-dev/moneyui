import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    exports: [
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        TooltipModule
    ]
})

export class PrimeNGModule { }