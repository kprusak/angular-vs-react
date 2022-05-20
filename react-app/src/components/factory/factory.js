import './factory.css';
import React from 'react';
import FactoryTestItem from '../factory-test-item/factory-test-item';

export default class Factory extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            componentsData: []
        }
    }

    createComponents = (number, type) => {
        console.log('started adding components')
        if(type==='text') {
          for(let i=0; i<number; i++) {
            let value = this.state.componentsData;
            value.push(
              {
                textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.'
              }
            )
            this.setState({componentsData: value});
            console.log('added component no.', i+1);
          }
        }
        else if (type==='graphic') {
          for(let i=0; i<number; i++) {
            let value = this.state.componentsData;
            value.push(
              {
                graphicContent: './hot-tasty-pizza.jpg'
              }
            )
            this.setState({componentsData: value});
            console.log('added component no.', i+1);
          }
        }
        else if (type==='mixed') {
          for(let i=0; i<number; i++) {
            let value = this.state.componentsData;
            value.push(
              {
                textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.',
                graphicContent: 'hot-tasty-pizza.jpg'
              }
            )
            this.setState({componentsData: value});
            console.log('added component no.', i+1);
          }
        }
      }
    
      editComponents = (number, type) => {
        console.log('started editing components');
        if(type==='text') {
          for(let i=0; i<number; i++) {
            let value = this.state.componentsData;
            value[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
            this.setState({componentsData: value});
            console.log('edited component no.', i+1);
          }
        }
        else if (type==='graphic') {
          for(let i=0; i<number; i++) {
            let value = this.state.componentsData;
            value[i].graphicContent = './blue-graphic.png';
            this.setState({componentsData: value});
            console.log('edited component no.', i+1);
          }
        }
        else if (type==='mixed') {
          for(let i=0; i<number; i++) {
            let value = this.state.componentsData;
            value[i].graphicContent = './blue-graphic.png';
            value[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
            this.setState({componentsData: value});
            console.log('edited component no.', i+1);
          }
          
        }
        
      }
    
      removeComponents = (number) => {
        for(let i=0; i<number; i++) {
            let value = this.state.componentsData;
            value.pop();
            this.setState({componentsData: value});
            console.log('removed component no.', i+1)
        }
      }
    
      reset = () => {
        this.setState({componentsData: []});
        console.log('reset performed')
      }

    render() {
        return (
            <div className="factory-container">
                <p className="factory-header"><b>Component factory</b></p>
                <p>Use buttons below to create, edit or remove components</p>
                <p>Components number {this.state.componentsData.length} {this.state.componentsData.length>0 ? <button onClick={()=>this.reset()}>Reset</button> : null}</p>
                <p className="subheader"><b>Text content components</b></p>
                <p>Creating</p>
                <div className="buttons">
                    <button onClick={() => this.createComponents(100, 'text')}>Create 100 components</button>
                    <button onClick={() => this.createComponents(1000, 'text')}>Create 1000 components</button>
                    <button onClick={() => this.createComponents(10000, 'text')}>Create 10000 components</button>
                    <button onClick={() => this.createComponents(100000, 'text')}>Create 100000 components</button>
                </div>
                <p>Editing</p>
                <div className="buttons">
                    <button onClick={() => this.editComponents(100, 'text')}>Edit 100 components</button>
                    <button onClick={() => this.editComponents(1000, 'text')}>Edit 1000 components</button>
                    <button onClick={() => this.editComponents(10000, 'text')}>Edit 10000 components</button>
                    <button onClick={() => this.editComponents(100000, 'text')}>Edit 100000 components</button>
                </div>
                <p>Removing</p>
                <div className="buttons">
                    <button onClick={() => this.removeComponents(100)}>Remove 100 components</button>
                    <button onClick={() => this.removeComponents(1000)}>Remove 1000 components</button>
                    <button onClick={() => this.removeComponents(10000)}>Remove 10000 components</button>
                    <button onClick={() => this.removeComponents(100000)}>Remove 100000 components</button>
                </div>

                <p className="subheader"><b>Graphic content components</b></p>
                <p>Creating</p>
                <div className="buttons">
                    <button onClick={() => this.createComponents(100, 'graphic')}>Create 100 components</button>
                    <button onClick={() => this.createComponents(1000, 'graphic')}>Create 1000 components</button>
                    <button onClick={() => this.createComponents(10000, 'graphic')}>Create 10000 components</button>
                    <button onClick={() => this.createComponents(100000, 'graphic')}>Create 100000 components</button>
                </div>
                <p>Editing</p>
                <div className="buttons">
                    <button onClick={() => this.editComponents(100, 'graphic')}>Edit 100 components</button>
                    <button onClick={() => this.editComponents(1000, 'graphic')}>Edit 1000 components</button>
                    <button onClick={() => this.editComponents(10000, 'graphic')}>Edit 10000 components</button>
                    <button onClick={() => this.editComponents(100000, 'graphic')}>Edit 100000 components</button>
                </div>
                <p>Removing</p>
                <div className="buttons">
                    <button onClick={() => this.removeComponents(100)}>Remove 100 components</button>
                    <button onClick={() => this.removeComponents(1000)}>Remove 1000 components</button>
                    <button onClick={() => this.removeComponents(10000)}>Remove 10000 components</button>
                    <button onClick={() => this.removeComponents(100000)}>Remove 100000 components</button>
                </div>

                <p className="subheader"><b>Mixed content components</b></p>
                <p>Creating</p>
                <div className="buttons">
                    <button onClick={() => this.createComponents(100, 'mixed')}>Create 100 components</button>
                    <button onClick={() => this.createComponents(1000, 'mixed')}>Create 1000 components</button>
                    <button onClick={() => this.createComponents(10000, 'mixed')}>Create 10000 components</button>
                    <button onClick={() => this.createComponents(100000, 'mixed')}>Create 100000 components</button>
                </div>
                <p>Editing</p>
                <div className="buttons">
                    <button onClick={() => this.editComponents(100, 'mixed')}>Edit 100 components</button>
                    <button onClick={() => this.editComponents(1000, 'mixed')}>Edit 1000 components</button>
                    <button onClick={() => this.editComponents(10000, 'mixed')}>Edit 10000 components</button>
                    <button onClick={() => this.editComponents(100000, 'mixed')}>Edit 100000 components</button>
                </div>
                <p>Removing</p>
                <div className="buttons">
                    <button onClick={() => this.removeComponents(100)}>Remove 100 components</button>
                    <button onClick={() => this.removeComponents(1000)}>Remove 1000 components</button>
                    <button onClick={() => this.removeComponents(10000)}>Remove 10000 components</button>
                    <button onClick={() => this.removeComponents(100000)}>Remove 100000 components</button>
                </div>

                <div className="components">
                    <div>
                        {
                            this.state.componentsData.map((componentData, index) => {
                                return <FactoryTestItem key={index} index={index} textContent={componentData.textContent} graphicContent={componentData.graphicContent} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
