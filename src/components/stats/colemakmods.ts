const colemakmods = `
Finger Frequency
finger 0 	6.80%	finger 9 	10.14%
finger 1 	9.61%	finger 8 	11.28%
finger 2 	15.36%	finger 7 	19.38%
finger 3 	14.86%	finger 6 	12.57%
total L 	46.63%	total R 	53.37%

Finger Bigram Frequency
finger 0 	0.018%	 finger 9 	0.283%
finger 1 	0.087%	 finger 8 	0.144%
finger 2 	0.034%	 finger 7 	0.122%
finger 3 	0.291%	 finger 6 	0.142%
total	1.121%

Top Same-Finger Bigrams
finger 9 	." 	0.188%
finger 8 	UI 	0.097%
finger 3 	SC 	0.096%
finger 1 	RL 	0.075%
finger 3 	GS 	0.058%

Top Neighbour-Finger Bigrams
finger 7-8 	OU 	1.448%
finger 9-8 	AI 	0.474%
finger 7-8 	E, 	0.399%
finger 1-2 	LD 	0.362%
finger 8-7 	IO 	0.322%

Finger Effort
		base	s-bgrms	n-bgrms	total
finger 0 	0.113	0.001	0.002	0.115
finger 1 	0.172	0.003	0.003	0.178
finger 2 	0.238	0.001	-0.003	0.236
finger 3 	0.276	0.008		0.285
finger 6 	0.217	0.004		0.221
finger 7 	0.282	0.004	-0.013	0.273
finger 8 	0.203	0.005	0.004	0.211
finger 9 	0.203	0.008	0.007	0.218
total * 	1.704	0.033	-0.000	1.737
`
export default colemakmods
