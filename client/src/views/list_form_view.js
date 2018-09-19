const PubSub = require('../helpers/pub_sub.js')

const ListFormView = function (form) {
  this.form = form;
};

ListFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

ListFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newItem = this.createItem(evt.target);
  PubSub.publish('ListFormView:item-submitted', newItem);
  evt.target.reset();
};

ListFormView.prototype.createItem = function (form) {
  const newItem = {
    name: form.name.value,
    status: false
  };

  return newItem;
};

module.exports = ListFormView;
