const colemakmodsStagger = `
Finger Frequency
finger 0 	7.08%	 finger 9 	9.18%
finger 1 	9.58%	 finger 8 	11.25%
finger 2 	11.89%	 finger 7 	20.28%
finger 3 	17.82%	 finger 6 	12.93%
total L 	46.37%	 total R 	53.63%

Finger Bigram Frequency
finger 0 	0.001%	 finger 9 	0.016%
finger 1 	0.085%	 finger 8 	0.144%
finger 2 	0.018%	 finger 7 	0.171%
finger 3 	0.150%	 finger 6 	0.200%
total	0.785%

Top Same-Finger Bigrams
finger 8 	UI 	0.097%
finger 1 	RL 	0.075%
finger 6 	DY 	0.071%
finger 7 	OE 	0.048%
finger 3 	PH 	0.043%

Top Neighbour-Finger Bigrams
finger 7-8 	OU 	1.453%
finger 9-8 	AI 	0.475%
finger 7-8 	E, 	0.400%
finger 1-0 	RS 	0.359%
finger 8-7 	IO 	0.323%

Finger Effort
 		base	s-bigrams	n-bigrams	total
finger 0 	0.131	0.000		0.004		0.135
finger 1 	0.174	0.003		0.002		0.179
finger 2 	0.169	0.001		-0.006		0.164
finger 3 	0.334	0.005				0.339
finger 6 	0.240	0.006				0.246
finger 7 	0.303	0.005		-0.009		0.300
finger 8 	0.203	0.005		0.004		0.212
finger 9 	0.172	0.000		0.005		0.178
total * 	1.726	0.024		0.000		1.751
`

export default colemakmodsStagger
