const express = require("express");

// Create package router
const packageRouter = express.Router();
const authentication = require("../middlewares/authentication");
const {
  createNewPackage,
  createNewServicePackage,
  getAllPackagesServices,
  getAllServicesByPackageId,
  updatePackageById,
  getAllPackages
} = require("../controllers/package");

//this function for create a new package
//endpoint=>/package/create
//body=>{ package_Name,price,Description,image,event }
packageRouter.post("/create", createNewPackage); //admin

//this function for create a new package
//endpoint=>/package/create/servicePackage
//body=> { service_id,package_id }
packageRouter.post("/create/servicePackage/:package_id",authentication, createNewServicePackage); //admin

//this function for create a new package
//endpoint=>/package/servicePackage
packageRouter.get("/servicePackage", getAllPackagesServices); //admin

//this function for create a new package
//endpoint=>/package/servicePackage/id
//id is the id of package
packageRouter.get("/:id", getAllServicesByPackageId); //admin

// this function update the package
//endpoint /package/updatePackage/:id
//id is for package
packageRouter.put("/updatePackage/:id", authentication, updatePackageById); //admin
// this function gets all the package
//endpoint /package
//id is for package
packageRouter.get("/", getAllPackages); //admin
module.exports = packageRouter;
