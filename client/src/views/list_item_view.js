const PubSub = require('../helpers/pub_sub.js');

const ListItemView = function (container) {
  this.container = container;
};

ListItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.id = 'item';

  const name = this.createName(item.name);
  itemContainer.appendChild(name);

  const status = this.createStatus(item.status);
  itemContainer.appendChild(name);

  const statusButton = this.createStatusButton(item._id);
  itemContainer.appendChild(statusButton);

  const deleteButton = this.createDeleteButton(item._id);
  itemContainer.appendChild(deleteButton);

  this.container.appendChild(itemContainer);
};

ListItemView.prototype.createName = function (textContent) {
  const name = document.createElement('p');
  name.textContent = textContent;
  return name;
};

ListItemView.prototype.createStatus = function (textContent) {
  const status = document.createElement('p');
  status.textContent = textContent;
  return status;
};

ListItemView.prototype.createStatusButton = function (itemId) {
  const button = document.createElement('button');
  button.classList.add('status-button');
  button.value = itemId;
  button.textContent = "Change Status";
  button.addEventListener('click', (evt) => {
    PubSub.publish('ListItemView:status-changed', evt.target.value);
  });
  return button;
};

ListItemView.prototype.createDeleteButton = function (itemId) {
  const button = document.createElement('delete-button');
  button.classList.add('button');
  button.value = itemId;
  button.textContent = "Delete";
  button.addEventListener('click', (evt) => {
    PubSub.publish('ListItemView:item-deleted', evt.target.value);
  });
  return button;
};

module.exports = ListItemView;
