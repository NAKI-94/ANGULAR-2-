import { Route } from "@angular/router";
import { SignalComponent } from "./signal.component";

const ROUTES:Route[]=[
    {
        path:"",
        component: SignalComponent,
        children:[
            {
                path:"",
                pathMatch:"full",
                redirectTo:"signal-ejemplo1"
            },
            {
                path:"signal-ejemplo1",
                loadComponent:()=>
                    import("./signal-ejemplo1/signal-ejemplo1.component")
            },
            {
                path:"signal-ejemplo3",
                loadComponent:()=>
                    import("./signal-ejemplo3/signal-ejemplo3.component")
            },
            {
                path:"signal-ejemplo4",
                loadComponent:()=>
                    import("./signal-ejemplo4/signal-ejemplo4.component")
            },
            {
                path:"signal-ejemplo5",
                loadComponent:()=>
                    import("./signal-ejemplo5/signal-ejemplo5.component")
            },
            {
                path:"signal-ejemplo6",
                loadComponent:()=>
                    import("./signal-ejemplo6/signal-ejemplo6.component")
            },
            {
                path:"signal-ejemplo7",
                loadComponent:()=>
                    import("./signal-ejemplo7/signal-ejemplo7.component")
            }
        ]
    }
]

export default ROUTES;