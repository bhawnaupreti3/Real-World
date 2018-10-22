import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import {TagsService} from '../services/tags.service';

@Component({
  selector: 'app-showtags',
  templateUrl: './showtags.component.html',
  styleUrls: ['./showtags.component.css']
})
export class ShowtagsComponent implements OnInit {

  public tags=[];
  constructor(private tagsService: TagsService ) { }

  ngOnInit() {
    this.getAllTags();
  }
  getAllTags()
  {
    this.tagsService.getAllTags().subscribe((data:any)=>{
      this.tags=data.tags
    });
    
  }
  
  @Output()
listTag = new EventEmitter();

sendTag(e){
  this.listTag.emit(e);
 
}

}
