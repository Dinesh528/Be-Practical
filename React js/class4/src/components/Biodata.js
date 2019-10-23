import React, { Component } from 'react'

class Biodata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            display: !this.state.display
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <article>
                        <h3>Biodata</h3>
                        {
                            this.state.display ? (
                                <p>
                                    Irure laboris do exercitation duis cupidatat do est reprehenderit aliqua pariatur et ipsum laborum. Pariatur irure deserunt incididunt ex fugiat consequat enim excepteur veniam dolore. Adipisicing commodo culpa voluptate duis occaecat. Id deserunt cupidatat ex cillum enim deserunt occaecat excepteur adipisicing enim voluptate. Ut occaecat esse id exercitation.
    
                                    Sunt cillum occaecat eiusmod dolor anim excepteur pariatur sit nostrud enim dolore veniam qui fugiat. Anim consectetur eu velit exercitation proident laboris ut sit dolore incididunt. Qui consequat ex dolor voluptate occaecat do Lorem ut. Nisi minim deserunt enim deserunt magna ea sint ut ad eu sunt pariatur. Deserunt consequat quis sunt laboris velit commodo aliquip qui ad pariatur minim velit. Sit ad id do et irure ea sit est reprehenderit. Elit aute labore in irure occaecat consequat.
    
                                    Qui nisi sunt pariatur exercitation minim. Do occaecat in labore tempor excepteur exercitation sit aliqua cillum est proident. Ullamco esse sint sint qui do.
    
                                    Occaecat nisi excepteur nisi excepteur esse aliqua esse dolore cupidatat Lorem. Commodo ullamco irure ipsum eiusmod aliqua sint ullamco. Aliquip est tempor amet do aliqua cillum magna.
    
                                <button onClick={this.toggle} className="btn btn-info"> Show less</button>
                                </p>
                            ) : (
                                    <div>
                                        <p>
                                            Fugiat ullamco velit velit aute occaecat eiusmod excepteur pariatur amet velit officia excepteur labore. Ipsum commodo nulla adipisicing non consequat commodo aliqua ad. Id officia ut nulla aute elit consectetur irure.
            
                                            Occaecat amet aliqua nostrud fugiat fugiat exercitation enim. Anim dolor mollit occaecat adipisicing mollit nulla elit incididunt pariatur culpa aute mollit. Reprehenderit sunt qui excepteur tempor. Nulla amet non deserunt sint esse in ex ut cupidatat aliquip ad. Laborum est duis mollit reprehenderit id nulla nisi.
                              </p>
                                        <button onClick={this.toggle} className="btn btn-warning">
                                            Show more
                              </button>
                                    </div>

                                )
                        }
                    </article>
                </div>
            </div>
        );
    }
}

export default Biodata;
