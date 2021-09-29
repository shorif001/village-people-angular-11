import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imggallery=[
    { id:1,
      name: "Angular", 
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:'../../assets/images/2.jpg',
      link:'angular'
    },
    { 
      id:2,
      name: "Python",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:'../../assets/images/1.jpg',
      link:'python'
     },
    { 
      id:3,
      name: "ReactJs",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image:'../../assets/images/3.jpg'
    },
    { 
      id:4,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/4.jpg'
    },
    { 
      id:5,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/5.jpg'
    },
    { 
      id:6,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/6.jpg'
    },
    { 
      id:7,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/7.jpg'
    },
    { 
      id:8,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/8.jpg'
    },
    { 
      id:9,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/9.jpg'
    },
    { 
      id:10,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/10.jpg'
    },
    {
      id:11,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/11.jpg'
    },
    { 
      id:12,
      name: "Javascript",
      discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      image:'../../assets/images/12.jpg'
    },
  ]





  

  constructor() { }

  ngOnInit(): void {
  }

}
