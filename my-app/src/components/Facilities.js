import React from 'react';


class Facilities extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               comp_2[i[0]] = i[1].toFixed(2)
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    {this.constructor.name} : {comp_2.facilities}
                    <Storage        className = {this.props.lock_props.storage} comp_props = {comp_2.storage} />
                    <Safetyshowers className = {this.props.lock_props.safetyShowers} comp_props = {comp_2.safetyShowers} />
                    <Workbenches    className = {this.props.lock_props.workbenches} comp_props = {comp_2.workbenches} />
               </div>
          )
     };
}

class Storage extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Safetyshowers extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Workbenches extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}



export default Facilities;