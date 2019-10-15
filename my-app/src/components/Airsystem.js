import React from 'react';

class Airsystem extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = {}
          Object.entries(comp_props).forEach((i) =>{
               comp_2[i[0]] = i[1].toFixed(2)
          }) //[k,v]
          return(
               <div className = 'main_component'>
                    {this.constructor.name} : {comp_2.airSystem}
                    <Gaskets        className = {this.props.lock_props.gaskets} comp_props        = {comp_2.gaskets} />
                    <Airpressure    className = {this.props.lock_props.airPressure} comp_props    = {comp_2.airPressure} />
                    <Filters        className = {this.props.lock_props.filters} comp_props        = {comp_2.filters} />
                    <Generatorfeeds className = {this.props.lock_props.generatorFeeds} comp_props = {comp_2.generatorFeeds} />
               </div>
          )
     };
}


class Gaskets extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

class Airpressure extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Filters extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}


class Generatorfeeds extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   {this.constructor.name} : {comp_prop}
               </div>
          );
     };
}

export default Airsystem;