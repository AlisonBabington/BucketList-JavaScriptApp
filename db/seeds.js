use bucket_list;
db.dropDatabase();

db.activities.insertMany([
{
  item: "Climb Everest",
  status: "To Do"
},{
  item: "Visit Macchu Picchu",
  status: "To Do"
}, {
  item: "Go Skydiving",
  status: "To Do"
}

]);
