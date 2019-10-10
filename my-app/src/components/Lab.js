import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import '../index.css';
import Airsystem from './Airsystem.js'
import Biohazardlevel from './Biohazardlevel.js'
import Biologicals from './Biologicals.js'
import Budget from './Budget.js'
import Decontamination from './Decontamination.js'
import Electricity from './Electricity.js'
import Employees from './Employees.js'
import Equipment from './Equipment.js'
import Facilities from './Facilities.js'
import Lab_methods from '../imported_js_code/Lab_methods.js'
import Locked from '../imported_js_code/Locked.js'


class Lab extends React.Component {

     constructor(props) {
          super(props)
          var lock = new Locked()



          var airSystem = {
               airSystem: 1,
               gaskets: 1,
               airPressure: 1,
               filters: 1,
               generatorFeeds: 1,
          }

          var biohazard = 1;

          var biologicals = {
               biologicals: ['foot-and-mouth disease','mad-cow'],
               researchTree: 1,
               biologicalProperties: 1,
               outbreakProgression: 10
          }

          var budget = {
               budget: 10000,
               grants: 10000,
               accounting: 1,
               salaries: 1,
               kickbacks: 1,
               embezzlement: 1,
          }

          var decontamination = {
               decontamination: 1,
               suits: 1,
               showers: 1,
               protocols: 1,
          }

          var electricity = {
               electricity: 100,
               freezers: 1,
               boilers: 1,
               backupGenerators: 1,
               aboveGroundLines: 1,
               belowGroundLines: 1,
          }

          var employees = {
               employees : 1,
               scientists : 1,
               jrScientists : 1,
               srScientists : 1,
               facilitiesEngineering : 1,
               administration : 1
          }

          var equipment = {
               equipment: 1,
               centrifuges: 1,
               freezers: 1,
               hotPlates: 1,
               tickColonies: 1,
               incubators: 1,
               pipettes: 1,
          }

          var facilities = {
               facilities: 1,
               storage: 1,
               safetyShowers: 1,
               workbenches: 1,
          }

          

          this.state = {
               airSystem,
               biohazard,
               biologicals,
               budget,
               decontamination,
               electricity,
               employees,
               equipment,
               facilities,
               lock
          }
          //set locked values to zero in the constructor
          this.set_locked_to_zero()


     }

     dice_roll(chance) {
          if (Math.random()<= chance) {
               return(true)
          } else { 
               return(false)
          }
     }

     set_locked_to_zero () {
          for (let state_obs of Object.keys(this.state)) { // for each category of concern
               if (state_obs !== 'biohazard' && state_obs !== 'lock') { //except for the biohazard and lock categories
                    let aslockobject = this.state.lock.locked_obj[state_obs] //grab the locked state. either 'locked' or 'not_locked'
                    Object.entries(state_obs).forEach(kv => {  // i is [key,value] of the category of concerns sub topic
                         let k = kv[0] //this is just the key name so we can access the locked objects sub category of concern
                         let islock = aslockobject[k]  //sub category of concerns locked state
                         if (islock == 'locked') { //check if the sub category of concern is locked and then set the value to zero if it is locked
                              state_obs[k] = 0
                         }
                    })
               }
          }
     }

     select_event() {
          let selection_number = Math.floor(Math.random() * 7)
          let pos_events       = ['hurricane','staff_contraction','budget_cuts','scientists_quit','equipment_failure','decontamination_failure','botched_lab_results','scientific_breakthrough']
          return ( pos_events[selection_number])
     }
     

     end_turn() {
          let {
               airSystem,
               biohazard,
               biologicals,
               budget,
               decontamination,
               electricity,
               employees,
               equipment,
               facilities,
               lock
          } = this.state

          if (this.dice_roll(0.25)) {
               let s_event = this.select_event()
          }
          this.set_locked_to_zero()

          
          let lm = new Lab_methods()
          let dax = []
          let fx_list = {'airSystem' :lm.airSystem_fx,
                         'biologicals'    : lm.biologicals_fx,
                         'budget'         : lm.budget_fx,
                         'decontamination': lm.decontamination_fx,
                         'electricity'    : lm.electricity_fx,
                         'employees'      : lm.employees_fx,
                         'equipment'      : lm.equipment_fx,
                         'facilities'  : lm.facilities_fx}
          


          this.setState(prevState => {  

               Object.keys(this.state).forEach(
                    (k) => {
                         if (k !== 'biohazard' && k !== 'lock') {
                              dax.push(lm.resource_changer(prevState[k],this.state,fx_list[k],lock[k]))
                         }
                    }
               )

               return({airSystem : dax[0], biologicals : dax[1], budget : dax[2], decontamination : dax[3], electricity : dax[4], employees : dax[5], equipment : dax[6], facilities : dax[7]})})

     }




     add_item(thisState,concern,item,cost) {
          
          let cond = (thisState.budget.budget >= cost && thisState.lock.locked_obj[concern][item] == 'not_locked')
          console.log(thisState.budget.budget,thisState.lock.locked_obj[concern][item])
          if (cond) {
               this.setState(prevState => {
                    let budget_ob = Object.assign({},thisState.budget)
                    let st_ob = Object.assign({},thisState[concern])
                    st_ob[item] = prevState[concern][item] + 1
                    budget_ob.budget = prevState.budget.budget - cost
                    let x = {}
                    x.budget = budget_ob
                    x[concern] = st_ob
                    return (x)
               })
          }
     }


     unlock_concern (concern,item) {
          this.state.lock.locked_obj[concern][item] = 'not_locked'
     }

     render() {
          
          let {
               airSystem,
               biohazard,
               biologicals,
               budget,
               decontamination,
               electricity,
               employees,
               equipment,
               facilities,
               lock
          } = this.state
          let lm = new Lab_methods()

          

          return (
               
               <div className = "main_display">
                    <div className = "component_display">
                         <Button variant = "secondary" size    = "sm" onClick = {() => this.end_turn()}
                         >End Turn</Button>
                         
                         <Button variant = "secondary" size    = "sm" onClick = {() => this.add_item(this.state,'employees','jrScientists',8000)}
                         >Hire jrScientist</Button>
                         
                         <Button variant = "secondary" size    = "sm" onClick = {() => this.add_item(this.state,'employees','scientists',10000)}
                         >Hire Scientist (mid level)</Button>
                         
                         <Button variant = "secondary" size    = "sm" onClick = {() => this.add_item(this.state,'employees','srScientists',20000)}
                         >Hire srScientist</Button>
                         
                         <Button variant = "secondary" size    = "sm" onClick = {() => this.unlock_concern('employees','srScientists')}
                         >unlock scientist</Button>
                         
                         <Button variant = "secondary" size    = "sm" onClick = {() => this.add_item(this.state,'employees','facilitiesEngineer',5000)}
                         >Hire FacilitiesEngineer</Button>
                         
                         <Button variant = "secondary" size    = "sm" onClick = {() => this.add_item(this.state,'airSystem','gaskets',50000)}
                         >Purchase gaskets</Button>
                         


                    </div>
                    <div className = "component_display">
                         <div className = "inter_display">
                              <Biohazardlevel className = "main_component" comp_props = {biohazard}  lock_props={lock.locked_obj.biohazard} />
                         </div>
                         <div className = "inter_display">
                              <Biologicals     className = "main_component" comp_props = {biologicals}  lock_props={lock.locked_obj.biologicals}/>
                              <Budget          className = "main_component" comp_props = {budget}  lock_props={lock.locked_obj.budget}/>
                              <Employees       className = "main_component" comp_props = {employees}  lock_props={lock.locked_obj.employees}/>
                         </div>
                         <div className = "inter_display">
                              <Airsystem      className = "main_component" comp_props = {airSystem}  lock_props={lock.locked_obj.airSystem}/>
                              
                              <Decontamination className = "main_component" comp_props = {decontamination}  lock_props={lock.locked_obj.decontamination}/>
                              <Electricity     className = "main_component" comp_props = {electricity}  lock_props={lock.locked_obj.electricity}/>
                              <Equipment       className = "main_component" comp_props = {equipment}  lock_props={lock.locked_obj.equipment}/>
                              <Facilities      className = "main_component" comp_props = {facilities}  lock_props={lock.locked_obj.facilities}/>
                         </div>


                    </div>


               </div>
          );
     };
}


export default Lab;