import React from 'react';



class Employees extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               comp_2[i[0]] = i[1].toFixed(2)
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    {this.constructor.name} : {comp_2.employees}
                    <Scientists             className = {this.props.lock_props.scientists} comp_props = {comp_2.scientists} />
                    <JrScientists          className = {this.props.lock_props.jrScientists} comp_props = {comp_2.jrScientists}/>
                    <SrScientists          className = {this.props.lock_props.srScientists} comp_props = {comp_2.srScientists} />
                    <Facilitiesengineering className = {this.props.lock_props.facilitiesEngineering} comp_props = {comp_2.facilitiesEngineering} />
                    <Administration         className = {this.props.lock_props.administration} comp_props = {comp_2.administration} />
               </div>
          )
     };
}


class Scientists extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class JrScientists extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class SrScientists extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Facilitiesengineering extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Administration extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}



export default Employees;