var config = {
    apiKey: "AIzaSyC4oNER03wZwvqX8mkMTmZSN3SQx8WFFgM",
    authDomain: "tutoring-a0c8c.firebaseapp.com",
    databaseURL: "https://tutoring-a0c8c.firebaseio.com",
    projectId: "tutoring-a0c8c",
    storageBucket: "tutoring-a0c8c.appspot.com",
    messagingSenderId: "515319029059"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#addEmployee").on("click", function(event){
// Prevent page from reloading on submit
        event.preventDefault();

// Create variables to save input data

      var empName = $("#employeeName").val().trim();
      var empRole = $("#employeeRole").val().trim();
      var startDate = $("#startDate").val().trim();
      var empRate = $("#rate").val().trim();


// Create object to store input data to name value pairs
      var newEmp = {
          name: empName,
          role: empRole,
          start: startDate,
          rate: empRate
      };

// Push object to database
      database.ref().push(newEmp);

// a console log to see it going on
      console.log(`Name: ${newEmp.name} Role: ${newEmp.role} Start: ${newEmp.start} Rate: ${newEmp.rate}`);
    //   console.log("Moment js working", empMonths);

// Clear inputs
      $("#employeeName").val("");
      $("#employeeRole").val("");
      $("#startDate").val("");
      $("#rate").val("");
  });





  // Some stuff to help us with moment (god help us all )
//   var momentStartDate = moment(startDate);
//   var empMonths = moment().diff(moment(momentStartDate, "X"), "months");