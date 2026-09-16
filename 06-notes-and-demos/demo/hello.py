from pymongo import MongoClient

uri = "YOUR_MONGODB_URL"

client = MongoClient(uri)

db = client["smart_planner"]
collection = db["smart_planner"]

collection.insert_one({
    "status": "working",
    "from": "python"
})

print("Inserted successfully 🎉")

