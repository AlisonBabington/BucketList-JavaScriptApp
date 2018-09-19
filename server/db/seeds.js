use bucket_list;
db.dropDatabase();

db.activities.insertMany([
{
  name: "Climb Everest",
  status: false
},{
  name: "Visit Macchu Picchu",
  status: false
}, {
  name: "Go Skydiving",
  status: false
}

]);
