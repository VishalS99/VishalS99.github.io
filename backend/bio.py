import json
from flask import Blueprint, Response, request
import requests
from datetime import datetime
from utils import get_connection
from model import Bio
import uuid

bio_api = Blueprint('bio_api', __name__)
conn = get_connection()
table = "Bio"
URL = "http://localhost:5011/"


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

@bio_api.route("/get", methods = ["GET"])
def get_bio():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM {}".format(table))
    query_result = cursor.fetchall()

    if len(query_result) == 0:
        return "No bio exists", 404
    
    return {"data": Bio(*query_result[0].values()).__dict__}


@bio_api.route("/add", methods = ["POST"])
def add_bio():
    data = request.json
    msg = requests.get(URL + "/sauron/backend/bio/get")
    if msg.status_code == 200:
        return "Bio already exists", 400
    try:    
        id = str(uuid.uuid4())
        query = "INSERT INTO {} VALUES ('{}', '{}')".format(table, id, data['data'])
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()
    except:
        conn.rollback()
        return "Failed to add bio", 500
    return "Added bio", 200


@bio_api.route("/update", methods = ["PUT"])
def update_bio():
    data = request.json
    msg = requests.get(URL + "/sauron/backend/bio/get")
    if msg.status_code == 400:
        return "Bio does not exist", 400
    id = msg.json()['data']['id']
    try:
        query = "UPDATE {} SET bio = '{}' where id = '{}'".format(table, data['data'], id)
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()
    except:
        conn.rollback()
        return "Failed to update bio", 500

    return "Updated bio", 200


@bio_api.route("/delete", methods = ["DELETE"])
def remove_bio():
    cursor = conn.cursor()
    cursor.execute("DELETE FROM {}".format(table))
    query_result = cursor.fetchall()

    if len(query_result) == 0:
        return "Deleted", 200
    
    return None

