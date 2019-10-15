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
          dep['budget']       = dep['budget']  + 50000
                               + dep['grants']
                               - dep['salaries'] 
          dep['grants']       = 10000*thisState.biologicals['biologicalProperties']
                              + thisState.employees['employees']  * 10000 * thisState.equipment.equipment/100
                               + thisState.facilities['facilities']  * 10000
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
