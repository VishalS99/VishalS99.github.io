import json
import os
from flask import redirect, request, Blueprint, Response
from flask_session import Session
from flask_cors import CORS
import requests
from datetime import datetime
from utils import get_connection


projects_api = Blueprint('projects_api', __name__)
conn = get_connection()

@projects_api.route("/health", methods = ["GET"])
def test():
    t = str(datetime.now())
    msg = {
        "name": "Sauron-Projects-Service",
        "health": "Excellent",
        "at time": t
    }
    result = Response(json.dumps(msg), status=200, content_type="application/json")
    return result



