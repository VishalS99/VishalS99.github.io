import json
import os
from flask import redirect, request, Blueprint, Response
from flask_session import Session
from flask_cors import CORS
import requests
from datetime import datetime
from utils import get_connection
from model import Photo


photo_api = Blueprint('photo_api', __name__)
conn = get_connection()
db = ""

@photo_api.route("/health", methods = ["GET"])
def test():
    t = str(datetime.now())
    msg = {
        "name": "Sauron-Photo-Service",
        "health": "Excellent",
        "at time": t
    }
    result = Response(json.dumps(msg), status=200, content_type="application/json")
    return result



@photo_api.route("/get/all", methods = ["GET"])
def get_all_photos():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM {}".format(db))
    query_result = cursor.fetchall()

    if query_result is None:
        return "No photo exists", 404
    
    data = []

    for exp in query_result:
        data.append({"data": Photo(*exp.values()).__dict__})
    return data

@photo_api.route("/get/<id>", methods = ["GET"])
def get_photo_by_id(id):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM {} where id={}".format(db, id))
    query_result = cursor.fetchone()

    if query_result is None:
        return "Photo does not exist", 404
    
    return {"data": Photo(*query_result.values()).__dict__}



# TODO: ADD
@photo_api.route("/add/<id>", methods = ["POST"])
def add_photo(id):
    pass

@photo_api.route("/remove/all", methods = ["DELETE"])
def remove_all_photos():
    cursor = conn.cursor()
    cursor.execute("DELETE FROM {}".format(db))
    query_result = cursor.fetchall()

    if len(query_result) == 0:
        return "Deleted", 200
    
    return None

@photo_api.route("/remove/<id>", methods = ["DELETE"])
def remove_photo_by_id(id):
    cursor = conn.cursor()
    msg = requests.get("/backend/photo/get/{}".format(id))
    if msg.status_code == 404: 
        return msg.text, 404
    cursor.execute("DELETE FROM {} where id={}".format(db, id))
    query_result = cursor.fetchone()

    if len(query_result) == 0:
        return id, 200
    
    return None

