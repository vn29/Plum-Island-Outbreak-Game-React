


class Locked {
     constructor() {
          var airSystem = {
               airSystem: 'not_locked',
               gaskets: 'not_locked',
               airPressure: 'not_locked',
               filters: 'locked',
               generatorFeeds: 'locked',
          }

          var biohazard = 'not_locked';

          var biologicals = {
               biologicals: 'not_locked',
               researchTree: 'not_locked',
               biologicalProperties: 'not_locked',
               outbreakProgression: 'not_locked'
          }

          var budget = {
               budget: 'not_locked',
               grants: 'not_locked',
               accounting: 'not_locked',
               salaries: 'not_locked',
               kickbacks: 'not_locked',
               embezzlement: 'not_locked',
          }

          var decontamination = {
               decontamination: 'not_locked',
               suits: 'locked',
               showers: 'locked',
               protocols: 'not_locked',
          }

          var electricity = {
               electricity: 'not_locked',
               freezers: 'not_locked',
               boilers: 'locked',
               backupGenerators: 'locked',
               aboveGroundLines: 'locked',
               belowGroundLines: 'not_locked',
          }

          var employees = {
               employees : 'not_locked',
               scientists : 'not_locked',
               jrScientists : 'not_locked',
               srScientists : 'locked',
               facilitiesEngineering : 'not_locked',
               administration : 'not_locked'
          }

          var equipment = {
               equipment: 'not_locked',
               centrifuges: 'not_locked',
               freezers: 'locked',
               hotPlates: 'locked',
               tickColonies: 'locked',
               incubators: 'locked',
               pipettes: 'not_locked',
          }

          var facilities = {
               facilities: 'not_locked',
               storage: 'locked',
               safetyShowers: 'locked',
               workbenches: 'not_locked',
          }

          

          this.locked_obj = {
               airSystem,
               biohazard,
               biologicals,
               budget,
               decontamination,
               electricity,
               employees,
               equipment,
               facilities
          }

     };
}


export default Locked


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


