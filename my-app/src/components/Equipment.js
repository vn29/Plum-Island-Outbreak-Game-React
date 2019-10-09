import React from 'react';



class Equipment extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               comp_2[i[0]] = i[1].toFixed(2)
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    {this.constructor.name} : {comp_2.equipment}
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
                   {this.constructor.name} : {comp_prop}
               </div>
          );
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


class Hotplates extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Tickcolonies extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Incubators extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Pipettes extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}



export default Equipment;