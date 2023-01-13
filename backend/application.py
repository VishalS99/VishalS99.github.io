import json
import os
from flask import redirect, Flask, session, g, request, jsonify, Response, url_for
from flask_session import Session
from datetime import timedelta
from flask_cors import CORS
import requests
from datetime import datetime
from utils import get_connection, config_app

sauron = Flask(__name__)
CORS(sauron)
path = "config.json"

sauron = config_app(sauron, path=path)
conn = get_connection()
Session(sauron)


from experience import experience_api
from bio import bio_api
from projects import projects_api
from photography import photo_api
from links import link_api

sauron.register_blueprint(experience_api, url_prefix='/sauron/backend/exp')
sauron.register_blueprint(bio_api, url_prefix='/sauron/backend/bio')
sauron.register_blueprint(projects_api, url_prefix='/sauron/backend/proj')
sauron.register_blueprint(photo_api, url_prefix='/sauron/backend/photo')
sauron.register_blueprint(link_api, url_prefix='/sauron/backend/links')


@sauron.route("/sauron/health", methods = ["GET"])
def health():
    t = str(datetime.now())
    msg = {
        "name": "Sauron-Service",
        "health": "Excellent",
        "at time": t
    }
    session.clear()
    result = Response(json.dumps(msg), status=200, content_type="application/json")
    return result


@sauron.route("/sauron/login", methods = ["POST"])
def login():
    pass

sauron.route("/sauron/logout", methods = ["GET"])
def logout():
    pass


if __name__ == "__main__":
    sauron.run('0.0.0.0', port = 5011, debug=True)