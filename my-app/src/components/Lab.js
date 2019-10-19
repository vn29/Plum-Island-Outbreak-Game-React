import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../index.css";
import Airsystem from "./Airsystem.js";
import Biohazardlevel from "./Biohazardlevel.js";
import Biologicals from "./Biologicals.js";
import Budget from "./Budget.js";
import Decontamination from "./Decontamination.js";
import Electricity from "./Electricity.js";
import Employees from "./Employees.js";
import Equipment from "./Equipment.js";
import Facilities from "./Facilities.js";
import Lab_methods from "../imported_js_code/Lab_methods.js";
import Locked from "../imported_js_code/Locked.js";

class Lab extends React.Component {
	constructor(props) {
		super(props);
		let lock = new Locked();

		let airSystem = {
			airSystem: 1,
			gaskets: 1,
			airPressure: 1,
			filters: 1,
			generatorFeeds: 1
		};

		let biohazard = 1;

		let biologicals = {
			biologicals: ["Foot-and-Mouth Disease"],
			researchTree: 1,
			biologicalProperties: 0,
			outbreakProgression: 0
		};

		let budget = {
			budget: 10000,
			grants: 10000,
			accounting: 1,
			salaries: 1,
			kickbacks: 1,
			embezzlement: 1
		};

		let decontamination = {
			decontamination: 1,
			suits: 1,
			showers: 1,
			protocols: 1
		};

		let electricity = {
			electricity: 90,
			freezers: 1,
			boilers: 1,
			backupGenerators: 1,
			aboveGroundLines: 1,
			belowGroundLines: 1
		};

		let employees = {
			employees: 5,
			scientists: 1,
			jrScientists: 1,
			srScientists: 1,
			facilitiesEngineering: 1,
			administration: 1
		};

		let equipment = {
			equipment: 90,
			centrifuges: 1,
			freezers: 1,
			hotPlates: 1,
			tickColonies: 1,
			incubators: 1,
			pipettes: 1
		};

		let facilities = {
			facilities: 1,
			storage: 1,
			safetyShowers: 1,
			workbenches: 1
		};

		let misc = {
			turn: 0,
			status: ""
		};

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
			lock,
			misc
		};
		//set locked values to zero in the constructor
		this.set_locked_to_zero();
		this.research_new_biologicals = this.research_new_biologicals.bind(this)
	}

	dice_roll(chance) {
		if (Math.random() <= chance) {
			return true;
		} else {
			return false;
		}
	}

	set_locked_to_zero() {
		for (let state_obs of Object.keys(this.state)) {
			// for each category of concern
			if (
				state_obs !== "biohazard" &&
				state_obs !== "lock" &&
				state_obs !== "misc"
			) {
				//except for the biohazard and lock categories
				let aslockobject = this.state.lock.locked_obj[state_obs]; //grab the locked state. either 'locked' or 'not_locked
				Object.entries(this.state[state_obs]).forEach(kv => {
					// i is [key,value] of the category of concerns sub topic
					//console.log(kv)
					console.log(kv);
					let k = kv[0]; //this is just the key name so we can access the locked objects sub category of concern
					let islock = aslockobject[k]; //sub category of concerns locked state
					if (islock == "locked") {
						//check if the sub category of concern is locked and then set the value to zero if it is locked
						this.state[state_obs][k] = 0;
					}
				});
			}
		}
	}

	set_locked_to_biohazard_2() {
		for (let state_obs of Object.keys(this.state)) {
			// for each category of concern
			if (
				state_obs !== "biohazard" &&
				state_obs !== "lock" &&
				state_obs !== "misc"
			) {
				//except for the biohazard and lock categories
				let aslockobject = this.state.lock.locked_obj[state_obs]; //grab the locked state. either 'locked' or 'not_locked'
				Object.entries(this.state[state_obs]).forEach(kv => {
					// i is [key,value] of the category of concerns sub topic
					let k = kv[0]; //this is just the key name so we can access the locked objects sub category of concern
					//console.log(k[0])
					if (k == "filters") {
						aslockobject[k] = "not_locked";
					}
					if (k == "aboveGroundLines") {
						aslockobject[k] = "not_locked";
					}
					if (k == "freezers") {
						aslockobject[k] = "not_locked";
					}
					if (k == "storage") {
						aslockobject[k] = "not_locked";
					}
				});
			}
		}
	}

	research_new_biologicals(thisState) {
		if (
			thisState.budget.budget >= 100000 &&
			thisState.biologicals.biologicalProperties < 4
		) {
			this.setState(prevState => {
				let nstate = Object.assign({}, prevState);
				nstate.budget.budget = prevState.budget.budget - 100000;
				nstate.biologicals.biologicalProperties = Math.min(
					4,
					thisState.biologicals.biologicalProperties + 1
				);
				if (thisState.biologicals.biologicalProperties == 1) {
					nstate.biologicals.biologicals.push("West-Nile Virus");
				}
				if (thisState.biologicals.biologicalProperties == 2) {
					nstate.biologicals.biologicals.push("Lyme Disease");
				}

				if (thisState.biologicals.biologicalProperties == 3) {
					nstate.biologicals.biologicals.push(
						"Hemorrhagic Fever"
					);
				}

				if (thisState.biologicals.biologicalProperties == 4) {
					nstate.biologicals.biologicals.push("Mad Cow Disease");
				}
				return nstate;
			});
		}
	}

	set_locked_to_biohazard_3() {
		for (let state_obs of Object.keys(this.state)) {
			// for each category of concern
			if (
				state_obs !== "biohazard" &&
				state_obs !== "lock" &&
				state_obs !== "misc"
			) {
				//except for the biohazard and lock categories
				let aslockobject = this.state.lock.locked_obj[state_obs]; //grab the locked state. either 'locked' or 'not_locked'
				Object.entries(this.state[state_obs]).forEach(kv => {
					// i is [key,value] of the category of concerns sub topic
					let k = kv[0]; //this is just the key name so we can access the locked objects sub category of concern
					if (k == "generatorFeeds") {
						aslockobject[k] = "not_locked";
					}
					if (k == "showers") {
						aslockobject[k] = "not_locked";
					}
					if (k == "backupGenerators") {
						aslockobject[k] = "not_locked";
					}
					if (k == "srScientists") {
						aslockobject[k] = "not_locked";
					}
					if (k == "safetyShowers") {
						aslockobject[k] = "not_locked";
					}
				});
			}
		}
	}

	set_locked_to_biohazard_4() {
		for (let state_obs of Object.keys(this.state)) {
			// for each category of concern
			if (
				state_obs !== "biohazard" &&
				state_obs !== "lock" &&
				state_obs !== "misc"
			) {
				//except for the biohazard and lock categories
				let aslockobject = this.state.lock.locked_obj[state_obs]; //grab the locked state. either 'locked' or 'not_locked'
				Object.entries(this.state[state_obs]).forEach(kv => {
					// i is [key,value] of the category of concerns sub topic
					let k = kv[0]; //this is just the key name so we can access the locked objects sub category of concern
					if (k == "suits") {
						aslockobject[k] = "not_locked";
					}
					if (k == "boilers") {
						aslockobject[k] = "not_locked";
					}
					if (k == "hotPlates") {
						aslockobject[k] = "not_locked";
					}
					if (k == "tickColonies") {
						aslockobject[k] = "not_locked";
					}
				});
			}
		}
	}

	hurricane_actn(lab) {
		lab.setState(prevState => {
			let st = Object.assign({}, lab.state);
			st.electricity.electricity = 90;
			return st;
		});
	}
	staff_contraction_actn(lab) {
		if (lab.state.budget.budget >= 10000) {
			lab.setState(prevState => {
				let State = Object.assign({}, prevState);
				State.biologicals.outbreakProgression =
					prevState.biologicals.outbreakProgression + 2;
				return State;
			});
		}
	}
	budget_cuts_atcn(lab) {
		if (lab.state.budget.budget >= 100000) {
			lab.state.budget.budget -= 100000;
		}
	}
	scientists_quit_actn(lab) {
		let emp = lab.state.employees;
		if (emp.scientists >= 1) {
			emp.scientists -= 1;
		}
		if (emp.jrScientists >= 1) {
			emp.jrScientists -= 1;
		}
		if (emp.srScientists >= 1) {
			emp.srScientists -= 1;
		}
	}
	equipment_failure_actn(lab) {
		lab.state.equipment.equipment = 90;
	}
	decontamination_failure_actn(lab) {
		let dcn = lab.state.decontamination;
		if (dcn.protocols >= 1) {
			dcn.protocols -= 1;
		}
		if (dcn.showers >= 1) {
			dcn.showers -= 1;
		}
		if (dcn.suits >= 1) {
			dcn.suits -= 1;
		}
	}
	botched_lab_results_actn(lab) {
		if (lab.state.biologicals.biologicalProperties >= 1) {
			lab.setState(prevState => {
				let State = Object.assign({}, prevState);
				State.biologicals.biologicalProperties =
					prevState.biologicals.biologicalProperties - 1;
				return State;
			});
		}
	}

	scientific_breakthrough_actn(lab) {
		lab.state.budget.budget += 100000;
	}

	select_event() {
		let selection_number = Math.floor(Math.random() * 7);
		let pos_events = {
			hurricane: this.hurricane_actn,
			staff_contraction: this.staff_contraction_actn,
			budget_cuts: this.budget_cuts_atcn,
			scientists_quit: this.scientists_quit_actn,
			equipment_failure: this.equipment_failure_actn,
			decontamination_failure: this.decontamination_failure_actn,
			botched_lab_results: this.botched_lab_results_actn,
			scientific_breakthrough: this.scientific_breakthrough_actn
		};
		this.state.misc.status =
			Object.keys(pos_events)[selection_number] +
			" on turn " +
			this.state.misc.turn;
		return Object.values(pos_events)[selection_number];
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
			lock,
			misc
		} = this.state;

		if (biologicals.outbreakProgression >= 10) {
			this.setState(prevState => {
				let State = Object.assign({}, prevState);
				State.budget.budget = prevState.budget.budget - 1000000;
				return State;
			});
		}

		if (this.dice_roll(0.25)) {
			this.select_event()(this);
			//console.log(s_event)
		}
		this.set_locked_to_zero();
		misc.turn += 1;

		let lm = new Lab_methods();
		let dax = [];
		let fx_list = {
			airSystem: lm.airSystem_fx,
			biologicals: lm.biologicals_fx,
			budget: lm.budget_fx,
			decontamination: lm.decontamination_fx,
			electricity: lm.electricity_fx,
			employees: lm.employees_fx,
			equipment: lm.equipment_fx,
			facilities: lm.facilities_fx
		};

		this.setState(prevState => {
			Object.keys(this.state).forEach(k => {
				if (k !== "biohazard" && k !== "lock" && k !== "misc") {
					dax.push(
						lm.resource_changer(
							prevState[k],
							this.state,
							fx_list[k],
							lock[k]
						)
					);
				}
			});

			return {
				airSystem: dax[0],
				biologicals: dax[1],
				budget: dax[2],
				decontamination: dax[3],
				electricity: dax[4],
				employees: dax[5],
				equipment: dax[6],
				facilities: dax[7]
			};
		});
	}

	add_item(thisState, concern, item, cost) {
		let cond =
			thisState.budget.budget >= cost &&
			thisState.lock.locked_obj[concern][item] == "not_locked";
		if (cond) {
			this.setState(prevState => {
				let budget_ob = Object.assign({}, thisState.budget);
				let st_ob = Object.assign({}, thisState[concern]);
				st_ob[item] = prevState[concern][item] + 1;
				budget_ob.budget = prevState.budget.budget - cost;
				let x = {};
				x.budget = budget_ob;
				x[concern] = st_ob;
				return x;
			});
		}
	}

	upgrade_biohazard_level(thisState, cost) {
		if (thisState.budget.budget >= cost && thisState.biohazard < 4) {
			let new_biolvl = Math.min(4, thisState.biohazard + 1);
			if (new_biolvl == 2) {
				this.set_locked_to_biohazard_2();
			}
			if (new_biolvl == 3) {
				this.set_locked_to_biohazard_3();
			}
			if (new_biolvl == 4) {
				this.set_locked_to_biohazard_4();
			}
			this.setState(prevState => {
				let preb = Object.assign({}, prevState.budget);
				preb.budget = prevState.budget.budget - cost;
				return { biohazard: new_biolvl, budget: preb };
			});
		}
	}

	item_display(thisState, concern, item_cost) {
		//some array will feed x. its oging to have the item and costs
		let myary = Object.entries(item_cost).filter(
			item => thisState.lock.locked_obj[concern][item[0]] == "not_locked"
		);
		let x = myary.map(kv => (
			<Button
				variant="secondary"
				size="sm"
				style={{
					backgroundColor: "darkgrey",
					borderRadius: "0px",
					width: 150
				}}
				onClick={() => this.add_item(thisState, concern, kv[0], kv[1])}
			>
				{kv[0]}
			</Button>
		));
		return x;
	}

	unlock_concern(concern, item) {
		this.state.lock.locked_obj[concern][item] = "not_locked";
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
			lock,
			misc
		} = this.state;
		let lm = new Lab_methods();

		return (
			<div className="main_display">
				<div className="component_display">
					<Button
						variant="secondary"
						size="lg"
						onClick={() => this.end_turn()}
						style={{
							backgroundColor: "darkgrey",
							borderRadius: "5px",
							border: "solid",
							borderColor: "rgba(245, 222, 13, 0.89)",
							width: 150
						}}
					>
						End Turn
					</Button>
					<Button
						variant="secondary"
						size="sm"
						onClick={() =>
							this.upgrade_biohazard_level(this.state, 1000000)
						}
						style={{
							backgroundColor: "darkgrey",
							borderRadius: "5px",
							border: "solid",
							borderColor: "rgba(245, 222, 13, 0.89)",
							width: 150
						}}
					>
						upgrade biohazard level
					</Button>
					<Button
						variant="secondary"
						size="sm"
						onClick={() =>
							this.research_new_biologicals(this.state)
						}
						style={{
							backgroundColor: "darkgrey",
							borderRadius: "5px",
							border: "solid",
							borderColor: "rgba(245, 222, 13, 0.89)",
							width: 150
						}}
					>
						Research New Biological
					</Button>
					<div className="main_component">
						{" "}
						Hire Or Purchase
						<div>Employees</div>
						<div style={{ padding: 5 }}>
							{this.item_display(this.state, "employees", {
								jrScientists: 8000,
								scientists: 10000,
								srScientists: 20000,
								facilitiesEngineering: 5000,
								administration: 10000
							})}
						</div>
						<div>Air System</div>
						<div style={{ padding: 5 }}>
							{this.item_display(this.state, "airSystem", {
								gaskets: 10000,
								airPressure: 10000,
								filters: 5000,
								generatorFeeds: 100000
							})}
						</div>
						<div>Decontamination</div>
						<div style={{ padding: 5 }}>
							{this.item_display(this.state, "decontamination", {
								suits: 5000,
								showers: 10000,
								protocols: 10000
							})}
						</div>
						<div>Power</div>
						<div style={{ padding: 5 }}>
							{this.item_display(this.state, "electricity", {
								freezers: 200000,
								boilers: 300000,
								backupGenerators: 100000,
								aboveGroundLines: 100000,
								belowGroundLines: 100000
							})}
						</div>
						<div>Equipment</div>
						<div style={{ padding: 5 }}>
							{this.item_display(this.state, "equipment", {
								centrifuges: 20000,
								freezers: 30000,
								hotPlates: 5000,
								tickColonies: 20000,
								incubators: 10000,
								pipettes: 500
							})}
						</div>
						<div>Facilities</div>
						<div style={{ padding: 5 }}>
							{this.item_display(this.state, "facilities", {
								storage: 100000,
								safetyShowers: 50000,
								workbenches: 20000
							})}
						</div>
					</div>
				</div>
				<div className="component_display">
					<div className="main_component">turn: {misc.turn}</div>
					<div className="main_component">
						status message: {misc.status}
					</div>
					<Biohazardlevel
						className="main_component"
						comp_props={biohazard}
						lock_props={lock.locked_obj.biohazard}
					/>
					<div className="inter_display">
						<Biologicals
							className="main_component"
							comp_props={biologicals}
							lock_props={lock.locked_obj.biologicals}
						/>
						<Budget
							className="main_component"
							comp_props={budget}
							lock_props={lock.locked_obj.budget}
						/>
						<Employees
							className="main_component"
							comp_props={employees}
							lock_props={lock.locked_obj.employees}
						/>
					</div>
					<div className="inter_display">
						<Airsystem
							className="main_component"
							comp_props={airSystem}
							lock_props={lock.locked_obj.airSystem}
						/>

						<Decontamination
							className="main_component"
							comp_props={decontamination}
							lock_props={lock.locked_obj.decontamination}
						/>
						<Electricity
							className="main_component"
							comp_props={electricity}
							lock_props={lock.locked_obj.electricity}
						/>
						<Equipment
							className="main_component"
							comp_props={equipment}
							lock_props={lock.locked_obj.equipment}
						/>
						<Facilities
							className="main_component"
							comp_props={facilities}
							lock_props={lock.locked_obj.facilities}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Lab;