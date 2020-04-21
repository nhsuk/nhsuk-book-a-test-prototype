// External dependencies
const express = require('express');
const router = express.Router();

// Test kit type routing
router.post('/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "By visiting a drive-through test centre"){
    res.redirect('/test-centre')
  }
  else if (testKit == "By requesting a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    console.log("Validation error")
  }

})

module.exports = router;
