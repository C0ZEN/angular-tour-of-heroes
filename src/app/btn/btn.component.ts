import {
  Component,
  Input,
  OnInit
}                   from '@angular/core';
import {BtnService} from './btn.service';

@Component({
  selector   : 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls  : ['./btn.component.css']
})

export class BtnComponent implements OnInit {
  @Input() public label: string = this.btnService.label;

  constructor(private btnService: BtnService) {
  }

  ngOnInit() {
  }
}
