const express = require("express");
const router = express.Router();

router.use("/admit_patient", require("./admit_patient"));
router.use("/client", require("./client"));
router.use("/patient", require("./patient"));
router.use("/instance", require("./instance"));
router.use("/clinic", require("./clinic"));
router.use("/antech_breed", require("./antech_breed"));
router.use("/antech_planitem", require("./antech_planitem"));
router.use("/antech_results", require("./antech_results"));
router.use("/antech_species", require("./antech_species"));
router.use("/appoint_view", require("./appoint_view"));
router.use("/app_schedules", require("./app_schedules"));
router.use("/app_status", require("./app_status"));
router.use("/app_type", require("./app_type"));
router.use("/plancategory", require("./plancategory"));
router.use("/plansubcategory", require("./plansubcategory"));
router.use("/plantype", require("./plantype"));
router.use("/plan_action", require("./plan_action"));
router.use("/planitem", require("./planitem"));
router.use("/plancost", require("./plancost"));
router.use("/grp_planitem", require("./grp_planitem"));
router.use("/grp_plan_map", require("./grp_plan_map"));
router.use("/remindergrp", require("./remindergrp"));
router.use("/reminderplan", require("./reminderplan"));
router.use("/reminder_delete", require("./reminder_delete"));
router.use("/encounter", require("./encounter"));

router.use("/template", require("./template"));
router.use("/status", require("./status"));
router.use("/keyword", require("./keyword"));
router.use("/template_master", require("./template_master"));
router.use("/template_type", require("./template_type"));
router.use("/template_key_map", require("./template_key_map"));
router.use("/etemplate", require("./etemplate"));
router.use("/heform", require("./heform"));
router.use("/vendoritems", require("./vendoritems"));
router.use("/vendor", require("./vendor"));
router.use("/vendortype", require("./vendortype"));
router.use("/phonetype", require("./phonetype"));
router.use("/vitem_clinic", require("./vitem_clinic"));

router.get("/", async (req, res) => {
  try {
    res
      .status(200)
      .send(
        `Server running on environment ${environment} and api version is V1`
      );
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

module.exports = router;
