const gcmd = require('./gcmd');
const gnis = require('./gnis');
const sciencebase = require('./sciencebase');
const usgs = require('./usgs');

const harvesters = { gcmd, gnis, sciencebase, usgs };

// Function to run a specific harvester
const runHarvester = name => {
  if (harvesters[name]) {
    console.log(`Running ${name}`);
    harvesters[name].run();
  } else {
    console.log(`Harvester ${name} not found`);
  }
};

// Get the arguments passed to the script
const args = process.argv.slice(2);

// Run the harvester(s) based on the arguments
if (args.length > 0) {
  // Run the specific harvester(s) mentioned in the arguments
  args.forEach(runHarvester);
} else {
  // Run all harvesters if no specific one is mentioned
  Object.keys(harvesters).forEach(runHarvester);
}
