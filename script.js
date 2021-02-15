

$("document").ready(function () {

  let states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
  ];




  $("#submit").on("click", function (event) {

    event.preventDefault();
    var search = $("#search").val();
    console.log(search);
    vaccineSearch();
    console.log(vaccineSearch);



    function vaccineSearch() {
      fetch("https://www.cvs.com/immunizations/covid-19-vaccine/immunizations/covid-19-vaccine.vaccine-status." + search + ".json?vaccineinfo")


        .then(Response => Response.json())
        .then(data => {
          var statesjson = data['responsePayloadData']['data'][search];
          console.log("sates: " + statesjson);




        })


    }
  });
});