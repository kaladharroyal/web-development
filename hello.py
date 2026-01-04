from pymongo import MongoClient

uri = "mongodb+srv://kaladharroyal_db_user:hCPer7SFX6Qw6WXq@cluster0.4vbul3w.mongodb.net/?appName=Cluster0"

client = MongoClient(uri)

db = client["smart_planner"]
collection = db["smart_planner"]

collection.insert_one({
    "status": "working",
    "from": "python"
})

print("Inserted successfully 🎉")

