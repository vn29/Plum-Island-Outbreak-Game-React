see live demo here! https://vn29.github.io/Plum-Island-Outbreak-Game-React/

# Plum-Island-Outbreak-Game-React (Finished)
![](https://github.com/vn29/Plum-Island-Outbreak-Game-React/blob/master/my-app/src/example.PNG?raw=true)
A react.js based resource game where you are the director of the famous Plum Island animal research facility where
dangerous viruses are researched on a budget. Funding is tight in this government agency run by the US department of agriculture.
It is your mission to try to keep the place running for as long as possible, researching ever more dangerous viruses in the hopes
that they provide you with more grant money and increased biohazard authorizations to research ever more exotic viruses like Foot-and-mouth
disease, West-Nile virus, Viral Hemorrhagic Fever, and Lyme disease.

Beware though, there is always a chance for outbreak. With the islands location in the Long Island Sound, it is right in the middle 
of a hurricane corridor. Power can go out, protocols may not be followed, the air system can fail.

As your research developes, so does available technology for combating an outbreak. Below is a comprehensive list of your concerns as
director of the island research laboratory. locked items are locked at the start of the game and do not contribute to your budget
nor do they reduce any biohazardous outbreaks from happening. Locked concerns are unlocked as you progress through the tech research
tree and the biohazard level of the facility that has been achieved.

on each turn, your budget, research progression, and outbreak possibility will replenish accordingly on factores as discussed below.

## Air System
provides an innovative negative air pressure through out the facility that ensures airborne vectors are contained within the facility.
### airSystem: 
general air systems such as duct work and ventilations.
### gaskets: 
sealants around doors and vents that prevent penetrations through the enclosure of the facility.
### airPressure: 
air pressure control systems that maintain negaive air pressure of the enclosed facility to the outside. Especially in hot zones.
### filters: unlocked at (biohazard level: 2)
air filtration systems that provide an additional measure against airborne vectors in the case of an incident.
### generatorFeeds: unlocked at (biohazard level: 3)
provides additional backup power in the case of a loss of main power to the air pressure system. loss of the negative air pressure system would be catastrophic.

## Biologicals
All aspects of biologicals being researched. research tree progression included.
### biologicals: 
The heart of the laboratory, the biologicals represent the actual viruses being studied by the lab.
### researchTree: 
The research tree that will provide unlocks for all types of concerns to achieve new equipment, facilities, and sr research staff
### biologicalProperties: 
aspects of biologicals that regard its virulence, vector, type, zoonoses, strain, as well as human and animal lethality
### outbreakProgression: 
in the instance of an outbreak, its progression can be tracked here. Once the progression reaches a certain point and escapes to mainland, the game will have been lost.

## Budget
the main resource of the game to maintain the facilities research activites
### budget: 
funds available for purchasing equipment, hiring new scientists, building facilities etc...
### grants: 
surplus funding provided to perform research based on success of scientific staff.
### accounting: 
staff which can reduce the salaries of other staff
### salaries: 
funds which are depleted every end of turn to pay for the salaries of all the employees
### kickbacks: 
risky sources of funding at the possible costs of loosing essential equipments or facilities due to neglect
### embezzlement: 
direct access to cash with the possibility of fines and penalties if caught. Hiring more accountants will make this more difficult to get away with.

## Decontamination
measure to reduce and prevent an outbreak.
### decontamination: 
funds directed towards decontamination will reduce the possiblities for the initial origin of an outbreak from within the lab
### suits: unlocked at (biohazard level: 4)
suits provide an extra measure to maintain the health of the staff granted the virus is not resistant to this form of decontamination
### showers: unlocked at (biohazard level: 3)
reduces viruses progression during an outbreak granted the virus is not resistant to this form of decontamination
### protocols: 
reduces outbreak progression granted there is not a breach of protocol event.

## Electricity
required resource to maintain essential research equipment and biohazard safety.
### electricity: 
the main resource with the number representing the likelyhood of a power outage. A power outage during an outbreak situation can be dangerous and lapse many safety measures in place.
### freezers: 
increase research efficiency and provide a safegaurd against uncontrolled growth of a biological culture.
### boilers: unlocked at (biohazard level: 4)
power hungry and very important to the appropriate decontamination of waste water from the facility. required for more advanced forms of research.
### backupGenerators: unlocked at (biohazard level: 3)
provide reduced risks of a loss of power occuring
### aboveGroundLines: unlocked at (biohazard level: 2)
provide reduced risks of a loss of power occuring
### belowGroundLines: 
provide reduced risks of a loss of power occuring. not vulnerable to storms.

## Employees
the staff of Plum Island
### employees : 
total number of employees
### scientists : 
number of scientists of staff
### jrScientists : 
number of jr scientists of staff
### srScientists : unlocked at (biohazard level: 3)
number of sr scientists of staff. locked at beginning of game and must be hired. provide significant research advancement.
### facilitiesEngineering : 
number of facilities engineering staff that provide decontamination and preventative measures.
### administration : 
increases the efficiency of all other employees

## Equipment
esential research equipment used by scientists to increase their research productivity. is dependent on power
### equipment: 
provides a status indicator of the efficiency of current equipment
### centrifuges: 
increases research efficiency. dependent on power.
### freezers: unlocked at (biohazard level: 2)
increases research efficiency. dependent on power.
### hotPlates: unlocked at (biohazard level: 4)
increases research efficiency. dependent on power. requires jr scientists on staff
### tickColonies: unlocked at (biohazard level: 4)
increases research efficiency. dependent on power. requires sr scientists on staff
### incubators: unlocked at (biohazard level: 3)
increases research efficiency. dependent on power. requires scientists on staff
### pipettes: 
increases resarch efficiency

## Facilities
provide neccesary workspaces and area for decontamination
### facilities: 
provides a status indicator of the efficiency of current facilities
### storage: unlocked at (biohazard level: 2)
provides research efficiency and improved decontamination to prevent progression of an outbreak
### safetyShowers: unlocked at (biohazard level: 3)
improves safety against a biological outbreak. required for some biohazard levels
### workbenches: 
provides improved research efficiency
