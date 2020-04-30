import json

with open('countries-by-climate.json') as file:
	countries_by_climate = json.load(file)

with open('visa-free-countries-for-chinese.json') as file:
	no_visa_countries = json.load(file) # countries chinese citizens can enter w/o visa

from pprint import pprint
for continent in no_visa_countries:
	for country in continent['flags']:
		pprint(country['name'])
