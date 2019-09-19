import { Component, OnInit, HostListener, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate, query, keyframes, stagger } from '@angular/animations';

@Component({
  selector: 'ra-autodropdown-lib',
  templateUrl:'autodropdown-lib.component.html',
  styleUrls: ['autodropdown-lib.component.css'],
  animations: [
    trigger('listAnimations', [
      transition('void => *', [
        query('.animateMe', style({ opacity: 0, transform: 'translateX(-8px)' })),
        query('.animateMe', stagger('50ms', [
          animate('500ms .5s ease-out', style({ opacity: 1, transform: 'translateX(0px)' }))
        ]))
      ])
    ])
  ]
})
export class AutodropdownLibComponent implements OnInit {

  @Input() raData;
  @Input() raLabel;
  @Input() raCompressed;
  @Output() raOnchange = new EventEmitter();
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    // Re Init Values 
    this.raData = this.raData || [];
    this.raData = this.raData.map((val,key)=>{
      if (!val.hasOwnProperty('checked')){
        val['checked'] = false;
      }  
      return val;
    })
    this.raLabel = this.raLabel || 'Label Name';
    this.raCompressed = this.raCompressed || false;
    this.onChangeSelect();

  }

  openPopup: boolean = false;
  filterValue = '';
  filterTheList($event) {
    this.filterValue = $event.target.value;
  }
  finalSelectedValueName: string = '';
  finalSelectedValueList = [];


  /**
   * On check change calue
   * @param raData 
   */
  onChangeSelect() {
    this.finalSelectedValueName = '';
    this.finalSelectedValueList = []
    let names = '';
    this.finalSelectedValueList = this.raData.filter((val, key) => {
      if (val.checked) {
        names += val.name + ",";
        return val;
      }
    })
    let nameArray = names.split(","); nameArray.length && nameArray.pop(); names = nameArray.join(",");
    this.finalSelectedValueName = names;
    this.raSelectedEmit();
  }

  /**
   * Emit selected data
   */
  raSelectedEmit(){
    this.raOnchange.emit(this.finalSelectedValueList);
  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.openPopup = false;
      this.filterValue=  '';
    }
  }

  displayLength:number = 60;
  @HostListener('scroll', ['$event']) scrollHandler(event) {
    if (Math.round(event.target.offsetHeight + event.target.scrollTop) == Math.round(event.target.scrollHeight)){
      this.displayLength += this.displayLength;
    }
  }


  /**
   * Sorting Order based on Check
   */
  sortOrder:boolean = false;
  shortOrder(){
    this.sortOrder = !this.sortOrder;
  }

  /**
   * Clear All seleced data 
   */
  clearAll(){
    this.raData = this.raData.map((val, key) => {
      val['checked'] = false;
      return val;
    })
    this.onChangeSelect();

  }
  /**
   * Select All  data 
   */
  selectAll(){
    this.raData = this.raData.map((val, key) => {
      val['checked'] = true;
      return val;
    })
    this.onChangeSelect();

  }



}
