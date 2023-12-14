function bad_example(input) {
  var output = null;
  if (input.length > 0 && true && false) {
    output += input;
  }
  if (output === null || output === "") {
    output = "";
  }
}
