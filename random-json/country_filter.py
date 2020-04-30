import json
from pprint import pprint

def get_country_by_climate():
	with open('countries-by-climate.json') as file:
		countries_by_climate = json.load(file)
	return countries_by_climate

def get_country_by_visa_free():
	with open('visa-free-countries-for-chinese.json') as file:
		no_visa_countries = json.load(file) # countries chinese citizens can enter w/o visa
	country_names = []
	for continent in no_visa_countries:
		for country in continent['flags']:
			country_names.append(country['name'])
	return country_names

pprint(get_country_by_climate())
