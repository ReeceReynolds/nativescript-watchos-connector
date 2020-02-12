import { Component, OnInit } from "@angular/core";
import { WatchOSConnector } from "nativescript-watchos-connector";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    constructor(public watchosConnector: WatchOSConnector) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        let test = this.watchosConnector.convertInt(16);
        console.log("Value: " + test);
        console.log("Type: " + typeof test);
    }
}
