import json

with open('countries-by-climate.json') as file:
	countriesByClimate = json.load(file)

with open('visa-free-countries-for-chinese.json') as file:
	noVisaCountries = json.load(file) # countries chinese citizens can enter w/o visa

print(noVisaCountries)