import React from 'react';



class Electricity extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               comp_2[i[0]] = i[1].toFixed(2)
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    {this.constructor.name} : {comp_2.electricity}
                    <Freezers           className = {this.props.lock_props.freezers} comp_props = {comp_2.freezers} />
                    <Boilers            className = {this.props.lock_props.boilers} comp_props = {comp_2.boilers} />
                    <Backupgenerators  className = {this.props.lock_props.backupGenerators} comp_props = {comp_2.backupGenerators} />
                    <Abovegroundlines className = {this.props.lock_props.aboveGroundLines} comp_props = {comp_2.aboveGroundLines} />
                    <Belowgroundlines className = {this.props.lock_props.belowGroundLines} comp_props = {comp_2.belowGroundLines} />
               </div>
          )
     };
}


class Freezers extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Boilers extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Backupgenerators extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Abovegroundlines extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Belowgroundlines extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}



export default Electricity;