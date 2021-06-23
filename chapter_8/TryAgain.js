class MultError extends Error {}

function mult(a, b) {
  let resultMult = a * b;
  let chanse = Math.floor(Math.random() * 10);
  if (chanse > 2 && chanse < 10) {
    console.log("err");
    throw new MultError("помилка множення");
  } else {
    console.log("OK");
    return resultMult;
  }
}

function multFacade() {
  try {
    console.log(mult(1, 2));
  } catch (e) {
    if (e instanceof MultError) {
      console.log("catch err and repeate");
      multFacade();
    }
  }
}

multFacade();
