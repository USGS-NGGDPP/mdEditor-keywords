# Harvesters

## How to add a new harvester

1. Create a new directory with the name of the harvester.
2. Create the file `index.js` and add the following contents:

```
import main from './<name_of_harvester>';

async function run() {
  await main();
}

export default { run };
```

3. Create the file `<name_of_harvester>.js` and add the main function stub:

```
export default async function main() {}
```

4. In the `harvesters/index.js` file, import the new harvester and add it to the `harvesters` object.

5. In the `package.json` file add a script to run the new harvester.
