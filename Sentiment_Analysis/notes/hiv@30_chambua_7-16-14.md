##HIV@30 Notes 7/11/14
####TODO
* ~~rename clusters (not text file name)~~
* ~~organize by year (for 1980s)~~
* ~~dedupe (Paris vs PARIS) | small caps everything downcase everything~~
* bump title over -> when depth is 0, don't display; color class css rules when g.cluster = 
* empty arrays
* ~~at certain zoom level, disappear text, or change resolution~~
* get working for each year
* conduct and annotate
* build reload mechanism

####LOCAL PROCESS (for Text Clean)
* open OpenRefine
* load output.csv 
* value > edit cells > commmon transforms > collapse consecutive whitespace + trim leading whitespace
* value dropdown text facet
set choice count limit > ok
* cluster > select all, check > merge selected than close
* export as csv
`./csv-to-json.js `
* reformat 1980s, change compile-to-csv.js so that it incorporates 1980s

####GLOBAL PROCESS
* copy folders from dropbox to repo for version control
* process special files and older folders
* fix 1980s into buckets by year
* run naming correction
* run chambua
* run node scripts on output files
* test viz

------


####LOG (7/4/14)
* did this for 1990 (move everything w/weird name to special folder, run reorder/convert to txt, fix specials, **move all unfixables to special-90)**
* copied files over from 2000s, renamed
* made directories and split out 1980s (in `output`)
* FINISHED: 1980s chambua process (yellow folder means specials merged)
	* change extension
	* work reorder to date sort
	* wrap in {text:}
	* process with chambua
	* check that it worked
	* merge with output from non-special folder of that year
	* move all specials remaining to `special-90s`
	* commit
* FINISHED: 1990s (up to 1992)chambua process
* FINISHED: 2000s chambua process
* FINISHED: 2010s chambua process\
	* reformated script to run for dated files items: `ls *.txt | sed -e 's/\(..\)\(..\)\(..\)\(.\)/mv \1\2\3\4.txt \3\2\1\4/' | sh`
* start node process (7/16/14)
	* see "local process" above
* moved all `output` .json files to hiv_30-cluster `data` folder
* fixed intro bracket issue (need to wrap it in an hiv object):
`{"name": "hiv",
"children": [{
  }
]}`

####QUESTIONS
* there was a folder of "corrected" files in the 1991 batch, why?
* big question: why are there so many miscategorized 2009 files?
* 2005 was super messed up (underscore)
	* `ls *.txt | sed -e 's/\(...\)\(..\)\(..\)\(..\)\(.\)\(..\)/mv \1\2\3\4\5\6.txt \6\4\3\2\1/' | sh`
* 2007-2008 no dates, can't sort yet
* 2010s still have un processed special files with weird names
* 2010s files with no date in `special`

====

###IN MEETING NOTES
####GENERAL
frequency of tags in figures for tableau visualizations
tableau how do we incorporate those narratives - tableau
qualitative analysis in dropbox

###OTHER VIZ
prevalence and testing > when you look at uptake of hiv services in kenya

###TIMELINE
last point in timeline...baby (today news broke that she's redetected
2013 timline edit
27 months later the hiv virus was redetected in her system
