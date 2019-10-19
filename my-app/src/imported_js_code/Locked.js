class Locked {
	constructor() {
		var airSystem = {
			airSystem: "not_locked",
			gaskets: "not_locked",
			airPressure: "not_locked",
			filters: "locked",
			generatorFeeds: "locked"
		};

		var biohazard = "not_locked";

		var biologicals = {
			biologicals: "not_locked",
			researchTree: "not_locked",
			biologicalProperties: "not_locked",
			outbreakProgression: "not_locked"
		};

		var budget = {
			budget: "not_locked",
			grants: "not_locked",
			accounting: "not_locked",
			salaries: "not_locked",
			kickbacks: "locked",
			embezzlement: "not_locked"
		};

		var decontamination = {
			decontamination: "not_locked",
			suits: "locked",
			showers: "locked",
			protocols: "not_locked"
		};

		var electricity = {
			electricity: "not_locked",
			freezers: "not_locked",
			boilers: "locked",
			backupGenerators: "locked",
			aboveGroundLines: "locked",
			belowGroundLines: "not_locked"
		};

		var employees = {
			employees: "not_locked",
			scientists: "not_locked",
			jrScientists: "not_locked",
			srScientists: "locked",
			facilitiesEngineering: "not_locked",
			administration: "not_locked"
		};

		var equipment = {
			equipment: "not_locked",
			centrifuges: "not_locked",
			freezers: "locked",
			hotPlates: "locked",
			tickColonies: "locked",
			incubators: "locked",
			pipettes: "not_locked"
		};

		var facilities = {
			facilities: "not_locked",
			storage: "locked",
			safetyShowers: "locked",
			workbenches: "not_locked"
		};

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
		};
	}
}

export default Locked;
