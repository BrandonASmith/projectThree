var User = require('../models/user.js');

// GET /api
function getIndex(request, response) {
  response.json({message: "blank"});
};

// GET /api/new
function getNew(request, response) {
  response.json({message: "blank"});
};

// POST /api/new
function getNew(request, response) {
  response.json({message: "blank"});
};

// GET /api/:id
function getAPI(request, response) {
  response.json({message: "blank"});
};

// GET /api/:id/edit
function getEdit(request, response) {
  response.json({message: "blank"});
};

// PUT /api/:id/edit
function putAPI(request, response) {
  response.json({message: "blank"});
};

// DELETE /api/:id
function deleteAPI(request, response) {
  response.json({message: "blank"});
};

module.exports = {
  getIndex: getIndex,
  getNew: getNew,
  postAPI: postAPI,
  getAPI: getAPI,
  getEdit: getEdit,
  putAPI: putAPI,
  deleteAPI: deleteAPI
};