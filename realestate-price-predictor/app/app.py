# TODO:
# 1.) AAA - Auth (credentials), Authorization (permissions), Access (sessions and cookies)
# 2.) UI validation
# 3.) ORM - insert new props
# 4.) improve model accuracy
# 5.) UI toolkit (i.e. material UI)
# 6.) build process - installer script(s), frontend bundler (webpack), hotreload
# 7.) tests - unit, automated and integration (i.e. API) tests

from flask import Flask, render_template, jsonify, g, request, abort
from util import debug, exit
import sqlite3 # ships with pythong standard library
import csv
import os
from sklearn.externals import joblib
import csv
import pandas as pd
import json

DATABASE = './properties.sqlite'
app = Flask(__name__)

@app.route('/')
def indexHandler():
    context = {
        'title': 'The good life!',
        'body': render_template('index.j2', test='foobar'),
    }
    return render_template('layout.j2', **context)

@app.route('/api/properties')
def propertiesApiHandler():
    properties = [{'ID': prop[0], 'LotArea': prop[1], 'YearBuilt': prop[2], '1stFlrSF': prop[3], '2ndFlrSF': prop[4], 'FullBath': prop[5], 'BedroomAbvGr': prop[6], 'TotRmsAbvGrd': prop[7]} for prop in get_all_properties()]
    return jsonify(properties)

@app.route('/api/predict', methods=['POST'])
def predictionApiHandler():
    if request.method != 'POST':
        return render_template('error.j2', {'status': 405, 'message': 'Method not allowed'})

    # load model
    model = joblib.load('../model/properties-model.pkl')

    # prepare data for prediction
    props = json.loads(request.data)
    if not any(props[0].values()):
        return abort(400, 'Bad request')
    features = pd.DataFrame(props)

    # infer (make a prediction)
    predicted_home_prices = model.predict(features)

    return jsonify({'price': predicted_home_prices[0]})

def initDB():
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()

    try:
        cur.execute('''
                        CREATE TABLE properties(
                        ID INTEGER PRIMARY KEY ASC AUTOINCREMENT,
                        LotArea INTEGER,
                        YearBuilt INTEGER,
                        "1stFlrSF" INTEGER,
                        "2ndFlrSF" INTEGER,
                        FullBath INTEGER,
                        BedroomAbvGr INTEGER,
                        TotRmsAbvGrd INTEGER)
                    ''')
        conn.commit()
        
        # seed DB
        with open('../input/train.csv','r') as file:
            props = csv.DictReader(file)
            to_db = [(prop['LotArea'], prop['YearBuilt'], prop['1stFlrSF'], prop['2ndFlrSF'], prop['FullBath'], prop['BedroomAbvGr'], prop['TotRmsAbvGrd']) for prop in props]
        cur.executemany('''INSERT INTO properties (LotArea, YearBuilt, "1stFlrSF", "2ndFlrSF", FullBath, BedroomAbvGr, TotRmsAbvGrd) VALUES (?, ?, ?, ?, ?, ?, ?);''', to_db)
        conn.commit()
    except sqlite3.OperationalError as e:
        app.logger.warning(e) # table already created and seeded
    except Exception as e:
        app.logger.error(e)
    
    conn.close()

def remove_table():
    os.remove("./properties.sqlite")

def get_all_properties():
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()
    cur.execute("SELECT * FROM properties")
    conn.commit()
    return cur.fetchall()

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_properties', None)
    if db is not None:
        db.close()

initDB()
