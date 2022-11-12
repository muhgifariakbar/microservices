const { User, Employee } = require("../models");
const { createToken } = require("../helper/jwt");
const { comparePassword } = require("../helper/bcrypt");
const { Sequelize, Op } = require("sequelize");

class Controller {
  static async login(req, res, next) {
    const { email, password } = req.body;
    // console.log(req.body);
    try {
      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: `invalid_email/password` };
      }
      const passwordCheck = comparePassword(password, findUser.password);
      if (!passwordCheck) {
        throw { name: `invalid_email/password` };
      }
      const payload = {
        id: findUser.id,
      };
      const access_token = createToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    console.log("amasukk");
    try {
      let { name, salary, currency, on_contract, department, sub_department } =
        req.body;

      let data = await Employee.create({
        name,
        salary,
        currency,
        on_contract,
        department,
        sub_department,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async deleteEmployee(req, res, next) {
    const { id } = req.params;
    try {
      let findId = await Employee.findByPk(+id);
      if (!findId) {
        throw { name: "not found" };
      }
      let data = await Employee.destroy({ where: { id } });
      res
        .status(200)
        .json({ message: `employee with id :${id} success to delete` });
    } catch (error) {
      next(error);
    }
  }
  static async dataPerYear(req, res, next) {
    try {
      let dataMax = await Employee.findAll({
        attributes: [[Sequelize.fn("max", Sequelize.col("salary")), "max"]],
        raw: true,
      });
      let dataMin = await Employee.findAll({
        attributes: [[Sequelize.fn("min", Sequelize.col("salary")), "min"]],
        raw: true,
      });
      let dataMean = await Employee.findAll({
        attributes: [[Sequelize.fn("avg", Sequelize.col("salary")), "AVG"]],
        raw: true,
      });
      res.status(200).json({ dataMax, dataMin, dataMean });
    } catch (error) {
      next(error);
    }
  }
  static async datapersatisfaction(req, res, next) {
    try {
      let dataMax = await Employee.findAll({
        where: { on_contract: true },
        attributes: [[Sequelize.fn("max", Sequelize.col("salary")), "max"]],
        raw: true,
      });
      let dataMin = await Employee.findAll({
        where: { on_contract: true },
        attributes: [[Sequelize.fn("min", Sequelize.col("salary")), "min"]],
        raw: true,
      });
      let dataMean = await Employee.findAll({
        where: { on_contract: true },
        attributes: [[Sequelize.fn("avg", Sequelize.col("salary")), "AVG"]],
        raw: true,
      });
      res.status(200).json({ dataMax, dataMin, dataMean });
    } catch (error) {
      next(error);
    }
  }
  static async dataperdepartment(req, res, next) {
    let department = req.query.department;
    try {
      let dataMax = await Employee.findAll({
        where: { on_contract: true, department: department },
        attributes: [[Sequelize.fn("max", Sequelize.col("salary")), "max"]],
        raw: true,
      });
      let dataMin = await Employee.findAll({
        where: { on_contract: true, department: department },
        attributes: [[Sequelize.fn("min", Sequelize.col("salary")), "min"]],
        raw: true,
      });
      let dataMean = await Employee.findAll({
        where: { on_contract: true, department: department },
        attributes: [[Sequelize.fn("avg", Sequelize.col("salary")), "AVG"]],
        raw: true,
      });
      res.status(200).json({ dataMax, dataMin, dataMean });
    } catch (error) {
      next(error);
    }
  }
  static async combination(req, res, next) {
    let department = req.query.department;
    let sub_department = req.query.sub_department;
    try {
      let dataMax = await Employee.findAll({
        where: { on_contract: true, department, sub_department },
        attributes: [[Sequelize.fn("max", Sequelize.col("salary")), "max"]],
        raw: true,
      });
      let dataMin = await Employee.findAll({
        where: { on_contract: true, department, sub_department },
        attributes: [[Sequelize.fn("min", Sequelize.col("salary")), "min"]],
        raw: true,
      });
      let dataMean = await Employee.findAll({
        where: { on_contract: true, department, sub_department },
        attributes: [[Sequelize.fn("avg", Sequelize.col("salary")), "AVG"]],
        raw: true,
      });
      res.status(200).json({ dataMax, dataMin, dataMean });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
