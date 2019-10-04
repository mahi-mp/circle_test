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

@app.route("/show")
def show_user():
    data=mongo.db.users.find()
    print(data)
    return dumps(data)

@app.route("/showblog")
def show_blog():
    data=mongo.db.blogs.find()
    print(data)
    return dumps(data)

@app.route("/blogcomments")
def show_blogcomments():
    data=mongo.db.blog_comment.find()
    print(data)
    return dumps(data)

@app.route("/addUser", methods=["POST"])
def add_user():
    id = ObjectId()
    # userId=request.json["userId"]
    #  print(x)
    name=request.json["name"]
    phone=request.json["phone"]
    # #     print(id)
    mongo.db.users.insert({"_id":id,"name":name,"phone":phone})
    return dumps([id,name,phone])

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

@app.route("/add_blog/<ObjectId:userId>", methods=["POST"])
def addblog(userId):
    id = ObjectId()
    head=request.json["head"]
    text=request.json["text"]
    mongo.db.blogs.insert({"_id":id,"head":head,"text":text,"userId":userId})
    return dumps("success")

# @app.route("/blogs/<ObjectId:blogId>/comments/<ObjectId:userId>", methods=["GET","POST"])
# def blog_comments(blogId,userId):
#     comment_store=request.json["comment"]
#     mongo.db.blogs.update({"_id":blogId},{"$push":{"comment":{"comment_store":comment_store,"userId":userId}}})
#     return dumps(comment_store)

# @app.route("/blogs/<ObjectId:blogId>/comments/<ObjectId:userId>", methods=["GET","POST"])
# def blog_comments(blogId,userId):
#     comment_store=request.json["comment"]
#     mongo.db.blogs.update({"_id":blogId},{"$push":{"comment":{"comment_store":comment_store,"userId":userId}}})
#     return dumps(comment_store)

# @app.route("/users/<ObjectId:userId>", methods=["GET"])
# def blog_comments(userId):
#     # if levelNo==1:
#     data=mongo.db.blog_comment.find({"comment.user_id":userId})
#     for i in data:
#         for a in i:
#             print(a)
#     # mongo.db.blogs.update({"_id":blogId},{"$push":{"comment":{"comment_store":comment_store,"userId":userId}}})
#     return dumps(data)

# @app.route("/users/<ObjectId:userId>/level>", methods=["GET"])
# def blog_comments(userId):
#     data=mongo.db.blogs.find({"_id":userId})
#     # mongo.db.blogs.update({"_id":blogId},{"$push":{"comment":{"comment_store":comment_store,"userId":userId}}})
#     return dumps(data)