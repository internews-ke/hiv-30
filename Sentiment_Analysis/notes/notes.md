###NOTES - Sentiment_Analysis

####Developers
Aurelia Moser (@auremoser)
Daniel Cheseret (@dancheseret)

####Description
This sentiment analysis prooject is meant to visualize the lexicon associated with HIV coverage for the past 30 years. To do this, we parsed Daily Nation articles related to HIV/AIDS and extracted tags related to the evolving conversation, did it become more scientific, more positive, more negative, less accusative? The objective in conducting this study is to better understand our historic approach to AIDS in African, understand the entities, institutions, and places of interest relative to that conversation, and understand the general mood and approach to this conversation as it evolved over time.

To do this, we are using a combination of elbow-grease data cleaning, tag extraction and batch organization via a few applicaitons linked below, namely the Overview Project and Chambua, and Ushahidi semantic tagging application.

Some goals include:
* semantic analysis of Daily Nation AIDS coverage (30yrs)
* content analysis with chambua/tag-wave
* node-edge relationships between terms

####Contents
* **wrap_json.py**: Python script to wrap JSON around txt files for Chambua [(python > wrap_json.py)](https://github.com/internews-ke/hiv-30/tree/master/Sentiment_Analysis/python)
* **send_json.py** Python script to go over files in a directory and run chambua via modified curl (urllib2) [(python > send_json.py)](https://github.com/internews-ke/hiv-30/tree/master/Sentiment_Analysis;/python)


####References
* [Overview](https://www.overviewproject.org/)
* [Chambua](https://github.com/ushahidi/Chambua)
* [Lithium Labs Sentiment Wave](https://github.com/lithiumtech/li-visualizations)
* [Bubble Timeline](http://bost.ocks.org/mike/nations/)
* [D3 Force collapse tree](http://mbostock.github.io/d3/talk/20111116/force-collapsible.html)
* [Code Flower](http://redotheweb.com/CodeFlower/)
* [HIV Virus Shapes](https://www.google.com/search?q=hiv+virus+molecule+structure&es_sm=91&tbm=isch&tbo=u&source=univ&sa=X&ei=kdiLU7eYLYijsQTz_oH4DA&ved=0CDYQsAQ&biw=1440&bih=743)

####Resources - content
* [sed Data Cleaning Notes](https://github.com/auremoser/fellowship/blob/master/projects/%5BIN%5DHIV/sed-cleaning-notes.md)