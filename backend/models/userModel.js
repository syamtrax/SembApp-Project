import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "user",
  {
    namaToko: DataTypes.STRING,
    alamatToko: DataTypes.STRING,
    namaPengguna: DataTypes.STRING,
    sandi: DataTypes.STRING,
    email: DataTypes.STRING,
    telp: DataTypes.STRING,
    img: DataTypes.BLOB,
  },
  {
    freezeTableName: true,
  }
);
export default User;

(async () => {
  await db.sync();
})();
