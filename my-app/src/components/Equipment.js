import React from 'react';



class Equipment extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = comp_props
          return(
               <div className = 'main_component'>
                    Equipment : {comp_2.equipment.toFixed(2)}% eff.
                    <Centrifuges  className = {this.props.lock_props.centrifuges} comp_props = {comp_2.centrifuges} />
                    <Freezers     className = {this.props.lock_props.freezers} comp_props = {comp_2.freezers} />
                    <Hotplates    className = {this.props.lock_props.hotPlates} comp_props = {comp_2.hotPlates} />
                    <Tickcolonies className = {this.props.lock_props.tickColonies} comp_props = {comp_2.tickColonies} />
                    <Incubators   className = {this.props.lock_props.incubators} comp_props = {comp_2.incubators} />
                    <Pipettes     className = {this.props.lock_props.pipettes} comp_props = {comp_2.pipettes} />
               </div>
          )
     };
}


class Centrifuges extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Centrifuges : {comp_prop}
               </div>
          );
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


class Hotplates extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Hotplates : {comp_prop}
               </div>
          );
     };
}


class Tickcolonies extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Tick Colonies : {comp_prop}
               </div>
          );
     };
}

class Incubators extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Incubators : {comp_prop}
               </div>
          );
     };
}

class Pipettes extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Pipettes : {comp_prop}
               </div>
          );
     };
}



export default Equipment;