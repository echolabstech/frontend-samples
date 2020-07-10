import json
from pprint import pprint
import argparse
from pathlib import Path

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
			country_names.append(str(country['name']))
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

def get_countries_by_infrastructure_rank():
	countries_by_infrastructure_rank = {}
	with open('countries-by-infrastructure-rank.json') as file:
		for country in json.load(file):
			countries_by_infrastructure_rank[country['Country']] = country['Infrastructure']
	return countries_by_infrastructure_rank

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
		if country['name'] in countries:
			if country['medianHouseholdIncome'] <= annual_expenses_usd:
				affordable_countries[country['name']] = countries[country['name']]
	return affordable_countries

def filter_countries_by_infrastructure_rank(countries):
	min_infrastructure_rank = 2
	countries_with_high_infrastructure_rank = {}
	countries_by_infrastructure_rank = get_countries_by_infrastructure_rank()
	for country in countries:
		if country in countries_by_infrastructure_rank:
			if countries_by_infrastructure_rank[country] >= min_infrastructure_rank:
				countries_with_high_infrastructure_rank[country] = countries[country]
	return countries_with_high_infrastructure_rank

def main():
	arg_parser = argparse.ArgumentParser(description='filter countries to visit',
									prog='country filter')
	arg_parser.add_argument('--country', type=str, nargs=1, metavar='#', help='select your home country')
	arg_parser.add_argument('--climate', type=str, nargs='+', help='select your desired climate(s)')
	arg_parser.add_argument('--version', action='version', version='%(prog)s 1.0.0')
	kwargs = vars(arg_parser.parse_args())
	home_country = kwargs['country'][0]
	countries = get_countries()
	countries = filter_countries_by_median_income(countries)
	countries = filter_countries_by_infrastructure_rank(countries)
	if kwargs['climate']:
		countries = filter_countries_by_climate(countries, kwargs['climate'])
		pprint(countries)
		pprint(len(countries))
		print('Country choices above are based on your home country '
					'%s, affordability, reliable internet and desired '
					'climates:' % home_country, ', '.join(kwargs['climate']))
	else:
		pprint(countries)
		pprint(len(countries))
		print('Country choices above are based on your home country '
					'%s, affordability and reliable internet')

if __name__ == '__main__':
	main()
