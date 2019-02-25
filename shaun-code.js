try {
  button.onclick = processGuess;
} catch (e) {
  console.log("\n--------------------------------");
  console.log(`You haven't written your processGuess function yet. Your button will not work till you do.`);
  console.log(`OR! You've changed the variable where your button is stored from 'button' to something else. Please correct this or correct line 2 in shaun-code.js so it will work.`);
  console.log("This is the error:", e);
  console.log("This error will not interrupt your code.\n");
  console.log("--------------------------------\n");
}

try {
  let nums = [randomNumber()];
  let count = 0;

  while (count < 10) {
    if (!nums.includes(randomNumber())) break;
    count += 1;
  }

  if (count >= 10)
    console.log(`I have run your function 10 times and produced no new values. This likely indicates there's an issue with your randomNumber() function.`);
} catch (e) {
  console.log(`You're missing your randomNumber function or have named it incorrectly.`, e);
}

try {
  input.value = currentNumber;
  if (evaluateGuess() === false)
    console.log(`Your evaluteGuess function isn't working properly. It returned ${evaluteGuess().toString()}`);

  input.value = '';
  if (evaluateGuess() === true)
    console.log(`Your evaluteGuess function isn't working properly. It returned ${evaluteGuess().toString()}`);
} catch (e) {
  console.log(`You're missing your evaluateGuess function or your syntax is incorrect.`, e);
}

try {
  rand = 7000;
  guessLimit = rand;
  currentNumber = rand;
  input.value = rand;

  resetBoard();
  if (guessLimit === rand || currentNumber === rand || Number(input.value) == rand)
    console.log(`Your board didn't reset correctly. Please check your reset function.`);
} catch (e) {
  console.log(`You're missing your resetBoard function or your syntax is incorrect.`, e);
}

try {
  currentNumber = 7000;

  input.value = currentNumber + 1;
  hint();
  if (message.textContent.indexOf('higher') === -1)
    console.log(`Your hint function isn't operating correctly or your output message is incorrect: "${message.textContent}"`);

  input.value = currentNumber - 2;
  hint();
  if (message.textContent.indexOf('lower') === -1)
    console.log(`Your hint function isn't operating correctly or your output message is incorrect: "${message.textContent}"`);

  if (message.textContent.indexOf("within 5") === -1)
    console.log(`Not doing the take it futher eh? Or perhaps there's an issue with your logic... or it may just be the message you're outputting isn't correct.`);

  let tfTested = true;
  if (message.textContent.indexOf("are within") === -1) {
    tfTested = true;
  } else {
    for (let i = 10; i < 100; i += 10) {
      currentNumber = 7000;
      input.value = 7000 + i - 1;
      hint();
      if (message.textContent.indexOf(`within ${i}`) === -1) {
        console.log(`Double check your take it further logic. You're not outputting the correct message or perhaps you're logic is flawed.`);
      }
    }
  }

  resetBoard();
} catch (e) {
  console.log(`You're missing your hint function or your syntax is incorrect.`, e);
}

try {
  currentNumber = 7000;
  input.value = 7000;
  processGuess();

  if (!(message.textContent.indexOf('lower') === -1) || !(message.textContent.indexOf('higher') === -1))
    console.log(`Your processGuess logic is flawed. Please correct your logic.`);

  resetBoard()
} catch (e) {
  console.log(`You're missing your processGuess function or you have a syntax error. Please correct.`);
}