class Lab_methods {
     airSystem_fx (dep,thisState,lock_state) {
          dep['airSystem']      = thisState.airSystem['airSystem']
          dep['gaskets']        = thisState.airSystem['gaskets']
          dep['airPressure']    = thisState.airSystem['airPressure']
          dep['filters']        = thisState.airSystem['filters']
          dep['generatorFeeds'] = thisState.airSystem['generatorFeeds']
          return dep
     }

     biologicals_fx(dep,thisState,lock_state) {
          dep['biologicals']          = thisState.biologicals['biologicals']
          dep['outbreakProgression']  = Math.max(0,thisState.biologicals['outbreakProgression'] + thisState.biologicals['biologicalProperties']
                                        -0.1*thisState.airSystem['airPressure']
                                        -0.1*thisState.airSystem['filters']       
                                        -0.1*thisState.airSystem['generatorFeeds']
                                        -0.1*thisState.decontamination['suits']          
                                        -0.1*thisState.decontamination['showers']        
                                        -0.1*thisState.decontamination['protocols']
                                        -0.1*thisState.electricity['freezers']*thisState.electricity['electricity']/100
                                        -0.1*thisState.electricity['boilers']*thisState.electricity['electricity']/100
                                        -0.1*thisState.facilities['storage']   
                                        -0.1*thisState.facilities['safetyShowers']  )
          return dep
     }
     budget_fx(dep,thisState,lock_state) {
          dep['budget']       = (thisState.budget['budget']  + 50000
                               + thisState.budget['grants'])*(1000-thisState.misc.turn)/1000 - thisState.budget['salaries']
          dep['grants']       = 10000*thisState.biologicals['biologicalProperties']**2
                              + thisState.employees['employees']  * 10000 * thisState.equipment.equipment/100
                               + thisState.facilities['facilities']  * 10000
                               + thisState.employees['jrScientists'] * thisState.equipment.freezers/10*100
                                + thisState.employees['scientists'] * thisState.equipment.freezers/10*150
                                + thisState.employees['srScientists'] * thisState.equipment.freezers/10*200
                                + thisState.employees['jrScientists'] * thisState.facilities.storage/10*100
                                + thisState.employees['scientists'] * thisState.facilities.storage/10*150
                                + thisState.employees['srScientists'] * thisState.facilities.storage/10*200
                                + thisState.employees['administration'] * thisState.facilities.storage/10*200
                               + thisState.employees['facilitiesEngineering'] * thisState.facilities.storage/10*300
                               + thisState.employees['scientists'] * thisState.facilities.safetyShowers/5*150
                                + thisState.employees['jrScientists'] * thisState.facilities.safetyShowers/5*150
                                + thisState.employees['srScientists'] * thisState.facilities.safetyShowers/5*150
                                + thisState.employees['administration'] * thisState.facilities.safetyShowers/5*150
                                + thisState.employees['facilitiesEngineering'] * thisState.facilities.safetyShowers/5*150
                                + thisState.employees['facilitiesEngineering'] * thisState.electricity.boilers/5*150
                                + thisState.employees['srScientists'] * thisState.equipment.tickColonies*150
                                + thisState.employees['jrScientists'] * thisState.equipment.hotPlates/3*150
                                + thisState.employees['jrScientists'] * thisState.decontamination.suits/2*150
                                + thisState.employees['scientists'] * thisState.decontamination.suits*150
                                + thisState.employees['srScientists'] * thisState.decontamination.suits/2*1000
          dep['accounting']   = thisState.budget['accounting'] 
          dep['salaries']     = thisState.employees['scientists'] *10000
                               + thisState.employees['jrScientists'] *8000
                               + thisState.employees['srScientists']  *20000
                               + thisState.employees['facilitiesEngineering']  *5000
                               + thisState.employees['administration']* 15000
           dep['kickbacks']    = thisState.budget['kickbacks']
           dep['embezzlement'] = thisState.budget['embezzlement']
          return dep
     }
     decontamination_fx(dep,thisState,lock_state) {
          return dep
     }
     electricity_fx(dep,thisState,lock_state) {
          dep['electricity']      = Math.min(90 + 0.1*thisState.electricity['freezers'] + 0.1*thisState.electricity['boilers'] + 0.1*thisState.electricity['backupGenerators'] + 0.1*thisState.electricity['aboveGroundLines'] + 0.1*thisState.electricity['belowGroundLines'],100)
          dep['freezers']         = thisState.electricity['freezers']
          dep['boilers']          = thisState.electricity['boilers']
          dep['backupGenerators'] = thisState.electricity['backupGenerators']
          dep['aboveGroundLines'] = thisState.electricity['aboveGroundLines']
          dep['belowGroundLines'] = thisState.electricity['belowGroundLines']
          return dep
     }
     employees_fx(dep,thisState,lock_state) {
          dep['employees']     = thisState.employees['scientists']
                              + thisState.employees['jrScientists']
                              + thisState.employees['srScientists']
                              + thisState.employees['facilitiesEngineering']
                              + thisState.employees['administration']
          return dep
     }
     equipment_fx(dep,thisState,lock_state) {
          dep['equipment']    = Math.min(100,90
                               + 0.1*thisState.equipment['centrifuges'] 
                               + 0.1*thisState.equipment['freezers'] 
                               + 0.1*thisState.equipment['hotPlates'] 
                               + 0.1*thisState.equipment['tickColonies'] 
                               + 0.1*thisState.equipment['incubators'] 
                               + 0.1*thisState.equipment['pipettes'])
          dep['centrifuges']  = thisState.equipment['centrifuges'] 
          dep['freezers']     = thisState.equipment['freezers'] 
          dep['hotPlates']    = thisState.equipment['hotPlates'] 
          dep['tickColonies'] = thisState.equipment['tickColonies'] 
          dep['incubators']   = thisState.equipment['incubators'] 
          dep['pipettes']     = thisState.equipment['pipettes'] 

          return dep
     }
     facilities_fx(dep,thisState,lock_state) {
          dep['facilities']    = thisState.facilities['facilities'] 
          dep['storage']       = thisState.facilities['storage'] 
          dep['safetyShowers'] = thisState.facilities['safetyShowers'] 
          dep['workbenches']   = thisState.facilities['workbenches'] 

          return dep
     }

     resource_changer (dep,thisState,fx,lock_state) {
          let obs = Object.assign({}, dep); 
          fx(obs,thisState,lock_state)
          return obs        
     }

}


export default Lab_methods
