import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-cockpit",
    templateUrl: "./cockpit.component.html",
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent{
    @Output() serverCreatedEvent = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreatedEvent = new EventEmitter<{blueprintName: string, blueprintContent}>();

    newServerName = '';
    newServerContent = '';
  
    onAddServer() {
        this.serverCreatedEvent.emit({
            serverName: this.newServerName,
            serverContent: this.newServerContent
        });
    }
  
    onAddBlueprint() {
        this.blueprintCreatedEvent.emit({
            blueprintName: this.newServerName,
            blueprintContent: this.newServerContent
        });
    }
}