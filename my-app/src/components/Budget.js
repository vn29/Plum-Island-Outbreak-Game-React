import React from 'react';





class Budget extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               comp_2[i[0]] = i[1].toFixed(2)
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    Budget : {comp_2.budget}
                    <Accounting   className = {this.props.lock_props.accounting} comp_props = {comp_2.accounting} />
                    <Salaries     className = {this.props.lock_props.salaries} comp_props = {comp_2.salaries} />
                    <Kickbacks    className = {this.props.lock_props.kickbacks} comp_props = {comp_2.kickbacks} />
                    <Embezzlement className = {this.props.lock_props.embezzlement} comp_props = {comp_2.embezzlement} />
                    <Grants       className = {this.props.lock_props.grants} comp_props = {comp_2.grants} />
               </div>
          )
     };
}

class Accounting extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Accounting : {comp_prop}
               </div>
          );
     };
}

class Grants extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Grants : {comp_prop}
               </div>
          );
     };
}

class Salaries extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Salaries : {comp_prop}
               </div>
          );
     };
}

class Kickbacks extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Kickbacks : {comp_prop}
               </div>
          );
     };
}

// class Embezzlement extends React.Component {
//      render() {
//           let comp_prop = this.props.comp_props
//           return(
//                <div className = {this.props.className}>
//                    **** : {comp_prop}
//                </div>
//           );
//      };
// }

const Embezzlement  = ({className, comp_props}) => {
     return(
          <div className = {className}>
               Embezzlement : {comp_props}
          </div>
     )
}



export default Budget;