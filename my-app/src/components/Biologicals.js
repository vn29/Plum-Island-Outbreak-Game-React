import React from 'react';



class Biologicals extends React.Component {


     list_bios(bios) {
          const x = bios.map((i) => <div>{i}</div>)
          return(x)
     }

     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               if (typeof(i[1]) == (typeof(1.0) || typeof(1))) {
                    comp_2[i[0]] = i[1].toFixed(2)
               } else {
                    comp_2[i[0]] = i[1]
               }
               
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    <div>{this.constructor.name} under research:</div>
                    {this.list_bios(comp_props.biologicals)}
                    {/* <Researchtree         className = {this.props.lock_props.researchTree} comp_props         = {comp_2.researchTree} /> */}
                    {/* <Biologicalproperties className = {this.props.lock_props.biologicalProperties} comp_props = {comp_2.biologicalProperties} /> */}
                    <Outbreakprogression  className = {this.props.lock_props.outbreakProgression} comp_props  = {comp_2.outbreakProgression} />
               </div>
          )
     };
}


class Researchtree extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Biologicalproperties extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Outbreakprogression extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                    {this.constructor.name} : {comp_prop}
               </div>
          );
     };

}




export default Biologicals;