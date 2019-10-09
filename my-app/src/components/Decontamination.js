import React from 'react';


class Decontamination extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               comp_2[i[0]] = i[1].toFixed(2)
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    {this.constructor.name} : {comp_2.decontamination}
                    <Suits     className = {this.props.lock_props.suits} comp_props = {comp_2.suits} />
                    <Showers   className = {this.props.lock_props.showers} comp_props = {comp_2.showers} />
                    <Protocols className = {this.props.lock_props.protocols} comp_props = {comp_2.protocols} />
               </div>
          )
     };
}

class Suits extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Showers extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Protocols extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}



export default Decontamination;