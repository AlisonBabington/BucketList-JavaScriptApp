const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url) {
  this.url = url;
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('ListItemView:item-deleted', (evt) => {
    this.deleteItem(evt.detail);
  });

  PubSub.subscribe('ListItemView:status-changed', (evt) => {
    this.changeItemStatus(evt.detail);
  });

  PubSub.subscribe('ListFormView:item-submitted', (evt) => {
    this.postItem(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((list) => {
      PubSub.publish('BucketList:data-loaded', list);
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function (item) {
  const request = new Request(this.url);
  request.post(item)
    .then((list) => {
      PubSub.publish('BucketList:data-loaded', list);
    })
    .catch(console.error);
};

BucketList.prototype.deleteItem = function (itemId) {
  const request = new Request(this.url);
  request.delete(itemId)
    .then((list) => {
      PubSub.publish('BucketList:data-loaded', list);
    })
    .catch(console.error);
};

BucketList.prototype.changeItemStatus = function (itemId) {
  const request = new Request(this.url);
  request.put(itemId)
    .then((list) => {
      PubSub.publish('BucketList:data-loaded', list);
    })
    .catch(console.error);
};

module.exports = BucketList;
