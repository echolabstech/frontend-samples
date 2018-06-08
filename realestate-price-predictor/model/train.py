import pandas as pd
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.externals import joblib

# train model
main_file_path = './train.csv'
data = pd.read_csv(main_file_path)

columns_of_interest = ['SalePrice']
y = data[columns_of_interest] # y^

predictors = ['LotArea', 'YearBuilt', '1stFlrSF', '2ndFlrSF', 'FullBath', 'BedroomAbvGr', 'TotRmsAbvGrd']
x = data[predictors]

model = DecisionTreeRegressor()
model.fit(x, y)

# save model for later
joblib.dump(model, 'properties-model.pkl')

# infer (make a prediction)
predicted_home_prices = model.predict(x)

# TODO: score prediction accuracy of various algorithms
mean_absolute_error(y, predicted_home_prices)
