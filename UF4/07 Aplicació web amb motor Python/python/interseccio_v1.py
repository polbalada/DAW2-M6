# -*- coding: utf-8 -*-
'''
cd /home/joan/M06_WEC_1920/UF2/python_interseccio_linies/python
PS1="$ "
python interseccio_v1.py

v1: coneixem els límits dels eixos X-Y
'''

import matplotlib.pyplot as plt
import numpy as np

m1, b1 = 1.0, 2.0 # slope & intercept (line 1)
m2, b2 = 4.0, -3.0 # slope & intercept (line 2)

x = np.linspace(-10,10,500)

plt.clf() #clear figure
plt.plot(x,x*m1+b1)
plt.plot(x,x*m2+b2)

plt.xlim(-2,8)
plt.ylim(-2,8)

xi = (b1-b2) / (m2-m1)
yi = m1 * xi + b1
print('(xi,yi)',xi,yi)
plt.scatter(xi,yi, color='black' )

plt.suptitle(u'Intersecció de dues línies', fontsize=12)
plt.title('( ' + str(round(xi, 2)) + ' , ' + str(round(yi, 2)) + ' )', fontsize=10)

plt.grid(linestyle='dotted')

plt.savefig("img/interseccio_2_linies.png", bbox_inches='tight')