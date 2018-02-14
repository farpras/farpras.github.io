var Quotation = new Array()

Quotation[0] = "\"You can love your country without having to love your government!\"<br />- Anonymous";
Quotation[1] = "\"The greatest trick the devil ever pulled was convincing the world he didn't exist.\"<br />- Roger \"Verbal\" Kint (The Usual Suspects - 1995)";
Quotation[2] = "\"It's funny how everyone that LIES gets POPULAR and everyone that tells the TRUTH is a f*cking PSYCHO!\"<br />- Anonymous";
Quotation[3] = "\"Be alone, that is the secret of invention. Be alone, that is when ideas are born.\"<br />- Nikola Tesla";
Quotation[4] = "\"It's better to walk alone than with a crowd going in the wrong direction.\"<br />- Anonymous";
Quotation[5] = "\"If Wars can be started by LIES, Peace can be started by TRUTH.\"<br />- Julian Assange";
Quotation[6] = "\"Overthinking is the BIGGEST source of UNHAPPINESS.\"<br />- Anonymous";
Quotation[7] = "\"Until we extend our circle of compassion to all living beings, humanity will not find peace.\"<br />- Albert Schweitzer";
Quotation[8] = "\"The creative adult is the child who survived.\"<br />- Anonymous";
Quotation[9] = "\"Fake LOVE is worse than real HATE.\"<br />- Anonymous";
Quotation[10] = "\"Human is the only creature who needs money to stay alive.\"<br />- Anonymous";
Quotation[11] = "\"The only way to stop a bad guy with a gun is a good guy with a gun.\"<br />- Anonymous";
Quotation[12] = "\"If you can't explain it simply, you don't understand it well enough.\"<br />- Albert Einstein";
Quotation[13] = "\"Think realistic, Dream the impossible.\"<br />- Anonymous";
Quotation[14] = "\"Don't stop until your dreams become your biography.\"<br />- Anonymous";
Quotation[15] = "\"Human beings are crowded like animals, into farms called cities. There's no overpopulation on this planet.\"<br />- Anonymous";
Quotation[16] = "\"I look both ways before crossing a ONE WAY street. That's how much faith I have left in humanity.\"<br />- Tom Hardy";
Quotation[17] = "\"Life lesson: If something cost $1,000, and it is on sale for $750, and then you decide to buy it, you did not save $250. You spent $750.\"<br />- @ValaAfshar (Twitter)";
Quotation[18] = "\"The rich and powerful piss on us and the media tells us it's raining.\"<br />- Anonymous";
Quotation[19] = "\"Once you stop learning, you start dying.\"<br />- Albert Einstein";

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation() {
	document.write(Quotation[whichQuotation]);
}

showQuotation();