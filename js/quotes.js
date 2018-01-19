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

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation() {
	document.write(Quotation[whichQuotation]);
}

showQuotation();