import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/message';

@Component( {
    /* tslint:disable */
    selector: '.messagesBox',
    /* tslint:enable */
    styleUrls: ['./messages-box.component.css'],
    templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
    // Declaring the variable for binding with initial value
    private messages: Message[];
    private msgLength: {};

    constructor( private msgServ: MessagesService) {
        this.messages = [];
    }

    public ngOnInit() {
        // Every incoming message changes entire local message Array.
        // this.msgServ.messages.subscribe(( msg: Message[] ) => {
        //     this.messages = msg;
        //     this.msgLength = { 0: this.messages.length };
        // });
    }
}
