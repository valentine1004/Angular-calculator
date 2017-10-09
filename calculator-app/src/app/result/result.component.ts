import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

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
  zero(){
	   this.result += 0;
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

	leftBracket(){
		this.result += '(';
	}
	rightBracket(){
		this.result += ')';
	}
	
	point(){
		this.result += '.';
	}

	equally(){
        this.res = eval(this.result);
	}
	empty(){
		this.res = 0;
		this.result = '';
	}
	minusOne(){
		this.result = this.result.substring(0,this.result.length-1);
	}
}
