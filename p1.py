import random
import pandas as pd

#generate set of 2d trips

sizeT = 10
T = [
		((random.randint(-100,100),random.randint(-100,100)),(random.randint(-100,100),random.randint(-100,100))) for z in range(sizeT)
	]

# Helper function to compute distance between two points 
def dist(a,b): return ((b[0]-a[0])**2 + (b[1]-a[1])**2)**(0.5)

# Compute the base value for  trip distance without any bitrips.
trip_distance = [dist(b,a) for a,b in T]
total_distance = sum(trip_distance)

# Helper function to compute bitrip distance
def bidist(a,b,c,d):return dist(a,c) + dist(c,b) + dist(b,d)

# Main

# Compute every Pair of trips that is cheaper as a bitrip and 
# how much cheaper, in terms of distance travelled.  
cheap_sheet = pd.DataFrame(columns = ['TripA','TripB','diff'])
uk = 0;

# Order is important, A->B + C->D can be different from C->D + A->B
# Step 1 : O(N^2) complexity (for N = len(T))
for ui, (ai, bi) in enumerate(T):
	for uj, (aj, bj) in enumerate(T):
		if(ui != uj):
			diff = bidist(ai,bi,aj,bj) - (dist(ai,bj)+dist(aj,bj))
			if diff < 0 :
				cheap_sheet.loc[uk] = [ui,uj,diff]
				uk += 1
				#print ui, uj, diff

print cheap_sheet

for row in range(sizeT):
	print row, cheap_sheet[cheap_sheet.TripA != row][cheap_sheet.TripB != row]

'''
for ui, (route, group) in enumerate(cheap_sheet.groupby('TripA')):
	discount_routes = cheap_sheet['TripA'].unique()
	discount_routes.remove(route)
	for uj, (ua, ub) in group:
		#apply discount

'''


