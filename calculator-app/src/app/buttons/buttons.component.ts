import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  result:string = '';
	res:number = 0;	
	
	one(){
	   this.result += 1;
	}
    two(){
	   this.result += 2;
	}
	three(){
	   this.result += 3;
	}
	four(){
	   this.result += 4;
	}
    five(){
	   this.result += 5;
	}
	six(){
	   this.result += 6;
	}
	seven(){
	   this.result += 7;
	}
    eight(){
	   this.result += 8;
	}
	nine(){
	   this.result += 9;
	}
	minus(){
		this.result += '-';
	}

	plus(){
		this.result += '+';
	}
	divide(){
		this.result += '/';
	}
	
	multiply(){
		this.result += '*';
	}
	equally(){
        this.res = eval(this.result);
	}

}
