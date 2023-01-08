import traceback
import pymysql
import os
from datetime import timedelta
import json

def config_app(app, path):
    try:
        with open(path) as config_file:
            data = json.load(config_file)
            for keys in data.keys():
                os.environ[keys] = data[keys]
        app.secret_key = os.environ.get("SECRET") or os.urandom(24)
        app.config["SESSION_TYPE"] = os.environ.get("SESSION_TYPE", None)
        app.config["SESSION_PERMANENT"] = True if os.environ.get("SESSION_PERMANENT", None) == "True" else False
        app.config["SESSION_USE_SIGNER"] = True if os.environ.get("SESSION_USE_SIGNER", None) == "True" else False
        app.permanent_session_lifetime = timedelta(days = 10) 
    except:
        print("\nxx Config doesnt exist\n")
        exit(1)
    return app


def get_connection():
    usr = os.environ.get("DBUSER")
    pw = os.environ.get("DBPW")
    h = os.environ.get("DBHOST")
    # db = "users_db"
    conn = pymysql.connect(
        user=usr,
        password=pw,
        host=h,
        # db=db,
        cursorclass=pymysql.cursors.DictCursor,
        autocommit=True
    )
    return conn