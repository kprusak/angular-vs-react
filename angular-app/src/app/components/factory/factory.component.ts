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

  createComponents(number: number, type: string) {
    console.log('started adding components')
    if(type=='text') {
      for(let i=0; i<number; i++) {
        this.componentsData.push(
          {
            textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.'
          }
        )
        console.log('added component no.', i+1);
      }
    }
    else if (type=='graphic') {
      for(let i=0; i<number; i++) {
        this.componentsData.push(
          {
            graphicContent: '../../assets/hot-tasty-pizza.jpg'
          }
        )
        console.log('added component no.', i+1);
      }
    }
    else if (type=='mixed') {
      for(let i=0; i<number; i++) {
        this.componentsData.push(
          {
            textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.',
            graphicContent: '../../assets/hot-tasty-pizza.jpg'
          }
        )
        console.log('added component no.', i+1);
      }
    }
  }

  editComponents(number: number, type: string) {
    console.log('started editing components');
    if(type=='text') {
      for(let i=0; i<number; i++) {
        let value = this.componentsData;
        value[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
        this.componentsData = value;
        console.log('edited component no.', i+1);
      }
    }
    else if (type=='graphic') {
      for(let i=0; i<number; i++) {
        let value = this.componentsData;
        value[i].graphicContent = '../../assets/blue-graphic.png';
        this.componentsData = value;
        console.log('edited component no.', i+1);
      }
    }
    else if (type=='mixed') {
      for(let i=0; i<number; i++) {
        let value = this.componentsData;
        value[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
        value[i].graphicContent = '../../assets/blue-graphic.png';
        this.componentsData = value;
        console.log('edited component no.', i+1);
      }
      
    }
    
  }

  removeComponents(number: number) {
    for(let i=0; i<number; i++) {
      this.componentsData.pop();
      console.log('removed component no.', i+1)
    }
  }

  reset(){
    this.componentsData = [];
    console.log('reset performed')
  }

}
