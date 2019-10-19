import React from 'react';



class Electricity extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = comp_props
          return(
               <div className = 'main_component'>
                    Electricity : {comp_2.electricity.toFixed(2)}% eff.
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
                   Freezers : {comp_prop}
               </div>
          );
     };
}

class Boilers extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Boilers : {comp_prop}
               </div>
          );
     };
}


class Backupgenerators extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Backup Generators : {comp_prop}
               </div>
          );
     };
}


class Abovegroundlines extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Above Ground Lines : {comp_prop}
               </div>
          );
     };
}

class Belowgroundlines extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Below Ground Lines : {comp_prop}
               </div>
          );
     };
}



export default Electricity;