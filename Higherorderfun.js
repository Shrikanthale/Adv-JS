const inerviewQuestion = (name) => {
  if (name === "Sam") {
    return function (question) {
      console.log(
        `hello ${name} please tell us about ${question} ? `
      );
    };
  }
  if (name === "Alex") {
    return function (question) {
      console.log(
        `hello ${name} please tell us about ${question} ? `
      );
    };
  }
  if (name === "John") {
    return function (question) {
      console.log(
        `hello ${name} please tell us about ${question} ? `
      );
    };
  }
  else{
      return function (){
          console.log("please enter correct");
    }
  }
};

// inerviewQuestion("Sam")("What is Higher Order Functions");
// inerviewQuestion("Alex")("What is clouser");
// inerviewQuestion("John")("What is Hoisting");

const candidate1 = inerviewQuestion("Sam");
candidate1("What is UI?");
candidate1("What is Ux?");
candidate1("What is Javascript?");

const candidate2 = inerviewQuestion("Alex");
candidate2("What is full stack devloper ? ");
candidate2("What is Nidejs?");
