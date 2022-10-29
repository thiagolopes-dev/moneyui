import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimeNGModule } from "src/app/primeng.module";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        PrimeNGModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule { }