var Quotation = new Array()

Quotation[0] = "\"You can love your country without having to love your government!\"<br />- Anonymous";
Quotation[1] = "\"The greatest trick the devil ever pulled was convincing the world he didn't exist.\"<br />- Roger \"Verbal\" Kint (The Usual Suspects - 1995)";
Quotation[2] = "\"It's funny how everyone that LIES gets POPULAR and everyone that tells the TRUTH is a f*cking PSYCHO!\"<br />- Anonymous";
Quotation[3] = "\"Be alone, that is the secret of invention. Be alone, that is when ideas are born.\"<br />- Nikola Tesla";
Quotation[4] = "\"It's better to walk alone than with a crowd going in the wrong direction.\"<br />- Anonymous";
Quotation[5] = "\"If Wars can be started by LIES, Peace can be started by TRUTH.\"<br />- Julian Assange";

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation() {
	document.write(Quotation[whichQuotation]);
}

showQuotation();