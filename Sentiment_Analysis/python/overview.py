#!/usr/bin/python

# Read a list of search terms/phrases, one per line, and an input CSV
# Output to console: how many rows each term appears in
# Usage:
#   search-and-count terms.csv documents.csv
# Courtesty of Jonathon Stray, collab for Internews project! Yay!

import sys
import csv

# from http://stackoverflow.com/questions/3313590/check-for-presence-of-a-sublist-in-python
def contains_sublist(lst, sublst):
    n = len(sublst)
    return any((sublst == lst[i:i+n]) for i in xrange(len(lst)-n+1))

# What kind of match are we looking for?
# Case-insensitive word match (split words on any whitespace)
def termInString(term, str):
    termWords = term.upper().split()
    strWords = str.upper().split()
    return contains_sublist(strWords, termWords)


# given a dictionary of terms->counts and a string, increment the counts for every term found in the string
# Increments by one, no matter how many times the string appears
def updateCounts(termcounts, str):
	for term in termcounts:
		if termInString(term, str):
			termcounts[term] += 1



# --- main ----

if len(sys.argv) < 3:
	print "Usage: search-and-count <terms.csv> <documents.csv>"
	sys.exit()
termfile = sys.argv[1]
datafile = sys.argv[2]

# read list of terms, one per line
# Assumes no header row, reads terms from first column
terms = []
with open(termfile, 'rU') as f:
    reader = csv.reader(f)
    for row in reader:
    	term = row[0].strip()				# first column, strip leading and trailing whitespace
    	if len(term)>2 and term[0]=='"' and term[-1]=='"':	# strip quotes if quoted
    		term = term[1:-1].strip()
    	if term != "":
        	terms.append(term)

# create a dictionary of terms, with all counts initially 0
termcounts = {term:0 for term in terms}

# check for matches against each row
with open(datafile, 'rU') as f:
    reader = csv.reader(f)

    # Get index of text column
    headers = reader.next()
    try:
    	textCol = headers.index("text")
    except ValueError:
    	print "Count not find 'text' column in documents file -- check CSV headers?"
    	sys.exit(0)

    for row in reader:
        updateCounts(termcounts, row[textCol])


# output terms and document counts to stdout, sorted case insensitive
for termcount in sorted(termcounts.items(), key=lambda s: s[0].lower()):
	print termcount[0] + "," + str(termcount[1])