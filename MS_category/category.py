from flask import Flask, request, json, Response
from pymongo import MongoClient
import logging as log
from bson.objectid import ObjectId
import pika
from flask_eureka import Eureka
import os

app = Flask(__name__)
app.config['EUREKA_SERVICE_URL'] = "http://"+os.environ.get("EUREKA_HOST")+":"+os.environ.get("EUREKA_PORT")
app.config['EUREKA_INSTANCE_HOSTNAME'] = os.environ.get("HOSTNAME")
app.config['EUREKA_INSTANCE_PORT'] = os.environ.get("HOST_PORT")
app.config['EUREKA_SERVICE_PATH']="/eureka/apps"
eureka = Eureka(app)
eureka.register_service(name="CATEGORYSERVICE",use_dns=False,vip_address="CATEGORYSERVICE",instance_id="CATEGORYSERVICE")
class Encoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        else:
            return obj
class MongoAPI:
    def __init__(self, data):
        log.basicConfig(level=log.DEBUG, format='%(asctime)s %(levelname)s:\n%(message)s\n')
        #self.client = MongoClient("mongodb://localhost:27017/")  # When only Mongo DB is running on Docker.
        self.client = MongoClient("mongodb://"+os.environ.get("DATABASE")+":"+os.environ.get("DBPORT"))      # When both Mongo and This application is running on
                                               # Docker and we are using Docker Compose
#+os.environ.get("DATABASE")+":"+os.environ.get("PORT")
        database = 'delivs-market-orderdb'
        collection = 'orders'
        cursor = self.client[database]
        self.collection = cursor[collection]
        self.data = data

    def read(self):
        log.info('Reading All Data')		
        filt = self.data
        documents = self.collection.find(filt)
        output = [{item: data[item] for item in data } for data in documents]
        return output
    def read_one(self, data):
        log.info('Reading one Data')
        documents = self.collection.find_one({'_id': ObjectId(data)})
        #output = [{item: data[item] for item in data } for data in documents]
        return documents

    def write(self, data):
        log.info('Writing Data')
        new_document = data
        response = self.collection.insert_one(new_document)
        output = {'Status': 'Successfully Inserted',
                  'Document_ID': str(response.inserted_id)}
        return output

    def update_one(self):
        log.info('Updating Data')
        filt = {'_id': ObjectId(self.data['_id'])}
        updated_data = {"$set": self.data['data']}
        response = self.collection.update_one(filt, updated_data)
        output = {'Status': 'Successfully Updated' if response.modified_count > 0 else "Nothing was updated."}
        return output
		
    def update(self):
        log.info('Updating Data')
        filt = self.data['filter']
        updated_data = {"$set": self.data['data']}
        response = self.collection.update_one(filt, updated_data)
        output = {'Status': 'Successfully Updated' if response.modified_count > 0 else "Nothing was updated."}
        return output

    def delete(self, data):
        log.info('Deleting Data')
        filt = {'_id': ObjectId(self.data['_id'])}
        response = self.collection.delete_one(filt)
        output = {'Status': 'Successfully Deleted' if response.deleted_count > 0 else "Document not found."}
        return output


@app.route('/')
def base():
    log.info(os.environ.get("DATABASE"))
    return Response(response=json.dumps({"Status": "UP"},cls=Encoder),
                    status=200,
                    mimetype='application/json')


@app.route('/category', methods=['GET'])
def mongo_read():
    data = request.args
    obj1 = MongoAPI(data)
    response = obj1.read()
    return Response(response=json.dumps(response, cls=Encoder),
                    status=200,
                    mimetype='application/json')
@app.route('/categoryById', methods=['GET'])
def mongo_read_one():
    data = request.args.get("id")

    obj1 = MongoAPI(data)
    response = obj1.read_one(data)
    return Response(response=json.dumps(response, cls=Encoder),
                    status=200,
                    mimetype='application/json')

@app.route('/category', methods=['POST'])
def mongo_write():
    data = request.json
    if data is None or data == {}:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.write(data)
    return Response(response=json.dumps(response, cls=Encoder),
                    status=200,
                    mimetype='application/json')

@app.route('/category', methods=['PUT'])
def mongo_update_one():
    data = request.json
    if data is None or data == {}:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.update_one()
    return Response(response=json.dumps(response, cls=Encoder),
                    status=200,
                    mimetype='application/json')
@app.route('/categoryByFilter', methods=['PUT'])
def mongo_update():
    data = request.json
    if data is None or data == {} or 'filter' not in data:
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.update()
    return Response(response=json.dumps(response, cls=Encoder),
                    status=200,
                    mimetype='application/json')


@app.route('/category', methods=['DELETE'])
def mongo_delete():
    data = request.json
    if data is None or data == {} :
        return Response(response=json.dumps({"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.delete(data)
    return Response(response=json.dumps(response, cls=Encoder),
                    status=200,
                    mimetype='application/json')

#@app.route('/add-job/<cmd>')
#def add(cmd):
#    credentials = pika.PlainCredentials('guest', 'guest')
 #   connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost',port='5672',credentials=credentials))
  #  channel = connection.channel()
   # channel.queue_declare(queue='task_queue', durable=True)
    #channel.basic_publish(
    #    exchange='',
    #    routing_key='task_queue',
     #   body=cmd,
      #  properties=pika.BasicProperties(
       #     delivery_mode=2,  # make message persistent
        #))
    #connection.close()
    #return " [x] Sent: %s" % cmd


if __name__ == '__main__':
    app.run(debug=True, port=os.environ.get("HOST_PORT"), host='0.0.0.0')


