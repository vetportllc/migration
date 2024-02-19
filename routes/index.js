const express = require("express");
const router = express.Router();

// router.use("/admit_patient", require("./admit_patient"));
// router.use("/client", require("./client"));
// router.use("/patient", require("./patient"));
// router.use("/instance", require("./instance"));
// router.use("/clinic", require("./clinic"));
// router.use("/antech_breed", require("./antech_breed"));
// router.use("/antech_planitem", require("./antech_planitem"));
// router.use("/antech_results", require("./antech_results"));
// router.use("/antech_species", require("./antech_species"));
// router.use("/appoint_view", require("./appoint_view"));
// router.use("/app_schedules", require("./app_schedules"));
// router.use("/app_status", require("./app_status"));
// router.use("/app_type", require("./app_type"));
// router.use("/plancategory", require("./plancategory"));
// router.use("/plansubcategory", require("./plansubcategory"));
// router.use("/plantype", require("./plantype"));
// router.use("/plan_action", require("./plan_action"));
// router.use("/planitem", require("./planitem"));
// router.use("/plancost", require("./plancost"));
// router.use("/grp_planitem", require("./grp_planitem"));
// router.use("/grp_plan_map", require("./grp_plan_map"));
// router.use("/remindergrp", require("./remindergrp"));
// router.use("/reminderplan", require("./reminderplan"));
// router.use("/reminder_delete", require("./reminder_delete"));
// router.use("/encounter", require("./encounter"));

//router.use("/country", require("./country"));
//router.use("/state", require("./state"));
router.use("/instance", require("./instance"));

router.use("/defaultDocOnStartup", require("./defaultDocOnStartup"));

// router.use("/template", require("./template"));
// router.use("/status", require("./status"));
// router.use("/keyword", require("./keyword"));
// router.use("/template_master", require("./template_master"));
// router.use("/template_type", require("./template_type"));
// router.use("/template_key_map", require("./template_key_map"));
// router.use("/etemplate", require("./etemplate"));
// router.use("/heform", require("./heform"));
// router.use("/vendoritems", require("./vendoritems"));
// router.use("/vendor", require("./vendor"));
// router.use("/vendortype", require("./vendortype"));
// router.use("/phonetype", require("./phonetype"));
// router.use("/vitem_clinic", require("./vitem_clinic"));
//router.use("/emr_transact", require("./emr_transact"));
//router.use("/requisition", require("./requisition"));
//router.use("/vaccine", require("./vaccine"));
//router.use("/staff", require("./staff"));
//router.use("/stafftime", require("./stafftime"));
//router.use("/staff_logins", require("./staff_login"));
//router.use("/staff_holidaydates", require("./staff_holidaydates"));
// router.use("/staff_commission", require("./staff_commission"));
// router.use("/invoice", require("./invoice"));
// router.use("/invoice_tax", require("./invoice_tax"));
// router.use("/sales", require("./sales"));
// router.use("/receipt", require("./receipt"));
// router.use("/credit_note", require("./credit_note"));
// router.use("/return", require("./return"));
// router.use("/refund", require("./refund"));
// router.use("/payment", require("./payment"));
// router.use("/estimate", require("./estimate"));
// router.use("/estimate_items", require("./estimate_items"));
// router.use("/estimate_tax", require("./estimate_tax"));
// router.use("/coupon", require("./coupon"));
// router.use("/rsn_forvisit", require("./rsn_forvisit"));
// router.use("/vendor", require("./vendor"));
// router.use("/manufacturer", require("./manufacturer"));
// router.use("/packagetype", require("./packagetype"));
// router.use("/packagecontent", require("./packagecontent"));
// router.use("/vendoritems", require("./vendoritems"));
// router.use("/vitem_clinic", require("./vitem_clinic"));
// router.use("/stock_received", require("./stock_received"));
// router.use("/stock_reserved", require("./stock_reserved"));
// router.use("/inv_baskets", require("./inv_baskets"));
// router.use("/inv_basketvitem", require("./inv_basketvitem"));
// router.use("/inv_basketplans", require("./inv_basketplans"));
// router.use("/stock_returned", require("./stock_returned"));
// router.use("/stock_dispatch", require("./stock_dispatch"));

// router.use("/consult_species", require("./consult_species"));
// router.use("/breed", require("./breed"));
// router.use("/sex", require("./sex"));
// router.use("/color", require("./color"));
// router.use("/keyword", require("./keyword"));
// router.use("/template_master", require("./template_master"));
// router.use("/template_type", require("./template_type"));
// router.use("/template", require("./template"));
// router.use("/template_key_map", require("./template_key_map"));
// router.use("/etemplate", require("./etemplate"));
// router.use("/heform", require("./heform"));
// router.use("/sms_setup", require("./sms_setup"));
// router.use("/sms_log", require("./sms_log"));
// router.use("/dashboard", require("./dashboard"));
// router.use("/building", require("./building"));
// router.use("/floor", require("./floor"));
// router.use("/roomtype", require("./roomtype"));
// router.use("/room", require("./room"));
// router.use("/cage", require("./cage"));

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
