const colemakmodsStagger = `
Finger Frequency
finger 0 	6.94%	 finger 9 	9.18%
finger 1 	9.58%	 finger 8 	11.25%
finger 2 	15.38%	 finger 7 	20.28%
finger 3 	13.46%	 finger 6 	13.94%
total L 	45.36%	 total R 	54.64%

Finger Bigram Frequency
finger 0 	0.018%	 finger 9 	0.016%
finger 1 	0.085%	 finger 8 	0.144%
finger 2 	0.034%	 finger 7 	0.171%
finger 3 	0.250%	 finger 6 	0.311%
		total			1.029%

Top Same-Finger Bigrams
finger 6 	BY 	0.146%
finger 8 	UI 	0.097%
finger 3 	SC 	0.097%
finger 1 	RL 	0.075%
finger 3 	GS 	0.058%

Top Neighbour-Finger Bigrams
finger 7-8 	OU 	1.453%
finger 9-8 	AI 	0.475%
finger 7-8 	E, 	0.400%
finger 1-2 	LD 	0.363%
finger 8-7 	IO 	0.323%

Finger Effort
		base	s-bgrm	n-bgrm	total
finger 0 	0.119	0.001	0.002	0.121
finger 1 	0.174	0.003	0.003	0.180
finger 2 	0.253	0.001	-0.003	0.251
finger 3 	0.245	0.007		0.252
finger 6 	0.250	0.009		0.259
finger 7 	0.303	0.005	-0.012	0.297
finger 8 	0.203	0.005	0.004	0.212
finger 9 	0.172	0.000	0.005	0.178
total * 	1.719	0.031	-0.001	1.749
`

export default colemakmodsStagger
