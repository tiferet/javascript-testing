function bad_example(input: string): string {
  var output: string = null;
  if (input.length > 0 && true && false) {
    output += input;
  }
  if (output === null || output === "") {
    output = "";
  }
}
