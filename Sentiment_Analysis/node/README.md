## NODE PARSER
A series of node scripts to clean up Daily Nation (Kenya) articles for the HIV@30 project, and create .json for a D3 pack visualization of proper names/mentions by year (1980-2014).

###WORKFLOW
1. `compile-to-csv.js` - Read all the Chambua articles in `1990s` and `2010s` and compile in to `output.csv`
2. Use Refine to tidy entities and save output as `hiv-30.csv`
3. `csv-to-json.js` read `hiv-30.csv` and output as suitable JSON format for circle packing

###NOTES
* can use ./ to run
* ~~need to clean up 2000s, figure out why 1990 is missing~~
* don't forget to change compile-to-csv.js so that it incorporates 1980s
* Refine:
	* value > edit cells > common transforms > collapse consecutive (and leading) whitespace
	* value > text facet > set choice count > ok
	* cluster > select all, check > merge selected, then close
	* to apply previous macro got to Undo/Redo > Apply ... > copy refine.json to the window > click apply
	* copy changes from window to another file, save

