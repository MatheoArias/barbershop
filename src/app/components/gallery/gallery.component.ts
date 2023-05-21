import { Component,OnInit,HostListener } from '@angular/core';
import { Carrusel } from 'src/app/models/carrusel.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit{
  items:Carrusel[]=[
    {
      id:1,
      img:'../../../assets/images/image_1.jpeg',
      position:0
    },
    {
      id:2,
      img:'../../../assets/images/image_2.jpeg',
      position:0
    },
    {
      id:3,
      img:'../../../assets/images/image_3.jpeg',
      position:0
    },
    {
      id:4,
      img:'../../../assets/images/image_4.jpeg',
      position:0
    },
    {
      id:5,
      img:'../../../assets/images/image_5.jpeg',
      position:0
    },
    {
      id:6,
      img:'../../../assets/images/image_6.jpeg',
      position:0
    },
    {
      id:7,
      img:'../../../assets/images/image_7.jpeg',
      position:0
    },
    {
      id:8,
      img:'../../../assets/images/image_8.jpeg',
      position:0
    },
    {
      id:9,
      img:'../../../assets/images/image_9.jpeg',
      position:0
    },
    {
      id:10,
      img:'../../../assets/images/image_10.jpeg',
      position:0
    },
  ];

  finalHeight:string | number = 0;
  translateValue=0;
  Finalposition=0;
  innerWidth=0;
  lenghtArray=0

  test=0
  ngOnInit(){
    this.items.map((item,index)=>{
      item.id=index;
    })
    this.lenghtArray=this.items.length * 320
  }


  setNext(){
    this.innerWidth=window.innerWidth
    const imageCuantity=Math.floor(this.innerWidth/320) * 320
    this.Finalposition= this.Finalposition + 1;
    if(imageCuantity>=this.lenghtArray){
      this.Finalposition=0
      this.translateValue=0
      this.lenghtArray=this.items.length * 320
    }else if(this.Finalposition<=this.items.length - 1 ){
      this.translateValue = this.translateValue-320
      this.lenghtArray=this.lenghtArray-320
    }else{
      this.Finalposition=0
      this.translateValue=0
      this.lenghtArray=this.items.length * 320
    }
  }

  setBack(){
    this.Finalposition = this.Finalposition - 1;
    if(this.Finalposition>=0){
      this.translateValue = this.translateValue+320
    }else{
      this.Finalposition=0
      this.translateValue=0
    }
  }
}
