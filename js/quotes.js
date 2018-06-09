var Quotation = new Array()

Quotation[0] =
  '"You can love your country without having to love your government!"<br />- Anonymous';
Quotation[1] =
  '"The greatest trick the devil ever pulled was convincing the world he didn\'t exist."<br />- Roger "Verbal" Kint (The Usual Suspects - 1995)';
Quotation[2] =
  '"It\'s funny how everyone that LIES gets POPULAR and everyone that tells the TRUTH is a f*cking PSYCHO!"<br />- Anonymous';
Quotation[3] =
  '"Be alone, that is the secret of invention. Be alone, that is when ideas are born."<br />- Nikola Tesla';
Quotation[4] =
  '"It\'s better to walk alone than with a crowd going in the wrong direction."<br />- Anonymous';
Quotation[5] =
  '"If Wars can be started by LIES, Peace can be started by TRUTH."<br />- Julian Assange';
Quotation[6] =
  '"Overthinking is the BIGGEST source of UNHAPPINESS."<br />- Anonymous';
Quotation[7] =
  '"Until we extend our circle of compassion to all living beings, humanity will not find peace."<br />- Albert Schweitzer';
Quotation[8] =
  '"The creative adult is the child who survived."<br />- Anonymous';
Quotation[9] = '"Fake LOVE is worse than real HATE."<br />- Anonymous';
Quotation[10] =
  '"Human is the only creature who needs money to stay alive."<br />- Anonymous';
Quotation[11] =
  '"The only way to stop a bad guy with a gun is a good guy with a gun."<br />- Anonymous';
Quotation[12] =
  "\"If you can't explain it simply, you don't understand it well enough.\"<br />- Albert Einstein";
Quotation[13] = '"Think realistic, Dream the impossible."<br />- Anonymous';
Quotation[14] =
  '"Don\'t stop until your dreams become your biography."<br />- Anonymous';
Quotation[15] =
  '"Human beings are crowded like animals, into farms called cities. There\'s no overpopulation on this planet."<br />- Anonymous';
Quotation[16] =
  '"I look both ways before crossing a ONE WAY street. That\'s how much faith I have left in humanity."<br />- Tom Hardy';
Quotation[17] =
  '"Life lesson: If something cost $1,000, and it is on sale for $750, and then you decide to buy it, you did not save $250. You spent $750."<br />- @ValaAfshar (Twitter)';
Quotation[18] =
  '"The rich and powerful piss on us and the media tells us it\'s raining."<br />- Anonymous';
Quotation[19] =
  '"Once you stop learning, you start dying."<br />- Albert Einstein';
Quotation[20] =
  "\"Politicians don't want an intelligent population because people who can think critically can't be ruled.\"<br />- Anonymous";
Quotation[21] =
  "\"Sometimes people don't want to hear the truth because they don't want their illusions destroyed.\"<br />- Friedrich Nietzsche";
Quotation[22] =
  '"A lot of people don\'t struggle with depression, they struggle with the reality we live in."<br />- Keanu Reeves';
Quotation[23] =
  '"Stay away from negative people. They have a problem for every solution."<br />- Albert Einstein';
Quotation[24] =
  '"Crocodiles are easy. They try to kill and eat you. People are harder. Sometimes they pretend to be your friend first."<br />- Steve Irwin';
Quotation[25] =
  '"The more you know. The dumber you sound to stupid people."<br />- Anonymous';
Quotation[26] = '"Real eyes realize real lies."<br />- Anonymous';
Quotation[27] =
  '"Childhood is when you idolize Batman. Adulthood is when you realize the Joker makes more sense."<br />- Anonymous';
Quotation[28] =
  '"Everyone you meet always asks if you have a career, are married, or own a house as if life was some kind of grocery list. But no one ever asks you if you are happy."<br />- Heath Ledger';
Quotation[29] =
  '"The biggest communication problem is we don\'t listen to understand. We listen to reply."<br />- Anonymous';
Quotation[30] =
  '"Society has become so fake that the truth actually bothers people."<br />- Anonymous';
Quotation[31] =
  '"Mr. Bean taught me one thing in life. Enjoy your own company instead of expecting someone else to make you happy."<br />- Anonymous';
Quotation[32] =
  '"No one is more hated than he who speaks the truth."<br />- Plato';
Quotation[33] =
  '"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for."<br />- Bob Marley';
Quotation[34] = '"The problem is not to find the answer, it\'s to face the answer."<br />- Terrence McKenna';
Quotation[35] = '"Traps wear high heels and are highly immobile."<br />- Harald Baldr (YouTube)';

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation() {
	document.write(Quotation[whichQuotation]);
}

showQuotation();