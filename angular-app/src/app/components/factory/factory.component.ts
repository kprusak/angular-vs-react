import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {}

  componentsData: Array<{textContent?: string, graphicContent?: string}> = [];
  editTime: number;
  destroyTime: number;

  createComponents(number: number, type: string) {
    console.log('started adding components')
    for(let i=0; i<number; i++) {
      if(type=='text') {
        this.componentsData.push(
          {
            textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.'
          }
        )
      }
      else if(type=='graphic') {
        this.componentsData.push(
          {
            graphicContent: '../../assets/hot-tasty-pizza.jpg'
          }
        )
      } 
      else if(type=='mixed') {
        this.componentsData.push(
          {
            textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.',
            graphicContent: '../../assets/hot-tasty-pizza.jpg'
          }
        )
      }
      console.log('added component no.', i+1);
    }
  }

  editComponents(number: number, type: string) {
    this.editTime = window.performance.now();
    console.log('started editing components');
    for(let i=0; i<number; i++) {
      if(type=='text') {
        this.componentsData[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
      }
      else if(type=='graphic') {
        this.componentsData[i].graphicContent = '../../assets/blue-graphic.png';
      } 
      else if(type=='mixed') {
        this.componentsData[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
        this.componentsData[i].graphicContent = '../../assets/blue-graphic.png';
      }
      console.log('edited component no.', i+1);
    }
  }

  removeComponents(number: number) {
    this.destroyTime = window.performance.now();
    for(let i=0; i<number; i++) {
      setTimeout(()=>{
        this.componentsData.pop();
        console.log('removed component no.', i+1)
      },500)
    }
  }

  reset(){
    this.componentsData = [];
    console.log('reset performed')
  }

}
