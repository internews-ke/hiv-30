##HIV@30 - Updates for Mass Processing (5/20/14)

###Preparation
* downloaded 1980s, 1990s, and 2010s articles from dropbox (5/20/14)
* eliminated overview, pdf, and subfolders from the directories to enable scripts
* 1980s, all files in one batch because fewer
* 1990s + 2010s, ran scripts by year because many
* I created a "special" folder in all files that means "something was strange about the naming of this file and I'm not sure why it is so-named"; we can decide how significant these are at the end of the analysis

###Process

* converted files to .txt
* reordered date to sort by YY/MM/DD
* wrap all files in text:{} object
* ran chambua on files and output them as duplicates in the "output" folder in each folder
* relabeled these as "1980s-chambua" and uploaded them to the dropbox next to their respective folders


###1980s
* for the 1980s the files were already .txt
* had some issues with name -> made `special ` folder  

![Date sort]()

* ran this to rename files by date: `ls *.txt | sed -e 's/\(....\)\(..\)\(..\)\(..\)/mv \1\2\3\4.txt \4\3\2\1/' | sh`

![Date sorted]()

* had trouble (sed illegal byte sequence error) removing hyphens so skipped it

* ran this to wrap in text object: `python wrap_json.py`
* ran this to run chambua: `python send_json.py -o output/`

###1990s
* went by sub-year directory (so 1990/ then 1991/)
* convert files to docx from doc
* made "special" directory for longer files in each year
* made "output" directory for chambua arrays
* converted .docx to text: `textutil -convert txt /Users/aurelia/Desktop/1990s/1999/*.docx`
* removed all .docx files `rm *.docx`
* place .py scripts (wrap_json and send_json) in directory with files
* deleted .docx files
* renamed files: `ls *.txt | sed -e 's/\(....\)\(..\)\(..\)\(..\)/mv \1\2\3\4.txt \4\3\2\1/' | sh`
* wrapped objects: `python wrap_json.py`
* ran chambua: `python send_json.py -o output`

NOTES:
1993 had a lot of "special" files

