from flask import Flask
from flask import request
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
from flask import Response
app=Flask(__name__)
app.config["MONGO_URI"]="mongodb://localhost:27017/circle"
mongo=PyMongo(app)


@app.route("/addUser", methods=["POST"])
def add_user():
    count=0
    phone_count=0
    Array={}
    for x in range(1,100):
        Array["_id"] = ObjectId()
        #  print(x)
        count=count+1
        Array["name"]=request.json["name"]+str(count)
        phone_count=phone_count+2
        Array["phone"]=request.json["phone"]+str(phone_count)
        # #     print(id)
        mongo.db.users.insert(Array)
    return dumps("success")

@app.route("/blogs", methods=["POST"])
def blog():
    for x in range(1,100):
        id = ObjectId()
        # userId=request.json["userId"]
        #  print(x)
        head=request.json["head"]
        text=request.json["text"]
        # #     print(id)
        mongo.db.blogs.insert({"_id":id,"head":head+str(x),"text":text+str(x+1)})
    return dumps("success")

@app.route("/blogs/<ObjectId:blogId>/comments/<ObjectId:userId>", methods=["GET","POST"])
def blog_comments(blogId,userId):
    comment_store=request.json["comment"]
    mongo.db.blogs.update({"_id":blogId},{"$push":{"comment":{"comment_store":comment_store,"userId":userId}}})
    return dumps(comment_store)

@app.route("/blogs/<ObjectId:blogId>/comments/<ObjectId:userId>", methods=["GET","POST"])
def blog_comments(blogId,userId):
    comment_store=request.json["comment"]
    mongo.db.blogs.update({"_id":blogId},{"$push":{"comment":{"comment_store":comment_store,"userId":userId}}})
    return dumps(comment_store)

@app.route("/users/<ObjectId:userId>/level", methods=["GET"])
def blog_comments(userId):
    # if levelNo==1:
    data=mongo.db.blogs.find({"comment[0].userId":userId})

    # mongo.db.blogs.update({"_id":blogId},{"$push":{"comment":{"comment_store":comment_store,"userId":userId}}})
    return dumps(data)