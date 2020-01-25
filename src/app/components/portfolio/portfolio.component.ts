import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }
	@Input() url: string;
	@Input() alttext: string;
	@Input() text: string;
	@Input() headline: string;
	@Input() name: string;
	@Input() year: string;

	//@ViewChild('portfolio') el: ElementRef;

	content = {
		'background-color': 'white',
		'border': '0.5px solid #000',
    }

    info = {
        'padding': '15px 10px',
    }

    image = {
        'width': '100%',
        /* opacity: 1; */
    }

    headlineStyle = {
        'font-size': '24px',
        'padding-bottom': '10px',
    }

    block = {
        'padding': '10px 0px',
    }

	constructor() { }

	ngOnInit() {

	}

}
