import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() onSubmit : EventEmitter<any> = new EventEmitter();

  title:string=""
  constructor() { }

  ngOnInit(): void {
  }


  handleSubmit = () =>{

    const item = {
      id : uuidv4(),
      title : this.title,
      completed : false
    }
    
    this.onSubmit.emit(item)
    this.title= '';
  }
}
