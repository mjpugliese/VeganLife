const { User } = require("../db/models/index");

const UserController = {
  findAll(req, res, next) {
    User.find({ active: true })
      .then((users) => res.send(users))
      .catch((err) => next(err));
  },
  create(req, res, next) {
    User.findOne({ email: req.body.email, active: false })
      .then((user) => {
        return user
          ? User.findByIdAndUpdate(
              user._id,
              { ...req.body, active: true },
              { new: true }
            )
          : User.create(req.body);
      })
      .then((user) => res.status(201).send(user))
      .catch((err) => next(err));
  },
  update(req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updated) => {
        res.status(200).send(updated);
      })
      .catch((err) => next(err));
  },
  findById(req, res, next) {
    User.findById({ _id: req.params.id, active: true })
      .then((user) => res.send(user))
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    User.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
      .then((user) => res.send(user))
      .catch((err) => next(err));
  },
};

module.exports = UserController;