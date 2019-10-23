import React  from 'react';
import Title from './Title';
import Skills from './Skills';
import Biodata from './Biodata';
const Portfolio1= props=>{
    return(
        <div className="container">
            
            <div className="row">
                <Title/>
            </div>
            <div className="row">
                <Skills/>
            </div>
            <div className="row">
                <Biodata/>
            </div>
            
        </div>
    );
}

export default Portfolio1;