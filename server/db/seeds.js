use bucket_list;
db.dropDatabase();

db.activities.insertMany([
{
  name: "Climb Everest",
  status: "To Do"
},{
  name: "Visit Macchu Picchu",
  status: "To Do"
}, {
  name: "Go Skydiving",
  status: "To Do"
}

]);
