import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-cockpit",
    templateUrl: "./cockpit.component.html",
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent{
    @Output() serverCreatedEvent = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreatedEvent = new EventEmitter<{blueprintName: string, blueprintContent}>();

    // newServerName = '';
    // newServerContent = '';
  
    onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
        this.serverCreatedEvent.emit({
            serverName: serverName.value,
            serverContent: serverContent.value
        });
    }
  
    onAddBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
        this.blueprintCreatedEvent.emit({
            blueprintName: serverName.value,
            blueprintContent: serverContent.value
        });
    }
}