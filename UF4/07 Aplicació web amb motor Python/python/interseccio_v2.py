# -*- coding: utf-8 -*-
'''
cd /home/joan/M06_WEC_1920/UF2/python_interseccio_rectes/python
PS1="$ "
python interseccio_v2.py 1.0 2.0 4.0 -3.0

v1: coneixem els límits dels eixos X-Y
v2: no coneixem els límits dels eixos X-Y. Els posarem a partir de la solució
	llegim els arguments en la línia de comandes
	afegim les llegendes
'''

import matplotlib.pyplot as plt
import numpy as np
import sys

m1, b1 = float(sys.argv[1]), float(sys.argv[2]) # slope & intercept (line 1)
m2, b2 = float(sys.argv[3]), float(sys.argv[4]) # slope & intercept (line 2)
strline1 = "y = " + sys.argv[1] + "x + " + sys.argv[2];
strline2 = "y = " + sys.argv[3] + "x + " + sys.argv[4];

#calculem la solució:
xi = (b1-b2) / (m2-m1)
yi = m1 * xi + b1
print('(xi,yi)',xi,yi)

x = np.linspace(round(xi, 0)-5,round(xi, 0)+5,500)

plt.clf() #clear figure
plt.plot(x,x*m1+b1, label=strline1)
plt.plot(x,x*m2+b2, label=strline2)
plt.legend()

plt.xlim(round(xi, 0)-5,round(xi, 0)+5)
plt.ylim(round(yi, 0)-5,round(yi, 0)+5)

plt.scatter(xi,yi, color='black' )

plt.suptitle(u'Intersecció de dues rectes', fontsize=12)
plt.title('SOL: ( ' + str(round(xi, 2)) + ' , ' + str(round(yi, 2)) + ' )', fontsize=10)

plt.grid(linestyle='dotted')

plt.savefig("img/interseccio_2_rectes.png", bbox_inches='tight')