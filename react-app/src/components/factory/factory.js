import './factory.css';
import React from 'react';
import FactoryTestItem from '../factory-test-item/factory-test-item';

export default class Factory extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            componentsData: [],
            editTime: 0,
            destroyTime: 0
        }
    }

      createComponents = (number, type) => {
        console.log('started adding components')
        for(let i=0; i<number; i++) {
          if(type=='text') {
            let value = this.state.componentsData;
            value.push(
              {
                textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.'
              }
            )
            this.setState({componentsData: value, editTime: 0, destroyTime: 0});
          }
          else if(type=='graphic') {
            let value = this.state.componentsData;
            value.push(
              {
                graphicContent: './hot-tasty-pizza.jpg'
              }
            )
            this.setState({componentsData: value, editTime: 0, destroyTime: 0});
          } 
          else if(type=='mixed') {
            let value = this.state.componentsData;
            value.push(
              {
                textContent: 'Ut ligula est, eleifend suscipit elit et, lobortis rhoncus orci. Suspendisse quis mauris vitae dolor lacinia ullamcorper mattis at elit. In accumsan odio non lacus ornare volutpat. Integer sit amet purus tellus. Vivamus eu eros accumsan, lacinia purus eu, venenatis ipsum. Aenean varius gravida pulvinar. Aliquam erat volutpat. Vivamus non ullamcorper ligula. Duis fermentum elementum neque vel semper. Aenean quis mauris augue. Etiam vel diam dictum, bibendum nunc non, molestie lacus. Praesent sem leo, elementum id nulla vitae, laoreet posuere felis.',
                graphicContent: 'hot-tasty-pizza.jpg'
              }
            )
            this.setState({componentsData: value, editTime: 0, destroyTime: 0});
          }
          console.log('added component no.', i+1);
        }
      }
    
      editComponents = (number, type) => {
        console.log('started editing components');
        for(let i=0; i<number; i++) {
          if(type=='text') {
            let value = this.state.componentsData;
            value[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
            this.setState({componentsData: value, editTime: window.performance.now(), destroyTime: 0});
          }
          else if(type=='graphic') {
            let value = this.state.componentsData;
            value[i].graphicContent = './blue-graphic.png';
            this.setState({componentsData: value, editTime: window.performance.now(), destroyTime: 0});
          } 
          else if(type=='mixed') {
            let value = this.state.componentsData;
            value[i].graphicContent = './blue-graphic.png';
            value[i].textContent = 'are vr.nisinlitcrenumreeeumiealt  iuiavaulsa   metoe armsP  itdvmlruutrcmeume,sruem  i monentmtea ivadeiels n eu leeo ag sqo l o mrtfoplnsu euu alsotvuattn.n sgeaUq ilorsnceo euati ietaseliSlstbemtEem.leeriu.nr n.ueu utli ooeilu  ennlrd ase slsmm.tetnpeVp en laVrAumavrl,sdrcvbod ,gc r Amnrdsrnpvncilphrer esnmAaseiatsu.t o  ltmatmaiangieut snas.ev iiubtri auc cusd aansaeevoo a ecamoussil cpr i.issteolqcmiurlumnign. nuucoaicee,mec isueca,onutalpIe iinnlnl psei ndmiavla n.t,fe ptu  I s De ilia sdqvasa  ,p pl,  u ue  . usafeloe iiua autt ulul uo uar p';
            this.setState({componentsData: value, editTime: window.performance.now(), destroyTime: 0});
          }
          console.log('edited component no.', i+1);
        }
      }
    
      removeComponents = (number) => {
        this.destroyTime = window.performance.now();
        for(let i=0; i<number; i++) {
          setTimeout(()=>{
            let value = this.state.componentsData;
            value.pop();
            this.setState({componentsData: value, editTime: 0, destroyTime: this.destroyTime});
            console.log('removed component no.', i+1)
          }, 500)
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
                    <button onClick={() => this.createComponents(1000, 'text')}>Create 1000 components</button>
                    <button onClick={() => this.createComponents(10000, 'text')}>Create 10000 components</button>
                    <button onClick={() => this.createComponents(20000, 'text')}>Create 20000 components</button>
                    <button onClick={() => this.createComponents(30000, 'text')}>Create 30000 components</button>
                </div>
                <p>Editing</p>
                <div className="buttons">
                    <button onClick={() => this.editComponents(1000, 'text')}>Edit 1000 components</button>
                    <button onClick={() => this.editComponents(10000, 'text')}>Edit 10000 components</button>
                    <button onClick={() => this.editComponents(20000, 'text')}>Edit 20000 components</button>
                    <button onClick={() => this.editComponents(30000, 'text')}>Edit 30000 components</button>
                </div>
                <p>Removing</p>
                <div className="buttons">
                    <button onClick={() => this.removeComponents(1000)}>Remove 1000 components</button>
                    <button onClick={() => this.removeComponents(10000)}>Remove 10000 components</button>
                    <button onClick={() => this.removeComponents(20000)}>Remove 20000 components</button>
                    <button onClick={() => this.removeComponents(30000)}>Remove 30000 components</button>
                </div>

                <p className="subheader"><b>Graphic content components</b></p>
                <p>Creating</p>
                <div className="buttons">
                    <button onClick={() => this.createComponents(1000, 'graphic')}>Create 1000 components</button>
                    <button onClick={() => this.createComponents(10000, 'graphic')}>Create 10000 components</button>
                    <button onClick={() => this.createComponents(20000, 'graphic')}>Create 20000 components</button>
                    <button onClick={() => this.createComponents(30000, 'graphic')}>Create 30000 components</button>
                </div>
                <p>Editing</p>
                <div className="buttons">
                    <button onClick={() => this.editComponents(1000, 'graphic')}>Edit 1000 components</button>
                    <button onClick={() => this.editComponents(10000, 'graphic')}>Edit 10000 components</button>
                    <button onClick={() => this.editComponents(20000, 'graphic')}>Edit 20000 components</button>
                    <button onClick={() => this.editComponents(30000, 'graphic')}>Edit 30000 components</button>
                </div>
                <p>Removing</p>
                <div className="buttons">
                    <button onClick={() => this.removeComponents(1000)}>Remove 1000 components</button>
                    <button onClick={() => this.removeComponents(1000)}>Remove 10000 components</button>
                    <button onClick={() => this.removeComponents(10000)}>Remove 20000 components</button>
                    <button onClick={() => this.removeComponents(100000)}>Remove 30000 components</button>
                </div>

                <p className="subheader"><b>Mixed content components</b></p>
                <p>Creating</p>
                <div className="buttons">
                    <button onClick={() => this.createComponents(1000, 'mixed')}>Create 1000 components</button>
                    <button onClick={() => this.createComponents(10000, 'mixed')}>Create 10000 components</button>
                    <button onClick={() => this.createComponents(20000, 'mixed')}>Create 20000 components</button>
                    <button onClick={() => this.createComponents(30000, 'mixed')}>Create 30000 components</button>
                </div>
                <p>Editing</p>
                <div className="buttons">
                    <button onClick={() => this.editComponents(1000, 'mixed')}>Edit 1000 components</button>
                    <button onClick={() => this.editComponents(10000, 'mixed')}>Edit 10000 components</button>
                    <button onClick={() => this.editComponents(20000, 'mixed')}>Edit 20000 components</button>
                    <button onClick={() => this.editComponents(30000, 'mixed')}>Edit 30000 components</button>
                </div>
                <p>Removing</p>
                <div className="buttons">
                    <button onClick={() => this.removeComponents(1000)}>Remove 1000 components</button>
                    <button onClick={() => this.removeComponents(10000)}>Remove 10000 components</button>
                    <button onClick={() => this.removeComponents(20000)}>Remove 20000 components</button>
                    <button onClick={() => this.removeComponents(30000)}>Remove 30000 components</button>
                </div>

                <div className="components">
                    <div>
                        {
                            this.state.componentsData.map((componentData, index) => {
                                return <FactoryTestItem key={index} index={index} textContent={componentData.textContent} graphicContent={componentData.graphicContent} editTime={this.state.editTime} destroyTime={this.state.destroyTime} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
