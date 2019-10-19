class Lab_methods {
     airSystem_fx (dep,thisState,lock_state) {
          dep['airSystem'] = dep['airSystem'] 
          dep['gaskets']        = dep['gaskets']
          dep['airPressure']    = dep['airPressure']
          dep['filters']        = dep['filters']
          dep['generatorFeeds'] = dep['generatorFeeds']
          return dep
     }

     biologicals_fx(dep,thisState,lock_state) {
          dep['biologicals']          = dep['biologicals']
          dep['outbreakProgression']  = Math.max(0,dep['outbreakProgression'] + dep['biologicalProperties']
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
          dep['budget']       = (dep['budget']  + 50000
                               + dep['grants'])*(1000-thisState.misc.turn)/1000 - dep['salaries']
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
          dep['accounting']   = dep['accounting'] 
          dep['salaries']     = thisState.employees['scientists'] *10000
                               + thisState.employees['jrScientists'] *8000
                               + thisState.employees['srScientists']  *20000
                               + thisState.employees['facilitiesEngineering']  *5000
                               + thisState.employees['administration']* 15000
           dep['kickbacks']    = dep['kickbacks']
           dep['embezzlement'] = dep['embezzlement']
          return dep
     }
     decontamination_fx(dep,thisState,lock_state) {
          return dep
     }
     electricity_fx(dep,thisState,lock_state) {
          dep['electricity']      = Math.min(90 + 0.1*dep['freezers'] + 0.1*dep['boilers'] + 0.1*dep['backupGenerators'] + 0.1*dep['aboveGroundLines'] + 0.1*dep['belowGroundLines'],100)
          dep['freezers']         = dep['freezers']
          dep['boilers']          = dep['boilers']
          dep['backupGenerators'] = dep['backupGenerators']
          dep['aboveGroundLines'] = dep['aboveGroundLines']
          dep['belowGroundLines'] = dep['belowGroundLines']
          return dep
     }
     employees_fx(dep,thisState,lock_state) {
          dep['employees']     = dep['scientists']
                              + dep['jrScientists']
                              + dep['srScientists']
                              + dep['facilitiesEngineering']
                              + dep['administration']
          return dep
     }
     equipment_fx(dep,thisState,lock_state) {
          dep['equipment']    = Math.min(100,90
                               + 0.1*dep['centrifuges'] 
                               + 0.1*dep['freezers'] 
                               + 0.1*dep['hotPlates'] 
                               + 0.1*dep['tickColonies'] 
                               + 0.1*dep['incubators'] 
                               + 0.1*dep['pipettes'])
          dep['centrifuges']  = dep['centrifuges'] 
          dep['freezers']     = dep['freezers'] 
          dep['hotPlates']    = dep['hotPlates'] 
          dep['tickColonies'] = dep['tickColonies'] 
          dep['incubators']   = dep['incubators'] 
          dep['pipettes']     = dep['pipettes'] 

          return dep
     }
     facilities_fx(dep,thisState,lock_state) {
          dep['facilities']    = dep['facilities'] 
          dep['storage']       = dep['storage'] 
          dep['safetyShowers'] = dep['safetyShowers'] 
          dep['workbenches']   = dep['workbenches'] 

          return dep
     }

     resource_changer (dep,thisState,fx,lock_state) {
          let obs = Object.assign({}, dep); 
          fx(obs,thisState,lock_state)
          return obs        
     }

}


export default Lab_methods
