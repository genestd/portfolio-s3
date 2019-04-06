// /* Refs to elements on my page */
// var modal = false
// var home = document.getElementById('home')
// var flipper = document.getElementById('flipper')
// var port = document.getElementById('portfolio')
// var cont = document.getElementById('contact')
// var app = document.getElementById('app')
// var design = document.getElementById('design')
// var universal = document.getElementById('universal')
// var resp = document.getElementById('resp')
// var stockwatch = document.getElementById('stockwatch')
// var bookshelf = document.getElementById('bookshelf')
// var fixation = document.getElementById('fixation')
// var roguelike = document.getElementById('rogue')
// var dataviz = document.getElementById('dataviz')
// var gol = document.getElementById('gol')
// var nflviz = document.getElementById('nflviz')
// var weather = document.getElementById('weather')
// var simon = document.getElementById('simon')
// var api = document.getElementById('api')
// var projects = document.getElementById('projects')
// var overlays = document.getElementsByClassName('overlay')
//
// /* set css classes to enable the icon/pic flip */
// flipper.addEventListener('click', flip)
// function flip(event){
//   this.classList.toggle('flip')
// }
//
// /* events for the portfolio projects
//  * On Hover: Hide the overlay caption and set it to a background element
//  *           change the background of the cell to an animated gif
//  * On Mouseout: reverse the hover changes
//  * On Click: display the modal with project details
//  */
//  stockwatch.addEventListener('mouseover', function(){
//    if(!modal){
//      var cap = document.getElementById(this.id + '-caption')
//      cap.style.opacity=0;
//      cap.style.zIndex=-1;
//      this.setAttribute('style', 'background: url(icons/stockwatch.gif) no-repeat;background-size: 100%; cursor: pointer;')
//    }
//  })
//  stockwatch.addEventListener('mouseout', function(){
//    var cap = document.getElementById(this.id + '-caption')
//    cap.style.opacity=1;
//    cap.style.zIndex=1;
//    this.setAttribute('style', 'background: url(icons/stockwatch_static.png) no-repeat;background-size: 100%')
//  })
//  fixation.addEventListener('mouseover', function(){
//    if(!modal){
//      var cap = document.getElementById(this.id + '-caption')
//      cap.style.opacity=0;
//      cap.style.zIndex=-1;
//      this.setAttribute('style', 'background: url(icons/fixation.gif) no-repeat;background-size: 100%; cursor: pointer;')
//    }
//  })
//  fixation.addEventListener('mouseout', function(){
//    var cap = document.getElementById(this.id + '-caption')
//    cap.style.opacity=1;
//    cap.style.zIndex=1;
//    this.setAttribute('style', 'background: url(icons/fixation_static.png) no-repeat;background-size: 100%')
//  })
//  bookshelf.addEventListener('mouseover', function(){
//    if(!modal){
//      var cap = document.getElementById(this.id + '-caption')
//      cap.style.opacity=0;
//      cap.style.zIndex=-1;
//      this.setAttribute('style', 'background: url(icons/bookshelf.gif) no-repeat;background-size: 100%; cursor: pointer;')
//    }
//  })
//  bookshelf.addEventListener('mouseout', function(){
//    var cap = document.getElementById(this.id + '-caption')
//    cap.style.opacity=1;
//    cap.style.zIndex=1;
//    this.setAttribute('style', 'background: url(icons/bookshelf_static.png) no-repeat;background-size: 100%')
//  })
//  roguelike.addEventListener('mouseover', function(){
//   if(!modal){
//     var cap = document.getElementById(this.id + '-caption')
//     cap.style.opacity=0;
//     cap.style.zIndex=-1;
//     this.setAttribute('style', 'background: url(icons/roguelike.gif) no-repeat;background-size: 100%; cursor: pointer;')
//   }
// })
// roguelike.addEventListener('mouseout', function(){
//   var cap = document.getElementById(this.id + '-caption')
//   cap.style.opacity=1;
//   cap.style.zIndex=1;
//   this.setAttribute('style', 'background: url(icons/roguelike_static.png) no-repeat;background-size: 100%')
// })
// dataviz.addEventListener('mouseover', function(){
//   if(!modal){
//     var cap = document.getElementById(this.id + '-caption')
//     cap.style.opacity=0;
//     cap.style.zIndex=-1;
//     this.setAttribute('style', 'background: url(icons/dataviz.gif) no-repeat;background-size: 100%')
//   }
// })
// dataviz.addEventListener('mouseout', function(){
//   var cap = document.getElementById(this.id + '-caption')
//   cap.style.opacity=1;
//   cap.style.zIndex=1;
//   this.setAttribute('style', 'background: url(icons/dataviz_static.png) no-repeat;background-size: 100%')
// })
// gol.addEventListener('mouseover', function(){
//   if(!modal){
//     var cap = document.getElementById(this.id + '-caption')
//     cap.style.opacity=0;
//     cap.style.zIndex=-1;
//     this.setAttribute('style', 'background: url(icons/gol.gif) no-repeat;background-size: 100%')
//   }
// })
// gol.addEventListener('mouseout', function(){
//   var cap = document.getElementById(this.id + '-caption')
//   cap.style.opacity=1;
//   cap.style.zIndex=1;
//   this.setAttribute('style', 'background: url(icons/gol.png) no-repeat;background-size: 100%')
// })
// nflviz.addEventListener('mouseover', function(){
//   if(!modal){
//     var cap = document.getElementById(this.id + '-caption')
//     cap.style.opacity=0;
//     cap.style.zIndex=-1;
//     this.setAttribute('style', 'background: url(icons/nflviz.gif) no-repeat;background-size: 100%')
//   }
// })
// nflviz.addEventListener('mouseout', function(){
//   var cap = document.getElementById(this.id + '-caption')
//   cap.style.opacity=1;
//   cap.style.zIndex=1;
//   this.setAttribute('style', 'background: url(icons/nflviz_static.png) no-repeat;background-size: 100%')
// })
// weather.addEventListener('mouseover', function(){
//   if(!modal){
//     var cap = document.getElementById(this.id + '-caption')
//     cap.style.opacity=0;
//     cap.style.zIndex=-1;
//   }
// })
// weather.addEventListener('mouseout', function(){
//   var cap = document.getElementById(this.id + '-caption')
//   cap.style.opacity=1;
//   cap.style.zIndex=1;
// })
// simon.addEventListener('mouseover', function(){
//   if(!modal){
//     var cap = document.getElementById(this.id + '-caption')
//     cap.style.opacity=0;
//     cap.style.zIndex=-1;
//   }
// })
// simon.addEventListener('mouseout', function(){
//   var cap = document.getElementById(this.id + '-caption')
//   cap.style.opacity=1;
//   cap.style.zIndex=1;
// })
// api.addEventListener('mouseover', function(){
//   if(!modal){
//     var cap = document.getElementById(this.id + '-caption')
//     cap.style.opacity=0;
//     cap.style.zIndex=-1;
//   }
// })
// api.addEventListener('mouseout', function(){
//   var cap = document.getElementById(this.id + '-caption')
//   cap.style.opacity=1;
//   cap.style.zIndex=1;
// })
//
// projects.addEventListener('click', projectClick)
// function projectClick(event){
//   if(modal){
//     for( var i=0;i<overlays.length;i++){
//       overlays[i].classList.remove('open')
//     }
//     modal=false
//   } else {
//     var el = document.getElementById( event.target.id + '-overlay')
//     if( el ){
//       el.classList.add('open')
//       modal=true
//     }
//   }
// }
