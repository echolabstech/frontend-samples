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

def get_countries():
	countries_by_climate = get_country_by_climate()
	no_visa_countries = get_country_by_visa_free()
	countries = {}
	for country in no_visa_countries:
		if country.lower() in [c.lower() for c in countries_by_climate]:
			countries[country] = countries_by_climate[country]
	return countries

def get_countries_by_median_income():
	with open('median-income-by-country.json') as file:
		countries_by_median_income = json.load(file)
	return countries_by_median_income

def filter_countries_by_climate(countries, climates):
	matching_countries = {}
	for country in countries:
		if any(climate.lower() in countries[country].lower() for climate in climates):
			matching_countries[country] = countries[country]
	return matching_countries

def filter_countries_by_median_income(countries):
	exchange_rate_rmb_to_usd = 7.06
	monthly_expenses_usd = 15000 / exchange_rate_rmb_to_usd
	annual_expenses_usd = monthly_expenses_usd * 12
	countries_by_median_income = get_countries_by_median_income()
	affordable_countries = {}
	for country in countries_by_median_income['data']:
		if country['medianHouseholdIncome'] <= annual_expenses_usd:
			if country['name'] in countries:
				affordable_countries[country['name']] = countries[country['name']]
	return affordable_countries

countries = get_countries()
climates = ['tropical', 'mediterranean', 'hot', 'humid']
tropical_countries = filter_countries_by_climate(countries, climates)

affordable_countries = filter_countries_by_median_income(tropical_countries)
pprint(affordable_countries)
pprint(len(affordable_countries))
