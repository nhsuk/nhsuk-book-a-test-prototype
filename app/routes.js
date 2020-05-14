// External dependencies
const express = require('express');
const router = express.Router();

// Version 1 - Test kit type routing (Country)
router.post('/v1/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']

  if (testKit == "Request a home test kit"){
    res.redirect('https://key-worker-coronavirus-home-testing.service.gov.uk/')
  } else {
    res.redirect('/v1/test-centre')
  }

})

// Version 2 - Test kit type routing (Regional)

router.post('/v2/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']
  
  if (testKit == "England"){
    res.redirect('/v2/test-kit-type-regions')
  } else if (testKit == "Request a home test kit"){
    res.redirect('https://key-worker-coronavirus-home-testing.service.gov.uk/')
  } else {
    res.redirect('/v2/test-centre')
  }

})

// Version 3 - Test kit type routing (Wales)

router.post('/v3/action/test-kit-type', function (req, res) {
  var testKit = req.session.data['test-kit']
  
  if (testKit == "England"){
    res.redirect('/v3/test-kit-type-regions')
  } else if (testKit == "Request a home test kit"){
    res.redirect('https://key-worker-coronavirus-home-testing.service.gov.uk/')
  } else {
    res.redirect('/v3/test-centre')
  }

})

module.exports = router;
