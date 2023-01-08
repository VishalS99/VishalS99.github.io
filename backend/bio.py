import json
import os
from flask import redirect, request, Blueprint, Response
import requests
from datetime import datetime
from utils import get_connection
from model import Bio


bio_api = Blueprint('bio_api', __name__)
conn = get_connection()
db = ""


@bio_api.route("/health", methods = ["GET"])
def test():
    t = str(datetime.now())
    msg = {
        "name": "Sauron-Bio-Service",
        "health": "Excellent",
        "at time": t
    }
    result = Response(json.dumps(msg), status=200, content_type="application/json")
    return result

@bio_api.route("/get/all", methods = ["GET"])
def get_bio():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM {}".format(db))
    query_result = cursor.fetchall()

    if query_result is None:
        return "No bio exists", 404
    
    return {"data": Bio(*query_result[0].values()).__dict__}


# TODO: ADD and UPDATE
@bio_api.route("/add", methods = ["POST"])
def add_bio():
    pass


@bio_api.route("/update", methods = ["PUT"])
def update_bio(id):
    pass

@bio_api.route("/remove", methods = ["DELETE"])
def remove_bio():
    cursor = conn.cursor()
    cursor.execute("DELETE FROM {}".format(db))
    query_result = cursor.fetchall()

    if len(query_result) == 0:
        return "Deleted", 200
    
    return None

