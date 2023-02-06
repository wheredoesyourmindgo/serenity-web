const colemakmodsStagger = `
Finger Frequency
finger 0 	3.15%	 finger 9 	10.19%
finger 1 	9.56%	 finger 8 	11.23%
finger 2 	10.54%	 finger 7 	19.38%
finger 3 	17.85%	 finger 6 	18.11%
total L 	41.10%	 total R 	58.90%

Finger Bigram Frequency
finger 0 	0.007%	 finger 9 	0.283%
finger 1 	0.084%	 finger 8 	0.144%
finger 2 	0.183%	 finger 7 	0.122%
finger 3 	0.138%	 finger 6 	0.319%
total	1.281%

Top Same-Finger Bigrams
finger 9 	." 	0.188%
finger 6 	KN 	0.106%
finger 8 	UI 	0.097%
finger 2 	SC 	0.096%
finger 6 	NK 	0.088%

Top Neighbour-Finger Bigrams
finger 7-8 	OU 	1.448%
finger 9-8 	AI 	0.474%
finger 1-0 	LY 	0.419%
finger 7-8 	E, 	0.399%
finger 1-2 	RS 	0.358%

Finger Effort
		base	s-bgrm	n-bgrm	total
finger 0 	0.073	0.000	0.006	0.079
finger 1 	0.174	0.003	0.002	0.178
finger 2 	0.175	0.005	-0.003	0.178
finger 3 	0.312	0.004		0.316
finger 6 	0.336	0.010		0.346
finger 7 	0.282	0.004	-0.016	0.270
finger 8 	0.203	0.005	0.004	0.211
finger 9 	0.206	0.008	0.007	0.222
total * 	1.762	0.038	-0.000	1.800
`

export default colemakmodsStagger
