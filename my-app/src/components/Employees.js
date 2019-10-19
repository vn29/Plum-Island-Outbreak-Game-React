import React from 'react';



class Employees extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = comp_props
          return(
               <div className = 'main_component'>
                    Employees : {comp_2.employees}
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
                   Scientists : {comp_prop}
               </div>
          );
     };
}

class JrScientists extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Jr Scientists : {comp_prop}
               </div>
          );
     };
}


class SrScientists extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Sr Scientists : {comp_prop}
               </div>
          );
     };
}


class Facilitiesengineering extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Facilities Engineering : {comp_prop}
               </div>
          );
     };
}

class Administration extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Administration : {comp_prop}
               </div>
          );
     };
}



export default Employees;