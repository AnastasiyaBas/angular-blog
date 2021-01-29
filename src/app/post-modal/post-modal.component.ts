import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {
    heading: string;
    content: any;

    constructor(public modalRef: MDBModalRef) { }
    ngOnInit() {
        console.log(this.content);
    }

}
