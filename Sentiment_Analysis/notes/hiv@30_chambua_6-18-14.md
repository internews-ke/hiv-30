##HIV@30 - Updates for Chambua (6/2/14)

###Processing
I processed the remaining files, which can be found in the `Sentiment_Analysis > chambua-articles` directories in the hiv-30 project on github.

I wrote a script to pull entities from chambua and then reset thaem as a collapsable force-layout object suitable for processing as a node-edge map in d3. I will be experimenting with this this week. You can find those scripts in the Sentiment Analysis > python section of the hiv-30 project.

I continue to correspond with poderopedia, but after an abortive attempt to code a prototype using their platform and our data this weekend, I haven't been able to get it to work. I'm going to continue talking with them and see if we can make a prototype that would compliment what I am doing on the side, and then I can show them both to you by this week, so we get an idea of what aesthetic we want and what we can feasibly achieve.

Thanks for your patience, sorry about the delays.

###Visual Refererences:
* [Poderopedia](http://poderopedia.github.io/panama-network/docs/)
* [HIV visualization ideas](http://www.broadinstitute.org/annotation/viral/HIVPublic/)
* 

###6/18/14 Update
Went through and converted all 'special files' based on aggrey's date formats
* reordered dates
* converted files to txt
* droped send_json.py and wrap_json.py in the folder, created an "output" directory
* ran scripts (`python wrap_json.py` | `python send_json.py -o output`)
* copied the converted files to the parent directory for that decade

####1980s
Wrote script to parse through files in a directory and make