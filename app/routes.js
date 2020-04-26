// External dependencies
const express = require('express');
const router = express.Router();

// Version 1 - Test kit type routing (Country)
router.post('/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "Request a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    res.redirect('/test-centre')
  }

})

// Version 2 - Test kit type routing (Regional)

router.post('/v2/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']
  
  if (testKit == "England"){
    res.redirect('/v2/test-kit-type-regions')
  } else if (testKit == "Request a home test kit"){
    res.redirect('https://www.gov.uk')
  } else {
    res.redirect('/v2/test-centre')
  }

})

module.exports = router;
