const ListFormView = require('./views/list_form_view.js')
const ListView = require('./views/list_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const listForm = document.querySelector('form#list-form');
  const listFormView = new ListFormView(listForm);
  listFormView.bindEvents();

  const listContainer = document.querySelector('div#list');
  const listView = new ListView(listContainer);
  listView.bindEvents();

  const listUrl = 'http://localhost:3000/api/activities';
  const bucketList = new BucketList(listUrl);
  bucketList.bindEvents();
  bucketList.getData();
});
