


class Lab_methods {
     airSystem_fx (dep,thisState,lock_state) {
          dep['airSystem'] = dep['airSystem'] 
                         //   + dep['gaskets'] 
                         //   + dep['airPressure'] 
                         //   + dep['filters'] 
                         //   + dep['generatorFeeds']

          dep['gaskets']        = dep['gaskets']
          dep['airPressure']    = dep['airPressure']
          dep['filters']        = dep['filters']
          dep['generatorFeeds'] = dep['generatorFeeds']
          return dep
     }
     /*biohazard_fx(dep,thisState) {

          return dep
     }*/
     biologicals_fx(dep,thisState,lock_state) {
          dep['biologicals']          = dep['biologicals']
          //dep['researchTree']         = dep['researchTree']
          //dep['biologicalProperties'] = dep['biologicalProperties']
          dep['outbreakProgression']  = Math.max(0,dep['outbreakProgression']
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
          dep['budget']       = dep['budget']  + 500000
                               + dep['grants'] 
                              // + dep['accounting'] 
                               - dep['salaries'] 
                              // - dep['kickbacks'] 
                              // - dep['embezzlement']

          dep['grants']       = dep['grants'] 
                              +thisState.biologicals['biologicals'].length * 10000
                              + thisState.employees['employees']  * 10000
                               + thisState.facilities['facilities']  * 10000

          dep['accounting']   = dep['accounting'] 
                              // + thisState.employees['administration']

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

          // dep['decontamination'] = dep['decontamination'] + dep['suits'] + dep['showers'] + dep['protocols']
          // dep['suits']           = dep['suits']
          // dep['showers']         = dep['showers']
          // dep['protocols']       = dep['protocols']
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
                              // + thisState.electricity['electricity']

          dep['freezers']     = dep['freezers'] 
                              // + thisState.electricity['electricity']

          dep['hotPlates']    = dep['hotPlates'] 
                              // + thisState.electricity['electricity']

          dep['tickColonies'] = dep['tickColonies'] 
                              // + thisState.electricity['electricity']

          dep['incubators']   = dep['incubators'] 
                              // + thisState.electricity['electricity']

          dep['pipettes']     = dep['pipettes'] 
                              // + thisState.electricity['electricity']

          return dep
     }
     facilities_fx(dep,thisState,lock_state) {
          dep['facilities']    = dep['facilities'] 
                              //  + dep['storage']* (1/10)+dep['facilities']
                              //  + dep['safetyShowers'] * (1/10)+dep['facilities']
                              //  + dep['workbenches']* (1/10)+dep['facilities']

          dep['storage']       = dep['storage'] 
                              //  + thisState.employees['facilitiesEngineering'] 

          dep['safetyShowers'] = dep['safetyShowers'] 
                              //  + thisState.decontamination['protocols'] 
                              //  + thisState.employees['facilitiesEngineering'] 

          dep['workbenches']   = dep['workbenches'] 
                              //  + thisState.equipment['equipment'] 
                              //  + thisState.decontamination['protocols'] 
                              //  + thisState.employees['facilitiesEngineering'] 
          return dep
     }

     resource_changer (dep,thisState,fx,lock_state) {
          let obs = Object.assign({}, dep); 
          fx(obs,thisState,lock_state)
          return obs        
     }










}




export default Lab_methods


/*
var airSystem = {
     airSystem: 1,
     gaskets: 1,
     airPressure: 1,
     filters: 1,
     generatorFeeds: 1,
}

var biohazard = 1;

var biologicals = {
     biologicals: 1,
     researchTree: 1,
     biologicalProperties: 1
}

var budget = {
     budget: 1,
     grants: 1,
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
     electricity: 1,
     freezers: 1,
     boilers: 1,
     backupGenerators: 1,
     aboveGroundLines: 1,
     belowGroundLines: 1,
}

var employees = {
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
} */