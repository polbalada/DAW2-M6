# -*- coding: utf-8 -*-
'''
cd /home/joan/M06_WEC_1920/UF2/python_interseccio_rectes/python
PS1="$ "
Per arrencar el servidor:
	python3 interseccio_v4.py [<port>]
Per comprovar que funciona (GET):
	http://localhost:8080?m1=3&b1=-2&m2=4&b2=5
Per comprovar que funciona (POST):
	http://localhost/M06/UF2/python_interseccio_rectes/interseccio_rectes.html

v1: coneixem els límits dels eixos X-Y
v2: no coneixem els límits dels eixos X-Y. Els posarem a partir de la solució
	llegim els arguments en la línia de comandes
	afegim les llegendes
v3: migrem a python3, perquè el codi que tinc de servidor web està implementat amb Python3
$ sudo pip3 install matplotlib
https://stackoverflow.com/questions/29540845/how-can-i-deactivate-warning-source-id-510-was-not-found-when-attempting-to-re
Em dóna un warning que amb una versió superior de Python3 estarà resolt. No li he de donar importància.
v4: implemento el servidor web (GET i POST)

TODO: controlar que els paràmetres que entro només siguin enters (de moment els decimals no estan permesos)
	comprovar que només hi ha una solució (no són ni paral·leles ni coincidents)
'''

import matplotlib.pyplot as plt
import numpy as np

# servidor web
from http.server import BaseHTTPRequestHandler, HTTPServer
import logging
import urllib.parse
from os import curdir, sep
import os
#import base64
import random

class S(BaseHTTPRequestHandler):
	def _set_response(self):
		self.send_response(200)
		self.send_header('Content-type', 'text/html')
		self.send_header('Access-Control-Allow-Origin', '*') #important!
		self.end_headers()
    
	def _set_response_png(self, img_size):
		self.send_response(200)
		self.send_header('Content-type', 'image/png')
		self.send_header('Access-Control-Allow-Origin', '*') #important!
		self.send_header("Content-length", img_size)
		self.end_headers()

	def do_GET(self):
        
		cad_get = urllib.parse.urlparse(self.path).query
		#print(cad_get)
		if (cad_get.find('m1') == 0):
			
			#print(dict(urllib.parse.parse_qsl(cad_get)))
			dicc = dict(urllib.parse.parse_qsl(cad_get))
			nums = []
			numeros = dicc.values()
			for numero in numeros:
				print(numero)
				nums.append(numero)
			eq1, eq2, punt1, punt2, imgrandnum = calcular_solucio_i_printar(int(nums[0]), int(nums[1]), int(nums[2]), int(nums[3]))
			print (eq1)
			print (eq2)
			print (punt1)
			print (punt2)

			# o bé mostrem la imatge, o bé mostrem la solució. Però les dues coses alhora no puc.
			
			'''
			self._set_response()
			self.wfile.write(format(eq1 + '<br />').encode('utf-8'))
			self.wfile.write(format(eq2 + '<br />').encode('utf-8'))
			self.wfile.write(format('soluci&#243;: (' + str(round(punt1, 2)) + ',' + str(round(punt2, 2)) + ')<br />').encode('utf-8'))
			'''
			
			statinfo = os.stat('img/' + imgrandnum + '.png')
			img_size = statinfo.st_size
			f = open('img/' + imgrandnum + '.png', 'rb')
			self._set_response_png(img_size)
			self.wfile.write(f.read())
			f.close()

	def do_POST(self):
		content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
		post_data = self.rfile.read(content_length) # <--- Gets the data itself
		print(post_data.decode('utf-8'))
		dicc = dict(urllib.parse.parse_qsl(post_data.decode('utf-8')))
		nums = []
		numeros = dicc.values()
		for numero in numeros:
			print(numero)
			nums.append(numero)
		
		if (nums[0]==nums[2] and nums[1]!=nums[3]):
			print(u"rectes paral·leles, no hi ha solucions")
			self._set_response()
			self.wfile.write(format('Sense soluci&#243;<br />*sense_solucio').encode('utf-8'))
		elif (nums[0]==nums[2] and nums[1]==nums[3]):
			print(u"rectes coincidents, infinites solucions")
			self._set_response()
			self.wfile.write(format('rectes coincidents<br />*infinites_solucions').encode('utf-8'))
		else:
			eq1, eq2, punt1, punt2, imgrandnum = calcular_solucio_i_printar(int(nums[0]), int(nums[1]), int(nums[2]), int(nums[3]))
			print (eq1)
			print (eq2)
			print (punt1)
			print (punt2)

			self._set_response()
			self.wfile.write(format('soluci&#243;: (' + str(round(punt1, 2)) + ',' + str(round(punt2, 2)) + ')<br />*' + str(imgrandnum)).encode('utf-8'))

def run(server_class=HTTPServer, handler_class=S, port=8080):
	logging.basicConfig(level=logging.INFO)
	server_address = ('', port)
	httpd = server_class(server_address, handler_class)
	logging.info('Starting httpd...\n')
	try:
		httpd.serve_forever()
	except KeyboardInterrupt:
		pass
	httpd.server_close()
	logging.info('Stopping httpd...\n')

def calcular_solucio_i_printar(m1, b1, m2, b2):

	strline1 = "y = " + str(m1) + "x + " + str(b1);
	strline2 = "y = " + str(m2) + "x + " + str(b2);

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
	strnum = str(random.randint(1000,9999))
	plt.savefig("img/" + strnum + ".png", bbox_inches='tight')
	return strline1, strline2, xi, yi, strnum

if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
