# Direct Method
# Determine all combinations, compute the total distance for each,
# Take the combination with the smallest distance. 
# Complexity - Terrible
# Speed - Also bad
# By Alex Vyskocil

import random

sizeA  = 5 # Number of stops along first path
sizeB = 4 # Number of stops along second path

# Genenerate a random set of stops for each path
validA = [(random.randint(-100,100),random.randint(-100,100)) for a in range (sizeA)]
validB = [(random.randint(-100,100),random.randint(-100,100)) for a in range (sizeB)]

# Define helper function for computing distance between 2d points
def dist(a,b): return ((b[0]-a[0])**2 + (b[1]-a[1])**2)**(0.5)


bad_rec = [] # Method Output (Bad Recursion)

# Permutation Zip
# Compute all permutations of the combine list (ListA + ListB)
# while preserving the order of each list. 
def perm_zip(listA, listB, level = 0, index = 0, current = []):
	# Index is the position along the base of the tree
	# level is the current depth in the tree
	# End Step
	if not listA: # If list A is empty, add the remainder of listB
		current = current + listB
		bad_rec.append(current)
	elif not listB: # If listB is empty, add the remainder of listA
		current = current + listA
		bad_rec.append(current)
	else:
		# Recursive Step
		# Add from listA 
		perm_zip(listA[1:], listB, level+1, index, current + [listA[0]])
		# Add from listB
		perm_zip(listA, listB[1:], level+1, index + level, current + [listB[0]])


# Main
perm_zip(validA, validB)

print bad_rec

# For each rolling pair in the list of permuations compute the total disance
# of the travel path. Do this for all permutations/
totals = [sum([dist(a,b) for a,b in zip(perm[:-1],perm[1:])]) for perm in bad_rec]
print totals

# Output the best way to combine two lists of stops minimizing the total travel distance.
print bad_rec[totals.index(min(totals))]




