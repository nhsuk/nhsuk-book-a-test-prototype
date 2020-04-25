// External dependencies
const express = require('express');
const router = express.Router();

// Test kit type routing
router.post('/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "By visiting a regional test site in England"){
    res.redirect('/test-kit-type-regions')
  }
  else if (testKit == "By requesting a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    res.redirect('/test-centre')
  }

})

module.exports = router;
